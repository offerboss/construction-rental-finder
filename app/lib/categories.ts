export type CategorySlug =
  | "excavator-rental"
  | "mini-excavator-rental"
  | "skid-steer-rental"
  | "telehandler-rental"
  | "scissor-lift-rental"
  | "boom-lift-rental"
  | "forklift-rental"
  | "trencher-rental"
  | "compactor-rental"
  | "generator-rental"
  | "concrete-equipment-rental"
  | "wheel-loader-rental";

export type EquipmentCategory = {
  /** Plural display name, e.g. "Excavators" */
  name: string;
  /** Singular form used in headings, e.g. "Excavator Rentals Near You" */
  singular: string;
  slug: CategorySlug;
  image: string;
  imageAlt: string;
  /** One-line card description */
  summary: string;
};

export const equipmentCategories: EquipmentCategory[] = [
  { name: "Excavators", singular: "Excavator", slug: "excavator-rental", image: "/images/excavator-rental.png", imageAlt: "Excavator rental", summary: "Tracked diggers for foundations, trenching and heavy earthmoving." },
  { name: "Mini Excavators", singular: "Mini Excavator", slug: "mini-excavator-rental", image: "/images/mini-excavator-rental.png", imageAlt: "Mini excavator rental", summary: "Compact diggers for tight sites, utilities and landscaping." },
  { name: "Skid Steers", singular: "Skid Steer", slug: "skid-steer-rental", image: "/images/skid-steer-rental.png", imageAlt: "Skid steer rental", summary: "Versatile loaders for grading, material moving and attachments." },
  { name: "Telehandlers", singular: "Telehandler", slug: "telehandler-rental", image: "/images/telehandler-rental.png", imageAlt: "Telehandler rental", summary: "Telescopic forklifts for lifting and placing loads at height." },
  { name: "Scissor Lifts", singular: "Scissor Lift", slug: "scissor-lift-rental", image: "/images/scissor-lift-rental.png", imageAlt: "Scissor lift rental", summary: "Vertical work platforms for interior and exterior work at height." },
  { name: "Boom Lifts", singular: "Boom Lift", slug: "boom-lift-rental", image: "/images/boom-lift-rental.png", imageAlt: "Boom lift rental", summary: "Articulating and telescopic lifts for reaching up and over." },
  { name: "Forklifts", singular: "Forklift", slug: "forklift-rental", image: "/images/forklift-rental.png", imageAlt: "Forklift rental", summary: "Warehouse and rough-terrain forklifts for palletized loads." },
  { name: "Trenchers", singular: "Trencher", slug: "trencher-rental", image: "/images/trencher-rental.png", imageAlt: "Trencher rental", summary: "Walk-behind and ride-on trenchers for fast, narrow trenches." },
  { name: "Compactors & Rollers", singular: "Compactor & Roller", slug: "compactor-rental", image: "/images/road-roller-rental.png", imageAlt: "Road roller and compactor rental", summary: "Plate compactors, rammers and rollers for soil and asphalt." },
  { name: "Generators", singular: "Generator", slug: "generator-rental", image: "/images/generator-rental.png", imageAlt: "Generator rental", summary: "Portable and towable power for tools, trailers and jobsites." },
  { name: "Concrete Equipment", singular: "Concrete Equipment", slug: "concrete-equipment-rental", image: "/images/concrete-equipment-rental.png", imageAlt: "Concrete equipment rental", summary: "Mixers, power trowels, saws and tools for concrete work." },
  { name: "Wheel Loaders", singular: "Wheel Loader", slug: "wheel-loader-rental", image: "/images/wheel-loader-rental.png", imageAlt: "Wheel loader rental", summary: "Front-end loaders for moving, loading and stockpiling material." },
];

export function getCategory(slug: string) {
  return equipmentCategories.find((category) => category.slug === slug);
}

export function getCategories(slugs: CategorySlug[]) {
  return slugs.map((slug) => equipmentCategories.find((category) => category.slug === slug)!);
}
