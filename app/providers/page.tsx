import { ArrowRight, ClipboardList, MapPin, Wrench } from "lucide-react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { featuredCtaLabel, forRentalCompaniesLink } from "../lib/navigation";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Construction Equipment Rental Providers",
  description:
    "Construction Rental Finder is building a directory of local equipment rental providers. Browse by equipment or location, or apply for featured placement.",
  path: "/providers",
});

const steps = [
  { icon: Wrench, title: "Browse by equipment", text: "Start with the machine you need and learn what to consider before you rent.", href: "/equipment", cta: "Browse Equipment" },
  { icon: MapPin, title: "Browse by location", text: "Explore our launch markets in Colorado, Arizona and Texas, down to the city level.", href: "/locations", cta: "Browse Locations" },
  { icon: ClipboardList, title: "Rental companies apply", text: "Rental companies and jobsite service providers can apply for featured placement in the markets they serve.", href: forRentalCompaniesLink.href, cta: featuredCtaLabel },
];

export default function ProvidersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rental Providers"
        title="Construction Equipment Rental Providers"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Providers", href: "/providers" },
        ]}
      >
        <p>
          Construction Rental Finder is building a growing directory of construction equipment
          rental providers across our launch markets. Provider profiles will appear here as
          companies join the directory.
        </p>
      </PageHeader>

      <section aria-labelledby="how-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="how-heading" eyebrow="How the Directory Works" title="Find Equipment While Our Directory Grows" />
          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, text, href, cta }, index) => (
              <li key={title} className="flex flex-col rounded-md border border-navy/10 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-sm bg-yellow">
                    <Icon aria-hidden className="size-6 text-navy" />
                  </span>
                  <span className="font-heading text-sm font-bold text-steel">Step {index + 1}</span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink/75">{text}</p>
                <Link href={href} className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline">
                  {cta}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="providers-cta-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-5 lg:grid-cols-2">
          <div className="rounded-md border border-navy/10 bg-sand p-7 sm:p-10">
            <h2 id="providers-cta-heading" className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Looking for Equipment?
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">
              Browse equipment categories and locations to find rental options for your project.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/equipment" className="inline-flex items-center justify-center rounded-sm bg-navy px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-navy-deep">
                Browse Equipment
              </Link>
              <Link href="/locations" className="inline-flex items-center justify-center rounded-sm border-2 border-navy px-6 py-2.5 font-heading text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white">
                Browse Locations
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md bg-navy p-7 sm:p-10">
            <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-hazard" />
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">Rent Out Construction Equipment?</h2>
            <p className="mt-3 text-lg leading-relaxed text-white/80">
              Apply for featured placement to reach customers searching for construction rentals in the markets you serve.
            </p>
            <Link href={forRentalCompaniesLink.href} className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-yellow px-6 py-3 font-heading text-sm font-bold text-navy transition-colors hover:bg-yellow-dark">
              {featuredCtaLabel}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
