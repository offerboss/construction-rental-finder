import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getCityPageProviders } from "../../lib/provider-directory";
import SectionHeading from "../SectionHeading";
import ProviderListing from "./ProviderListing";

const VISIBLE_MATCHED = 6;

type CityProviderSectionProps = {
  stateSlug: string;
  citySlug: string;
  cityName: string;
};

/**
 * Rental companies for a city page. Directly matched providers come first
 * (yard in the city or documented service there). Without matches, it shows a
 * small region-level fallback that is labeled as such and never claims
 * service in the city itself.
 */
export default function CityProviderSection({ stateSlug, citySlug, cityName }: CityProviderSectionProps) {
  const { matched, region, regional, regionTotal, regionalHeading } = getCityPageProviders(stateSlug, citySlug);
  if (!matched.length && !regional.length) return null;

  const directoryHref = region ? `/providers#region-${region.slug}` : "/providers";
  const visible = matched.slice(0, VISIBLE_MATCHED);
  const more = matched.slice(VISIBLE_MATCHED);

  return (
    <section aria-labelledby="city-providers-heading" className="border-y border-navy/10 bg-white py-14 sm:py-16">
      <div className="container-page">
        {matched.length > 0 ? (
          <>
            <SectionHeading
              id="city-providers-heading"
              eyebrow="Rental Companies"
              title={`Equipment Rental Companies Serving ${cityName}`}
            />
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
              Companies located in {cityName} or with documented service there. Confirm equipment
              availability, rates and delivery directly with each company.
            </p>
            <ul className="mt-8 divide-y divide-navy/10 overflow-hidden rounded-md border border-navy/10 bg-sand/40">
              {visible.map((provider) => (
                <li key={provider.name}>
                  <ProviderListing provider={provider} headingLevel="h3" />
                </li>
              ))}
            </ul>
            {more.length > 0 && (
              <details className="group mt-3 overflow-hidden rounded-md border border-navy/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-white px-4 py-3 font-heading text-sm font-bold text-navy hover:bg-sand/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy sm:px-6 [&::-webkit-details-marker]:hidden">
                  {`Show all ${matched.length} companies`}
                  <ChevronDown aria-hidden className="size-5 shrink-0 text-steel transition-transform group-open:rotate-180" />
                </summary>
                <ul className="divide-y divide-navy/10 border-t border-navy/10 bg-sand/40">
                  {more.map((provider) => (
                    <li key={provider.name}>
                      <ProviderListing provider={provider} headingLevel="h3" />
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </>
        ) : (
          <>
            <SectionHeading id="city-providers-heading" eyebrow="Rental Companies" title={regionalHeading!} />
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
              We don&apos;t list a rental company with documented service in {cityName} yet. These
              companies are based elsewhere in the {region!.name} region; contact them to confirm they
              deliver to your jobsite.
            </p>
            <ul className="mt-8 divide-y divide-navy/10 overflow-hidden rounded-md border border-navy/10 bg-sand/40">
              {regional.map((provider) => (
                <li key={provider.name}>
                  <ProviderListing provider={provider} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </>
        )}

        <Link
          href={directoryHref}
          className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline"
        >
          {region ? `Browse all ${regionTotal} ${region.name} companies in the provider directory` : "Browse the provider directory"}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
    </section>
  );
}
