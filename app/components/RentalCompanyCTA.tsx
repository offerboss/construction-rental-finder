import { Eye, Globe, HardHat } from "lucide-react";
import Link from "next/link";
import { featuredCtaLabel, forRentalCompaniesLink } from "../lib/navigation";
import SectionHeading from "./SectionHeading";

const supportingItems = [
  { label: "Construction Equipment", text: "A directory built only for construction rentals.", icon: HardHat },
  { label: "Nationwide Coverage", text: "Reach customers searching in markets across the country.", icon: Globe },
  { label: "Local Provider Visibility", text: "Show up when contractors search near your yard.", icon: Eye },
];

export default function RentalCompanyCTA() {
  return (
    <section id="for-rental-companies" aria-labelledby="cta-heading" className="relative bg-navy">
      <div aria-hidden className="h-2 bg-hazard" />
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <SectionHeading
            id="cta-heading"
            tone="dark"
            eyebrow="For Rental Companies"
            title="Get Your Equipment Rentals in Front of More Local Customers"
          />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Apply for featured placement on Construction Rental Finder and put
            your company in front of contractors, builders and property owners
            looking for construction rentals and jobsite services in your area.
          </p>
          <Link
            href={forRentalCompaniesLink.href}
            className="mt-8 inline-flex rounded-sm bg-yellow px-7 py-3.5 font-heading text-base font-bold text-navy transition-colors hover:bg-yellow-dark"
          >
            {featuredCtaLabel}
          </Link>
        </div>

        <ul className="grid gap-3">
          {supportingItems.map(({ label, text, icon: Icon }) => (
            <li key={label} className="flex items-center gap-4 rounded-md border border-white/10 bg-navy-deep/60 p-4 sm:p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-yellow/40">
                <Icon aria-hidden className="size-5 text-yellow" />
              </span>
              <div>
                <p className="font-heading font-bold text-white">{label}</p>
                <p className="mt-0.5 text-sm text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
