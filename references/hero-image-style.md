# CRF Hero Image Style

Last updated: 2026-10-02 (standard approved by Adam; first used for Arlington, Irving and Plano in Batch 1)

**Approval status:** Every new hero needs Adam's approval before it ships, until he says otherwise.

---

## The Standard: "Equipment at Work in a Place"

Each city hero shows realistic rental construction equipment working on a believable jobsite in that city's local
setting. The equipment is the subject, and the place gives it context. Match the scene to the city page's angle.

| Element | Rule |
|---|---|
| Subject | Realistic rental equipment (telehandler, boom or scissor lift, forklift, mini excavator, excavator, wheel loader, roller or compactor, compact track loader, skid steer, generator) doing plausible work, set up as a real crew would set it up |
| Setting | A believable DFW jobsite: clay subgrade, a suburban building pad, an infill lot between homes, a warehouse or logistics yard, a commercial site under construction, a large graded development site, a tight lot at the edge of a historic downtown |
| Light | Daylight or golden hour |
| Palette | Natural jobsite colors. Equipment in generic rental colors (yellow, white, blue, gray) |
| Text | No text overlay, signage, lettering, decals or watermarks |
| Branding | No logos, no real manufacturer marks and no fake brands or invented provider names |
| Landmarks | No landmark misuse: don't put a jobsite on or beside a recognizable landmark (stadiums, campuses, airport terminals), and don't distort recognizable buildings. Generic local context is the goal |
| People | Optional. If shown, keep them small and unrecognizable, in hard hats and high-visibility vests |
| Safety | Nothing an inspector would flag: no one riding forks or buckets, outriggers down where needed, no one under a suspended load, trenches look shallow or protected |

---

## Technical Spec

| Spec | Value |
|---|---|
| Final size | 3:2, 1080x720. Crop deliberately so every key subject sits comfortably inside the frame, then check the crop by eye |
| Format | WebP, under 300 KB |
| Path | `public/images/locations/<city>-tx-construction-equipment-rental.webp` (lowercase, hyphens, no spaces) |
| Registration | Set `heroImage: { src, alt }` on the city in `app/lib/city-content.ts` |
| Alt text | Descriptive, 125 characters or fewer. Describe what's actually in the image and name the city, for example "Telehandler and forklift moving pallets in the gravel yard of a new tilt-wall warehouse in Irving, Texas" |

How it displays: when `heroImage` is set, the city page header (`PageHeader` with `figure`) renders the image in an
`aspect-[3/2]` frame with `object-cover` beside the H1, with the hazard-stripe offset used on equipment pages. The image
is also the page's Open Graph and Twitter image. Cities without `heroImage` keep the standard navy header.

---

## QA Checklist

- [ ] The scene reads as rental equipment at work on a jobsite, not a stock skyline or landscape
- [ ] The setting is believable for this city and matches the page's angle; no landmark is misused
- [ ] No text, signage, decals, logos or invented business names anywhere in the frame (zoom in to check)
- [ ] The equipment looks physically plausible (forks, booms, tracks, outriggers, scale against people and buildings)
- [ ] Workers, if any, are small, unrecognizable and in safety gear, and nothing shows an unsafe practice
- [ ] The light is daylight or golden hour
- [ ] Exactly 1080x720, and every key subject sits comfortably inside the frame (checked by eye)
- [ ] WebP, under 300 KB, saved at the correct path and filename
- [ ] Alt text is 125 characters or fewer and accurately describes the image
- [ ] Adam has approved it
- [ ] After deploy: the image returns 200 as `image/webp` and renders with its alt text on the city page

---

## Approved Heroes

| Slug | File | Size | Scene | Alt text | Approved |
|---|---|---|---|---|---|
| arlington | public/images/locations/arlington-tx-construction-equipment-rental.webp | 1080x720, 108 KB | Yellow telehandler placing a pallet beside a steel-frame commercial building on a clay pad, blue scissor lift nearby, late afternoon | Telehandler placing a pallet beside a steel-frame commercial building on a clay pad in Arlington, Texas | 2026-10-02 |
| irving | public/images/locations/irving-tx-construction-equipment-rental.webp | 1080x720, 90 KB | Telehandler and forklift moving pallets in the gravel yard of a new tilt-wall warehouse with dock doors, scissor lift parked | Telehandler and forklift moving pallets in the gravel yard of a new tilt-wall warehouse in Irving, Texas | 2026-10-02 |
| plano | public/images/locations/plano-tx-construction-equipment-rental.webp | 1080x720, 155 KB | Mini excavator digging a shallow footing trench and a compact track loader on a graded infill lot between brick homes and mature trees, golden hour | Mini excavator digging a footing trench beside a compact track loader on an infill lot between homes in Plano, Texas | 2026-10-02 |
| frisco | public/images/locations/frisco-tx-construction-equipment-rental.webp | 1080x720, 122 KB | Excavator loading an articulated dump truck, smooth-drum roller and wheel loader on a large graded dirt site, subdivision in the distance, two small workers in hi-vis, clear daylight | Excavator loading a dump truck beside a roller and wheel loader on a large graded development site in Frisco, Texas | 2026-10-02 |
| mckinney | public/images/locations/mckinney-tx-construction-equipment-rental.webp | 1080x720, 148 KB | Mini excavator digging a trench beside wooden concrete forms, skid steer, one worker in hard hat and vest, historic red-brick buildings behind orange safety fence, gravel lane, daylight | Mini excavator trenching beside concrete forms and a skid steer next to historic brick buildings in McKinney, Texas | 2026-10-02 |

| skid-steer-vs-mini-excavator | public/images/resources/skid-steer-vs-mini-excavator.webp | 1080x720, 177 KB | Compact track loader with a bucket of dirt beside a mini excavator digging next to a spoil pile, gravel pad, wood privacy fence and house behind, golden hour | Compact track loader with a loaded bucket beside a mini excavator digging in a fenced residential backyard | 2026-10-02 |
| what-size-excavator-do-i-need | public/images/resources/what-size-excavator-do-i-need.webp | 1080x720, 98 KB | Three excavators of increasing size (mini, compact, full-size) lined up on a large graded dirt site, trees and homes in the distance, late-afternoon light | Three excavators, from mini to full-size, lined up on a graded dirt site with homes in the distance | 2026-10-02 |

Resource guide heroes follow the same standard and spec, with path `public/images/resources/<guide-slug>.webp` and
registration on the guide's `heroImage` in `app/lib/guide-content.ts`. The scene should illustrate the guide's subject
(for comparisons, both machines in one believable jobsite). The hero also appears on the `/resources` index card and as
the guide's Open Graph and Twitter image.

The older state images (`/images/*.png` backgrounds) predate this standard. Don't use them as style references.
