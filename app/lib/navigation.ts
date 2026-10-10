export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Browse Equipment", href: "/equipment" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "For Rental Companies", href: "/for-rental-companies" },
];

/** Primary consumer CTA in the header and mobile menu. */
export const primaryCta: NavLink = {
  label: "Find Rentals",
  href: "/equipment",
};

/** Provider-acquisition path: featured placement application (GHL form). */
export const forRentalCompaniesLink: NavLink = {
  label: "For Rental Companies",
  href: "/for-rental-companies",
};

export const featuredCtaLabel = "Get Featured on Construction Rental Finder";

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Browse Equipment", href: "/equipment" },
      { label: "Locations", href: "/locations" },
      { label: "Providers", href: "/providers" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    heading: "Company",
    links: [
      forRentalCompaniesLink,
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
