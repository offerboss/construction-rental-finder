// The 20 provider directory regions, shared with the PTF/RDF/ERF directories.
// Order here is display order. A provider's region comes from its physical
// (yard) city via data/atlas-import/<export>/region-map.json; see
// scripts/import-providers.mjs.

export type StateSlug = "arizona" | "colorado" | "texas";

export type RegionSlug =
  | "phoenix-metro"
  | "tucson-southern-az"
  | "northern-az"
  | "western-az"
  | "eastern-az"
  | "denver-metro"
  | "colorado-springs"
  | "pueblo"
  | "greeley"
  | "grand-junction-western-co"
  | "fort-collins"
  | "steamboat-springs"
  | "loveland-longmont"
  | "summit-county-i70-corridor"
  | "other-colorado-areas"
  | "dfw-metro"
  | "houston-metro"
  | "central-tx"
  | "west-tx"
  | "east-south-tx";

export type Region = {
  slug: RegionSlug;
  name: string;
  stateSlug: StateSlug;
};

export const regions: Region[] = [
  { slug: "phoenix-metro", name: "Phoenix Metro", stateSlug: "arizona" },
  { slug: "tucson-southern-az", name: "Tucson & Southern AZ", stateSlug: "arizona" },
  { slug: "northern-az", name: "Northern AZ", stateSlug: "arizona" },
  { slug: "western-az", name: "Western AZ", stateSlug: "arizona" },
  { slug: "eastern-az", name: "Eastern AZ", stateSlug: "arizona" },

  { slug: "denver-metro", name: "Denver Metro", stateSlug: "colorado" },
  { slug: "colorado-springs", name: "Colorado Springs", stateSlug: "colorado" },
  { slug: "pueblo", name: "Pueblo", stateSlug: "colorado" },
  { slug: "greeley", name: "Greeley", stateSlug: "colorado" },
  { slug: "grand-junction-western-co", name: "Grand Junction & Western CO", stateSlug: "colorado" },
  { slug: "fort-collins", name: "Fort Collins", stateSlug: "colorado" },
  { slug: "steamboat-springs", name: "Steamboat Springs", stateSlug: "colorado" },
  { slug: "loveland-longmont", name: "Loveland & Longmont", stateSlug: "colorado" },
  { slug: "summit-county-i70-corridor", name: "Summit County / I-70 Corridor", stateSlug: "colorado" },
  { slug: "other-colorado-areas", name: "Other Colorado Areas", stateSlug: "colorado" },

  { slug: "dfw-metro", name: "DFW Metro", stateSlug: "texas" },
  { slug: "houston-metro", name: "Houston Metro", stateSlug: "texas" },
  { slug: "central-tx", name: "Central TX", stateSlug: "texas" },
  { slug: "west-tx", name: "West TX", stateSlug: "texas" },
  { slug: "east-south-tx", name: "East & South TX", stateSlug: "texas" },
];

/**
 * Directory region for each existing city page ("state/city"), used for the
 * regional fallback list on pages without directly matched providers. Add an
 * entry whenever a city page is added: scripts/import-providers.mjs fails if
 * any city page is missing, and a page without an entry gets no fallback.
 */
export const cityPageRegions: Record<string, RegionSlug> = {
  "arizona/phoenix": "phoenix-metro",
  "arizona/mesa": "phoenix-metro",
  "arizona/scottsdale": "phoenix-metro",
  "arizona/tempe": "phoenix-metro",
  "arizona/tucson": "tucson-southern-az",
  "colorado/denver": "denver-metro",
  "colorado/colorado-springs": "colorado-springs",
  "colorado/fort-collins": "fort-collins",
  "colorado/greeley": "greeley",
  "colorado/grand-junction": "grand-junction-western-co",
  "texas/houston": "houston-metro",
  "texas/austin": "central-tx",
  "texas/san-antonio": "central-tx",
  "texas/dallas": "dfw-metro",
  "texas/fort-worth": "dfw-metro",
  "texas/arlington": "dfw-metro",
  "texas/irving": "dfw-metro",
  "texas/plano": "dfw-metro",
  "texas/frisco": "dfw-metro",
  "texas/mckinney": "dfw-metro",
  "texas/garland": "dfw-metro",
  "texas/grand-prairie": "dfw-metro",
  "texas/mesquite": "dfw-metro",
  "texas/carrollton": "dfw-metro",
  "texas/richardson": "dfw-metro",
  "texas/denton": "dfw-metro",
  "texas/lewisville": "dfw-metro",
  "texas/allen": "dfw-metro",
  "texas/flower-mound": "dfw-metro",
  "texas/mansfield": "dfw-metro",
  "texas/north-richland-hills": "dfw-metro",
  "texas/rowlett": "dfw-metro",
  "texas/euless": "dfw-metro",
  "texas/wylie": "dfw-metro",
  "texas/desoto": "dfw-metro",
  "texas/grapevine": "dfw-metro",
  "texas/bedford": "dfw-metro",
  "texas/cedar-hill": "dfw-metro",
  "texas/burleson": "dfw-metro",
  "texas/rockwall": "dfw-metro",
  "texas/little-elm": "dfw-metro",
  "texas/haltom-city": "dfw-metro",
  "texas/keller": "dfw-metro",
  "texas/the-colony": "dfw-metro",
  "texas/coppell": "dfw-metro",
  "texas/lancaster": "dfw-metro",
  "texas/waxahachie": "dfw-metro",
  "texas/duncanville": "dfw-metro",
  "texas/hurst": "dfw-metro",
  "texas/farmers-branch": "dfw-metro",
};

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}

export function getRegionsByState(stateSlug: StateSlug) {
  return regions.filter((region) => region.stateSlug === stateSlug);
}
