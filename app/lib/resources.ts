import type { CategorySlug } from "./categories";
import { excavatorSizeGuide, skidSteerVsMiniExcavator } from "./guide-content";
import type { SourceLink } from "./locations";
import type { Faq } from "./seo";

/**
 * Body content for a guide. Paragraph, list and table text may contain inline links written
 * as [label](/path) or [label](https://...); see `components/RichText.tsx`.
 */
export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "columns"; columns: { title: string; items: string[] }[] }
  | { type: "table"; caption: string; columns: string[]; rows: string[][]; note?: string };

export type GuideSection = {
  /** Anchor id, also used in the "On this page" list */
  id: string;
  heading: string;
  blocks: GuideBlock[];
  /** Official or manufacturer sources for this section, rendered as external links */
  sources?: SourceLink[];
};

export type Guide = {
  slug: string;
  /** H1 and Article headline */
  title: string;
  /** Breadcrumb label */
  shortTitle: string;
  /** Shorter <title> (the layout template appends the site name) */
  metaTitle: string;
  metaDescription: string;
  /** Card text on /resources and in related-guide blocks */
  summary: string;
  intro: string[];
  heroImage: { src: string; alt: string };
  /** ISO dates for Article structured data */
  datePublished: string;
  dateModified: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  faqs: Faq[];
  /** Equipment pages this guide links to. Each of those pages links back (reciprocal). */
  relatedEquipment: { slug: CategorySlug; reason: string }[];
  /** Other guides to suggest at the end */
  relatedGuides: string[];
};

/** Published guides, each with a live /resources/<slug> route and a sitemap entry. */
export const guides: Guide[] = [skidSteerVsMiniExcavator, excavatorSizeGuide];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

/** Guides that list this equipment category, for the reciprocal block on equipment pages. */
export function getGuidesForCategory(slug: CategorySlug) {
  return guides.filter((guide) => guide.relatedEquipment.some((item) => item.slug === slug));
}

export type PublishedGuide = { slug: string; title: string };

/**
 * Guides with a live /resources/<slug> route. City pages link to a guide only once its slug
 * is listed here, so no page links to a 404. Derived from `guides`.
 */
export const publishedGuides: PublishedGuide[] = guides.map(({ slug, title }) => ({ slug, title }));

export function getPublishedGuide(slug: string) {
  return publishedGuides.find((guide) => guide.slug === slug);
}

export type ResourceTopic = {
  title: string;
  /** Reserved for a future /resources/<slug> guide */
  slug: string;
  description: string;
  related: CategorySlug[];
};

// Guides not written yet. Cards link to related equipment pages until each guide ships.
// "Mini Excavator vs Skid Steer" shipped as /resources/skid-steer-vs-mini-excavator (the old
// slug redirects there; see next.config.ts). The "Excavator Rental Cost Guide" was dropped:
// CRF doesn't publish prices, and sizing is covered by /resources/what-size-excavator-do-i-need.
export const resourceTopics: ResourceTopic[] = [
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
