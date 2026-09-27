export type Provider = {
  name: string;
  slug: string;
  city: string;
  state: string;
};

// Placeholder listings for layout only — not real businesses.
export const featuredProviders: Provider[] = [
  { name: "Front Range Equipment Rentals", slug: "front-range-equipment-rentals", city: "Denver", state: "CO" },
  { name: "Desert Equipment Co.", slug: "desert-equipment-co", city: "Phoenix", state: "AZ" },
  { name: "Mountain West Rentals", slug: "mountain-west-rentals", city: "Salt Lake City", state: "UT" },
  { name: "Lone Star Equipment", slug: "lone-star-equipment", city: "Dallas", state: "TX" },
];
