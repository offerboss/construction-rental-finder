# CRF Content Strategy

Last updated: 2026-10-02 (CRF approved plan, 2026-10-02)

## Goal

Build a small number of genuinely local city pages that answer what a contractor or DIYer renting equipment in that
city actually needs to know, instead of scaling thin template pages. Quality over count.

## Phase 1: the DFW cluster

| Batch | Cities | Status |
|---|---|---|
| 1 | Arlington, Irving, Plano | Shipped 2026-10-02 (`b3a73d6`) |
| 2 | Frisco, McKinney | Shipped 2026-10-02 |

Planned resources (the Resource Run): `/resources/skid-steer-vs-mini-excavator` and
`/resources/what-size-excavator-do-i-need`. Every Batch 1 city already carries both as `guides` data. They render only
once the slug is added to `publishedGuides` in `app/lib/resources.ts`, which keeps any city page from linking to a 404.

Note: `resourceTopics` in `app/lib/resources.ts` lists an older planned slug, `mini-excavator-vs-skid-steer`. The
approved plan uses `skid-steer-vs-mini-excavator`. Reconcile them during the Resource Run.

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
