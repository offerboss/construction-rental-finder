# CRF Content Strategy

Last updated: 2026-11-12 (Batch 8 + Resource Run 7; heroes shipped)

## Goal

Build a small number of genuinely local city pages that answer what a contractor or DIYer renting equipment in that
city actually needs to know, instead of scaling thin template pages. Quality over count.

## Phase 1: the DFW cluster

| Batch | Cities | Status |
|---|---|---|
| 1 | Arlington, Irving, Plano | Shipped 2026-10-02 (`b3a73d6`) |
| 2 | Frisco, McKinney | Shipped 2026-10-02 |
| 3 | Garland, Grand Prairie, Mesquite, Carrollton, Richardson | Shipped 2026-10-08 |
| 4 | Denton, Lewisville, Allen, Flower Mound, Mansfield | Shipped 2026-10-15 (navy headers; heroes deferred) |
| 5 | North Richland Hills, Rowlett, Euless, Wylie, DeSoto | Shipped 2026-10-22; heroes added `bc045b1` |
| 6 | Grapevine, Bedford, Cedar Hill, Burleson, Rockwall | Shipped 2026-10-29 with heroes |
| 7 | Little Elm, Haltom City, Keller, The Colony, Coppell | Shipped `d6e78b5` with heroes |
| 8 | Lancaster, Waxahachie, Duncanville, Hurst, Farmers Branch | Shipped 2026-11-12 with heroes |

## Phase 1 resources: the Resource Run

| Guide | Status |
|---|---|
| `/resources/skid-steer-vs-mini-excavator` | Shipped 2026-10-02 |
| `/resources/what-size-excavator-do-i-need` | Shipped 2026-10-02 |
| `/resources/how-to-choose-a-boom-lift` | Shipped 2026-10-08 |
| `/resources/site-preparation-equipment` | Shipped 2026-10-08 |
| `/resources/equipment-rental-checklist` | Shipped 2026-10-15 (hero deferred) |
| `/resources/short-term-vs-long-term-rentals` | Shipped 2026-10-15 (hero deferred) |
| `/resources/telehandler-vs-forklift` | Shipped 2026-10-22 (hero deferred) |
| `/resources/utility-locates-before-digging` | Shipped 2026-10-22 (hero added `bc045b1`) |
| `/resources/jobsite-generator-sizing` | Shipped 2026-10-29 (Resource Run 5) |
| `/resources/trench-safety-basics` | Shipped 2026-10-29 (Resource Run 5) |
| `/resources/how-to-choose-a-scissor-lift` | Shipped `d6e78b5` (Resource Run 6) |
| `/resources/choosing-compaction-equipment` | Shipped `d6e78b5` (Resource Run 6) |
| `/resources/wheel-loader-vs-skid-steer` | Shipped 2026-11-12 (Resource Run 7) with hero |
| `/resources/choosing-concrete-equipment` | Shipped 2026-11-12 (Resource Run 7) with hero |

How a guide works (no CMS):

- Types and the registry live in `app/lib/resources.ts` (`Guide`, `GuideSection`, `GuideBlock`, `guides`). Content
  lives in `app/lib/guide-content.ts`, with its own `sources` map plus shared sources exported from `city-content.ts`.
- `app/resources/[slug]/page.tsx` renders every guide (static params, metadata with canonical and OG/Twitter article
  tags, Article + BreadcrumbList + FAQPage JSON-LD, "The Short Answer", "On This Page", sections with per-section
  sources, related equipment, FAQs, related guides).
- Block types: `p`, `list`, `columns` ("Best for" cards; two to four columns) and `table`. Text can carry inline links written
  `[label](/path)`, rendered by `components/RichText.tsx`. Keep FAQ answers plain text (they go into JSON-LD).
- `publishedGuides` is derived from `guides`, so a city's `guides` links render as soon as a guide ships.
- `relatedEquipment` drives both the guide's equipment cards and the reciprocal "Guides for Renting ..." block on those
  equipment pages (`getGuidesForCategory`).
- Sitemap entries come from `guides`.
- Reconciled placeholders: the old `mini-excavator-vs-skid-steer` slug 308-redirects to
  `/resources/skid-steer-vs-mini-excavator` (`next.config.ts`); the "Excavator Rental Cost Guide" placeholder was dropped
  (no prices). The boom lift and site preparation topics shipped 2026-10-08; the rental checklist and short-term vs long-term guides shipped 2026-10-15; `resourceTopics` is empty.

Guide target: about 1,600 to 2,400 rendered words in `<main>`. Sizing and capability figures come from manufacturer
spec pages or brochures, each cited in the section that uses it; tables are labeled illustrative and size-class ranges
are drawn only from the cited examples. Safety points cite OSHA (29 CFR 1926 Subparts O and P), Texas Utilities Code
ch. 251 and Texas811 (lift guides also cite Subpart L and Texas Health and Safety Code ch. 752). Separate "best for" use cases instead of blanket claims. Link city pages only where a sourced city
fact fits.

## How a rich city page works

Rich content lives in `app/lib/city-content.ts`. The `City` type in `app/lib/locations.ts` has optional fields; a city
with `localIntro` renders the rich layout in `app/locations/[state]/[city]/page.tsx`. All other cities keep the shared
template unchanged.

| Field | Use |
|---|---|
| `metaDescription` | Unique meta description |
| `localIntro` | Header paragraphs: where the city is and what kind of work dominates |
| `useCaseContext` | Two to four paragraphs on local work, access and site conditions |
| `featuredEquipment` | Six `{ slug, reason }` items, each with a local reason. Links to `/equipment/<slug>` |
| `siteConsiderations` | Verified local rules and conditions, each with official or primary `sources` (rendered as external links) |
| `nearbyCities` | Reciprocal same-state links to built pages only. Cities without it list every other city in the state |
| `faqs` | Four city-specific FAQs, distinct from other cities. Emitted as FAQPage JSON-LD |
| `heroImage` | 3:2 hero beside the H1 and the Open Graph image. See `hero-image-style.md` |
| `guides` | Planned guides. Render only when published |

## Page target

- About 1,200 to 1,500 rendered words in `<main>`.
- A distinct angle per city, driven by what the city's own documents say about it. Batch 1:
  - Arlington: commercial and infill work between Dallas and Fort Worth, the Entertainment District; lifts, telehandlers, generators.
  - Irving: Las Colinas offices and warehouse/logistics work next to DFW Airport; forklifts, telehandlers, scissor lifts.
  - Plano: a built-out suburb (about 6% of land left) redeveloping on tight lots; compact equipment.
- Batch 2: Frisco (new ground in the north: grading, utilities, pads); McKinney (historic downtown infill and growth at the edges).
- Batch 6 (next uncovered DFW cities below DeSoto by 2020 Census):
  - Grapevine: ROW work calendar (Main Street Fest / GrapeFest and holiday no-work weeks), potholing and boring rules, DFW Airport airspace.
  - Bedford: compact, built-up ~10 sq mi city; grading permit for all soil disturbance, stormwater inspection before work, 4-hour lane closures.
  - Cedar Hill: Balcones Escarpment terrain and open-space goal; ROW conditions (7–4 weekdays, nightly fencing, no open street cuts).
  - Burleson: I-35W growth and Chisholm Summit master-planned community; ROW locate request, no street cuts, grading/floodplain forms.
  - Rockwall: Ordinance 05-45 hours incl. fueling and deliveries; fill material permits (sheepsfoot, 8–12 in lifts); Lake Ray Hubbard takeline.
- Batch 7 (2026-11-06): Little Elm (lake-area growth, Town ROW + 48 h water/sewer locate, 1-acre drainage plans); Haltom City (ROW utility permit, City not on one-call, 48 h PW dispatcher); Keller (6 a.m.–7 p.m. weekdays / 8–6 weekends, loading 6 a.m.–10 p.m., ROW + grading permits); The Colony (grading/SWPPP before dirt moves, floodplain, SH 121/FM 423 TxDOT driveways, overnight equipment noise); Coppell (ROW Mon–Fri 7–7 only, lane closures 9:30–3:30, residential construction noise, DFW airspace).
- Resource Run 6: how-to-choose-a-scissor-lift; choosing-compaction-equipment.
- Batch 8 (2026-11-12; next uncovered DFW cities below Coppell 42,983 by 2020 Census: Lancaster 41,275, Waxahachie 41,140, Duncanville 40,706, Hurst 40,413, Farmers Branch 35,991; the Texas places ranked between Hurst and Farmers Branch are outside DFW):
  - Lancaster: Code sec. 24.09.049 ROW hours (excavation/boring 7–7; inspected work 7 a.m. to 30 min before sundown M–F; Saturday by Thursday-noon notice), PE-sealed trench design over 5 ft, grading permit + floodplain fill 95% SP, construction-equipment noise exemption 7–7.
  - Waxahachie: Ellis County seat, historic core vs growth; 1-acre grading rules (plans, SWPPP, sign, inspected BMPs, letter of authorization), floodplain permits, after-hours inspection cost.
  - Duncanville: built-out suburb; 14-day ROW permits, City locates within 5 days, MGO safety inspections, no missile boring, 36 in bore depth, 72 h open-excavation limit, same-day spoil removal, 1 in plates, 10-business-day restoration; 10 p.m.–7 a.m. noise.
  - Hurst: built-out Mid-Cities; ROW permits for ground and aerial work (ROWay), construction permit covers private land disturbance, bonds for street/curb cuts, permit-number locates, floodplain permit includes equipment storage.
  - Farmers Branch: ROW 7–4 M–F, lanes 9–3:30, 3-business-day City locates, steerable bores, 95/90% backfill, street-cut restoration (3,600 psi in 72 h, plated), Ord. 3839 construction hours near homes.
- Resource Run 7: wheel-loader-vs-skid-steer (Deere 318 P/334 P/244 P/344 P/644 P pages; OSHA 1926.602(a); TxDMV); choosing-concrete-equipment (Multiquip MC94P, Whiteman J36B65, Husqvarna K 770; OSHA 1926.701/.702 and 1926.1153 Table 1). Concrete equipment had no guide before this run; wheel loaders had one.

- Batch 3 (chosen by 2020 Census size among uncovered DFW cities; Denton skipped because its site couldn't be verified):
  - Garland: a largely built-out first-ring suburb converting older industrial buildings and repositioning aging retail; forklifts, scissor lifts, compact equipment.
  - Grand Prairie: Great Southwest Industrial District warehouse and distribution builds plus Joe Pool Lake residential; telehandlers, booms, rollers; TxDOT, floodplain and airport rules.
  - Mesquite: new ground south of Cartwright Road and along I-20 versus aging north; excavators, rollers, trenchers; creeks and airport.
  - Carrollton: transit-oriented infill around the Downtown Carrollton and Trinity Mills DART stations; telehandlers, lifts, compact equipment; strict noise and generator hours.
  - Richardson: modernizing existing buildings in the Innovation District and older Enhancement Area corridors; scissor and boom lifts, forklifts, generators.

## Sourcing rules

- Verify every local fact against an official or primary source: city code, permit and right-of-way manuals,
  comprehensive plans, Texas statutes and Texas811, NWS, USDA NRCS, OSHA, FAA. Record each in `published-pages.md`.
- Say what a rule covers. Many city rules apply only to right-of-way work; say so on the page.
- When a fact can't be verified for the specific city, phrase it at the level the source supports (for example, Plano
  soils are described through USDA's "north of Dallas" Blackland Prairie description, plus a pointer to the Web Soil Survey).

## Never

- Prices or rate ranges.
- Population, growth or market statistics without a source.
- Claims about which providers serve a city, or how many.
- Landmark misuse in copy or images (a landmark appears only when an official source names it, for example the
  venues in Arlington's right-of-way event rules).
- Filler, generic openers, "whether you're".
- Live links to pages that don't exist yet.

## Linking

- Each rich page links to its six featured equipment categories and "View All Equipment".
- Nearby links are reciprocal and point only at built pages (see the link map in `published-pages.md`).
- Guides link only once published.

## Friday QA — 2026-10-09

**Fixed** (`4037b89`)

- banned-phrase wording removed from `app/lib/category-content.ts`.
- Genie Z-30/20N citation updated to the 2026 US spec sheet (weight 14,421 lb).
- `/resources` Coming Soon grid now uses 4 columns only when there are more than two cards.

**Open / not fixed**

- The Garland and Mesquite source discrepancies are still unresolved (report only; see the notes in `published-pages.md`).
- Guide word counts run slightly over target (report only).
- Denton was built 2026-10-15 after cityofdenton.com became readable via WebFetch (Mac curl still hits Cloudflare). Heroes for Batch 4 and Resource Run 3 are deferred to Friday QA / GenerateImage.
- The GitHub connection on the old duplicate Vercel project `construction-rental-finder` is being handled separately. Don't touch Vercel from QA.

## Friday QA — 2026-10-16

**Checked, no content change**

- Garland and Mesquite discrepancies re-checked. Garland: the ROW directives (rev. 2006) and the utility checklist still give different ROW work hours, so the page keeps stating neither. The only hours figure it gives is 7 a.m.–8 p.m. from Ordinance 7079 (work next to homes). Mesquite: the City's Noise Ordinance page (fetched 2026-10-16) still reads "8:00 P.M. until 9:00 A.M. Saturday–Sunday & Holidays", which is garbled, so the page keeps only the weekday 7 a.m.–8 p.m. figure and says weekend and holiday hours differ. Both are handled; the open item is closed unless the City corrects its page.
- Lewisville noise hours: the live page states no construction hours. Sources disagree. The municode copy of Code § 9-5 (Ord. 3741-02-2010, as of 2016) gives 6 a.m.–8:30 p.m. weekdays June–September, 7 a.m.–8:30 p.m. weekdays October–May, 8 a.m.–8:30 p.m. Saturday and 10 a.m.–8:30 p.m. Sunday. A 2026 third-party summary says 7 a.m.–8 p.m. Mon–Sat under "Ch. 18". The current official code couldn't be loaded (municode is JavaScript-only), so no hours were added. Add them only after reading current § 9-5 on library.municode.com/tx/lewisville.
- Batch 4 and Resource Run 3 heroes (24d3020) are all 1080x720 WebP files between 108 and 218 KB.
- Crawl of the live sitemap (60 URLs): all 200, titles, descriptions and canonicals present, no duplicate titles, no broken internal links. 41 titles run over 65 characters because of the " | Construction Rental Finder" suffix (template; not changed).

**Open / not fixed**

- Guide word counts still run slightly over target (report only).
- Boom lift guide hero decal is still open (minor).

## Batch 8 notes — 2026-11-12

- Heroes shipped with the pages (GenerateImage, 1080x720 WebP, see hero-image-style.md).
- Provider data (`provider-data.generated.ts`) was not regenerated; new pages get the DFW Metro regional fallback via `cityPageRegions`. Re-run `node scripts/import-providers.mjs` only when Adam updates the directory.
