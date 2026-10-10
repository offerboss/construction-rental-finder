import type { Metadata } from "next";
import { ArrowUpRight, ClipboardList, Search, Users } from "lucide-react";
import GhlFormEmbed from "../components/GhlFormEmbed";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { pageMetadata } from "../lib/seo";

const TITLE = "Apply to Be Featured on Construction Rental Finder";
const baseMetadata = pageMetadata({
  title: TITLE,
  description:
    "Put your construction rental company or jobsite service business in front of customers actively searching in the markets you serve. Apply for featured placement on Construction Rental Finder.",
  path: "/for-rental-companies",
});

// The title already names the site, so skip the "| Construction Rental Finder" template suffix.
export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: TITLE },
  openGraph: { ...baseMetadata.openGraph, title: TITLE },
};

const GHL_FORM = {
  id: "bbZH5BYscAmBHJGavZRq",
  name: "Get Featured on Construction Rental Finder",
  height: 1537,
};

const providerTypes = [
  "Heavy equipment",
  "Lifts & material handling",
  "Concrete & compaction",
  "Generators & lighting",
  "Portable toilets",
  "Temporary fencing",
  "Dumpsters & waste equipment",
  "Trailers",
  "Other construction rentals & site services",
];

const reasons = [
  {
    icon: Search,
    title: "Reach active local searches",
    text: "Featured placement can increase your visibility with contractors and customers actively searching for construction rentals and jobsite services.",
  },
  {
    icon: ClipboardList,
    title: "Simple application",
    text: "One short form covering your company information, service area and service categories.",
  },
  {
    icon: Users,
    title: "A broad range of providers welcome",
    text: "Construction rental companies and jobsite service providers of all kinds are welcome to apply.",
  },
];

export default function ForRentalCompaniesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Rental Companies"
        title="Get Your Construction Rental Company Featured on Construction Rental Finder"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "For Rental Companies", href: "/for-rental-companies" },
        ]}
      >
        <p>
          Construction Rental Finder helps contractors, builders, project managers and property
          owners connect with local construction rental companies and jobsite service providers.
        </p>
        <p>
          This page is for companies interested in featured placement: enhanced visibility, beyond
          our standard directory listings, with customers searching for construction rentals and
          site services in the markets you serve.
        </p>
      </PageHeader>

      <section aria-labelledby="why-apply-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="why-apply-heading" eyebrow="Why Apply" title="Why Apply for Featured Placement" />
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col rounded-md border border-navy/10 bg-white p-6 shadow-sm sm:p-7">
                <span className="flex size-12 items-center justify-center rounded-sm bg-yellow">
                  <Icon aria-hidden className="size-6 text-navy" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink/75">{text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-md border border-navy/10 bg-sand p-5 sm:p-6">
            <h3 className="font-heading text-sm font-bold tracking-wide text-navy uppercase">Companies we work with include</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {providerTypes.map((type) => (
                <li key={type} className="rounded-sm border border-navy/15 bg-white px-3 py-1.5 text-sm font-medium text-ink">
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="apply" aria-labelledby="apply-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="apply-heading"
              eyebrow="Featured Placement"
              title="Apply to Be Featured on Construction Rental Finder"
            />
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Put your company in front of customers actively searching for construction rentals and
              jobsite services in the markets you serve. Tell us about your business below and
              we&apos;ll follow up about featured placement opportunities.
            </p>
            <aside aria-label="About this application" className="mt-8 rounded-md border border-navy/10 border-l-4 border-l-yellow bg-white p-5 text-sm leading-relaxed text-ink/75">
              Construction Rental Finder may include rental companies and service providers in its
              directory independently of this application. This form is specifically for companies
              interested in featured placement, and submitting it does not guarantee acceptance. Our
              team reviews every application and will follow up about available opportunities.
            </aside>
          </div>

          <div className="rounded-md border border-navy/10 bg-white p-2 shadow-sm sm:p-3">
            <GhlFormEmbed formId={GHL_FORM.id} formName={GHL_FORM.name} height={GHL_FORM.height} />
          </div>
        </div>
      </section>

      <section aria-label="Rental Growth Systems" className="border-t border-navy/10 bg-white py-8">
        <div className="container-page flex flex-col gap-3 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>Construction Rental Finder is part of the Rental Growth Systems network.</p>
          <a
            href="https://rentalgrowthsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start rounded-sm border border-navy/15 px-3.5 py-2 font-semibold text-navy transition-colors hover:border-navy sm:self-auto"
          >
            Looking for broader growth help? Visit Rental Growth Systems
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </section>
    </>
  );
}
