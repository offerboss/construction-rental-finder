export type NavLink = {
  label: string;
  href: string;
};

// Resources, providers, contact, legal and listing paths are placeholders for
// routes that will be built later.
export const primaryNav: NavLink[] = [
  { label: "Browse Equipment", href: "/equipment" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "For Rental Companies", href: "/#for-rental-companies" },
];

export const listBusinessLink: NavLink = {
  label: "List Your Business",
  href: "/list-your-business",
};

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
      listBusinessLink,
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
