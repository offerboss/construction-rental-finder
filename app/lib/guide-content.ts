import { sources as citySources } from "./city-content";
import type { SourceLink } from "./locations";
import type { Guide } from "./resources";

// Manufacturer spec pages and regulations cited by the guides. Spec figures are as published
// for the listed configuration on the date checked (2026-10-02).
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
  relatedGuides: ["skid-steer-vs-mini-excavator"],
};
