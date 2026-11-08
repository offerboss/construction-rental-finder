import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import RegionAccordions from "../components/providers/RegionAccordions";
import { equipmentCategories } from "../lib/categories";
import { states } from "../lib/locations";
import { featuredCtaLabel, forRentalCompaniesLink } from "../lib/navigation";
import { groupProvidersByRegion, providerCountByState, providers } from "../lib/provider-directory";
import type { StateSlug } from "../lib/regions";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Construction Equipment Rental Providers",
  description: `Browse ${providers.length} construction equipment rental companies in Arizona, Colorado and Texas by region, with phone numbers, websites and the equipment each company rents.`,
  path: "/providers",
});

const directoryStates = states.map((state) => {
  const stateSlug = state.slug as StateSlug;
  return {
    state,
    stateSlug,
    total: providerCountByState(stateSlug),
    regionCount: groupProvidersByRegion(stateSlug).filter((group) => group.providers.length > 0).length,
  };
});

export default function ProvidersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Provider Directory"
        title="Construction Equipment Rental Providers"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Providers", href: "/providers" },
        ]}
      >
        <p>
          Browse {providers.length} construction equipment rental companies across Arizona, Colorado
          and Texas, organized by region. Each listing shows the company&apos;s location, phone
          number, website and the equipment categories it rents.
        </p>
      </PageHeader>

      <section aria-labelledby="states-nav-heading" className="bg-sand py-10 sm:py-12">
        <div className="container-page">
          <h2 id="states-nav-heading" className="font-heading text-sm font-bold tracking-wide text-navy uppercase">
            Browse by state
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {directoryStates.map(({ state, total, regionCount }) => (
              <li key={state.slug}>
                <a
                  href={`#${state.slug}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-md border border-navy/10 bg-white px-5 py-4 shadow-sm transition hover:border-navy/25 hover:shadow-md"
                >
                  <span>
                    <span className="block font-heading text-lg font-extrabold text-navy">{state.name}</span>
                    <span className="mt-0.5 block text-sm text-steel">
                      {total} companies · {regionCount} regions
                    </span>
                  </span>
                  <ArrowRight aria-hidden className="size-5 shrink-0 rotate-90 text-steel transition group-hover:text-navy" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex max-w-3xl gap-2.5 text-sm leading-relaxed text-ink/75">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-steel" />
            Listings are compiled from public business information. Confirm equipment availability,
            rates, delivery and operator requirements directly with each company.
          </p>
        </div>
      </section>

      {directoryStates.map(({ state, stateSlug, total, regionCount }, index) => (
        <section
          key={state.slug}
          id={state.slug}
          aria-labelledby={`${state.slug}-providers-heading`}
          className={`scroll-mt-24 py-14 sm:py-16 ${index % 2 === 0 ? "bg-white" : "bg-sand"}`}
        >
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                id={`${state.slug}-providers-heading`}
                eyebrow={state.name}
                title={`${state.name} Construction Equipment Rental Companies`}
              />
              <Link
                href={`/locations/${state.slug}`}
                className="inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline"
              >
                {`${state.name} equipment rental guide`}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
              {total} companies across {regionCount} regions. Expand a region to see its listings.
            </p>
            <div className="mt-8">
              <RegionAccordions stateSlug={stateSlug} />
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="provider-equipment-heading" className="border-t border-navy/10 bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading id="provider-equipment-heading" eyebrow="Browse Equipment" title="Know What You Need?" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {equipmentCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/equipment/${category.slug}`}
                  className="inline-flex rounded-sm border border-navy/15 px-4 py-2 font-heading text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-yellow"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Run a Construction Rental Company?"
        text="Apply for featured placement to reach customers searching for construction rentals in the markets you serve."
        buttonLabel={featuredCtaLabel}
        buttonHref={forRentalCompaniesLink.href}
      />
    </>
  );
}
