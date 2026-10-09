import { sources as citySources } from "./city-content";
import type { SourceLink } from "./locations";
import type { Guide } from "./resources";

// Manufacturer spec pages and regulations cited by the guides. Spec figures are as published
// for the listed configuration on the date checked (2026-10-02; boom lift and site preparation
// sources 2026-10-08).
const sources = {
  kubotaU175Launch: { label: "Kubota U17-5 launch announcement (Jan. 2025)", url: "https://www.kubotausa.com/kubota-introduces-next-generation-zero-tail-swing-compact-excavator-to-its-lineup-meet-the-u17-5" },
  kubotaU175Brochure: { label: "Kubota U17-5 brochure", url: "https://www.kubotausa.com/docs/default-source/brochure-sheets/brochure_u17-5.pdf?sfvrsn=51aa9d9a_1" },
  kubotaSvl753: { label: "Kubota SVL75-3 brochure", url: "https://www.kubotausa.com/docs/default-source/brochure-sheets/svl_brochure.pdf?sfvrsn=2c35551c_1" },
  deereCompactLine: { label: "John Deere compact excavator overview", url: "https://www.deere.ca/en/construction/excavators/compact-excavators/big-productivity-35-p-tier/" },
  deere35p: { label: "John Deere 35 P-Tier specs", url: "https://www.deere.ca/en/excavators/compact-excavators/35-p-excavator/" },
  deere35pSpecSheet: { label: "John Deere 35 P-Tier spec sheet (PDF)", url: "https://www.deere.com/assets/pdfs/common/products/sync/ME35PAU-35-p-tier-compact-excavator.pdf" },
  deere60p: { label: "John Deere 60 P-Tier specs", url: "https://www.deere.ca/en/excavators/compact-excavators/60-p-excavator/" },
  deere75p: { label: "John Deere 75 P-Tier specs", url: "https://www.deere.ca/en/excavators/mid-size-excavators/75-p-excavator/" },
  deere85p: { label: "John Deere 85 P-Tier specs", url: "https://www.deere.ca/en/excavators/mid-size-excavators/85-p-excavator/" },
  deere135p: { label: "John Deere 135 P-Tier specs", url: "https://www.deere.ca/en/excavators/mid-size-excavators/135-p-excavator/" },
  deere210p: { label: "John Deere 210 P-Tier specs", url: "https://www.deere.ca/en/excavators/mid-size-excavators/210-p-excavator/" },
  deere350p: { label: "John Deere 350 P-Tier specs", url: "https://www.deere.ca/en/excavators/mid-size-excavators/350-p-excavator/" },
  deere318p: { label: "John Deere 318 P-Tier specs", url: "https://www.deere.ca/en/loaders/skid-steers/318-p-skid-steer/" },
  deere334p: { label: "John Deere 334 P-Tier specs", url: "https://www.deere.ca/en/loaders/skid-steers/334-p-skid-steer/" },
  deere317p: { label: "John Deere 317 P-Tier specs", url: "https://www.deere.ca/en/loaders/compact-track-loaders/317-p-compact-track-loader/" },
  osha651: { label: "OSHA 29 CFR 1926.651 (excavations)", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-P/section-1926.651" },
  osha652: { label: "OSHA 29 CFR 1926.652 (protective systems)", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-P/section-1926.652" },
  osha600: { label: "OSHA 29 CFR 1926.600 (equipment)", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-O/section-1926.600" },
  osha602: { label: "OSHA 29 CFR 1926.602 (earthmoving equipment)", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-O/section-1926.602" },
  txdmvSize: { label: "TxDMV: Texas size and weight limits", url: "https://www.txdmv.gov/motor-carriers/oversize-overweight-permits/texas-size-weight-limits" },
  genieZ3020n: { label: "Genie Z-30/20N and Z-30/20N RJ specifications, 2026 (PDF)", url: "https://www.genielift.com/docs/default-source/product-specifications/articulated-boom-lift/en/2026/z-3020n-z-3020n-rj---product-specifications-2026.pdf?sfvrsn=75ce7f68_4" },
  genieZ45xc: { label: "Genie Z-45 XC and Z-45 HF specifications, 2026 (PDF)", url: "https://www.genielift.com/docs/default-source/product-specifications/articulated-boom-lift/en/2026/z-45-xc-z-45-hf-product-specifications-2026.pdf?sfvrsn=72e5cd45_2" },
  jlg600s: { label: "JLG 600S specifications (PDF)", url: "https://www.jlg.com/dfsmedia/e4042b10c9ce4595b4cc059f1299f079/125485-source" },
  genieS85xc: { label: "Genie S-85 XC FE and S-85 XC E specifications, 2026 (PDF)", url: "https://www.genielift.com/docs/default-source/product-specifications/telescopic-booms/en/2026/s-85-xc-fe-s-85-xc-e---product-specifications---2026---en-us.pdf?sfvrsn=9015f83f_1" },
  genieGs1930: { label: "Genie GS-1930 and GS-1932 specifications, 2026 (PDF)", url: "https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en/2026/gs-1930-and-gs-1932-product-specifications---2026.pdf?sfvrsn=4ee5bca7_1" },
  genieGs3246: { label: "Genie GS-3232 and GS-3246 specifications, 2026 (PDF)", url: "https://www.genielift.com/docs/default-source/product-specifications/slab-scissor-lifts-(ansi)-or-electric-and-bi-energy-lifts-(ce)/en/2026/gs-3232-gs-3246-product-specifications---2026---en-us.pdf?sfvrsn=dfff77a9_1" },
  osha454: { label: "OSHA 29 CFR 1926.454 (scaffold training)", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.454" },
  deere344p: { label: "John Deere 344 P compact wheel loader specs", url: "https://www.deere.ca/en/loaders/wheel-loaders/compact-wheel-loaders/344-p-wheel-loader/" },
  deere644p: { label: "John Deere 644 P wheel loader specs", url: "https://www.deere.ca/en/loaders/wheel-loaders/mid-size-wheel-loaders/644-p-wheel-loader/" },
  bomagBw211: { label: "BOMAG BW 211 D-5 SL single-drum roller", url: "https://www.bomag.com/ww-en/machinery/categories/single-drum-rollers-soil-compactors/single-drum-rollers/bw-211-d-5-sl-93504/" },
  wackerBs60: { label: "Wacker Neuson BS60-4As 11in rammer technical data (PDF)", url: "https://cdn.mediapool.wackerneusongroup.com/asset/491085414967/document_8e46uv6vi51l198o2t7evg8l7r" },
  wackerWp1550: { label: "Wacker Neuson single-direction vibratory plates, WP1550A (PDF)", url: "https://cdn.mediapool.wackerneusongroup.com/asset/491085414967/document_rfl1tjoc6h2in3n9glg6hf8g33" },
} satisfies Record<string, SourceLink>;

const shared = {
  texas811: citySources.texas811,
  utilitiesCode251: citySources.utilitiesCode251,
  nwsDfw: citySources.nwsDfwClimate,
  usdaHoustonBlack: citySources.usdaHoustonBlack,
  usdaOsd: citySources.usdaOsd,
  oshaTrenching: citySources.oshaTrenching,
  planoTomorrow: citySources.planoTomorrowFaq,
  arlingtonRow: citySources.arlingtonRowManual,
  irvingRow: citySources.irvingRowCode,
  friscoLineLocates: citySources.friscoLineLocates,
  friscoPlan: citySources.friscoPlan,
  mckinneyTownCenter: citySources.mckinneyTownCenter,
  mckinneyRow: citySources.mckinneyRowManual,
  tceq: citySources.tceqConstructionStormwater,
  friscoGeneralNotes: citySources.friscoGeneralNotes,
  oshaAerialLifts: citySources.oshaAerialLifts,
  oshaScissorLifts: citySources.oshaScissorLifts,
  texasHighVoltage: citySources.texasHighVoltage,
  faaPart77: citySources.faaPart77,
  garlandStrategicPlan: citySources.garlandStrategicPlan,
  garlandRowChecklist: citySources.garlandRowChecklist,
  grandPrairieAbout: citySources.grandPrairieAbout,
  grandPrairieEngineeringPermits: citySources.grandPrairieEngineeringPermits,
  grandPrairieFranchisePermit: citySources.grandPrairieFranchisePermit,
  mesquitePlan: citySources.mesquitePlan,
  mesquiteRow: citySources.mesquiteRow,
  carrolltonTransitCenter: citySources.carrolltonTransitCenter,
  carrolltonNoise: citySources.carrolltonNoise,
  richardsonEnhancementAreas: citySources.richardsonEnhancementAreas,
  richardsonRow: citySources.richardsonRow,
};

export const skidSteerVsMiniExcavator: Guide = {
  slug: "skid-steer-vs-mini-excavator",
  title: "Skid Steer vs Mini Excavator: Which Should You Rent?",
  shortTitle: "Skid Steer vs Mini Excavator",
  metaTitle: "Skid Steer vs Mini Excavator: Which Should You Rent?",
  metaDescription:
    "Compare skid steers, compact track loaders and mini excavators with manufacturer specs: what each does best, capacity, access and ground, and when to rent both.",
  summary:
    "How the two compact machines differ, what each is best for, and how to compare capacity, width and ground conditions using published specs.",
  intro: [
    "Skid steers and mini excavators are both compact, both run attachments and often work the same residential and light commercial jobs, but they're built for different work. A mini excavator digs: it sits in one spot, reaches down and swings spoil aside. A skid steer, or its tracked cousin the compact track loader, carries: it drives material around the site in a bucket or on forks.",
    "This guide compares them using published manufacturer specifications, separates what each machine is best for, and covers the jobs that need both.",
  ],
  heroImage: {
    src: "/images/resources/skid-steer-vs-mini-excavator.webp",
    alt: "Compact track loader with a loaded bucket beside a mini excavator digging in a fenced residential backyard",
  },
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  keyTakeaways: [
    "Rent a mini excavator when the work is mostly digging below grade: trenches, footings, utility connections, drainage, stumps and roots.",
    "Rent a skid steer or compact track loader when the work is mostly moving material at or above grade: grading, spreading base, hauling spoil, clearing and attachment work.",
    "Ask for tracks when the ground is soft or wet, and compare loader capacity on the same basis, since track loaders may be rated at 35% of tipping load and skid steers at 50%.",
    "Many jobs use both: the excavator digs, and the loader moves spoil, brings in backfill and cleans up.",
  ],
  sections: [
    {
      id: "how-they-work",
      heading: "How the Two Machines Work",
      blocks: [
        { type: "p", text: "A mini excavator, also called a compact excavator, is a tracked digging machine whose upper structure (cab, boom, arm and bucket) rotates on its undercarriage. It digs by pulling the bucket toward itself, so it can work below the level it sits on and swing each load to a pile or truck without moving. Most carry a front blade; John Deere notes the backfill blade on its 35 P-Tier can level and backfill trenches, and can clamp and carry pipe or rocks together with the bucket." },
        { type: "p", text: "A skid steer is a compact, rigid-frame loader on four wheels that steers by driving the wheels on each side at different speeds. Its lift arms raise a bucket, forks or another attachment in front of the operator. A compact track loader (CTL) is the same idea on rubber tracks. Both are built to push, lift, carry and load rather than to dig deep." },
        { type: "p", text: "So the numbers to compare are different. A mini excavator is sized by dig depth, reach and breakout force; a loader by rated operating capacity, lift height and the hydraulic flow available for attachments." },
      ],
      sources: [sources.deere35p],
    },
    {
      id: "best-for",
      heading: "What Each Machine Is Best For",
      blocks: [
        {
          type: "columns",
          columns: [
            {
              title: "Mini excavator",
              items: [
                "Utility, water, sewer and irrigation trenches, especially deeper or tighter ones",
                "Footings and foundation trenches",
                "Drainage work, French drains and dry wells",
                "Careful digging near existing utilities and structures",
                "Stumps, roots and light demolition with a thumb or breaker",
                "Backfilling and rough leveling with the blade",
              ],
            },
            {
              title: "Skid steer or compact track loader",
              items: [
                "Rough and finish grading",
                "Spreading gravel, base, topsoil and mulch",
                "Moving spoil and debris around the site and loading trucks",
                "Clearing brush and general site cleanup",
                "Moving pallets with forks",
                "Running powered attachments such as augers, trenchers, breakers, brush cutters and cold planers",
              ],
            },
          ],
        },
        { type: "p", text: "Neither fits everything. A long, narrow run of irrigation line or conduit may suit a [trencher](/equipment/trencher-rental), and deep excavations or truck loading on a large site call for a full-size [excavator](/equipment/excavator-rental). For big stockpiles and truck loading on large sites, consider a [wheel loader](/equipment/wheel-loader-rental)." },
      ],
      sources: [sources.deere334p],
    },
    {
      id: "specs",
      heading: "Compare the Specs: Illustrative Examples",
      blocks: [
        { type: "p", text: "These published specs for a few representative models are illustrative, not a ranking. Figures change with cab, arm, tracks and counterweight, so confirm the exact machine with your provider." },
        {
          type: "table",
          caption: "Mini excavators",
          columns: ["Model", "Operating weight", "Max dig depth", "Bucket breakout", "Width"],
          rows: [
            ["Kubota U17-5 (zero tail swing)", "3,902 lb", "7 ft 6.2 in", "3,547 lbf", "3 ft 3.4 in to 4 ft 3.2 in (variable)"],
            ["John Deere 35 P-Tier (zero tail swing)", "8,135 lb", "10 ft 0 in", "6,085 lbf", "5 ft 9 in"],
            ["John Deere 60 P-Tier", "13,620 lb", "12 ft 4 in", "9,240 lbf", "6 ft 7 in"],
          ],
        },
        {
          type: "table",
          caption: "Skid steers and compact track loaders",
          columns: ["Model", "Operating weight", "Rated operating capacity", "Tipping load", "Width (no bucket)", "Hinge pin height"],
          rows: [
            ["John Deere 318 P-Tier skid steer (vertical lift)", "6,542 lb", "1,945 lb", "3,890 lb", "62.9 in", "120 in"],
            ["John Deere 334 P-Tier skid steer (vertical lift)", "10,264 lb", "4,000 lb (with standard counterweight set)", "8,000 lb", "78.5 in", "132 in"],
            ["John Deere 317 P-Tier track loader (vertical lift)", "8,423 lb", "2,125 lb", "6,070 lb", "65.1 in", "121 in"],
            ["Kubota SVL75-3 track loader (vertical lift)", "9,190 lb (open cab)", "2,490 lb at 35% of tipping load; 3,557 lb at 50%", "7,112 lb", "65.9 in (standard track)", "122.7 in"],
          ],
          note: "Kubota's operating weights include a 165 lb operator. Deere's 35 P-Tier figures are with a cab.",
        },
        { type: "p", text: "Two patterns stand out. The smallest mini excavator here narrows to about 3 ft 3 in, slimmer than any loader in the table, so it can reach side yards and gates a loader can't. And the loaders weigh roughly 6,500 to 10,300 lb before attachments, which matters for trailers, turf and finished surfaces." },
      ],
      sources: [sources.kubotaU175Launch, sources.kubotaU175Brochure, sources.deere35p, sources.deere60p, sources.deere318p, sources.deere334p, sources.deere317p, sources.kubotaSvl753],
    },
    {
      id: "capacity",
      heading: "Reading Loader Capacity: ROC and Tipping Load",
      blocks: [
        { type: "p", text: "A loader's rated operating capacity (ROC) is the load it's rated to handle in normal operation, set as a fraction of its tipping load. In Deere's published figures, the 318 P-Tier skid steer's ROC is half its tipping load (1,945 of 3,890 lb), while the 317 P-Tier compact track loader's is 35% (2,125 of 6,070 lb)." },
        { type: "p", text: "That difference trips people up. Kubota lists its SVL75-3 track loader at 2,490 lb of ROC at 35% of tipping load and 3,557 lb at 50%. When you compare a skid steer with a track loader, or one brand with another, check which basis each number uses." },
        { type: "p", text: "Material weight matters too: wet clay or a pallet of block weighs far more than mulch. Ask for the machine's capacity with the attachment you plan to use." },
      ],
      sources: [sources.deere318p, sources.deere317p, sources.kubotaSvl753],
    },
    {
      id: "access-ground",
      heading: "Access, Ground and Surfaces",
      blocks: [
        { type: "p", text: "Measure the narrowest point on the route to the work, such as a gate, side yard or gap between a house and a fence, before you choose. Kubota's U17-5 retracts its undercarriage to about 3 ft 3 in for narrow passages and widens to 4 ft 3.2 in for stability, and Deere says its 316 and 318 P-Tier skid steers are under 63 in wide." },
        { type: "p", text: "Tracks spread a machine's weight, and wider tracks spread it further. Kubota lists the SVL75-3's ground pressure at 5.8 psi on standard 12.6 in tracks and 4.7 psi on 15.8 in wide tracks (open cab). The Deere 35 P-Tier mini excavator is listed at 4.8 psi on rubber tracks with a cab. On pavement and firm, dry ground, a wheeled skid steer is worth considering, and it travels faster: Deere's two-speed option on the 316 and 318 P-Tier reaches 10.1 mph." },
        { type: "p", text: "Clay changes the plan. USDA describes the Blackland Prairie's Houston Black clay, found from north of Dallas to San Antonio, as having very high shrink-swell potential and being very sticky and very plastic when wet, and the National Weather Service notes that spring and fall are the wettest seasons in Dallas–Fort Worth. On wet clay, ask for tracks or wide tracks, and plan mats or plywood wherever a machine crosses lawn, pavers or a driveway." },
      ],
      sources: [sources.kubotaU175Brochure, sources.deere318p, sources.kubotaSvl753, sources.deere35pSpecSheet, shared.usdaHoustonBlack, shared.usdaOsd, shared.nwsDfw],
    },
    {
      id: "both",
      heading: "When You Need Both",
      blocks: [
        { type: "p", text: "Plenty of jobs use both. On a footing or utility job, the mini excavator digs and sets spoil aside, then the loader hauls it away, brings in base or backfill and cleans up. On a tight site, renting them back to back keeps only one machine in the way at a time." },
        { type: "p", text: "The machines don't substitute well for each other. A skid steer can't reach below itself the way an excavator can, and a mini excavator is slow at moving material any distance: Deere lists the 35 P-Tier's top travel speed at 2.7 mph, against up to 10.1 mph for its two-speed 316 and 318 P-Tier skid steers. Loaders can run trencher and auger attachments for some digging; ask which attachments the machine's hydraulics support." },
      ],
      sources: [sources.deere35pSpecSheet, sources.deere318p, sources.kubotaSvl753],
    },
    {
      id: "safety",
      heading: "Safety Basics for Either Machine",
      blocks: [
        {
          type: "list",
          items: [
            "Call before you dig. Texas law requires notice to the one-call system at least 48 hours before excavating, not counting weekends and legal holidays; call 811 or submit a ticket online with Texas811. OSHA also requires the estimated location of underground utilities to be determined before an excavation is opened, and the exact location to be found by safe means as digging gets close.",
            "Protect trenches. OSHA requires a protective system, such as sloping, shoring or a trench box, for excavations 5 feet deep or more unless they're entirely in stable rock. Shallower trenches need one too unless a competent person finds no sign of a potential cave-in. Trenches 4 feet or deeper need a ladder, stairway or ramp within 25 feet of lateral travel, and spoil has to stay at least 2 feet from the edge.",
            "Keep people clear. No one may stand under loads handled by lifting or digging equipment, and when an operator can't clearly see the edge of an excavation, OSHA requires a warning system such as barricades, signals or stop logs.",
            "Belt in and back up carefully. OSHA requires seat belts on construction earthmoving equipment such as loaders, and a reverse alarm or a signal person when a machine's view to the rear is obstructed.",
            "Park it down. Loader buckets must be fully lowered or blocked when not in use or under repair.",
          ],
        },
        { type: "p", text: "Read the operator's manual and ask for a walkaround at delivery. This summary doesn't replace the regulations or your site's safety plan." },
      ],
      sources: [shared.utilitiesCode251, shared.texas811, sources.osha651, sources.osha652, sources.osha602, sources.osha600],
    },
    {
      id: "dfw",
      heading: "Planning a DFW Project",
      blocks: [
        { type: "p", text: "The choice plays out differently across Dallas–Fort Worth. In [Plano](/locations/texas/plano), the City's comprehensive plan FAQ says only about 6% of land is still available for development, so much of the work is redevelopment on established lots, where a narrow mini excavator and a compact loader fit better than larger machines. Around [McKinney's](/locations/texas/mckinney) historic downtown, the City's plan describes infill and adaptive reuse in a largely developed core, which suits the same compact pairing." },
        { type: "p", text: "Check utility rules before either machine digs in the right-of-way. [Frisco](/locations/texas/frisco) requires separate City line locates, outside the 811 process, for digging deeper than 18 inches in City right-of-way or easements. [Arlington](/locations/texas/arlington) takes its own City locate requests at least two working days ahead and doesn't mark private services, and [Irving's](/locations/texas/irving) right-of-way rules make it City policy not to cut streets or sidewalks. Each city page has the details and sources." },
      ],
      sources: [shared.planoTomorrow, shared.mckinneyTownCenter, shared.friscoLineLocates, shared.arlingtonRow, shared.irvingRow],
    },
  ],
  faqs: [
    { question: "Can a skid steer dig a trench?", answer: "Only in a limited way. A bucket can cut and scrape at grade, and trencher or auger attachments handle narrow trenches and holes, but a skid steer can't reach below itself the way a mini excavator does. For footings, deeper utility trenches or digging near existing lines, a mini excavator is the better tool." },
    { question: "Is a compact track loader the same as a skid steer?", answer: "They share the same basic design and many of the same attachments, but a compact track loader runs on rubber tracks instead of wheels. Tracks spread the machine's weight, which helps on soft or wet ground. Deere publishes its track loaders' capacity at 35% of tipping load and its skid steers' at 50%, and Kubota lists its SVL75-3 track loader at both, so check the basis when you compare numbers." },
    { question: "What size mini excavator do I need for a residential job?", answer: "Start with the deepest cut and the narrowest access. In the examples in this guide, the Kubota U17-5, at under 4,000 lb, digs to about 7.5 feet and narrows to about 3 feet 3 inches, while the 8,135 lb Deere 35 P-Tier digs to 10 feet but is 5 feet 9 inches wide. Our excavator sizing guide covers the full range of sizes." },
    { question: "Can I tow a skid steer or mini excavator myself?", answer: "Some compact machines are light enough for a pickup and trailer; Deere says its 316 through 318 P-Tier loaders, at 6,542 to 8,423 lb, can be trailered behind a standard pickup. Check the truck, trailer, hitch and tie-down ratings against the machine's weight with attachments, or ask the provider to deliver." },
  ],
  relatedEquipment: [
    { slug: "mini-excavator-rental", reason: "Trenches, footings, drainage and utility work on tight sites." },
    { slug: "skid-steer-rental", reason: "Grading, material moving and attachment work, on wheels or tracks." },
    { slug: "trencher-rental", reason: "Long, narrow runs for irrigation, conduit and small utilities." },
    { slug: "excavator-rental", reason: "When the job outgrows a compact machine: deeper cuts and truck loading." },
  ],
  relatedGuides: ["what-size-excavator-do-i-need"],
};

export const excavatorSizeGuide: Guide = {
  slug: "what-size-excavator-do-i-need",
  title: "What Size Excavator Do You Need? A Rental Guide for Contractors and Home Projects",
  shortTitle: "What Size Excavator Do You Need?",
  metaTitle: "What Size Excavator Do You Need? A Rental Guide",
  metaDescription:
    "Size an excavator by dig depth, reach, breakout, width, tail swing and transport, with illustrative compact, midi and standard specs from Kubota and John Deere.",
  summary:
    "Match dig depth, reach, width, tail swing and transport to your job, with illustrative compact, midi and standard examples and the trench safety rules that apply.",
  intro: [
    "Excavator size comes down to four questions: how deep you need to dig, how much room the machine has to work and swing, what the ground and surfaces can take, and how the machine gets to the site. Answer those and the bucket and power follow.",
    "This guide works through each one with published manufacturer specs, illustrative compact, midi and standard classes, and the safety rules that apply once a trench gets deep.",
  ],
  heroImage: {
    src: "/images/resources/what-size-excavator-do-i-need.webp",
    alt: "Three excavators, from mini to full-size, lined up on a graded dirt site with homes in the distance",
  },
  datePublished: "2026-10-02",
  dateModified: "2026-10-02",
  keyTakeaways: [
    "Start with your deepest cut, and choose a machine whose published maximum dig depth clears it with room to spare.",
    "Measure access: the narrowest gate or gap, overhead lines, and the space the upper structure needs to swing.",
    "Compact machines suit residential lots, utilities and landscaping; midi machines step up for bigger trenches and site work; standard excavators handle mass excavation, deep utilities and truck loading.",
    "Under OSHA rules, trenches 5 feet deep or more need a protective system, whatever size machine digs them.",
  ],
  sections: [
    {
      id: "classes",
      heading: "Excavator Size Classes",
      blocks: [
        { type: "p", text: "There's no single industry definition of excavator classes, and manufacturers group their lines differently. A John Deere article gives its compact excavator line as 3,790 to 13,620 lb, and Deere lists its next group, starting with the 75 P-Tier, as mid-size excavators. The classes below are a practical shorthand; their weight ranges come from this guide's example machines and are illustrative, not standard categories." },
        {
          type: "list",
          items: [
            "Compact or mini (about 3,900 to 13,600 lb here): residential work, utilities, landscaping, footings and drainage, often with zero or reduced tail swing.",
            "Midi (about 18,500 to 20,300 lb here): larger utility trenches, small pads and site work where a compact machine is undersized.",
            "Standard (about 31,500 to 81,000 lb here): mass excavation, deep sewer and storm drain, detention ponds and truck loading.",
          ],
        },
        {
          type: "table",
          caption: "Illustrative excavator specs by class",
          columns: ["Model", "Class", "Operating weight", "Max dig depth", "Bucket breakout", "Width", "Tail swing radius"],
          rows: [
            ["Kubota U17-5", "Compact", "3,902 lb", "7 ft 6.2 in", "3,547 lbf", "3 ft 3.4 in to 4 ft 3.2 in", "Zero tail swing"],
            ["John Deere 35 P-Tier", "Compact", "8,135 lb", "10 ft 0 in", "6,085 lbf", "5 ft 9 in", "2 ft 10 in (zero tail swing)"],
            ["John Deere 60 P-Tier", "Compact", "13,620 lb", "12 ft 4 in", "9,240 lbf", "6 ft 7 in", "4 ft 3 in"],
            ["John Deere 75 P-Tier", "Midi", "18,559–19,326 lb", "15 ft 3 in", "13,264 lbf", "8 ft 1 in", "4 ft 7 in"],
            ["John Deere 85 P-Tier", "Midi", "19,238–20,296 lb", "14 ft 10 in", "13,264 lbf", "8 ft 1 in", "5 ft 3 in"],
            ["John Deere 135 P-Tier", "Standard (reduced tail swing)", "31,526–33,951 lb", "19 ft 8 in", "23,380 lbf", "8 ft 6 in", "4 ft 11 in"],
            ["John Deere 210 P-Tier", "Standard", "49,380–51,370 lb", "21 ft 10 in", "36,644 lbf", "10 ft 5 in", "9 ft 5 in"],
            ["John Deere 350 P-Tier", "Standard", "80,985 lb", "24 ft 3 in (up to 26 ft 10 in by configuration)", "55,303 lbf", "11 ft 1 in", "11 ft 10 in"],
          ],
          note: "Figures as published by each manufacturer. Deere dig depths are for the mono boom, and Deere widths are over the undercarriage. Weight ranges reflect listed configurations; arms, counterweights, tracks and cabs change the numbers.",
        },
      ],
      sources: [sources.deereCompactLine, sources.kubotaU175Launch, sources.kubotaU175Brochure, sources.deere35p, sources.deere60p, sources.deere75p, sources.deere85p, sources.deere135p, sources.deere210p, sources.deere350p],
    },
    {
      id: "depth",
      heading: "Start With Dig Depth and Reach",
      blocks: [
        { type: "p", text: "Maximum dig depth is the deepest point the bucket can reach with the machine on level ground, and it's the first number to check. Work out the deepest point of the job, including pipe bedding or the bottom of a footing, and pick a machine whose published depth clears it with room to spare." },
        { type: "p", text: "A flat-bottomed trench is shallower than that maximum point: Deere lists the 210 P-Tier at 21 ft 10 in of maximum depth but 21 ft 2 in for an 8 ft flat bottom. Also check dump height against the truck bed or spoil pile; Deere's 35 P-Tier, for example, dumps at 10 ft 10 in." },
        { type: "p", text: "In the table, compact machines dig to about 7.5 to 12 feet, the midi to about 15 feet and the standard machines to about 20 feet or more. For long, shallow runs of irrigation, conduit or small water line, a [trencher](/equipment/trencher-rental) may be the better tool, cutting a consistent narrow trench with less spoil to handle." },
      ],
      sources: [sources.deere210p, sources.deere35p],
    },
    {
      id: "breakout",
      heading: "Breakout Force and Buckets",
      blocks: [
        { type: "p", text: "Bucket breakout force is the digging force the bucket can exert at its cutting edge. In the table it climbs from about 3,500 lbf on the smallest compact machine to about 55,000 lbf on the largest standard one." },
        { type: "p", text: "Breakout matters most in hard digging: compacted fill, dense dry clay, old foundations and roots. If the ground is tough, consider stepping up a size or adding a ripper tooth or breaker attachment. Bucket width should follow the trench, with narrow trenching buckets for utility lines and wider buckets for general digging and loading. Ask which buckets come with the machine and whether a quick coupler or hydraulic thumb is available." },
      ],
      sources: [sources.kubotaU175Launch, sources.deere350p],
    },
    {
      id: "access",
      heading: "Width, Tail Swing and Working Space",
      blocks: [
        { type: "p", text: "Compare the machine's width with the narrowest point on the route to the work. Kubota's U17-5 retracts to about 3 ft 3 in for narrow passages and widens to about 4 ft 3 in for stability, while Deere's 35 P-Tier is 5 ft 9 in wide and its 210 P-Tier measures 10 ft 5 in over the undercarriage. Look up as well: power lines, tree limbs and eaves all limit where a boom can work." },
        { type: "p", text: "Tail swing is how far the back of the upper structure sweeps past the tracks as the machine rotates. Zero-tail-swing designs like the Kubota U17-5 and Deere 35 P-Tier keep it within the track width, which Deere says helps in tight urban and residential spaces. Conventional machines need clear space behind them: the Deere 210 P-Tier's tail swing radius is 9 ft 5 in, against 4 ft 11 in for the reduced-tail-swing 135 P-Tier." },
        { type: "p", text: "On tight lots, plan where the machine will dig, swing and dump without striking a wall, fence or neighboring property, and keep spoil at least 2 feet back from the trench edge, as OSHA requires." },
      ],
      sources: [sources.kubotaU175Launch, sources.deere35p, sources.deereCompactLine, sources.deere210p, sources.deere135p, sources.osha651],
    },
    {
      id: "ground",
      heading: "Weight, Ground and Surfaces",
      blocks: [
        { type: "p", text: "Operating weight shapes how a machine handles soft ground, turf and slabs; the Deere 35 P-Tier, for example, is listed at 4.8 psi of ground pressure on rubber tracks with a cab. Rubber tracks are easier on finished surfaces than steel, but use mats or plywood over concrete, pavers and lawn." },
        { type: "p", text: "North Texas clay needs extra planning. USDA describes the Houston Black clay of the Blackland Prairie, which runs from north of Dallas to San Antonio, as having very high shrink-swell potential and being very sticky and very plastic when wet. The National Weather Service notes spring and fall are the wettest seasons in Dallas–Fort Worth. Check your parcel in the USDA Web Soil Survey and your geotechnical report, and build weather days into the schedule." },
      ],
      sources: [sources.deere35pSpecSheet, shared.usdaHoustonBlack, shared.usdaOsd, shared.nwsDfw],
    },
    {
      id: "transport",
      heading: "Getting the Machine to the Site",
      blocks: [
        { type: "p", text: "Delivery is part of sizing. The lightest compact excavators weigh under 4,000 lb (the Kubota U17-5 is 3,902 lb), but the truck, trailer, hitch and tie-downs all have to be rated for the machine plus attachments. Larger excavators travel on a truck and lowboy trailer, and the widest are oversize loads: Texas limits most vehicles and loads to 8 ft 6 in wide, so a machine like the Deere 210 P-Tier, at 10 ft 5 in, needs a TxDMV oversize permit to travel on public roads." },
        { type: "p", text: "Ask the provider where the truck will unload and how much room the machine needs to walk off the trailer; narrow streets and overhead lines can limit both." },
      ],
      sources: [sources.kubotaU175Launch, sources.txdmvSize, sources.deere210p],
    },
    {
      id: "safety",
      heading: "Trench Safety at Every Size",
      blocks: [
        {
          type: "list",
          items: [
            "Locate utilities first. Texas law requires notice to the one-call system at least 48 hours before excavating, not counting weekends and legal holidays; call 811 or submit a ticket online. OSHA requires the estimated location of underground installations to be determined before an excavation is opened, and the exact location to be found by safe means as digging approaches it.",
            "Plan protection by depth. OSHA requires a protective system, such as sloping, benching, shoring or a trench box, for excavations 5 feet or deeper unless they're entirely in stable rock, and for shallower ones unless a competent person finds no sign of a potential cave-in. Trenches 20 feet or deeper need a protective system designed by, or based on tabulated data approved by, a registered professional engineer.",
            "Provide a way out. Trenches 4 feet or deeper need a ladder, stairway or ramp within 25 feet of lateral travel.",
            "Keep loads and spoil back. Spoil and equipment must stay at least 2 feet from the edge, no one may stand under loads handled by digging equipment, and a competent person must inspect the excavation daily and after every rainstorm.",
            "Lift by the chart. If you'll lift pipe or other loads with the excavator, use the machine's lift capacity chart. Kubota notes its U17-5 lift ratings follow ISO 10567, don't exceed 75% of static tipping load or 87% of hydraulic lifting capacity, and don't include the bucket or rigging.",
          ],
        },
        { type: "p", text: "This summary doesn't replace the regulations or your site's safety plan." },
      ],
      sources: [shared.utilitiesCode251, shared.texas811, sources.osha651, sources.osha652, shared.oshaTrenching, sources.kubotaU175Brochure],
    },
    {
      id: "jobs",
      heading: "Matching Size to Common Jobs",
      blocks: [
        {
          type: "table",
          caption: "Starting points by job type",
          columns: ["Job", "Class to start with", "What to check"],
          rows: [
            ["Irrigation, drainage and landscaping on a residential lot", "Compact", "Narrowest access, turf protection, trencher for long shallow runs"],
            ["Footings and small foundations", "Compact", "Footing depth and width, and space to set spoil"],
            ["Water and sewer service connections", "Compact or midi", "Depth to the main, right-of-way permits and locates"],
            ["Subdivision utilities and storm drain", "Midi or standard", "Depth, trench box size and truck loading"],
            ["Mass grading, detention ponds and building pads", "Standard", "Truck loading height, ground conditions and haul routes"],
          ],
        },
        { type: "p", text: "Treat these as starting points; depth, access and soil decide the final size. Plan backfill and [compaction equipment](/equipment/compactor-rental) along with the excavator." },
      ],
    },
    {
      id: "dfw",
      heading: "Sizing for DFW Sites",
      blocks: [
        { type: "p", text: "Site type shapes size across the Metroplex. [Frisco's](/locations/texas/frisco) comprehensive plan says roughly 13% of the city is still undeveloped, so much of the work there is grading, utilities and building pads suited to midi and standard excavators. In [Plano](/locations/texas/plano), with only about 6% of land left to develop, redevelopment on established lots tends to call for compact, zero-tail-swing machines. [McKinney](/locations/texas/mckinney) has both: infill around its historic downtown and new construction toward its edges." },
        { type: "p", text: "Check local rules before any size digs in a public right-of-way. McKinney's right-of-way manual requires a trench safety plan for excavations deeper than 5 feet. [Arlington](/locations/texas/arlington) takes its own City locate requests at least two working days ahead, and [Irving's](/locations/texas/irving) right-of-way rules make it City policy not to cut streets or sidewalks. Each city page has the details and sources." },
      ],
      sources: [shared.friscoPlan, shared.planoTomorrow, shared.mckinneyTownCenter, shared.mckinneyRow, shared.arlingtonRow, shared.irvingRow],
    },
  ],
  faqs: [
    { question: "What size excavator do I need for a residential water or sewer line?", answer: "Start with the depth to the main or tap and the access to the work. The compact machines in this guide dig to about 7.5 to 12 feet; if the line is deeper or the ground is hard, step up a size. Any trench 5 feet or deeper needs a protective system under OSHA rules, so plan the trench box or sloping along with the machine." },
    { question: "What's the difference between a mini excavator and a midi excavator?", answer: "There's no formal definition. Midi usually means the step between compact and full-size machines; in this guide's examples, compact machines run up to about 13,600 lb and midi machines about 18,500 to 20,300 lb. Manufacturers group their lines differently, so compare dig depth, width and weight rather than the label." },
    { question: "Can I haul a rented excavator myself?", answer: "Only if the truck, trailer, hitch and tie-downs are rated for the machine's weight plus attachments, and the load is legal. Texas limits most loads to 8 feet 6 inches wide without a permit. Otherwise, ask the provider to deliver." },
  ],
  relatedEquipment: [
    { slug: "excavator-rental", reason: "Midi and standard machines for deep utilities, site work and truck loading." },
    { slug: "mini-excavator-rental", reason: "Compact machines for residential lots, footings and utility connections." },
    { slug: "trencher-rental", reason: "A narrower option for long, shallow utility and irrigation runs." },
  ],
  relatedGuides: ["skid-steer-vs-mini-excavator", "site-preparation-equipment"],
};

export const boomLiftGuide: Guide = {
  slug: "how-to-choose-a-boom-lift",
  title: "How to Choose the Right Boom Lift",
  shortTitle: "How to Choose a Boom Lift",
  metaTitle: "How to Choose the Right Boom Lift",
  metaDescription:
    "Compare articulating and telescopic boom lifts and scissor lifts with manufacturer specs: working height, reach, capacity, ground pressure, power lines and OSHA rules.",
  summary:
    "Articulating vs telescopic booms, when a scissor lift fits better, and how to read working height, reach, capacity and ground specs before you rent.",
  intro: [
    "A boom lift puts workers and their tools on a platform at the end of an arm that can reach up, out and sometimes over obstacles. The two main types, articulating and telescopic, solve different problems, and for a lot of work directly overhead a scissor lift does the job with a simpler machine.",
    "This guide compares them using published manufacturer specifications, separates what each type is best for, and covers the ground, power-line and OSHA rules that decide whether a lift can be set up safely where you need it.",
  ],
  heroImage: {
    src: "/images/resources/how-to-choose-a-boom-lift.webp",
    alt: "Telescopic boom lift and scissor lift with workers at the wall of a steel-frame building on a gravel lot",
  },
  datePublished: "2026-10-08",
  dateModified: "2026-10-08",
  keyTakeaways: [
    "Start with the working height and horizontal distance to the actual work point, not the building height. Genie's US spec sheets define working height as platform height plus 6 feet.",
    "Choose an articulating boom to reach up and over obstacles in tight spaces, a telescopic boom for the most height and straight-line outreach, and a scissor lift when the work is directly overhead on firm, level ground.",
    "Add up people, tools and materials against platform capacity. Many booms carry more in a restricted zone close to the machine than across their full range.",
    "Check weight, width, tailswing and ground pressure against the route and the surface, and keep every part of the lift at least 6 feet from high voltage overhead lines unless the line's operator has made safety arrangements.",
  ],
  sections: [
    {
      id: "types",
      heading: "Three Types of Lift",
      blocks: [
        { type: "p", text: "An articulating boom, sometimes called a knuckle boom, has an arm that bends at one or more joints. That lets the platform rise, reach out and come back down over an obstacle such as a canopy, a parapet or a run of rooftop equipment. Genie lists this as up-and-over clearance; on its Z-45 XC it's 24 ft 5 in." },
        { type: "p", text: "A telescopic boom, or straight boom, extends in a straight line. It trades some of that flexibility for more height and much more horizontal outreach from one setup: Genie's S-85 XC reaches 74 ft 6 in out at its maximum, and it can also reach 8 ft 8 in below the level the machine sits on." },
        { type: "p", text: "A scissor lift raises a wide platform straight up on crossed supports. It has little or no outreach, but its deck holds a worker alongside materials, and it's often the simplest machine for ceiling and wall work above a level floor. OSHA classifies scissor lifts differently from booms, as the safety section explains." },
      ],
      sources: [sources.genieZ45xc, sources.genieS85xc, shared.oshaScissorLifts],
    },
    {
      id: "best-for",
      heading: "What Each Type Is Best For",
      blocks: [
        {
          type: "columns",
          columns: [
            {
              title: "Articulating boom",
              items: [
                "Reaching up and over canopies, parapets, piping and other obstacles",
                "Working around building features in tight areas",
                "Zero-tailswing models beside walls, traffic or other trades",
                "Narrow electric models for indoor work and finished floors",
                "Facades, lighting, signs and roof edges at low to mid heights",
              ],
            },
            {
              title: "Telescopic boom",
              items: [
                "Maximum height and straight-line outreach from one setup",
                "Reaching across landscaping, trenches or setbacks to a building face",
                "Tall walls, steel and glazing on large commercial and industrial buildings",
                "Covering a long elevation with fewer moves",
                "Some models reach below grade, such as over an excavation edge",
              ],
            },
            {
              title: "Scissor lift",
              items: [
                "Ceilings, lighting, sprinklers, HVAC and drywall directly overhead",
                "Work that needs room for a worker plus materials on the deck",
                "Level slabs and finished floors, with electric slab models",
                "Long runs along a wall or ceiling, driving between tasks",
                "Rough-terrain models for outdoor work on firm, graded ground",
              ],
            },
          ],
        },
        { type: "p", text: "Aerial lifts are built to carry workers and their tools. To lift and place pallets, bundles or roofing, a [telehandler](/equipment/telehandler-rental) is the machine designed for the job. For configurations and sizes, see the [boom lift](/equipment/boom-lift-rental) and [scissor lift](/equipment/scissor-lift-rental) pages." },
      ],
    },
    {
      id: "height-reach",
      heading: "Working Height, Platform Height and Reach",
      blocks: [
        { type: "p", text: "Manufacturers publish two heights. Platform height is how high the floor of the platform goes; working height adds an allowance for a person standing on it. Genie's US spec sheets add 6 feet to platform height, so its Z-45 XC lists 45 ft 6 in of platform height and 51 ft 6 in of working height." },
        { type: "p", text: "Measure to the actual work point, then measure the horizontal distance from the closest spot the machine can safely sit. A boom's maximum height and maximum outreach aren't available at the same time, so check the manufacturer's range-of-motion chart, which shows where the platform can reach at each height, rather than the headline numbers." },
        { type: "p", text: "The specs below are illustrative, not a ranking; confirm the exact machine with your provider." },
        {
          type: "table",
          caption: "Boom lifts",
          columns: ["Model", "Type", "Platform height", "Horizontal reach", "Platform capacity", "Width", "Weight"],
          rows: [
            ["Genie Z-30/20N (electric)", "Articulating, narrow", "30 ft", "21 ft 5 in", "500 lb", "3 ft 11 in", "14,421 lb"],
            ["Genie Z-45 XC (diesel)", "Articulating", "45 ft 6 in", "24 ft 9 in", "660 lb unrestricted; 1,000 lb restricted", "7 ft 6 in", "16,360 lb"],
            ["JLG 600S", "Telescopic", "59 ft 8 in", "50 ft 2 in", "600 lb unrestricted; 1,000 lb restricted", "8 ft 2 in", "21,647 lb"],
            ["Genie S-85 XC (electric)", "Telescopic", "85 ft", "74 ft 6 in", "660 lb unrestricted; 1,000 lb restricted", "8 ft 2 in", "38,908 lb"],
          ],
          note: "Standard configurations as published; options and country standards can change weight. Genie's working heights add 6 ft to platform height.",
        },
        {
          type: "table",
          caption: "Electric slab scissor lifts",
          columns: ["Model", "Platform height, indoor", "Platform height, outdoor", "Capacity", "Width", "Weight"],
          rows: [
            ["Genie GS-1930", "19 ft 3 in", "14 ft 8 in", "500 lb", "2 ft 6.2 in", "3,209 lb"],
            ["Genie GS-3246", "32 ft 1 in", "22 ft", "700 lb", "3 ft 10 in", "5,218 lb"],
          ],
        },
        { type: "p", text: "Note the scissor rows: Genie rates these slab scissors for less height outdoors than indoors. If a scissor will work outside, check the outdoor rating, not the bigger indoor number." },
      ],
      sources: [sources.genieZ3020n, sources.genieZ45xc, sources.jlg600s, sources.genieS85xc, sources.genieGs1930, sources.genieGs3246],
    },
    {
      id: "capacity",
      heading: "Platform Capacity",
      blocks: [
        { type: "p", text: "Platform capacity is the total weight of people, tools and materials the platform is rated to carry, so add it up before you book." },
        { type: "p", text: "Many booms publish two ratings. Genie's Z-45 XC and S-85 XC carry 660 lb anywhere in their working range and up to 1,000 lb in a restricted zone closer to the machine, and JLG lists 600 lb and 1,000 lb for the 600S. If the job needs the higher rating, confirm on the range chart that the work point sits inside that zone. Narrow electric booms are rated lower; the Z-30/20N carries 500 lb." },
        { type: "p", text: "OSHA prohibits exceeding the boom and basket load limits specified by the manufacturer." },
      ],
      sources: [sources.genieZ45xc, sources.genieS85xc, sources.jlg600s, sources.genieZ3020n, shared.oshaAerialLifts],
    },
    {
      id: "ground-access",
      heading: "Weight, Ground and Access",
      blocks: [
        { type: "p", text: "In the table above, booms run from about 14,000 lb for a narrow 30-foot electric model to nearly 39,000 lb for an 85-foot telescopic, and that weight has to rest on whatever is under the tires." },
        { type: "p", text: "Manufacturers publish pressure figures to help. Genie lists the Z-45 XC at 80 psi tire contact pressure and 231 psf occupied floor pressure, and the S-85 XC at 198 psi tire contact pressure; JLG lists a maximum ground bearing pressure of 83 psi for the 600S. Compare those numbers with the slab, deck or soil you'll drive on, and get an engineer's answer before driving onto a suspended slab, a parking deck or fresh backfill." },
        { type: "p", text: "Check width and tailswing for access. The Z-30/20N is 3 ft 11 in wide with zero tailswing, so it fits openings the 7 ft 6 in Z-45 XC can't. Telescopic booms swing wider: JLG lists 4 ft of tailswing on the 600S and Genie 5 ft 9 in on the S-85 XC, so mark off the swing area from traffic and other trades." },
        { type: "p", text: "Slope matters too. Genie lists tilt sensor activation at 4.5 degrees for the Z-45 XC, and JLG a 5-degree tilt cutout for the 600S. North Texas clay, which USDA describes as very sticky and very plastic when wet, can turn a firm pad soft after rain, so plan mats or wait for the ground to dry before driving a loaded boom across it." },
      ],
      sources: [sources.genieZ45xc, sources.genieS85xc, sources.jlg600s, sources.genieZ3020n, shared.usdaHoustonBlack],
    },
    {
      id: "power-lines",
      heading: "Power Lines",
      blocks: [
        { type: "p", text: "Overhead lines are one of the most serious hazards for any lift. Texas Health and Safety Code chapter 752 covers lines carrying more than 600 volts, and unless the danger is guarded against as the chapter prescribes, it bars anyone from bringing any part of a tool, machine or equipment within 6 feet of such a line." },
        { type: "p", text: "Getting closer starts with notice. Whoever is responsible for the work must notify the line's operator at least 48 hours before it begins and can't start until both sides agree on temporary de-energizing and grounding, relocating or raising the line, or mechanical barriers. The person or business responsible for the work pays the operator's actual cost." },
      ],
      sources: [shared.texasHighVoltage],
    },
    {
      id: "safety",
      heading: "OSHA Rules and Safe Use",
      blocks: [
        {
          type: "list",
          items: [
            "Boom lifts are aerial lifts under OSHA 29 CFR 1926.453. Lift controls must be tested each day before use, and only authorized persons may operate the lift.",
            "Workers must stand firmly on the floor of the basket, and may not sit or climb on the edge or use planks, ladders or other devices to gain a working position.",
            "A lanyard must be attached to the boom or basket, and belting off to an adjacent pole, structure or equipment isn't allowed.",
            "Brakes must be set and outriggers, when used, positioned on pads or a solid surface; wheel chocks go in place before using a lift on an incline.",
            "Scissor lifts are treated differently. In a 2000 interpretation letter, OSHA said scissor lifts aren't aerial lifts but mobile scaffolds covered by its scaffold standards, and that properly maintained guardrails provide the fall protection, so tie-off isn't required by that standard.",
            "Everyone working from a scaffold, including a scissor lift, must be trained by a qualified person in its hazards, including electrical hazards, fall hazards and the platform's load capacity.",
          ],
        },
        { type: "p", text: "Weather sets limits as well. Check the operator's manual for the machine's rated wind speed and bring the platform down for storms; the National Weather Service in Fort Worth notes that thunderstorms and severe weather peak in spring. This summary doesn't replace the regulations, the manufacturer's manual or your site's safety plan." },
      ],
      sources: [shared.oshaAerialLifts, shared.oshaScissorLifts, sources.osha454, shared.nwsDfw],
    },
    {
      id: "dfw",
      heading: "Choosing a Lift for DFW Work",
      blocks: [
        { type: "p", text: "The building stock decides a lot. [Grand Prairie](/locations/texas/grand-prairie) says new warehouse, distribution and manufacturing buildings continue to go up in and around the Great Southwest Industrial District, work that calls for telescopic booms on tall walls and roof edges and scissor lifts inside." },
        { type: "p", text: "In older, built-out cities, renovation is the norm. [Richardson](/locations/texas/richardson) encourages reuse, reinvestment and activation of existing buildings in its Collins/Arapaho Innovation District, and [Garland's](/locations/texas/garland) strategic plan describes a largely built-out city reinvesting in aging commercial corridors. Both point to electric scissors and narrow booms inside occupied buildings, as do renovations of open retail and office buildings in [Arlington](/locations/texas/arlington). On [Carrollton's](/locations/texas/carrollton) transit-oriented sites, buildings sit close to the sidewalk, which favors articulating booms that can work up and over from a narrow strip." },
        { type: "p", text: "Local rules shape the schedule. Richardson limits lane closures to 9 a.m. to 3:30 p.m., and Carrollton's noise ordinance limits construction equipment within 1,000 feet of a residence to set hours. [Irving](/locations/texas/irving) borders DFW Airport and Grand Prairie has a municipal airport, and near runways federal rules can require FAA notice for tall equipment, including temporary cranes. Each city page has the details and sources." },
      ],
      sources: [shared.grandPrairieAbout, shared.richardsonEnhancementAreas, shared.garlandStrategicPlan, shared.carrolltonTransitCenter, shared.richardsonRow, shared.carrolltonNoise, shared.faaPart77],
    },
  ],
  faqs: [
    { question: "What's the difference between an articulating and a telescopic boom lift?", answer: "An articulating boom has an arm that bends at joints, so it can reach up and over obstacles and work in tight spaces. A telescopic boom extends in a straight line, giving more height and horizontal outreach from one spot. In this guide's examples, Genie's articulating Z-45 XC reaches 24 ft 9 in out, while its telescopic S-85 XC reaches 74 ft 6 in." },
    { question: "How high a boom lift do I need?", answer: "Measure to the actual work point and the horizontal distance from where the machine can sit, then check the manufacturer's range-of-motion chart. Genie's US spec sheets list working height as platform height plus 6 feet, so a lift with a 45 ft 6 in platform height reaches a 51 ft 6 in working height." },
    { question: "Do I need to tie off in a scissor lift?", answer: "Under a 2000 OSHA interpretation, scissor lifts are mobile scaffolds, not aerial lifts, and properly maintained guardrails provide the required fall protection, so that standard doesn't require tie-off. The manufacturer, your employer or the site may still require it. On a boom lift, OSHA requires a lanyard attached to the boom or basket." },
    { question: "Can I use a boom lift near power lines in Texas?", answer: "Not within 6 feet of a line over 600 volts unless the danger is guarded against under state law. That means notifying the line's operator at least 48 hours ahead and agreeing on de-energizing, relocating or raising the line, or barriers before the work starts, with the person responsible for the work paying the operator's cost." },
  ],
  relatedEquipment: [
    { slug: "boom-lift-rental", reason: "Articulating and telescopic booms for work at height with reach." },
    { slug: "scissor-lift-rental", reason: "Slab and rough-terrain scissors for work directly overhead." },
    { slug: "telehandler-rental", reason: "Lifting and placing materials, rather than people, at height." },
  ],
  relatedGuides: ["site-preparation-equipment"],
};

export const sitePrepGuide: Guide = {
  slug: "site-preparation-equipment",
  title: "Renting Equipment for Site Preparation",
  shortTitle: "Site Preparation Equipment",
  metaTitle: "Site Preparation Equipment: What to Rent and When",
  metaDescription:
    "What to rent to clear, grade, compact and trench a site, in order, with manufacturer specs for loaders and compactors and the permit steps that come first.",
  summary:
    "The machines used to clear, grade, compact and trench a site, the order they usually arrive in, and the permits and checks that come before the first scrape.",
  intro: [
    "Site preparation turns raw or cleared ground into a buildable pad. Erosion controls go in, vegetation and debris come out, soil is cut, filled and compacted to grade, and utility trenches are dug and backfilled. Each step has its own machines, and renting them in order keeps equipment from sitting idle while it waits on the step before.",
    "This guide walks through those steps, separates what each machine is best for using published manufacturer specifications, and points to local permit and compaction rules in Dallas–Fort Worth cities.",
  ],
  heroImage: {
    src: "/images/resources/site-preparation-equipment.webp",
    alt: "Compact track loader moving dirt beside a smooth-drum roller on a graded building pad",
  },
  datePublished: "2026-10-08",
  dateModified: "2026-10-08",
  keyTakeaways: [
    "Permits and erosion controls come before equipment. TCEQ's construction general permit covers sites disturbing an acre or more, and some cities, such as Grand Prairie, won't issue an earthwork permit until a stormwater plan is released.",
    "Match the loader to the volume: a compact track loader or skid steer for small pads and tight sites, a wheel loader for big stockpiles and truck loading, and an excavator for cuts, ponds and trenches.",
    "Match the compactor to the space and the soil: rammers for narrow trenches, vibratory plates for wider small areas, and single-drum rollers for pads and subgrade, with padfoot drums for cohesive clay.",
    "Call 811, check local right-of-way rules and plan the trench protective system before any trenching starts.",
  ],
  sections: [
    {
      id: "sequence",
      heading: "The Usual Order of Work",
      blocks: [
        {
          type: "list",
          items: [
            "Permits and plans: a stormwater pollution prevention plan where required, plus local grading, floodplain and right-of-way permits.",
            "Erosion controls: silt fence, construction entrances and inlet protection before soil is disturbed.",
            "Clearing: vegetation, debris, old paving and topsoil stripping.",
            "Earthwork: cutting, filling and rough grading to the plan.",
            "Underground utilities: trenching, laying pipe and conduit, and backfilling.",
            "Compaction and fine grading: building pads, paving subgrade and trench backfill brought to the specified density.",
          ],
        },
        { type: "p", text: "Real projects overlap these steps, and the plans and specs set the order. The point is to have each machine on site when its work is ready." },
        { type: "p", text: "Erosion controls come first for a reason. TCEQ's construction general permit covers sites that disturb one acre or more and discharge stormwater to surface waters, and it requires a stormwater pollution prevention plan before construction starts. [Frisco](/locations/texas/frisco) requires erosion control devices on all projects before construction begins, and [Grand Prairie](/locations/texas/grand-prairie) won't issue its Clearing, Grubbing and Earthwork Permit, which allows earth-disturbing work to begin, until a stormwater plan has been submitted and released." },
      ],
      sources: [shared.tceq, shared.friscoGeneralNotes, shared.grandPrairieEngineeringPermits],
    },
    {
      id: "best-for",
      heading: "What Each Machine Is Best For",
      blocks: [
        {
          type: "columns",
          columns: [
            {
              title: "Track loader or skid steer",
              items: [
                "Clearing brush, debris and topsoil on small and mid-size sites",
                "Spreading and leveling fill, base and topsoil",
                "Fine grading pads, walks and drives",
                "Loading spoil into trucks on small jobs",
                "Running attachments such as brush cutters, augers and trenchers",
              ],
            },
            {
              title: "Wheel loader",
              items: [
                "Moving large stockpiles across the site",
                "Loading a steady line of trucks",
                "Spreading base and select fill on large pads",
                "Carrying material across firm ground and haul roads",
              ],
            },
            {
              title: "Excavator",
              items: [
                "Mass excavation and deep cuts",
                "Detention ponds and swales",
                "Storm, water and sewer trenches",
                "Loading trucks from a cut or pile",
                "Removing stumps, old foundations and buried debris",
              ],
            },
            {
              title: "Compaction equipment",
              items: [
                "Rammers for narrow trenches and around pipes and footings",
                "Vibratory plates for base and small open areas",
                "Single-drum rollers for building pads and paving subgrade",
                "Padfoot drums for cohesive clay",
              ],
            },
          ],
        },
        { type: "p", text: "Clearing heavily wooded tracts can call for larger forestry or dozer equipment than this guide covers; ask providers what they carry for your site." },
      ],
    },
    {
      id: "earthmoving",
      heading: "Loaders: Track Loader or Wheel Loader",
      blocks: [
        { type: "p", text: "Both carry material in a bucket. A compact track loader spreads its weight on rubber tracks, which helps on soft ground, fits tight sites and runs a wide range of attachments. A wheel loader is a bigger machine on tires that carries far more per trip." },
        { type: "p", text: "These published specs for a few representative models are illustrative, not a ranking. Confirm the exact machine and bucket with your provider." },
        {
          type: "table",
          caption: "Loaders",
          columns: ["Model", "Type", "Operating weight", "Capacity", "Width", "Hinge pin height"],
          rows: [
            ["John Deere 317 P-Tier", "Compact track loader", "8,423 lb", "2,125 lb rated operating capacity", "65.1 in", "121 in"],
            ["Kubota SVL75-3", "Compact track loader", "9,190 lb (open cab)", "2,490 lb rated operating capacity at 35% of tipping load", "65.9 in (standard track)", "122.7 in"],
            ["John Deere 344 P", "Compact wheel loader", "19,533 lb", "2.0 to 2.6 cu yd bucket", "7 ft 9 in over tires", "12 ft 2 in"],
            ["John Deere 644 P", "Mid-size wheel loader", "41,246 to 41,324 lb", "4.0 to 4.75 cu yd bucket", "9 ft 5 in over tires", "13 ft 5 in"],
          ],
          note: "Track loaders are rated by operating capacity and wheel loaders by bucket volume, so the capacity column isn't a direct comparison. Kubota's weight includes a 165 lb operator.",
        },
        { type: "p", text: "Pick by volume, distance and ground. On a house pad or small commercial lot, a [track loader or skid steer](/equipment/skid-steer-rental) can strip, spread and fine grade. When the job is moving big stockpiles or loading trucks all day, a [wheel loader](/equipment/wheel-loader-rental) earns its size: the 644 P's bucket is roughly twice the 344 P's. Wheel loaders also weigh far more, which matters on soft ground and for delivery." },
        { type: "p", text: "Loaders don't dig deep. Cuts, detention ponds and truck loading from a bank are [excavator](/equipment/excavator-rental) work; our [excavator sizing guide](/resources/what-size-excavator-do-i-need) covers classes, and the [skid steer vs mini excavator guide](/resources/skid-steer-vs-mini-excavator) compares the compact pair." },
      ],
      sources: [sources.deere317p, sources.kubotaSvl753, sources.deere344p, sources.deere644p],
    },
    {
      id: "compaction",
      heading: "Compaction: Rammer, Plate or Roller",
      blocks: [
        {
          type: "table",
          caption: "Compaction equipment",
          columns: ["Model", "Type", "Operating weight", "Force or power", "Working width", "Area per hour"],
          rows: [
            ["Wacker Neuson BS60-4As 11in", "Rammer", "72 kg (about 159 lb)", "18.0 kN impact (about 4,050 lbf)", "280 mm shoe (about 11 in)", "148 m² (about 1,600 sq ft)"],
            ["Wacker Neuson WP1550A", "Vibratory plate", "198.4 lb", "3,372 lbf centrifugal", "19.7 in", "9,365 sq ft"],
            ["BOMAG BW 211 D-5 SL", "Single-drum roller, smooth drum", "10,630 kg (about 23,400 lb)", "82 kW (about 110 hp) engine", "2,130 mm (about 84 in)", "Not listed"],
          ],
          note: "Illustrative published figures; conversions are rounded. Area figures are the manufacturer's rated output, not a field production estimate.",
        },
        { type: "p", text: "Rammers deliver hard, rapid blows through a small shoe; Wacker lists 656 blows a minute for the BS60-4As. The narrow shoe fits trenches and works around pipes, structures and footings. Plates vibrate a wider base and cover far more ground per hour, and Wacker says its single-direction plates are designed to maneuver around tight corners and into confined areas. Rollers take over on building pads, streets and parking subgrade." },
        { type: "p", text: "Drum type follows the soil. BOMAG describes its smooth-drum single-drum rollers as ideal for sand, gravel, crushed rock and weakly cohesive soils, and its padfoot models as designed for highly cohesive soils, with a padfoot segment kit available for the smooth drum. Much of North Texas sits on Blackland Prairie clay that USDA describes as very sticky and very plastic when wet, with very high shrink-swell potential, so check the geotechnical report for the specified fill, lift thickness and moisture before choosing a drum." },
        { type: "p", text: "Local specs set the target. [McKinney's](/locations/texas/mckinney) right-of-way manual requires backfill in lifts no deeper than 8 inches, compacted to at least 95% of Standard Proctor density, and [Grand Prairie](/locations/texas/grand-prairie) requires mechanical tamping of utility ditch lines in the right-of-way to the same 95% density. Thin lifts and density tests favor a compactor matched to the trench width. See [compactor rentals](/equipment/compactor-rental) for the range of sizes." },
      ],
      sources: [sources.wackerBs60, sources.wackerWp1550, sources.bomagBw211, shared.usdaHoustonBlack, shared.mckinneyRow, shared.grandPrairieFranchisePermit],
    },
    {
      id: "trenching",
      heading: "Trenching for Utilities",
      blocks: [
        { type: "p", text: "For long, narrow, shallow runs such as irrigation, conduit and small water lines, a [trencher](/equipment/trencher-rental) cuts a consistent trench with less spoil to handle. Deeper lines, larger pipe and trenches that need a trench box call for a [mini excavator](/equipment/mini-excavator-rental) or a full-size excavator." },
        { type: "p", text: "OSHA requires the estimated location of underground utilities to be determined before an excavation is opened, and a protective system such as sloping, shoring or a trench box for excavations 5 feet deep or more unless they're entirely in stable rock. Spoil has to stay at least 2 feet from the edge, and trenches 4 feet or deeper need a ladder, stairway or ramp within 25 feet of lateral travel." },
        { type: "p", text: "In Texas, notice to the one-call system is due at least 48 hours before excavating, not counting weekends and holidays. Some cities add their own steps for right-of-way work: [Mesquite](/locations/texas/mesquite) requires City utility locates to be requested at least 48 hours ahead and says GIS maps and plans of record don't count as a locate, and [Garland](/locations/texas/garland) notes that storm drains aren't located and must be verified from plans and by potholing." },
      ],
      sources: [sources.osha651, sources.osha652, shared.utilitiesCode251, shared.texas811, shared.mesquiteRow, shared.garlandRowChecklist],
    },
    {
      id: "weather",
      heading: "Weather and Ground Conditions",
      blocks: [
        { type: "p", text: "Earthwork runs on moisture. The National Weather Service in Fort Worth notes that spring and fall are the wettest seasons in Dallas–Fort Worth, and that July and August highs are consistently in the 90s and often reach 100 degrees. Wet, sticky clay slows machines and can push fill outside the moisture range your spec calls for." },
        { type: "p", text: "Build weather days into the schedule, shape stockpiles to shed water, and check silt fence and construction entrances after storms. Tracked machines spread their weight better on soft ground; ask the provider about tracks and mats when the site is wet." },
      ],
      sources: [shared.nwsDfw, shared.usdaHoustonBlack],
    },
    {
      id: "jobs",
      heading: "Starting Points by Site Type",
      blocks: [
        {
          type: "table",
          caption: "Starting points by site type",
          columns: ["Site", "Clearing and grading", "Compaction", "Trenching"],
          rows: [
            ["Residential lot or small addition", "Compact track loader or skid steer", "Rammer and plate", "Mini excavator or trencher"],
            ["Small commercial pad", "Track loader plus a mini or midi excavator", "Plate and a single-drum roller", "Mini or midi excavator"],
            ["Subdivision or large commercial site", "Excavators and wheel loaders, track loaders for fine grading", "Single-drum rollers, padfoot for clay", "Excavator with a trench box"],
            ["Industrial building pad and truck court", "Excavators and wheel loaders, track loaders for fine grading", "Smooth-drum and padfoot rollers", "Excavator; trencher for conduit runs"],
          ],
          note: "Starting points only. The geotechnical report, plans and specs decide the final equipment.",
        },
      ],
    },
    {
      id: "dfw",
      heading: "Site Preparation Across DFW",
      blocks: [
        { type: "p", text: "Where the open land is shapes the work. [Mesquite's](/locations/texas/mesquite) 2019 comprehensive plan places its largest contiguous undeveloped tracts south of Cartwright Road and along the I-20 corridor, and puts about 9 percent of the city in flood hazard areas. [Frisco's](/locations/texas/frisco) plan says roughly 13% of its land is still undeveloped, and [Grand Prairie](/locations/texas/grand-prairie) says land remains in and around the Great Southwest Industrial District and to the south, where hill country–like terrain around Joe Pool Lake is drawing residential development." },
        { type: "p", text: "Permits differ by city. Grand Prairie requires a Floodplain Development Permit for development within 200 feet of a special flood hazard area or floodplain, and [McKinney](/locations/texas/mckinney) requires erosion control measures to be inspected and approved before construction begins. Each city page has the details and sources." },
      ],
      sources: [shared.mesquitePlan, shared.friscoPlan, shared.grandPrairieAbout, shared.grandPrairieEngineeringPermits, shared.mckinneyRow],
    },
  ],
  faqs: [
    { question: "What equipment do I need to prepare a small building pad?", answer: "For a residential or small commercial pad, a compact track loader or skid steer handles clearing, spreading and fine grading, a mini excavator digs footings and utility trenches, and a rammer, plate or small roller compacts fill and backfill. Larger sites add excavators, wheel loaders and single-drum rollers. The geotechnical report and plans decide the final list." },
    { question: "Should I rent a rammer or a vibratory plate?", answer: "It depends on the space and the soil. A rammer's narrow shoe fits trenches and tight spots around pipes and footings, while a plate covers far more area: Wacker rates its WP1550A at 9,365 sq ft an hour against about 1,600 sq ft for its BS60-4As rammer. For cohesive clay over larger areas, a padfoot roller is designed for the job." },
    { question: "Do I need a permit before grading a site in Texas?", answer: "Often, yes. TCEQ's construction general permit covers sites disturbing one acre or more that discharge stormwater to surface waters, and cities have their own grading, floodplain and right-of-way permits. Grand Prairie, for example, requires a released stormwater plan before it issues the permit that allows earth-disturbing work. Check with your city before booking equipment." },
    { question: "Is a wheel loader or a compact track loader better for site work?", answer: "A compact track loader suits small and tight sites, soft ground and attachment work. A wheel loader suits big stockpiles and truck loading: in this guide's examples, Deere's 344 P carries a 2.0 to 2.6 cu yd bucket and its 644 P a 4.0 to 4.75 cu yd bucket. Many large sites use both." },
  ],
  relatedEquipment: [
    { slug: "skid-steer-rental", reason: "Clearing, spreading and fine grading on small and tight sites." },
    { slug: "wheel-loader-rental", reason: "Moving stockpiles and loading trucks on large sites." },
    { slug: "excavator-rental", reason: "Cuts, detention ponds, utilities and truck loading." },
    { slug: "compactor-rental", reason: "Rammers, plates and rollers for trenches, pads and subgrade." },
    { slug: "trencher-rental", reason: "Long, narrow utility and conduit runs." },
  ],
  relatedGuides: ["what-size-excavator-do-i-need", "skid-steer-vs-mini-excavator"],
};
