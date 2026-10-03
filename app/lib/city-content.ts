import type { City, CityGuideLink, SourceLink } from "./locations";

// Rich content for cluster city pages. Every local fact is verified against the
// linked official or primary source; see references/published-pages.md.

type CityEntry = Omit<City, "stateSlug">;

const sources = {
  texas811: { label: "Texas811: excavator notice requirements", url: "https://texas811.org/" },
  utilitiesCode251: { label: "Texas Utilities Code ch. 251, sec. 251.151", url: "https://statutes.capitol.texas.gov/Docs/UT/htm/UT.251.htm" },
  nwsDfwClimate: { label: "National Weather Service Fort Worth: Dallas/Fort Worth climate narrative", url: "https://www.weather.gov/fwd/dfw_narrative" },
  oshaAerialLifts: { label: "OSHA 29 CFR 1926.453, aerial lifts", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453" },
  oshaMaterialHandling: { label: "OSHA 29 CFR 1926.602(d), powered industrial truck operator training", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-O/section-1926.602" },
  arlingtonRowManual: { label: "City of Arlington Public Right-of-Way Permitting and Construction Manual (2026)", url: "https://www.arlingtontx.gov/files/assets/city/v/1/strategic-initiatives/documents/real-estate-services/right-of-way-permitting/arlington-row-manual-2026-update.pdf" },
  faaPart77: { label: "14 CFR 77.9, construction or alteration requiring FAA notice", url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77/subpart-B/section-77.9" },
  faaForm7460: { label: "FAA Form 7460-1, Notice of Proposed Construction or Alteration", url: "https://www.faa.gov/documentLibrary/media/Form/FAA_Form_7460-1_052026.pdf" },
  irvingPlan: { label: "City of Irving, Imagine Irving Comprehensive Plan (2024 update)", url: "https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/corecode/2024_%20Imagine%20Irving%20Comprehensive%20Plan_6_27_2024_edits_web_202406270822438228_5029.pdf" },
  irvingNoise: { label: "City of Irving Code ch. 22, Noise, sec. 22-3", url: "https://ecode360.com/45598628" },
  irvingRowCode: { label: "City of Irving Code, Right-of-Way Management", url: "https://ecode360.com/45701351" },
  irvingRowPermit: { label: "City of Irving Franchise Utility Construction Permit Application (ROW)", url: "https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/corecode/FranchiseUtilityPermitApplication_10620.pdf" },
  planoTomorrowFaq: { label: "City of Plano, Plano Tomorrow comprehensive plan FAQ", url: "https://www.planotomorrow.org/235/Frequently-Asked-Questions" },
  planoTcp: { label: "City of Plano Traffic Control Plan Procedures and General Notes", url: "https://content.civicplus.com/api/assets/c54619d8-5548-4254-8ed1-7944575def53" },
  planoRow: { label: "City of Plano ROW Guidelines and Requirements for Right-of-Way Permits", url: "https://content.civicplus.com/api/assets/81530df0-a2a4-4b02-9139-cfdede821898" },
  planoNoise: { label: "City of Plano Code ch. 14, art. V, Noise (ordinance passed Aug. 11, 2025)", url: "https://plano.novusagenda.com/Agendapublic/AttachmentViewer.ashx?AttachmentID=20487&ItemID=10194" },
  usdaHoustonBlack: { label: "USDA NRCS: Houston Black, the Texas state soil", url: "https://www.twdb.texas.gov/conservation/education/doc/tx_State_soil.pdf" },
  usdaOsd: { label: "USDA NRCS Official Series Description: Houston Black", url: "https://soilseries.sc.egov.usda.gov/OSD_Docs/H/HOUSTON_BLACK.html" },
} satisfies Record<string, SourceLink>;

// Both guides are planned for the Resource Run. They render only once published.
const compactGuide: CityGuideLink = {
  slug: "skid-steer-vs-mini-excavator",
  reason: "Compare the two most common compact machines before you book.",
};
const excavatorSizeGuide: CityGuideLink = {
  slug: "what-size-excavator-do-i-need",
  reason: "Match dig depth, reach and machine size to your site.",
};

export const arlington: CityEntry = {
  name: "Arlington",
  slug: "arlington",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Arlington sits in Tarrant County between Dallas and Fort Worth, home to UT Arlington and a busy entertainment district.",
  metaDescription:
    "Construction equipment rentals in Arlington, TX: boom lifts, telehandlers, scissor lifts and generators for commercial and infill work, plus local site rules.",
  localIntro: [
    "Arlington sits in Tarrant County between Dallas and Fort Worth, and a lot of its construction is commercial work, tenant finish-outs and infill on sites that already have neighbors, traffic and finished surfaces around them. That puts lifts, telehandlers and jobsite power near the top of most rental lists here.",
    "Use this page to match equipment to Arlington work, then confirm availability, delivery and terms directly with providers that serve your site.",
  ],
  useCaseContext: [
    "Much of the work happens around buildings that are already open: retail centers, offices, campus buildings and the venues of the Entertainment District, which the City generally describes as the area bounded by Lamar Boulevard, Cooper Street, Abram Street and State Highway 360. Facade, canopy, roofline and interior work at height calls for boom lifts and scissor lifts, and telehandlers place materials on upper floors and roofs when there's no crane on site.",
    "Infill sites bring their own limits. Staging space is often a strip of parking lot, deliveries compete with customers and event traffic, and the street out front may be a city thoroughfare where lanes can't be closed at rush hour. A machine that fits the gate, rides on non-marking tires and arrives at the right time matters as much as its lift height.",
    "Weather shapes the schedule too. The National Weather Service office in Fort Worth notes that Metroplex daytime highs in July and August are consistently in the 90s and often reach 100 degrees, and that thunderstorms and severe weather peak in spring. Generators and lighting let crews shift work into cooler hours, and lift work needs a plan for wind and storms.",
  ],
  featuredEquipment: [
    { slug: "boom-lift-rental", reason: "Facade, canopy and roofline work on occupied commercial buildings, where the platform has to reach up and over landscaping, entries or a lower roof. Articulating booms suit tight setups; telescopic booms give more straight-line reach." },
    { slug: "scissor-lift-rental", reason: "Interior finish-outs, ceilings and exterior walls with level ground in front of them. Electric slab scissors with non-marking tires suit finished floors in retail and office space." },
    { slug: "telehandler-rental", reason: "Lifting pallets of block, roofing and framing materials to upper floors or roofs. Check the load chart at the reach you actually need, not just the maximum lift height." },
    { slug: "generator-rental", reason: "Power before permanent service is live, for tools on far corners of a lot, and for lights when hot-weather schedules push work into early mornings or evenings." },
    { slug: "skid-steer-rental", reason: "Clearing, grading pads, moving spoil and carrying pallets on forks on infill lots where a larger loader won't fit between curbs and buildings." },
    { slug: "mini-excavator-rental", reason: "Utility tie-ins, footings and short trench runs on developed sites, where City lines, irrigation and private service lines all have to be located before anyone digs." },
  ],
  siteConsiderations: [
    {
      title: "Two locate requests, not one",
      text: "Texas law requires excavators to notify a one-call center at least 48 hours before digging, not counting weekends and holidays. For right-of-way work, Arlington's manual also requires a separate City locate request, made through the Ask Arlington app or the City website at least two working days ahead, for City water and sewer lines, streetlights, signals, communication lines and median irrigation.",
      sources: [sources.utilitiesCode251, sources.arlingtonRowManual],
    },
    {
      title: "Private lines aren't marked",
      text: "The same manual notes that private water and sanitary sewer services and stormwater pipes aren't identified through Texas 811 or the City locate process. On redevelopment sites, allow time to find them with plans, potholing or vacuum excavation before a mini excavator or trencher goes in.",
      sources: [sources.arlingtonRowManual],
    },
    {
      title: "Right-of-way hours and rush-hour limits",
      text: "Work in Arlington's public right-of-way runs Monday through Friday, 7 a.m. to 5 p.m., unless the City approves other hours in writing. On streets in the Thoroughfare Development Plan, work can't interfere with traffic from 7 to 9 a.m. or 4 to 6 p.m. on weekdays, so plan any delivery that needs a lane around those windows.",
      sources: [sources.arlingtonRowManual],
    },
    {
      title: "Event days in the Entertainment District",
      text: "For right-of-way work in the Entertainment District, the City requires work to stop at least four hours before a special event at venues such as AT&T Stadium and Globe Life Field, and bars subsurface work on the working day before one. Open excavations must be backfilled the day before an event, and equipment can't be left on site overnight without approval.",
      sources: [sources.arlingtonRowManual],
    },
    {
      title: "Plan for heat and spring storms",
      text: "Summer highs in the Metroplex are consistently in the 90s and often reach 100 degrees, and severe weather peaks in spring, according to the National Weather Service in Fort Worth. Ask providers about cab air conditioning, check the lift's rated wind limits in the operator's manual, and keep a weather call in the daily plan.",
      sources: [sources.nwsDfwClimate],
    },
    {
      title: "Boom lift rules on site",
      text: "OSHA requires boom lift controls to be tested each day before use and allows only authorized persons to operate the lift. Workers in the basket must wear a body belt or harness with a lanyard attached to the boom or basket, never tied off to a nearby pole or structure.",
      sources: [sources.oshaAerialLifts],
    },
  ],
  faqs: [
    { question: "Do I need a City locate as well as Texas 811 in Arlington?", answer: "For work in the public right-of-way, yes. Arlington's right-of-way manual requires a Texas 811 request plus a separate City locate for City water, sewer, streetlight, signal, communication and irrigation lines, made through the Ask Arlington app or the City website at least two working days ahead. Private service lines aren't marked by either process." },
    { question: "Can I work in the Entertainment District on event days?", answer: "Right-of-way work there has to stop at least four hours before a special event, and subsurface work isn't allowed on the working day before one. Check the event schedules for AT&T Stadium, Globe Life Field and the other venues before you book deliveries and pickups." },
    { question: "What lift should I rent for storefront and facade work?", answer: "If the lift can sit on level pavement directly below the work, a scissor lift is often simplest. If you need to reach over landscaping, a canopy or a lower roof, an articulating boom lift is the usual choice. Give the provider your working height, the outreach you need and the surface the lift will sit on." },
    { question: "When should I schedule equipment deliveries in Arlington?", answer: "If a delivery needs a lane on a city thoroughfare, avoid the weekday 7 to 9 a.m. and 4 to 6 p.m. windows when right-of-way work can't interfere with traffic, and avoid event days near the Entertainment District. Confirm the delivery window and the unloading spot with the provider." },
  ],
  nearbyCities: ["irving", "dallas", "fort-worth"],
  heroImage: {
    src: "/images/locations/arlington-tx-construction-equipment-rental.webp",
    alt: "Telehandler placing a pallet beside a steel-frame commercial building on a clay pad in Arlington, Texas",
  },
  guides: [excavatorSizeGuide, compactGuide],
};

export const irving: CityEntry = {
  name: "Irving",
  slug: "irving",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Irving sits at the center of the Dallas–Fort Worth Metroplex, bordering DFW Airport and home to the Las Colinas Urban Center.",
  metaDescription:
    "Construction equipment rentals in Irving, TX: forklifts, telehandlers and scissor lifts for Las Colinas offices and warehouse work near DFW Airport.",
  localIntro: [
    "Irving sits at the center of the Dallas–Fort Worth Metroplex. The City's comprehensive plan notes that it borders DFW Airport and neighboring cities, with little or no room left to expand its boundaries, so much of the work here happens inside and around existing offices in the Las Colinas Urban Center and warehouse and light industrial buildings along major corridors.",
    "That mix makes material handling and work-at-height equipment the core of many Irving rentals. Use this page to match equipment to the job, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The Imagine Irving comprehensive plan includes a Manufacturing/Warehouse land use category for light manufacturing, warehousing and storage inside buildings, and envisions office, light industrial and logistics uses along major thoroughfares and State Highway 161. Racking installs, dock work, interior fit-outs and tenant turnovers in these buildings lean on forklifts, scissor lifts and telehandlers more than on earthmoving equipment.",
    "In Las Colinas and other office areas, the work tends to be finish-outs, facade and window work, and site improvements around occupied buildings and parking areas. Slab scissor lifts with non-marking tires, compact booms and careful delivery timing matter here, because deliveries often share drives and loading areas with tenants.",
    "Two features of Irving's geography also show up on jobsites. DFW Airport borders the city, so tall temporary equipment can trigger federal airspace notice. And the comprehensive plan notes that Irving's channels drain to the Elm Fork of the Trinity River, with flood control districts maintaining levees along Grapevine Creek, the Elm Fork, Bear Creek and Hackberry Creek, so ask early if your site sits near a levee or floodplain.",
    "Weather matters on open yards and building exteriors. The National Weather Service office in Fort Worth notes that thunderstorms and severe weather peak in spring, and that large hail, damaging winds and flooding occur in the region nearly every year. Check each lift's rated wind limit, plan where machines will be parked overnight, and expect gravel and dirt yards to soften after heavy rain.",
  ],
  featuredEquipment: [
    { slug: "forklift-rental", reason: "Unloading trailers, staging racking and moving palletized materials inside warehouse and light industrial buildings. Tell the provider if you need a warehouse forklift for a slab floor or a rough-terrain model for a gravel or dirt yard." },
    { slug: "scissor-lift-rental", reason: "Racking installs, ceiling and sprinkler work, lighting and interior finish-outs. Electric slab scissors fit through doors and aisles without marking floors; rough-terrain scissors suit exterior walls and unpaved areas." },
    { slug: "telehandler-rental", reason: "Placing materials on roofs and upper floors, setting loads over obstacles and handling pallets on uneven yard surfaces where a standard forklift can't travel." },
    { slug: "boom-lift-rental", reason: "Facade, glazing and exterior maintenance on office buildings, and high exterior walls on warehouses. Check working height, outreach and whether the boom can reach from the drive or lot you have." },
    { slug: "skid-steer-rental", reason: "Yard cleanup, grading around new docks and drives, and moving material with buckets, forks or a broom where space is tight between buildings and parked trailers." },
    { slug: "compactor-rental", reason: "Compacting subgrade and base under new paving, dock aprons and utility trenches. Plate compactors cover small patches; rollers make sense for larger yard and parking areas." },
  ],
  siteConsiderations: [
    {
      title: "Tall equipment near DFW Airport",
      text: "Federal rules require FAA notice for construction more than 200 feet above ground, or construction that exceeds an imaginary surface sloping 100 to 1 out to 20,000 feet from the nearest runway at airports like DFW. The FAA's notice form covers temporary structures such as cranes and must be filed at least 45 days before work starts.",
      sources: [sources.faaPart77, sources.faaForm7460],
    },
    {
      title: "Airport property has its own authority",
      text: "Irving's comprehensive plan notes that DFW International Airport exercises its own land use regulations and authority. For work on airport property, confirm requirements with the airport rather than assuming City rules cover it.",
      sources: [sources.irvingPlan],
    },
    {
      title: "Construction hours near homes",
      text: "Irving's noise ordinance limits building construction, demolition, alteration and repair in or next to a residential district, and street excavation there, to 6 a.m. to 9 p.m. on weekdays and 7 a.m. to 8 p.m. on weekends, unless it's an emergency or the City issues an after-hours permit.",
      sources: [sources.irvingNoise],
    },
    {
      title: "Delivery windows next to neighborhoods",
      text: "The same ordinance restricts noise from loading or unloading materials and equipment at a business next to a residential area from 9 p.m. to 7 a.m. on weekdays and 9 p.m. to 9 a.m. on weekends. Schedule drop-offs and pickups at warehouses near homes inside those limits.",
      sources: [sources.irvingNoise],
    },
    {
      title: "Right-of-way and street cuts",
      text: "Construction in Irving's right-of-way requires a permit, and City code states that it's the City's policy not to cut streets or sidewalks; a cut needs prior approval. The City's permit application also asks contractors to contact the Traffic Department 48 hours before working within 500 feet of a signalized intersection.",
      sources: [sources.irvingRowCode, sources.irvingRowPermit],
    },
    {
      title: "Forklift operator training",
      text: "OSHA's construction standard applies the same powered industrial truck operator training rules as general industry, so forklift operators need training and an evaluation before they run the truck. Ask the provider to send the operator's manual and capacity information with the machine.",
      sources: [sources.oshaMaterialHandling],
    },
  ],
  faqs: [
    { question: "Do I need FAA approval to use a boom lift or crane near DFW Airport?", answer: "It depends on height and distance. FAA rules require notice for construction more than 200 feet above ground, or construction that penetrates a 100:1 surface extending 20,000 feet from the nearest runway at airports like DFW, and temporary structures such as cranes count. The FAA's online notice criteria tool shows if you need to file; if you do, file at least 45 days before work starts." },
    { question: "Which forklift do I need for an Irving warehouse job?", answer: "Indoors on a finished slab, a standard warehouse forklift is usually right. For gravel yards, unpaved lots or uneven ground, ask about a rough-terrain forklift or a telehandler. Share load weights, lift heights, aisle widths and door clearances with the provider." },
    { question: "Do I need to call 811 for yard and dock work in Irving?", answer: "Yes, if you'll dig, trench or set anything below grade. Texas law requires notice to a one-call center no later than 48 hours before excavation, not counting weekends and holidays, and no earlier than 14 days before. Texas811 takes requests by phone at 811 or online." },
    { question: "Can I get a lift into a finished office or retail space?", answer: "Usually, with the right machine. Ask for an electric slab scissor or compact boom with non-marking tires, check door widths, ramp or elevator limits and floor load ratings, and plan delivery around tenant hours." },
  ],
  nearbyCities: ["arlington", "dallas", "fort-worth"],
  heroImage: {
    src: "/images/locations/irving-tx-construction-equipment-rental.webp",
    alt: "Telehandler and forklift moving pallets in the gravel yard of a new tilt-wall warehouse in Irving, Texas",
  },
  guides: [compactGuide, excavatorSizeGuide],
};

export const plano: CityEntry = {
  name: "Plano",
  slug: "plano",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Plano is a mature suburb north of Dallas with only about 6% of its land still available for development, so most work is redevelopment.",
  metaDescription:
    "Construction equipment rentals in Plano, TX: mini excavators, compact track loaders and compactors for redevelopment on tight lots, plus local site rules.",
  localIntro: [
    "Plano is a mature suburb north of Dallas, and the City's comprehensive plan says only about 6% of its land is still available for development. Much of the construction here is redevelopment and reinvestment: rebuilding on existing lots, refreshing older commercial sites and adding to established neighborhoods.",
    "Those jobs usually come with tight access, finished surfaces and neighbors on every side, so compact equipment does most of the work. Use this page to match machines to Plano projects, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Plano Tomorrow, the City's comprehensive plan, aims to conserve established neighborhoods while encouraging reinvestment in underperforming commercial sites and redevelopment along regional transportation corridors. In practice that means teardowns and rebuilds, utility upgrades, new flatwork and additions on lots already hemmed in by streets, alleys, fences and mature trees.",
    "On those sites, a mini excavator, a compact track loader or skid steer, and a plate compactor or small roller can handle the digging, grading and backfill that a larger fleet would do on open ground. If the lot is reached from an alley, measure the alley width, gate openings and any overhead lines before you pick a machine.",
    "The ground matters too. USDA describes the Blackland Prairie as extending from north of Dallas south to San Antonio. Its signature soil, Houston Black clay, shrinks and cracks when dry, swells when wet and takes in water very slowly once it's moist, and USDA notes that its shrink-swell potential commonly limits building sites in metro areas. Look up your parcel in the USDA Web Soil Survey and plan for ground that turns sticky after rain.",
    "Timing helps on clay. The National Weather Service office in Fort Worth notes that spring and fall are the wettest seasons in the Metroplex, which is when small sites are most likely to turn to mud. Schedule grading and compaction around the forecast, and ask providers whether rubber-tracked machines and ground protection mats are available for the lawns, drives and alleys you need to cross.",
  ],
  featuredEquipment: [
    { slug: "mini-excavator-rental", reason: "Teardowns, footings, utility tie-ins and pool or drainage work on lots where a full-size excavator won't fit between the house, fence and trees. Rubber tracks are easier on drives and curbs." },
    { slug: "skid-steer-rental", reason: "Grading, spreading base and moving material on small lots. A compact track loader spreads its weight better than a wheeled skid steer on soft or wet clay." },
    { slug: "compactor-rental", reason: "Compacting backfill around foundations and utilities and base under new flatwork. Plate compactors and rammers suit trenches and tight corners; small rollers cover drives and pads." },
    { slug: "trencher-rental", reason: "Irrigation, electrical and drain lines across a yard, where a walk-behind trencher cuts a narrow, consistent trench with less spoil and turf damage than a bucket." },
    { slug: "concrete-equipment-rental", reason: "Driveway, patio and sidewalk replacement on redevelopment and remodel projects: mixers, saws and power trowels for flatwork." },
    { slug: "excavator-rental", reason: "Commercial demolition and deeper cuts on larger redevelopment sites with room to stage the machine and load trucks." },
  ],
  siteConsiderations: [
    {
      title: "Lane closures run 9 a.m. to 4 p.m.",
      text: "Plano's traffic control notes allow lane closures only from 9 a.m. to 4 p.m.; anything outside that window needs separate approval. Contractors working under a permit must contact Public Works at least 48 hours before a lane closure, and the Traffic Management Center 48 hours ahead when working within 200 feet of a signalized intersection.",
      sources: [sources.planoTcp],
    },
    {
      title: "When a traffic control plan is required",
      text: "For work in City right-of-way along a roadway 26 feet or wider, a traffic control plan must accompany the permit application if the work is within 12 inches of a sidewalk, 2 feet of a road posted 40 mph or less, 6 feet of a faster road, or detours traffic. Staff aim to review plans within 7 working days, and each revision can add another 7.",
      sources: [sources.planoTcp],
    },
    {
      title: "Digging next to traffic",
      text: "Plano requires vertical panels or barrels for any excavation within 10 feet of open traffic that's more than 2 inches below the road surface, and positive barriers, such as water-filled or concrete barriers, once it's more than 24 inches deep. Plan for that before a mini excavator digs a tie-in at the curb.",
      sources: [sources.planoTcp],
    },
    {
      title: "State highways and tollways",
      text: "For work along US 75, Preston Road, State Highway 121 or SH 190/President George Bush Turnpike, Plano's right-of-way guidelines ask for an approved TxDOT or NTTA permit as well. Plano Engineering says a right-of-way permit response can take up to 10 work days.",
      sources: [sources.planoRow],
    },
    {
      title: "No night work near homes",
      text: "Plano's noise ordinance makes it an offense to conduct construction on private property within 500 feet of a residential area or use between 10:01 p.m. and 6:59 a.m., unless the building official approves it in writing.",
      sources: [sources.planoNoise],
    },
    {
      title: "Call 811 before you dig",
      text: "Texas law requires notice to a one-call center no later than 48 hours before excavation, not counting weekends and holidays, and no earlier than 14 days before. On redevelopment lots, old service lines are common, so compare the marks against any plans you have and dig carefully near them.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
  ],
  faqs: [
    { question: "What equipment fits a tight Plano lot?", answer: "Start compact: a mini excavator for digging, a compact track loader or skid steer for grading and material, and a plate compactor or small roller for backfill. Measure gates, the alley or driveway and overhead lines, and tell the provider which surfaces need protecting." },
    { question: "Can I close a lane for an equipment delivery in Plano?", answer: "Work in City right-of-way starts with Plano Engineering, which sets the permit requirements for your project. Under the City's traffic control notes, lane closures are limited to 9 a.m. to 4 p.m. and need 48 hours' notice to Public Works." },
    { question: "How does clay soil affect equipment in Plano-area projects?", answer: "Expansive clay like Houston Black is very hard when dry and sticky when wet. Rubber tracks keep traction better than tires on soft ground, ground mats protect drives and lawns, and padfoot rollers are a common choice for compacting clay fill." },
    { question: "Should I rent a mini excavator or a full-size excavator for a teardown?", answer: "For most residential teardowns, utility tie-ins and footing work, a mini excavator fits the lot and leaves less surface damage. A larger excavator makes sense for commercial demolition or deep cuts where there's room to stage it and load trucks. Share the depth, access width and what has to be hauled off." },
  ],
  nearbyCities: ["dallas"],
  heroImage: {
    src: "/images/locations/plano-tx-construction-equipment-rental.webp",
    alt: "Mini excavator digging a footing trench beside a compact track loader on an infill lot between homes in Plano, Texas",
  },
  guides: [compactGuide, excavatorSizeGuide],
};
