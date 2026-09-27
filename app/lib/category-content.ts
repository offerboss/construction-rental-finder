import type { CategorySlug } from "./categories";
import type { Faq } from "./seo";

export type Consideration = { title: string; text: string };

export type CategoryContent = {
  metaDescription: string;
  intro: string;
  about: string[];
  uses: string[];
  considerations: Consideration[];
  faqs: Faq[];
  related: CategorySlug[];
};

// Appended to every category's considerations.
export const rentalDurationConsideration: Consideration = {
  title: "Rental duration",
  text: "Providers commonly offer daily, weekly and monthly rates. Ask how rates, hour limits, weekends and delivery days are counted so you can plan the rental around your schedule.",
};

export const categoryContent: Record<CategorySlug, CategoryContent> = {
  "excavator-rental": {
    metaDescription:
      "Find excavator rentals near you. Compare local construction equipment rental providers for digging, trenching, grading, demolition and site work.",
    intro:
      "Find excavator rentals for digging, trenching, grading, demolition and site work. Compare local providers and get the right size machine to your jobsite.",
    about: [
      "An excavator is a tracked or wheeled machine with a boom, stick and bucket mounted on a cab that rotates a full 360 degrees. That rotation lets the operator dig, swing and load without repositioning the machine, which makes excavators the workhorse of most earthmoving jobs.",
      "On construction sites, excavators dig foundations and basements, cut trenches for utilities, load dump trucks, shape grades and handle demolition. With the right attachment — a hydraulic breaker, thumb, grapple or compaction wheel — the same machine can break concrete, sort debris or compact trench backfill.",
      "Many contractors rent excavators because the right size changes from job to job. Renting lets you match operating weight, dig depth and reach to the work in front of you, without the cost of transporting, storing and maintaining a machine between projects.",
    ],
    uses: ["Foundation digging", "Utility trenching", "Demolition", "Grading and slope work", "Site preparation", "Loading dump trucks"],
    considerations: [
      { title: "Machine size", text: "Excavators are commonly grouped by operating weight. Match dig depth and reach to your deepest cut, and confirm the machine can lift what you need at the required radius." },
      { title: "Tracks and terrain", text: "Steel tracks handle rough, rocky ground; rubber tracks or pads are easier on pavement and finished surfaces. Soft or wet ground may call for wider tracks." },
      { title: "Attachments", text: "Ask which buckets, thumbs, breakers and quick couplers are available, and whether they are included or rented separately." },
      { title: "Delivery and access", text: "Full-size excavators typically arrive on a lowboy trailer. Check gate widths, overhead lines and where the machine can be unloaded." },
      { title: "Operator experience", text: "Excavators need a skilled operator. If you plan to run the machine yourself, ask the provider about orientation and follow your site's safety requirements." },
    ],
    faqs: [
      { question: "What size excavator should I rent?", answer: "It depends on dig depth, reach and the space you're working in. Mini excavators suit tight lots and shallow trenches; standard excavators handle deeper foundations, larger trenches and truck loading. Share your deepest cut and any access limits with the provider so they can recommend a size." },
      { question: "What's the difference between an excavator and a backhoe?", answer: "An excavator has a cab that rotates 360 degrees on tracks or wheels, which makes it efficient for continuous digging and loading. A backhoe loader has a loader bucket on the front and a digging arm on the back; it moves between spots faster but generally has less digging power and reach than a comparable excavator." },
      { question: "Can an excavator be used for demolition?", answer: "Yes. With a hydraulic breaker, grapple or demolition bucket, excavators are commonly used to break concrete and take down structures. Confirm the attachment and machine size with your provider before booking." },
      { question: "Is delivery included with an excavator rental?", answer: "It varies by provider. Many charge a separate delivery and pickup fee based on distance and machine size. Ask for the total cost, including transport, before you book." },
      { question: "Do I need a license to operate a rented excavator?", answer: "Requirements vary by location, employer and jobsite. Many rental companies expect renters to have operating experience, and some offer an orientation at delivery. Check with the provider and your local requirements before operating." },
    ],
    related: ["mini-excavator-rental", "skid-steer-rental", "wheel-loader-rental", "trencher-rental"],
  },

  "mini-excavator-rental": {
    metaDescription:
      "Find mini excavator rentals near you. Compare local providers for compact digging, utility trenching, landscaping and work on tight residential sites.",
    intro:
      "Find mini excavator rentals for trenching, landscaping, utility work and digging on tight sites. Compare local providers and get a compact machine that fits your access.",
    about: [
      "A mini excavator, also called a compact excavator, is a smaller tracked excavator that keeps the rotating cab, boom and bucket of a full-size machine in a package that fits through gates, down alleys and into backyards.",
      "Contractors and homeowners use mini excavators for utility and irrigation trenches, footings, drainage, pool and landscape work, stump removal and small demolition jobs. Many models include a front blade for backfilling and light grading, and zero or reduced tail swing designs make it easier to work next to walls and fences.",
      "Renting a mini excavator is often the most practical way to handle a digging job that's too big for hand tools but too tight for a full-size machine. Some smaller models can be towed behind a properly rated pickup, which keeps delivery simple.",
    ],
    uses: ["Utility and irrigation trenching", "Footings and small foundations", "Landscaping and hardscape prep", "Drainage and septic work", "Stump and root removal", "Light demolition"],
    considerations: [
      { title: "Size and access", text: "Measure gate widths and access paths. The smallest models fit through narrow openings; larger minis offer more dig depth and breakout force." },
      { title: "Tail swing", text: "Zero-tail-swing models keep the back of the machine within the track width, which helps next to walls, fences and traffic." },
      { title: "Tracks and surfaces", text: "Rubber tracks are standard on most minis and are gentler on lawns and pavement, but ground protection mats still help on finished surfaces." },
      { title: "Attachments", text: "Ask about bucket widths, hydraulic thumbs, augers and breakers so the machine arrives ready for the job." },
      { title: "Towing or delivery", text: "Check the machine and trailer weight against your vehicle's towing capacity, or arrange delivery with the provider." },
    ],
    faqs: [
      { question: "How deep can a mini excavator dig?", answer: "Dig depth varies by model. Smaller units suit shallow trenches and landscaping, while larger mini excavators dig considerably deeper. Check the specifications for the specific machine and allow for your deepest cut." },
      { question: "Can I tow a mini excavator myself?", answer: "Some smaller models can be towed on a trailer behind a properly rated pickup. Confirm the combined machine and trailer weight against your vehicle's towing capacity and local trailer rules, or ask the provider about delivery." },
      { question: "Should I rent a mini excavator or a skid steer?", answer: "Choose a mini excavator for digging trenches, holes and footings. Choose a skid steer for moving material, grading and loading. Projects that need both often rent one of each." },
      { question: "Will a mini excavator damage my lawn or driveway?", answer: "Rubber tracks cause less damage than steel, but turning can still scuff turf and pavement. Ground protection mats and wide, gradual turns help minimize damage." },
    ],
    related: ["excavator-rental", "skid-steer-rental", "trencher-rental", "compactor-rental"],
  },

  "skid-steer-rental": {
    metaDescription:
      "Find skid steer rentals near you. Compare local providers for grading, material handling, site cleanup and attachment work on construction and landscaping jobs.",
    intro:
      "Find skid steer and compact track loader rentals for grading, material moving, cleanup and attachment work. Compare local providers near your jobsite.",
    about: [
      "A skid steer loader is a compact, rigid-frame machine with lift arms that carry a bucket or attachment. It steers by driving the wheels on each side at different speeds, so it can turn within its own footprint. Compact track loaders work the same way but ride on rubber tracks for more traction on soft ground.",
      "On a jobsite, skid steers move dirt, gravel and mulch, backfill trenches, grade pads, clear debris and load trucks. The quick-attach plate is the real advantage: swap the bucket for pallet forks, an auger, a trencher, a grapple, a broom or a breaker and one machine covers many tasks.",
      "Renting a skid steer makes sense for short, attachment-specific work. You can pick the machine size and attachments that match each job instead of owning a full lineup of equipment.",
    ],
    uses: ["Grading and leveling", "Moving dirt and gravel", "Backfilling trenches", "Site cleanup", "Pallet and material handling", "Auger and post-hole work"],
    considerations: [
      { title: "Wheels or tracks", text: "Wheeled skid steers are quick on hard surfaces; compact track loaders offer more traction and less ground disturbance on soft, muddy or sandy sites." },
      { title: "Lift capacity and height", text: "Compare rated operating capacity and lift height. Vertical-lift machines help when loading high-sided trucks; radial-lift machines are strong at digging and pushing." },
      { title: "Attachments", text: "List the attachments you need up front and confirm whether any of them require high-flow hydraulics." },
      { title: "Site access", text: "Measure gates and paths. Smaller frame sizes fit tight residential access." },
      { title: "Delivery", text: "Skid steers are usually delivered on a trailer. Confirm the drop-off spot and that the ground is firm enough to unload." },
    ],
    faqs: [
      { question: "What's the difference between a skid steer and a compact track loader?", answer: "Both use the same lift arms and attachments. A skid steer runs on wheels and is faster on hard surfaces; a compact track loader runs on rubber tracks for better traction and lower ground pressure on soft or uneven ground." },
      { question: "What attachments can I rent with a skid steer?", answer: "Common options include buckets, pallet forks, augers, grapples, trenchers, brooms, box blades and hydraulic breakers. Availability varies by provider, and some attachments require high-flow hydraulics." },
      { question: "Can a skid steer lift pallets?", answer: "Yes, with pallet forks. Check the machine's rated operating capacity against the weight of your heaviest load." },
      { question: "Is a skid steer good for grading?", answer: "Yes. With a bucket, box blade or grader attachment, a skid steer handles rough and finish grading on pads, driveways and landscape areas." },
    ],
    related: ["mini-excavator-rental", "wheel-loader-rental", "compactor-rental", "trencher-rental"],
  },

  "telehandler-rental": {
    metaDescription:
      "Find telehandler rentals near you. Compare local providers for reach forklifts used to lift, place and move materials on construction sites.",
    intro:
      "Find telehandler rentals for lifting and placing materials at height and across the jobsite. Compare local providers and choose the right lift capacity and reach.",
    about: [
      "A telehandler, also called a telescopic handler or reach forklift, combines forks with a telescoping boom. It can lift loads up and out — onto roofs, upper floors and scaffolding, or over obstacles — instead of only straight up like a standard forklift.",
      "Telehandlers are common on framing, masonry, roofing and commercial jobsites. They unload trucks, move pallets across rough ground and place trusses and materials at height. With approved attachments, many can also work with a bucket or other tools.",
      "Most telehandlers are rough-terrain machines with four-wheel drive and large tires, which is why builders rent them for active construction sites rather than using warehouse forklifts.",
    ],
    uses: ["Unloading material deliveries", "Placing trusses and framing packages", "Loading roofs and upper floors", "Moving pallets over rough ground", "Masonry block and brick placement", "Bucket work with attachments"],
    considerations: [
      { title: "Capacity at reach", text: "A telehandler's capacity drops as the boom extends. Check the load chart for the weight you need to place at your actual height and distance." },
      { title: "Lift height", text: "Match maximum lift height to the highest placement point on your project, with some margin." },
      { title: "Terrain and setup", text: "Rough-terrain models handle uneven sites, but lifting should still happen on firm, level ground. Some machines offer stabilizers or frame leveling." },
      { title: "Attachments", text: "Ask about fork carriages, buckets, truss booms and jibs, and use only attachments approved for the machine." },
      { title: "Operator training", text: "Telehandler operators are generally expected to be trained. Confirm requirements with the provider and your employer." },
    ],
    faqs: [
      { question: "What's the difference between a telehandler and a forklift?", answer: "A standard forklift lifts vertically on a mast and is usually built for warehouses and smooth surfaces. A telehandler uses a telescoping boom to reach up and forward, and is typically built for rough terrain." },
      { question: "How high can a telehandler lift?", answer: "It depends on the model. Rental fleets typically range from compact units to high-reach machines. Tell the provider your maximum placement height and load weight so they can match a machine." },
      { question: "Can a telehandler be used as a loader?", answer: "Many telehandlers accept a bucket for moving loose material. They're not a replacement for a dedicated wheel loader on high-volume work, but they're useful on sites with mixed tasks." },
      { question: "Do I need training to operate a telehandler?", answer: "In most workplaces, telehandler operators are expected to be trained and evaluated before operating. Confirm the requirements with your employer and the rental provider." },
    ],
    related: ["forklift-rental", "boom-lift-rental", "scissor-lift-rental", "wheel-loader-rental"],
  },

  "scissor-lift-rental": {
    metaDescription:
      "Find scissor lift rentals near you. Compare local providers for electric and rough-terrain scissor lifts for drywall, electrical, ceiling and exterior work.",
    intro:
      "Find scissor lift rentals for ceiling, electrical, drywall and exterior work at height. Compare local providers for electric slab lifts and rough-terrain models.",
    about: [
      "A scissor lift is a mobile elevating work platform that rises straight up on crisscrossing supports. It gives workers a stable, railed platform with room for tools and materials, which is often more practical than ladders or scaffolding for repetitive overhead work.",
      "Electric slab scissor lifts are narrow, quiet and use non-marking tires, which suits indoor work such as drywall, ceilings, HVAC, sprinklers, lighting and painting. Rough-terrain scissor lifts are larger, often engine-powered, and built for outdoor sites.",
      "Because they only lift vertically, scissor lifts work best when you can drive the platform directly under the work area. For reaching up and over obstacles, a boom lift is usually the better fit.",
    ],
    uses: ["Drywall and ceiling installation", "Electrical and lighting work", "HVAC and sprinkler installation", "Painting and finishing", "Facility maintenance", "Exterior facade work"],
    considerations: [
      { title: "Platform vs. working height", text: "Platform height is lower than working height. Listings often show both, so confirm which one you're comparing." },
      { title: "Indoor or outdoor", text: "Electric slab lifts are made for smooth, level floors. Choose a rough-terrain model for gravel, dirt or uneven ground." },
      { title: "Width and weight", text: "For indoor work, check doorway widths, elevator dimensions and floor load limits." },
      { title: "Platform capacity", text: "Account for workers, tools and materials on the deck, and whether you need an extension deck." },
      { title: "Operator training", text: "Aerial work platform operators are generally expected to be trained. Ask the provider about familiarization and follow your site requirements." },
    ],
    faqs: [
      { question: "Should I rent a scissor lift or a boom lift?", answer: "Choose a scissor lift when you need to go straight up with a larger platform and can position directly under the work. Choose a boom lift when you need to reach up and over obstacles or out from the base." },
      { question: "Can I use a scissor lift outdoors?", answer: "Rough-terrain scissor lifts are designed for outdoor sites. Many electric slab models are intended for indoor use on smooth surfaces and may have wind limits outdoors, so check the manufacturer's rating." },
      { question: "What's the difference between platform height and working height?", answer: "Platform height is how high the platform floor rises. Working height adds the reach of a person standing on the platform and is commonly listed as about six feet higher." },
      { question: "Will a scissor lift fit through a standard doorway?", answer: "Some narrow electric models are designed to fit through standard doorways, but widths vary. Measure your doors and ask the provider for machine dimensions." },
    ],
    related: ["boom-lift-rental", "telehandler-rental", "forklift-rental", "generator-rental"],
  },

  "boom-lift-rental": {
    metaDescription:
      "Find boom lift rentals near you. Compare local providers for articulating and telescopic boom lifts for exterior, structural and high-reach work.",
    intro:
      "Find articulating and telescopic boom lift rentals for high-reach and up-and-over access. Compare local providers near your jobsite.",
    about: [
      "A boom lift is an aerial work platform with a basket mounted on an extending arm. Unlike a scissor lift, it reaches out horizontally as well as up, so workers can get above obstacles, across openings or away from the machine's base.",
      "Articulating booms have jointed sections that bend up and over rooflines, equipment and piping. Telescopic booms extend in a straight line for maximum height and horizontal reach. Both are used for steel erection, exterior finishing, glazing, signage and facility maintenance.",
      "Boom lifts are a common rental because many projects only need them for specific phases, and the right reach varies widely from job to job.",
    ],
    uses: ["Exterior building and facade work", "Steel erection", "Window and glazing installation", "Roofline and overhang access", "Signage and lighting", "Facility maintenance"],
    considerations: [
      { title: "Height and outreach", text: "Confirm both working height and horizontal outreach. Reaching over an obstacle takes more boom than going straight up." },
      { title: "Articulating or telescopic", text: "Articulating booms work around obstacles; telescopic booms maximize reach in open areas." },
      { title: "Terrain and power", text: "Rough-terrain diesel models suit outdoor sites; electric or hybrid models are better for indoor or noise-sensitive work." },
      { title: "Platform capacity", text: "Check the platform's rated capacity for workers, tools and materials." },
      { title: "Training and fall protection", text: "Boom lift operators are generally expected to be trained, and fall protection is commonly required in the platform. Confirm requirements with your provider and employer." },
    ],
    faqs: [
      { question: "What's the difference between an articulating and a telescopic boom lift?", answer: "An articulating boom has hinged sections that bend up and over obstacles. A telescopic boom extends straight out and typically offers more height and horizontal reach in open areas." },
      { question: "How high can a rental boom lift reach?", answer: "Rental fleets typically range from compact booms for low exterior work to very tall telescopic models. Share your working height and outreach with the provider so they can match a machine." },
      { question: "Can boom lifts be used indoors?", answer: "Electric and hybrid boom lifts are designed for many indoor settings. Diesel models are generally intended for outdoor use. Confirm floor load limits and ventilation needs for indoor work." },
      { question: "Do boom lift operators need training?", answer: "Operators are generally expected to be trained and familiar with the specific machine. Ask the rental provider about familiarization at delivery and follow your employer's requirements." },
    ],
    related: ["scissor-lift-rental", "telehandler-rental", "forklift-rental", "generator-rental"],
  },

  "forklift-rental": {
    metaDescription:
      "Find forklift rentals near you. Compare local providers for warehouse and rough-terrain forklifts for loading, unloading and moving materials.",
    intro:
      "Find forklift rentals for loading, unloading and moving palletized materials. Compare local providers for warehouse and rough-terrain forklifts.",
    about: [
      "A forklift lifts and moves palletized loads on a vertical mast. Rental fleets typically include warehouse forklifts with cushion or pneumatic tires for smooth surfaces, and rough-terrain forklifts with larger tires and more ground clearance for construction sites and yards.",
      "On construction projects, forklifts unload deliveries, stage materials and move pallets of block, pavers, lumber and fixtures. They're also common for short-term warehouse needs such as inventory moves, seasonal peaks and facility projects.",
      "Renting lets you choose the right capacity, mast height and tire type for each job, and add a unit only for the weeks you need it.",
    ],
    uses: ["Unloading material deliveries", "Staging materials on site", "Moving block and pavers", "Lumber yard handling", "Warehouse and inventory moves", "Loading trucks and trailers"],
    considerations: [
      { title: "Capacity and load center", text: "Rated capacity is based on a standard load center. Longer or awkward loads reduce actual capacity, so check the data plate and load chart." },
      { title: "Tires and terrain", text: "Cushion tires suit smooth indoor floors, pneumatic tires handle outdoor pavement and gravel, and rough-terrain forklifts are built for dirt and uneven ground." },
      { title: "Mast height", text: "Match lift height to your racking or unloading height, and check overhead clearance for doors and ceilings." },
      { title: "Fuel type", text: "Electric forklifts suit indoor use; propane, gas and diesel models are common outdoors." },
      { title: "Operator training", text: "Forklift operators are generally required to be trained and evaluated. Confirm requirements with your employer and the rental provider." },
    ],
    faqs: [
      { question: "Should I rent a forklift or a telehandler for a construction site?", answer: "A rough-terrain forklift lifts straight up and works well for unloading and moving pallets at ground level. A telehandler adds a telescoping boom to reach up and out onto roofs, upper floors or over obstacles." },
      { question: "What forklift capacity do I need?", answer: "Start with your heaviest load and its dimensions. Capacity is rated at a specific load center, and longer loads reduce what the forklift can carry. Ask the provider to match a machine to your loads." },
      { question: "Can I use a warehouse forklift outside?", answer: "Pneumatic-tire forklifts can handle pavement and hard-packed surfaces. For dirt, gravel or uneven ground, a rough-terrain forklift or telehandler is a better fit." },
      { question: "Is fuel included with a forklift rental?", answer: "It depends on the provider. Some include an initial propane tank or a charged battery; others charge for fuel separately. Ask how refueling or charging is handled." },
    ],
    related: ["telehandler-rental", "scissor-lift-rental", "wheel-loader-rental", "skid-steer-rental"],
  },

  "trencher-rental": {
    metaDescription:
      "Find trencher rentals near you. Compare local providers for walk-behind and ride-on trenchers for irrigation, utility, drainage and cable trenches.",
    intro:
      "Find trencher rentals for irrigation, utility, drainage and cable trenches. Compare local providers for walk-behind, ride-on and attachment trenchers.",
    about: [
      "A trencher cuts narrow, uniform trenches quickly using a digging chain or toothed wheel. Rental options range from walk-behind units for irrigation and landscape lines to ride-on trenchers and skid steer attachments for longer, deeper runs.",
      "Contractors use trenchers for water, sewer and electrical lines, irrigation systems, drainage, low-voltage cable and fiber. Compared with digging the same run with an excavator, a trencher typically removes less soil and leaves a cleaner, narrower cut that's quicker to backfill.",
      "Because trenching is often a short phase of a larger project, renting a trencher for a day or a weekend is common.",
    ],
    uses: ["Irrigation lines", "Water and sewer lines", "Electrical and low-voltage cable", "Drainage and French drains", "Fiber and telecom conduit", "Landscape lighting"],
    considerations: [
      { title: "Trench depth and width", text: "Choose a boom length and chain width that match your required depth and pipe or conduit size." },
      { title: "Soil conditions", text: "Rocky or hard soils may call for a rock chain or a larger machine." },
      { title: "Walk-behind or ride-on", text: "Walk-behind trenchers suit shorter residential runs; ride-on units and skid steer attachments handle longer and deeper trenches." },
      { title: "Utility locates", text: "Have underground utilities marked before digging. In the U.S., contacting 811 is the standard first step." },
      { title: "Transport", text: "Walk-behind units can often be trailered by the renter; larger units usually need delivery." },
    ],
    faqs: [
      { question: "How deep can a rental trencher dig?", answer: "Walk-behind trenchers are generally used for shallower lines such as irrigation and cable, while ride-on and attachment trenchers can dig deeper. Confirm boom length with the provider before booking." },
      { question: "Should I rent a trencher or a mini excavator?", answer: "A trencher is faster for long, narrow runs at a consistent depth. A mini excavator is more flexible for wider trenches, rocky spots and tie-ins." },
      { question: "Do I need to call before I dig?", answer: "Yes. In the U.S., contact 811 before digging so underground utilities can be marked. Notice requirements vary by state, so plan a few days ahead." },
      { question: "Can a trencher cut through rock?", answer: "Standard chains struggle in rock. Some providers offer rock chains or rock-wheel trenchers for hard ground, so ask before you book." },
    ],
    related: ["mini-excavator-rental", "skid-steer-rental", "compactor-rental", "excavator-rental"],
  },

  "compactor-rental": {
    metaDescription:
      "Find compactor and roller rentals near you. Compare local providers for plate compactors, rammers and rollers for soil, base and asphalt compaction.",
    intro:
      "Find plate compactor, rammer and roller rentals for soil, gravel base and asphalt. Compare local providers and choose the right compaction equipment for your job.",
    about: [
      "Compaction equipment increases the density of soil, aggregate base and asphalt so the surface can support what's built on it. Poorly compacted ground can settle over time, leading to cracked slabs, uneven pavers and failed pavement.",
      "Rental options range from walk-behind plate compactors and rammers for trenches, footings and paver bases to ride-on smooth-drum, padfoot and double-drum rollers for larger pads, roads and parking lots. Smooth drums suit granular material and asphalt; padfoot drums work cohesive soils such as clay.",
      "Contractors rent compaction equipment because it's typically needed at specific stages — backfill, base prep and paving — rather than every day of a project.",
    ],
    uses: ["Trench backfill", "Paver and patio base prep", "Footing and slab subgrade", "Road and parking lot base", "Asphalt patching and paving", "Landscape and field prep"],
    considerations: [
      { title: "Soil type", text: "Plate compactors and smooth-drum rollers work best on granular material; rammers and padfoot rollers are better for cohesive soils like clay." },
      { title: "Area size", text: "Walk-behind equipment suits trenches and small areas; ride-on rollers are more efficient for large pads and roads." },
      { title: "Lift thickness", text: "Compact in layers suited to the machine. Your project specifications or engineer will define the required density." },
      { title: "Asphalt work", text: "For asphalt, look for vibratory double-drum rollers or plates with water systems to keep material from sticking." },
      { title: "Transport", text: "Plate compactors can often be moved in a pickup with a ramp; rollers usually need trailer delivery." },
    ],
    faqs: [
      { question: "What's the difference between a plate compactor and a rammer?", answer: "A plate compactor uses a flat vibrating plate and works best on granular material like gravel and sand. A rammer delivers high-impact blows in a small footprint, which suits cohesive soils and narrow trenches." },
      { question: "Which roller should I rent for asphalt?", answer: "Double-drum vibratory rollers are commonly used for asphalt. Small patches can often be handled with a plate compactor that has a water tank." },
      { question: "When do I need a padfoot roller?", answer: "Padfoot rollers are designed for cohesive soils such as clay, where the pads knead the soil to reach the required density." },
      { question: "Can I rent a compactor for a patio or paver project?", answer: "Yes. Walk-behind plate compactors are commonly rented to prepare the base for patios, walkways and pavers." },
    ],
    related: ["skid-steer-rental", "concrete-equipment-rental", "trencher-rental", "wheel-loader-rental"],
  },

  "generator-rental": {
    metaDescription:
      "Find generator rentals near you. Compare local providers for portable and towable generators to power tools, lighting, job trailers and temporary site needs.",
    intro:
      "Find portable and towable generator rentals for jobsite power, tools, lighting and temporary facilities. Compare local providers near your project.",
    about: [
      "Jobsite generators supply temporary power where utility service isn't available yet or can't be interrupted. Rental options range from portable units for hand tools and small equipment to towable diesel generators that run job trailers, lighting, pumps and welders.",
      "Construction teams rent generators for new sites before permanent power is connected, remote and road projects, planned shutdowns and backup during outages or electrical work. Larger units can often be paired with distribution boxes and cables to run multiple circuits.",
      "Renting lets you size the generator to each project's actual load and avoid owning, storing and maintaining equipment you only need occasionally.",
    ],
    uses: ["Power tools and equipment", "Job trailers and site offices", "Temporary lighting", "Pumps and dewatering", "Welding and heavy loads", "Backup power during outages"],
    considerations: [
      { title: "Load sizing", text: "Add up the running watts of everything you'll power at once, and account for the higher starting load of motors and compressors." },
      { title: "Voltage and phase", text: "Confirm whether you need single-phase or three-phase power and the voltages your equipment requires." },
      { title: "Fuel and runtime", text: "Ask about fuel type, tank size and expected runtime, and who is responsible for refueling." },
      { title: "Noise", text: "Sound-attenuated generators are useful near occupied buildings and residential areas." },
      { title: "Building connections", text: "Connecting a generator to a building's electrical system typically requires a transfer switch installed by a qualified electrician." },
    ],
    faqs: [
      { question: "What size generator do I need?", answer: "Add up the running wattage of everything you'll power at the same time, plus the starting load of motors and compressors. A rental provider can help size a unit from your equipment list." },
      { question: "Should I rent a portable or towable generator?", answer: "Portable generators suit hand tools and small loads. Towable generators handle job trailers, lighting, pumps and larger or three-phase loads." },
      { question: "Is fuel included in a generator rental?", answer: "Policies vary. Some providers deliver the unit full and charge for refueling; others offer fueling service. Ask before booking." },
      { question: "Can I connect a rental generator to a building?", answer: "Connecting to a building's wiring typically requires a transfer switch installed by a qualified electrician to prevent backfeeding utility lines." },
    ],
    related: ["concrete-equipment-rental", "scissor-lift-rental", "boom-lift-rental", "telehandler-rental"],
  },

  "concrete-equipment-rental": {
    metaDescription:
      "Find concrete equipment rentals near you. Compare local providers for concrete mixers, power trowels, saws, vibrators and tools for pours and finishing.",
    intro:
      "Find concrete mixer, trowel, saw and finishing equipment rentals for pours, slabs and repairs. Compare local providers near your jobsite.",
    about: [
      "Concrete equipment covers the tools used to mix, place, consolidate, finish and cut concrete. Common rentals include towable and portable mixers, concrete buggies, internal vibrators, power trowels, screeds and walk-behind or handheld concrete saws.",
      "Contractors and DIYers rent concrete equipment for slabs, sidewalks, driveways, footings, patios and repairs. Mixers handle smaller batches where a ready-mix truck isn't practical, vibrators help remove trapped air, power trowels produce smooth slab finishes, and saws cut control joints or remove damaged sections.",
      "Because many concrete tools are only needed for a few hours at specific stages of a pour, renting is usually more practical than owning.",
    ],
    uses: ["Mixing small batches", "Slab and driveway finishing", "Footings and foundations", "Cutting control joints", "Concrete removal and repair", "Sidewalk and patio pours"],
    considerations: [
      { title: "Pour size", text: "Portable mixers suit small batches; larger pours are usually delivered by ready-mix truck. Plan equipment around your volume." },
      { title: "Finishing equipment", text: "Choose a walk-behind or ride-on power trowel based on slab size, and schedule it so it's on site when the concrete is ready to finish." },
      { title: "Cutting", text: "Match the blade and cutting depth to the job. Wet cutting helps control dust; follow the provider's guidance on dust control." },
      { title: "Power source", text: "Check whether tools are electric, gas or hydraulic, and plan power or fuel accordingly." },
      { title: "Timing", text: "Concrete work runs on a tight schedule. Confirm delivery windows so tools arrive before the pour." },
    ],
    faqs: [
      { question: "What concrete equipment can I rent?", answer: "Common rentals include concrete mixers, buggies, vibrators, power trowels, screeds and concrete saws. Availability varies by provider, so share your project details when you request a quote." },
      { question: "When should I use a power trowel?", answer: "Power trowels are used once the slab has set enough to support the machine without leaving deep marks. Timing depends on the mix, temperature and site conditions." },
      { question: "Do I need a mixer or ready-mix delivery?", answer: "Mixers suit small pours, repairs and hard-to-reach spots. For larger slabs and foundations, ready-mix delivery is typically more practical." },
      { question: "How are control joints cut?", answer: "Control joints are commonly cut with a walk-behind or early-entry saw once the slab can support the saw. Joint spacing and depth should follow your project specifications." },
    ],
    related: ["compactor-rental", "skid-steer-rental", "generator-rental", "mini-excavator-rental"],
  },

  "wheel-loader-rental": {
    metaDescription:
      "Find wheel loader rentals near you. Compare local providers for front-end loaders used to move, load and stockpile material on construction sites.",
    intro:
      "Find wheel loader rentals for moving, loading and stockpiling material. Compare local providers for compact and full-size front-end loaders.",
    about: [
      "A wheel loader, or front-end loader, is an articulated, rubber-tired machine with a large front bucket. It's built to scoop, carry and load bulk material efficiently, and it travels quickly across a jobsite or yard on its wheels.",
      "Contractors use wheel loaders to load dump trucks, move and stockpile dirt, gravel and aggregate, backfill, and clear snow and debris. With forks or a grapple, many loaders can also move pallets, pipe and other materials.",
      "Rental fleets typically include compact wheel loaders for landscaping and smaller sites as well as larger loaders for high-volume earthmoving. Renting lets you match bucket size and dump height to the material and trucks you're working with.",
    ],
    uses: ["Loading dump trucks", "Stockpiling aggregate", "Moving dirt and gravel", "Backfilling", "Snow and debris removal", "Yard and material handling"],
    considerations: [
      { title: "Bucket size", text: "Match bucket capacity to the material you're moving and the trucks you're loading." },
      { title: "Dump height", text: "Check dump clearance and reach against the side height of your trucks or hoppers." },
      { title: "Compact or full-size", text: "Compact loaders fit tighter sites; larger loaders move more material per cycle." },
      { title: "Tires and ground", text: "Tire type affects traction and wear. Ask about options for rock, mud or snow." },
      { title: "Transport", text: "Larger loaders need trailer delivery, so confirm access to your site." },
    ],
    faqs: [
      { question: "Should I rent a wheel loader or a skid steer?", answer: "A skid steer is smaller and more maneuverable, with many attachment options. A wheel loader carries more per bucket, travels faster over distance and is better suited to high-volume loading." },
      { question: "Is a wheel loader or excavator better for loading trucks?", answer: "Wheel loaders are efficient when loading from stockpiles and carrying material. Excavators are better when digging in place and loading straight from the cut." },
      { question: "What attachments work with a wheel loader?", answer: "Common options include general-purpose and multi-purpose buckets, pallet forks, grapples and snow pushers. Availability depends on the provider and coupler type." },
      { question: "Is a compact wheel loader good for landscaping?", answer: "Yes. Compact wheel loaders are commonly used to move mulch, soil, rock and pavers on landscape and residential projects." },
    ],
    related: ["skid-steer-rental", "excavator-rental", "telehandler-rental", "compactor-rental"],
  },
};
