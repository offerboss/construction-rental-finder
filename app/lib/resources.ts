import type { CategorySlug } from "./categories";

export type ResourceTopic = {
  title: string;
  /** Reserved for the future /resources/<slug> article route */
  slug: string;
  description: string;
  related: CategorySlug[];
};

// Planned launch guides. No article routes exist yet, so cards link to related equipment pages.
export const resourceTopics: ResourceTopic[] = [
  {
    title: "Excavator Rental Cost Guide",
    slug: "excavator-rental-cost-guide",
    description: "What affects the cost of renting an excavator, from machine size and rental length to delivery and attachments.",
    related: ["excavator-rental", "mini-excavator-rental"],
  },
  {
    title: "Mini Excavator vs Skid Steer",
    slug: "mini-excavator-vs-skid-steer",
    description: "How the two most-rented compact machines compare, and how to choose the right one for your project.",
    related: ["mini-excavator-rental", "skid-steer-rental"],
  },
  {
    title: "How to Choose the Right Boom Lift",
    slug: "how-to-choose-a-boom-lift",
    description: "Working height, outreach, articulating vs telescopic, and other factors to weigh before you rent.",
    related: ["boom-lift-rental", "scissor-lift-rental"],
  },
  {
    title: "Construction Equipment Rental Checklist",
    slug: "equipment-rental-checklist",
    description: "Questions to ask and details to confirm before, during and after an equipment rental.",
    related: ["excavator-rental", "telehandler-rental"],
  },
  {
    title: "Renting Equipment for Site Preparation",
    slug: "site-preparation-equipment",
    description: "The machines commonly used to clear, dig, grade and compact a site before building starts.",
    related: ["skid-steer-rental", "compactor-rental"],
  },
  {
    title: "Short-Term vs Long-Term Equipment Rentals",
    slug: "short-term-vs-long-term-rentals",
    description: "How daily, weekly and monthly rentals differ, and how to plan rental length around your schedule.",
    related: ["generator-rental", "forklift-rental"],
  },
];

export type PublishedGuide = { slug: string; title: string };

/**
 * Guides with a live /resources/<slug> route. City pages link to a planned guide
 * only once its slug is listed here, so no page links to a 404. Add each guide
 * when its route ships (Resource Run).
 */
export const publishedGuides: PublishedGuide[] = [];

export function getPublishedGuide(slug: string) {
  return publishedGuides.find((guide) => guide.slug === slug);
}
