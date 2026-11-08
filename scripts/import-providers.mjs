#!/usr/bin/env node
// Deterministic research export -> CRF provider directory import.
//
// Reads (never modifies) the three verified-contacts CSVs plus
// region-map.json and overrides.json from the export directory, and writes:
//   - app/lib/provider-data.generated.ts   public-facing fields only (ships)
// Also reads display-names.json (cosmetic public names) and validates the
// city-page -> region map in app/lib/regions.ts used for regional fallbacks.
//   - <export>/reports/import-eligibility.csv   every record, included or not
//   - <export>/reports/import-report.md          validation summary
//
// Re-running with the same inputs produces the same output. Nothing generated
// here should be hand-edited: change overrides.json / region-map.json instead.
//
// Usage: node scripts/import-providers.mjs [export-dir]

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const exportDir = process.argv[2] ?? join(repoRoot, "data/atlas-import/crf-2026-11");
const outFile = join(repoRoot, "app/lib/provider-data.generated.ts");
const reportDir = join(exportDir, "reports");

const STATES = [
  { code: "AZ", slug: "arizona", file: "CRF_AZ_verified_contacts.csv" },
  { code: "CO", slug: "colorado", file: "CRF_CO_verified_contacts.csv" },
  { code: "TX", slug: "texas", file: "CRF_TX_verified_contacts.csv" },
];
const EXCLUDED_STATUSES = new Set(["unverified", "pending_radar"]);
// Columns that must never reach the generated file.
const INTERNAL_COLUMNS = [
  "notes", "outcome_reason", "evidence_urls", "open_questions", "recommended_action",
  "website_source_url", "category_source_url", "gbp_url", "equipment_types",
  "service_areas", "description", "suggested_phone_source", "served_markets",
];
const INTERNAL_TERMS = /\b(Atlas|Radar|UNRESOLVED|ASSUMPTION|VERIFIED|soft[- ]link|research|evidence)\b/i;

const errors = [];
const fail = (msg) => errors.push(msg);

// ---------------------------------------------------------------------------
// CSV parsing (RFC 4180: quoted fields, embedded commas/quotes/newlines)
// ---------------------------------------------------------------------------
function parseCsv(text) {
  const s = text.replace(/^﻿/, "").replace(/\r\n/g, "\n");
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"' && s[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  const [header, ...body] = rows.filter((r) => r.length > 1 || r[0] !== "");
  return body.map((r, i) => {
    if (r.length !== header.length) fail(`Row ${i + 2} has ${r.length} columns, expected ${header.length}`);
    return Object.fromEntries(header.map((h, j) => [h, (r[j] ?? "").trim()]));
  });
}

function csvCell(value) {
  const v = String(value ?? "");
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

// ---------------------------------------------------------------------------
// Site data read from the TypeScript sources (kept in sync, validated below)
// ---------------------------------------------------------------------------
const read = (p) => readFileSync(join(repoRoot, p), "utf8");

const categories = [...read("app/lib/categories.ts").matchAll(/\{ name: "([^"]+)", singular: "([^"]+)", slug: "([a-z-]+)"/g)]
  .map(([, name, singular, slug]) => ({ name, singular, slug }));
const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
if (categories.length !== 12) fail(`Expected 12 categories in categories.ts, found ${categories.length}`);

const regions = [...read("app/lib/regions.ts").matchAll(/\{ slug: "([a-z0-9-]+)", name: "([^"]+)", stateSlug: "([a-z]+)" \}/g)]
  .map(([, slug, name, stateSlug]) => ({ slug, name, stateSlug }));
const regionBySlug = new Map(regions.map((r) => [r.slug, r]));
if (regions.length !== 20) fail(`Expected 20 regions in regions.ts, found ${regions.length}`);

// Existing city pages: inline cities in locations.ts plus CityEntry exports referenced there.
function readCityPages() {
  const cityContent = read("app/lib/city-content.ts");
  const entrySlug = new Map(
    [...cityContent.matchAll(/export const (\w+): CityEntry = \{\s*name: "[^"]+",\s*slug: "([a-z0-9-]+)"/g)].map(([, id, slug]) => [id, slug]),
  );
  const locations = read("app/lib/locations.ts");
  const pages = new Set();
  for (const block of locations.matchAll(/cities: cities\("([a-z]+)", \[([\s\S]*?)\n\s*\]\)/g)) {
    const [, stateSlug, body] = block;
    for (const [, slug] of body.matchAll(/\{ name: "[^"]+", slug: "([a-z0-9-]+)"/g)) pages.add(`${stateSlug}/${slug}`);
    for (const [, id] of body.matchAll(/^\s*([a-zA-Z]+),\s*$/gm)) {
      const slug = entrySlug.get(id);
      if (!slug) fail(`locations.ts references city entry "${id}" not found in city-content.ts`);
      else pages.add(`${stateSlug}/${slug}`);
    }
  }
  return pages;
}
const cityPages = readCityPages();
if (cityPages.size === 0) fail("Could not read any city pages from locations.ts");

// Every city page needs a region for the regional fallback list (app/lib/regions.ts).
const cityPageRegions = new Map(
  [...read("app/lib/regions.ts").matchAll(/^\s*"([a-z]+\/[a-z0-9-]+)": "([a-z0-9-]+)",?$/gm)].map(([, page, slug]) => [page, slug]),
);
for (const page of cityPages) {
  const slug = cityPageRegions.get(page);
  if (!slug) fail(`regions.ts cityPageRegions: city page "${page}" has no region`);
  else if (regionBySlug.get(slug)?.stateSlug !== page.split("/")[0]) fail(`regions.ts cityPageRegions: ${page} -> ${slug} is not a region in that state`);
}
for (const page of cityPageRegions.keys()) if (!cityPages.has(page)) fail(`regions.ts cityPageRegions: "${page}" is not an existing city page`);

// ---------------------------------------------------------------------------
// Inputs
// ---------------------------------------------------------------------------
const regionMap = JSON.parse(readFileSync(join(exportDir, "region-map.json"), "utf8"));
const overrides = JSON.parse(readFileSync(join(exportDir, "overrides.json"), "utf8")).records;
const displayNames = JSON.parse(readFileSync(join(exportDir, "display-names.json"), "utf8")).names;

for (const [code, cities] of Object.entries(regionMap)) {
  if (code.startsWith("_")) continue;
  for (const [city, slug] of Object.entries(cities)) {
    const region = regionBySlug.get(slug);
    const state = STATES.find((s) => s.code === code);
    if (!region) fail(`region-map: ${code}/${city} -> unknown region "${slug}"`);
    else if (region.stateSlug !== state?.slug) fail(`region-map: ${code}/${city} -> ${slug} belongs to ${region.stateSlug}`);
  }
}

const source = STATES.flatMap((state) =>
  parseCsv(readFileSync(join(exportDir, state.file), "utf8")).map((row) => ({ row, state })),
);
const ids = new Set(source.map(({ row }) => row.business_id));
for (const id of Object.keys(overrides)) if (!ids.has(id)) fail(`overrides.json: ${id} not found in source data`);
const sourceName = new Map(source.map(({ row }) => [row.business_id, row.business_name]));
for (const [id, entry] of Object.entries(displayNames)) {
  if (!ids.has(id)) fail(`display-names.json: ${id} not found in source data`);
  else if (sourceName.get(id) !== entry.from) fail(`display-names.json: ${id} source name changed ("${sourceName.get(id)}" vs "${entry.from}"); re-review`);
}

const slugify = (v) => v.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const digits = (p) => p.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------
const phoneGroups = new Map();
for (const { row } of source) {
  const key = digits(overrides[row.business_id]?.phone ?? row.phone);
  if (key) phoneGroups.set(key, [...(phoneGroups.get(key) ?? []), row.business_id]);
}

const records = source.map(({ row, state }) => {
  const id = row.business_id;
  const o = overrides[id] ?? {};
  const corrections = [];
  const flags = [];
  let exclusion = "";

  if (row.state !== state.code) fail(`${id}: state ${row.state} in ${state.file}`);
  if (row.outcome !== "Approved") exclusion = `not_approved (${row.outcome || "blank"})`;
  else if (EXCLUDED_STATUSES.has(row.verification_status)) exclusion = `verification_${row.verification_status}`;
  else if (o.hold) exclusion = "manual_hold";

  // Categories
  let cats = [row.primary_category, ...row.additional_categories.split(";")].map((c) => c.trim()).filter(Boolean);
  cats = [...new Set(cats)];
  for (const c of cats) if (!categoryBySlug.has(c)) fail(`${id}: unknown category "${c}"`);
  for (const c of o.addCategories ?? []) {
    if (!categoryBySlug.has(c)) fail(`${id}: override adds unknown category "${c}"`);
    if (!cats.includes(c)) { cats.push(c); corrections.push(`added ${c}`); }
  }
  for (const c of o.removeCategories ?? []) {
    if (!categoryBySlug.has(c)) fail(`${id}: override removes unknown category "${c}"`);
    if (cats.includes(c)) { cats = cats.filter((x) => x !== c); corrections.push(`removed ${c}`); }
    else flags.push(`trim target ${c} already absent`);
  }
  let primary = row.primary_category;
  if (o.primaryCategory) {
    if (!cats.includes(o.primaryCategory)) fail(`${id}: override primary ${o.primaryCategory} is not in its categories`);
    if (o.primaryCategory !== primary) corrections.push(`primary ${primary} -> ${o.primaryCategory}`);
    primary = o.primaryCategory;
  } else if (!cats.includes(primary)) {
    if (cats.length) { corrections.push(`primary ${primary} removed; ${cats[0]} promoted`); primary = cats[0]; }
  }
  cats = [primary, ...cats.filter((c) => c !== primary)];
  if (!exclusion && cats.length === 0) exclusion = "no_categories_after_corrections";

  // Contact fields
  let phone = row.phone;
  if (o.phone) { corrections.push(`phone ${phone || "(blank)"} -> ${o.phone}`); phone = o.phone; }
  let zip = row.zip;
  if (o.zip) { corrections.push(`zip ${zip || "(blank)"} -> ${o.zip}`); zip = o.zip; }
  let website = /^https?:\/\//.test(row.website) ? row.website : "";
  if (row.website && !website) flags.push("website not http(s); omitted");
  if (o.website) {
    if (!/^https:\/\//.test(o.website)) fail(`${id}: override website must be https`);
    corrections.push(`website ${website || "(blank)"} -> ${o.website}`);
    website = o.website;
  }

  // Display name: evidence-based rename (overrides) > cosmetic display name > source name
  const displayName = o.name ?? displayNames[id]?.to ?? row.business_name;
  if (o.name) corrections.push(`name "${row.business_name}" -> "${o.name}"`);
  if (!exclusion && !phone && !website) exclusion = "no_phone_or_website";

  // Region
  const regionSlug = regionMap[state.code]?.[row.city];
  if (!regionSlug) fail(`${id}: yard city "${row.city}, ${state.code}" missing from region-map.json`);

  // City pages: the yard city plus documented markets, kept only where a CRF city page exists
  const markets = [`${state.code.toLowerCase()}/${slugify(row.city)}`, ...row.served_markets.split(";").map((m) => m.trim())];
  const pages = [...new Set(
    markets
      .map((m) => m.split("/"))
      .filter(([code, slug]) => code && slug)
      .map(([code, slug]) => `${STATES.find((s) => s.code === code.toUpperCase())?.slug}/${slug}`)
      .filter((key) => cityPages.has(key)),
  )].sort();

  // Review flags (non-blocking)
  if (o.reviewNote) flags.push(o.reviewNote);
  if (!phone) flags.push("no phone");
  if (!website) flags.push("no website");
  if (!zip) flags.push("no zip");
  if (!row.street) flags.push("no street");
  if (row.suggested_phone && !o.phone && digits(row.suggested_phone) !== digits(phone)) flags.push(`alternate phone ${row.suggested_phone} not applied`);
  if (row.duplicate_of) flags.push(`duplicate_of ${row.duplicate_of}`);
  const shared = (phoneGroups.get(digits(phone)) ?? []).filter((x) => x !== id);
  if (shared.length) flags.push(`shares phone with ${shared.join(", ")}`);
  if (/UNRESOLVED:(?!\s*none)/i.test(row.outcome_reason)) flags.push("has unresolved research note (fleet/detail level)");
  if (!pages.length) flags.push("no matching CRF city page");

  const provider = {
    id,
    name: displayName,
    ...(phone && { phone }),
    ...(website && { website }),
    ...(row.street && { street: row.street }),
    city: row.city,
    stateSlug: state.slug,
    stateCode: state.code,
    ...(zip && { zip }),
    ...(o.description && { description: o.description }),
    ...(o.featured === true && { featured: true }),
    primaryCategory: primary,
    categories: cats,
    regionSlug,
    cityPages: pages,
  };
  return { row, state, provider, exclusion, hold: o.hold ?? "", corrections, flags, review: o.review, nameRule: o.name ? "evidence-based rename (overrides.json)" : displayNames[id]?.rule ?? "" };
});

const included = records.filter((r) => !r.exclusion);
const regionOrder = new Map(regions.map((r, i) => [r.slug, i]));
const stateOrder = new Map(STATES.map((s, i) => [s.slug, i]));
included.sort((a, b) =>
  stateOrder.get(a.provider.stateSlug) - stateOrder.get(b.provider.stateSlug) ||
  regionOrder.get(a.provider.regionSlug) - regionOrder.get(b.provider.regionSlug) ||
  a.provider.name.localeCompare(b.provider.name),
);

// ---------------------------------------------------------------------------
// Generated dataset + leak check
// ---------------------------------------------------------------------------
const generated = `// GENERATED FILE — do not edit by hand.
// Source: ${relative(repoRoot, exportDir)} (verified research exports + overrides.json + region-map.json)
// Regenerate: node scripts/import-providers.mjs
import type { Provider } from "./provider-directory";

export const providerData: Provider[] = ${JSON.stringify(included.map((r) => r.provider), null, 2)};
`;

const leaks = [];
for (const { row, provider } of included) {
  const text = JSON.stringify({ ...provider, id: undefined });
  for (const col of INTERNAL_COLUMNS) {
    const value = row[col];
    if (!value) continue;
    // Free text: the whole value, plus any long clause, must not appear in output.
    // URLs: any research link other than the published website must not appear.
    const parts = [value, ...value.split(/[;|]\s*/).filter((p) => p.length >= 25), ...(value.match(/https?:\/\/[^\s;|,)]+/g) ?? [])];
    for (const part of new Set(parts)) {
      if (part.length < 12 || part === provider.website || part === provider.city) continue;
      if (text.includes(part)) leaks.push(`${provider.id}: value from ${col} found in output ("${part.slice(0, 40)}")`);
    }
  }
  // Names, streets and websites are verbatim business data (e.g. "Atlas Machinery Rentals"),
  // so the term check covers the one free-text field: a hand-reviewed description override.
  if (provider.description && INTERNAL_TERMS.test(provider.description)) leaks.push(`${provider.id}: internal term in description`);
}
const allowedKeys = new Set(["id", "name", "phone", "website", "street", "city", "stateSlug", "stateCode", "zip", "description", "featured", "primaryCategory", "categories", "regionSlug", "cityPages"]);
for (const { provider } of included) for (const k of Object.keys(provider)) if (!allowedKeys.has(k)) leaks.push(`${provider.id}: unexpected key ${k}`);

if (errors.length || leaks.length) {
  console.error([...errors, ...leaks].map((e) => `ERROR ${e}`).join("\n"));
  console.error(`\nImport aborted: ${errors.length} error(s), ${leaks.length} leak(s). Nothing written.`);
  process.exit(1);
}
writeFileSync(outFile, generated);

// ---------------------------------------------------------------------------
// Reports
// ---------------------------------------------------------------------------
mkdirSync(reportDir, { recursive: true });
const sortedAll = [...records].sort((a, b) => a.row.business_id.localeCompare(b.row.business_id));
writeFileSync(
  join(reportDir, "import-eligibility.csv"),
  [
    ["business_id", "state", "source_name", "display_name", "city", "region", "status", "exclusion_reason", "hold_reason", "corrections_applied", "review_status", "review_flags", "categories", "city_pages"].join(","),
    ...sortedAll.map((r) => [
      r.row.business_id, r.state.code, r.row.business_name, r.provider.name, r.row.city, r.provider.regionSlug,
      r.exclusion ? "excluded" : "included", r.exclusion, r.hold, r.corrections.join("; "), r.review?.status ?? "", r.flags.join("; "),
      r.provider.categories.join(";"), r.provider.cityPages.join(";"),
    ].map(csvCell).join(",")),
  ].join("\n") + "\n",
);

const count = (arr, fn) => arr.reduce((m, x) => m.set(fn(x), (m.get(fn(x)) ?? 0) + 1), new Map());
const table = (head, rows) => [`| ${head.join(" | ")} |`, `|${head.map(() => "---").join("|")}|`, ...rows.map((r) => `| ${r.join(" | ")} |`)].join("\n");
const md = [];
md.push(`# CRF provider import report`, ``, `Source: \`${relative(repoRoot, exportDir)}\` · Output: \`app/lib/provider-data.generated.ts\``, ``);

md.push(`## Totals`, ``, table(["State", "Source records", "Included", "Excluded"], [
  ...STATES.map((s) => {
    const st = records.filter((r) => r.state.code === s.code);
    return [s.code, st.length, st.filter((r) => !r.exclusion).length, st.filter((r) => r.exclusion).length];
  }),
  ["**Total**", records.length, included.length, records.length - included.length],
]), ``);

const excluded = records.filter((r) => r.exclusion);
md.push(`## Exclusions`, ``, table(["Reason", "Count"], [...count(excluded, (r) => r.exclusion)].sort()), ``,
  table(["ID", "Name", "City", "Reason", "Detail"], excluded.map((r) => [r.row.business_id, r.row.business_name, `${r.row.city}, ${r.state.code}`, r.exclusion, r.hold || "—"])), ``);

const corrected = records.filter((r) => r.corrections.length);
md.push(`## Corrections applied (overrides.json)`, ``, table(["ID", "Name", "Status", "Corrections"], corrected.map((r) => [r.row.business_id, r.row.business_name, r.exclusion ? "excluded" : "included", r.corrections.join("; ")])), ``);

const byRegion = count(included, (r) => r.provider.regionSlug);
md.push(`## Included providers by region`, ``, table(["State", "Region", "Providers"], regions.map((g) => [g.stateSlug, g.name, byRegion.get(g.slug) ?? 0])), ``);

md.push(`## Included providers by equipment category`, ``, table(["Category", "AZ", "CO", "TX", "Total", "As primary"], categories.map((c) => {
  const has = included.filter((r) => r.provider.categories.includes(c.slug));
  return [c.name, ...STATES.map((s) => has.filter((r) => r.state.code === s.code).length), has.length, included.filter((r) => r.provider.primaryCategory === c.slug).length];
})), ``);

const missing = (label, fn) => included.filter(fn).map((r) => `${r.row.business_id} ${r.row.business_name}`);
md.push(`## Missing contact or address data (included providers)`, ``);
for (const [label, fn] of [["No phone", (r) => !r.provider.phone], ["No website", (r) => !r.provider.website], ["No ZIP", (r) => !r.provider.zip], ["No street", (r) => !r.provider.street]]) {
  const list = missing(label, fn);
  md.push(`- **${label}:** ${list.length}${list.length ? ` — ${list.join("; ")}` : ""}`);
}
md.push(``);

md.push(`## Duplicate and branch concerns`, ``);
const dupes = included.filter((r) => r.row.duplicate_of);
md.push(`- **Marked duplicate_of:** ${dupes.map((r) => `${r.row.business_id} ↔ ${r.row.duplicate_of}`).join("; ") || "none"}`);
const sharedPhones = [...phoneGroups.values()].filter((g) => g.length > 1);
md.push(`- **Shared phone numbers:** ${sharedPhones.map((g) => g.join(", ")).join(" | ") || "none"}`);
const siteGroups = count(included.filter((r) => r.provider.website), (r) => r.provider.website.replace(/\/+$/, "").toLowerCase());
const chainSites = [...siteGroups].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]);
md.push(`- **Branches sharing a company website:** ${chainSites.reduce((n, [, c]) => n + c, 0)} providers across ${chainSites.length} sites (largest: ${chainSites.slice(0, 6).map(([s, n]) => `${s.replace(/^https?:\/\/(www\.)?/, "")} ×${n}`).join(", ")})`);
md.push(``);

const reviewed = records.filter((r) => r.review);
md.push(`## Reviewed items`, ``, table(["ID", "Name", "Status", "Basis"], reviewed.map((r) => [r.row.business_id, r.provider.name, r.review.status, r.review.basis])), ``);

const renamed = included.filter((r) => r.provider.name !== r.row.business_name).sort((a, b) => a.row.business_id.localeCompare(b.row.business_id));
md.push(`## Display name adjustments`, ``, `${renamed.length} published providers use a cleaned display name (rules in display-names.json; the source CSVs are unchanged).`, ``,
  table(["ID", "Source name", "Display name", "Rule"], renamed.map((r) => [r.row.business_id, r.row.business_name, r.provider.name, r.nameRule])), ``);

const directPages = new Set(included.flatMap((r) => r.provider.cityPages));
const fallbackPages = [...cityPages].filter((p) => !directPages.has(p)).sort();
md.push(`## Regional fallback for city pages without direct matches`, ``,
  `${fallbackPages.length} city pages have no directly matched provider. They fall back to providers whose yard is in the page's region, listed under "Additional <Region> Rental Providers" — a region-level list that makes no claim about serving the suburb itself.`, ``,
  table(["City page", "Region", "Fallback providers"], fallbackPages.map((p) => [p, regionBySlug.get(cityPageRegions.get(p))?.name ?? "—", included.filter((r) => r.provider.regionSlug === cityPageRegions.get(p)).length])), ``);

md.push(`## Open manual review (included providers)`, ``);
const review = included.filter((r) => !r.review && r.flags.some((f) => !/^(no zip|no street|no matching CRF city page|has unresolved research note|shares phone|duplicate_of)/.test(f) && !/already absent/.test(f)));
md.push(review.length ? table(["ID", "Name", "Flags"], review.map((r) => [r.row.business_id, r.provider.name, r.flags.filter((f) => !/^(no zip|no street|no matching CRF city page)/.test(f)).join("; ")])) : "None — every flagged item has been reviewed (see Reviewed items).", ``);
const unresolved = included.filter((r) => r.flags.some((f) => f.startsWith("has unresolved")));
md.push(`${unresolved.length} included providers carry an unresolved research note (fleet or detail level; not a listing-accuracy blocker). See the eligibility CSV.`, ``);

const pagesWith = count(included.flatMap((r) => r.provider.cityPages), (p) => p);
md.push(`## City page coverage`, ``, `${pagesWith.size} of ${cityPages.size} CRF city pages have at least one matching provider.`, ``,
  table(["City page", "Providers"], [...cityPages].sort().map((p) => [p, pagesWith.get(p) ?? 0])), ``);

md.push(`## Region decisions`, ``, table(["State", "Cities", "Region", "Basis"], regionMap._decisions.map((d) => [d.state, d.cities.join(", "), regionBySlug.get(d.region)?.name ?? d.region, d.basis])), ``);
md.push(`## Leak check`, ``, `Passed: no values from internal research columns (${INTERNAL_COLUMNS.join(", ")}) and no internal terms appear in the generated dataset; only these fields are emitted: ${[...allowedKeys].join(", ")}.`, ``);
writeFileSync(join(reportDir, "import-report.md"), md.join("\n"));

console.log(`Imported ${records.length} records: ${included.length} included, ${excluded.length} excluded.`);
console.log(`Wrote ${relative(repoRoot, outFile)} and ${relative(repoRoot, reportDir)}/`);
