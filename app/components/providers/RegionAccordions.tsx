import { ChevronDown } from "lucide-react";
import type { Provider } from "../../lib/provider-directory";
import { groupProvidersByRegion } from "../../lib/provider-directory";
import type { StateSlug } from "../../lib/regions";
import ProviderListing from "./ProviderListing";

type RegionAccordionsProps = {
  stateSlug: StateSlug;
};

/**
 * A state's populated directory regions as native <details> accordions.
 * Place under an H2: region names are H3 and provider names H4.
 * Listings are server-rendered in the HTML whether or not a region is open,
 * so they are readable without interaction. Empty regions are omitted.
 */
export default function RegionAccordions({ stateSlug }: RegionAccordionsProps) {
  const groups = groupProvidersByRegion(stateSlug).filter((group) => group.providers.length > 0);

  return (
    <div className="divide-y divide-navy/10 overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm">
      {groups.map(({ region, providers }) => (
        <RegionAccordion key={region.slug} id={`region-${region.slug}`} name={region.name} providers={providers} />
      ))}
    </div>
  );
}

function RegionAccordion({ id, name, providers }: { id: string; name: string; providers: Provider[] }) {
  return (
    <details id={id} className="group scroll-mt-28">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition-colors select-none hover:bg-sand/70 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy sm:px-6 [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-heading text-base font-bold text-navy sm:text-lg">{name}</h3>
          <span className="rounded-sm border border-navy/10 bg-sand px-2 py-0.5 text-xs font-bold tracking-wide text-steel uppercase">
            {providers.length} {providers.length === 1 ? "company" : "companies"}
          </span>
        </span>
        <ChevronDown aria-hidden className="size-5 shrink-0 text-steel transition-transform group-open:rotate-180" />
      </summary>
      <ul className="divide-y divide-navy/10 border-t border-navy/10 bg-sand/40">
        {providers.map((provider) => (
          <li key={provider.name}>
            <ProviderListing provider={provider} headingLevel="h4" />
          </li>
        ))}
      </ul>
    </details>
  );
}
