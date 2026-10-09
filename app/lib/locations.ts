import type { CategorySlug } from "./categories";
import {
  arlington,
  carrollton,
  frisco,
  garland,
  grandPrairie,
  irving,
  mckinney,
  mesquite,
  plano,
  richardson,
} from "./city-content";
import type { Faq } from "./seo";

export type SourceLink = { label: string; url: string };

export type FeaturedEquipment = {
  slug: CategorySlug;
  /** Why this category fits work in this city */
  reason: string;
};

export type SiteConsideration = {
  title: string;
  text: string;
  /** Official or primary sources that verify the text */
  sources: SourceLink[];
};

export type CityGuideLink = {
  /** Resource slug. Renders only once the guide is published (see lib/resources.ts). */
  slug: string;
  reason: string;
};

export type City = {
  name: string;
  slug: string;
  stateSlug: string;
  /** Area label used in copy, e.g. "the Denver metro area" */
  region: string;
  shortDescription: string;

  // Optional rich-page fields. A city with `localIntro` renders the rich layout;
  // every other city keeps the shared template.
  /** Unique meta description for rich pages */
  metaDescription?: string;
  /** Header intro paragraphs */
  localIntro?: string[];
  /** Local work and site-context paragraphs */
  useCaseContext?: string[];
  /** Six categories with a local reason each */
  featuredEquipment?: FeaturedEquipment[];
  /** Verified local rules and conditions, each with sources */
  siteConsiderations?: SiteConsideration[];
  /** City-specific FAQs (rich pages only) */
  faqs?: Faq[];
  /** Same-state city slugs for the nearby block. Without it, the page lists every other city in the state. */
  nearbyCities?: string[];
  /** 3:2 hero (1080x720 WebP) shown beside the H1 and used as the share image */
  heroImage?: { src: string; alt: string };
  /** Planned or published guides to link from this city */
  guides?: CityGuideLink[];
};

export type State = {
  name: string;
  abbreviation: string;
  slug: string;
  image: string;
  imageAlt: string;
  /** Card description (hub + homepage) */
  description: string;
  /** Page header intro */
  intro: string;
  /** State overview paragraphs */
  overview: string[];
  /** Site-condition tip reused on city pages */
  terrainTip: string;
  /** Scheduling tip reused on city pages */
  seasonTip: string;
  cities: City[];
  faqs: Faq[];
};

function cities(stateSlug: string, list: Omit<City, "stateSlug">[]): City[] {
  return list.map((city) => ({ ...city, stateSlug }));
}

export const states: State[] = [
  {
    name: "Colorado",
    abbreviation: "CO",
    slug: "colorado",
    image: "/images/colorado-construction-equipment-rental.png",
    imageAlt: "Construction equipment rental in Colorado",
    description:
      "From Denver and the Front Range to the Western Slope, find equipment for residential, commercial and site work.",
    intro:
      "Find construction equipment rentals across Colorado, from Denver and the Front Range to the Western Slope. Browse equipment, explore launch cities and connect with local providers.",
    overview: [
      "Colorado projects range from residential and commercial building along the Front Range to road, utility and site work in the mountains and on the Western Slope. That mix means renters often need everything from compact equipment for tight urban lots to larger earthmoving machines for open sites.",
      "Elevation, rocky soils, steep grades and freeze-thaw cycles can all affect equipment choice and scheduling. When you request a rental, share your site conditions and access so providers can recommend the right machine and attachments.",
    ],
    terrainTip:
      "Colorado sites can include rocky soils, slopes and fast-changing weather. Ask about tracked machines, rock buckets and cold-weather readiness when conditions call for them.",
    seasonTip:
      "Winter weather affects many Colorado schedules, so it helps to reserve early for spring through fall work.",
    cities: cities("colorado", [
      { name: "Denver", slug: "denver", region: "the Denver metro area", shortDescription: "Denver is Colorado's capital and largest city, at the center of the Front Range." },
      { name: "Colorado Springs", slug: "colorado-springs", region: "the Pikes Peak region", shortDescription: "Colorado Springs sits at the base of Pikes Peak along the southern Front Range." },
      { name: "Fort Collins", slug: "fort-collins", region: "Northern Colorado", shortDescription: "Fort Collins is a Northern Colorado city and home to Colorado State University." },
      { name: "Greeley", slug: "greeley", region: "Northern Colorado", shortDescription: "Greeley is the Weld County seat, east of the Front Range in Northern Colorado." },
      { name: "Grand Junction", slug: "grand-junction", region: "the Western Slope", shortDescription: "Grand Junction is the largest city on Colorado's Western Slope." },
    ]),
    faqs: [
      { question: "What construction equipment is commonly rented in Colorado?", answer: "Excavators, skid steers, telehandlers, aerial lifts and forklifts are common for residential and commercial building. Compaction equipment, trenchers and generators are frequent choices for site, utility and road work." },
      { question: "Does elevation affect rental equipment in Colorado?", answer: "Engine performance can drop at higher elevations, which may matter for demanding work or heavy loads. Tell providers your site's location so they can recommend suitable machines." },
      { question: "Can I rent equipment for projects in the mountains?", answer: "Many providers deliver outside metro areas, but delivery range, fees and access vary. Share your site location, road access and any grade or weather concerns when you request a quote." },
      { question: "How does winter weather affect equipment rentals in Colorado?", answer: "Cold weather can affect starting, hydraulics and ground conditions. Ask providers about cold-weather preparation, and plan concrete and earthwork around freezing temperatures." },
    ],
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    slug: "arizona",
    image: "/images/arizona-construction-equipment-rental.png",
    imageAlt: "Construction equipment rental in Arizona",
    description:
      "From the Phoenix metro to Tucson, find equipment for desert jobsites, commercial projects and residential building.",
    intro:
      "Find construction equipment rentals across Arizona, from Phoenix and the East Valley to Tucson. Browse equipment, explore launch cities and connect with local providers.",
    overview: [
      "Arizona construction spans residential communities, commercial and industrial projects, and infrastructure across the Phoenix metro and Southern Arizona. Renters commonly need earthmoving equipment for site prep alongside aerial lifts and material handlers for vertical construction.",
      "Desert conditions shape how equipment is used. Summer heat, dust and hard or caliche soils can affect machine selection, attachments and work schedules, so tell providers about your site when you request a rental.",
    ],
    terrainTip:
      "Arizona sites often have hard, rocky or caliche soils and dusty conditions. Ask about rock buckets, breakers and air filter maintenance for the machines you rent.",
    seasonTip:
      "Summer heat often moves work into early-morning hours, so confirm delivery and pickup windows that fit your schedule.",
    cities: cities("arizona", [
      { name: "Phoenix", slug: "phoenix", region: "the Phoenix metro area", shortDescription: "Phoenix is Arizona's capital and largest city, at the center of the Valley of the Sun." },
      { name: "Tucson", slug: "tucson", region: "Southern Arizona", shortDescription: "Tucson is Southern Arizona's largest city and home to the University of Arizona." },
      { name: "Mesa", slug: "mesa", region: "the East Valley", shortDescription: "Mesa is a major East Valley city in the Phoenix metro area." },
      { name: "Scottsdale", slug: "scottsdale", region: "the Phoenix metro area", shortDescription: "Scottsdale stretches from Old Town into the desert on the Phoenix metro's northeast side." },
      { name: "Tempe", slug: "tempe", region: "the East Valley", shortDescription: "Tempe is an East Valley city and home to Arizona State University's main campus." },
    ]),
    faqs: [
      { question: "What construction equipment is commonly rented in Arizona?", answer: "Excavators, skid steers and compaction equipment are common for site prep, while telehandlers, scissor lifts, boom lifts and forklifts support vertical construction and material handling." },
      { question: "How does summer heat affect equipment rentals in Arizona?", answer: "High temperatures can affect engines, hydraulics, tires and batteries, as well as crews. Ask providers about machine maintenance and cab air conditioning, and schedule delivery for cooler hours when possible." },
      { question: "What is caliche and does it affect equipment choice?", answer: "Caliche is a hardened, cemented soil layer found in many parts of the Southwest. It can be difficult to dig, so excavators with rock buckets or hydraulic breakers are commonly used." },
      { question: "Do rental providers deliver to jobsites across Arizona?", answer: "Many providers deliver within their service areas, but range and fees vary. Share your site address and access details when requesting a quote." },
    ],
  },
  {
    name: "Texas",
    abbreviation: "TX",
    slug: "texas",
    image: "/images/texas-construction-equipment-rental.png",
    imageAlt: "Construction equipment rental in Texas",
    description:
      "From Dallas–Fort Worth to Houston, Austin and San Antonio, find equipment for projects of every size.",
    intro:
      "Find construction equipment rentals across Texas, from Dallas–Fort Worth to Houston, Austin and San Antonio. Browse equipment, explore launch cities and connect with local providers.",
    overview: [
      "Texas construction covers a wide range of work, from residential subdivisions and commercial buildings to industrial and infrastructure projects. Across its major metros, renters rely on earthmoving equipment, aerial lifts, material handlers and jobsite power.",
      "Conditions vary across the state. Expansive clay soils, heavy rain, Gulf Coast humidity and summer heat can all affect equipment choice and scheduling, so share your site details with providers when you request a rental.",
    ],
    terrainTip:
      "Many Texas sites have clay soils that turn slick when wet and hard when dry. Ask about tracked machines, padfoot rollers and ground protection.",
    seasonTip:
      "Rain and summer heat can shift schedules, so it helps to confirm flexible delivery and pickup windows.",
    cities: cities("texas", [
      { name: "Dallas", slug: "dallas", region: "the Dallas–Fort Worth area", shortDescription: "Dallas is a major North Texas city at the heart of the Dallas–Fort Worth metroplex.", nearbyCities: ["arlington", "irving", "plano", "frisco", "mckinney", "garland", "grand-prairie", "mesquite", "carrollton", "richardson", "fort-worth"] },
      { name: "Houston", slug: "houston", region: "the Greater Houston area", shortDescription: "Houston is the largest city in Texas, near the Gulf Coast." },
      { name: "Austin", slug: "austin", region: "Central Texas", shortDescription: "Austin is the Texas state capital, in the heart of Central Texas." },
      { name: "San Antonio", slug: "san-antonio", region: "the San Antonio area", shortDescription: "San Antonio is one of the largest cities in Texas, in South-Central Texas." },
      { name: "Fort Worth", slug: "fort-worth", region: "the Dallas–Fort Worth area", shortDescription: "Fort Worth anchors the western side of the Dallas–Fort Worth metroplex.", nearbyCities: ["arlington", "irving", "dallas"] },
      arlington,
      irving,
      plano,
      frisco,
      mckinney,
      garland,
      grandPrairie,
      mesquite,
      carrollton,
      richardson,
    ]),
    faqs: [
      { question: "What construction equipment is commonly rented in Texas?", answer: "Excavators, skid steers, telehandlers, aerial lifts and forklifts are common across residential, commercial and industrial projects. Compaction equipment and generators are frequent choices for site work." },
      { question: "How do clay soils affect equipment choice in Texas?", answer: "Clay can be hard to work when dry and slick when wet. Tracked machines offer better traction in wet conditions, and padfoot rollers are commonly used to compact clay soils." },
      { question: "How does rain affect an equipment rental?", answer: "Wet ground can limit site access and traction. Ask providers about tracked equipment, ground mats and how weather delays affect your rental period." },
      { question: "Can providers deliver between Texas metro areas?", answer: "Delivery ranges vary by provider. For sites outside a provider's usual area, ask about delivery fees and lead time when requesting a quote." },
    ],
  },
];

export const statePopularEquipment: CategorySlug[] = [
  "excavator-rental",
  "skid-steer-rental",
  "telehandler-rental",
  "scissor-lift-rental",
  "boom-lift-rental",
  "forklift-rental",
];

export const cityPopularEquipment: CategorySlug[] = [
  "excavator-rental",
  "mini-excavator-rental",
  "skid-steer-rental",
  "telehandler-rental",
  "scissor-lift-rental",
  "boom-lift-rental",
];

export function getState(slug: string) {
  return states.find((state) => state.slug === slug);
}

export function getCity(stateSlug: string, citySlug: string) {
  return getState(stateSlug)?.cities.find((city) => city.slug === citySlug);
}

export const allCities = states.flatMap((state) => state.cities);
