import type { CategorySlug } from "./categories";
import { providerData } from "./provider-data.generated";
import { cityPageRegions, getRegion, getRegionsByState, type RegionSlug, type StateSlug } from "./regions";

/**
 * A published provider listing. Generated from the verified research exports
 * by scripts/import-providers.mjs — public-facing fields only. Never hand-edit
 * provider-data.generated.ts; change overrides.json and re-run the import.
 */
export type Provider = {
  /** Stable research business_id, e.g. "CRF-CO-0002" */
  id: string;
  name: string;
  phone?: string;
  website?: string;
  street?: string;
  city: string;
  stateSlug: StateSlug;
  stateCode: "AZ" | "CO" | "TX";
  zip?: string;
  /** Hand-reviewed description; only present when it adds information beyond the listing fields */
  description?: string;
  /** Paid/featured placement — its website link uses rel="sponsored" */
  featured?: boolean;
  primaryCategory: CategorySlug;
  /** Primary first, then additional categories */
  categories: CategorySlug[];
  /** One primary directory region, from the yard city */
  regionSlug: RegionSlug;
  /** Existing CRF city pages ("texas/dallas") matched from the yard city and documented markets */
  cityPages: string[];
};

export const providers: Provider[] = providerData;

export type ProviderFilter = {
  state?: StateSlug;
  region?: RegionSlug;
  category?: CategorySlug;
};

export function filterProviders({ state, region, category }: ProviderFilter = {}) {
  return providers.filter(
    (provider) =>
      (!state || provider.stateSlug === state) &&
      (!region || provider.regionSlug === region) &&
      (!category || provider.categories.includes(category)),
  );
}

export function getProvidersForCityPage(stateSlug: string, citySlug: string) {
  const key = `${stateSlug}/${citySlug}`;
  return providers.filter((provider) => provider.cityPages.includes(key));
}

/** FNV-1a: a small stable hash so page-specific selections don't change between builds. */
function stableHash(value: string) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
}

const companyKey = (provider: Provider) =>
  provider.website ? new URL(provider.website).hostname.replace(/^www\./, "") : provider.name;

/**
 * Providers for a city page. `matched` are providers whose yard city or
 * documented markets include this page. When nothing matches, `regional`
 * holds up to `regionalLimit` providers based in the page's directory region
 * (e.g. DFW Metro for a suburb page). That is a region-level list: present it
 * under `regionalHeading` ("Additional DFW Metro Equipment Rental Companies"),
 * never as companies serving the suburb itself — only `matched` carries that.
 *
 * The regional selection is stable per page, varies between pages (so suburb
 * pages don't repeat one identical block) and takes at most one branch per
 * company so a single chain can't fill the list.
 */
export function getCityPageProviders(stateSlug: string, citySlug: string, { regionalLimit = 6 } = {}) {
  const pageKey = `${stateSlug}/${citySlug}`;
  const matched = getProvidersForCityPage(stateSlug, citySlug);
  const regionSlug = cityPageRegions[pageKey];
  const region = regionSlug ? getRegion(regionSlug) : undefined;
  const regionProviders = region ? filterProviders({ region: region.slug }) : [];

  let regional: Provider[] = [];
  if (matched.length === 0 && region) {
    const seen = new Set<string>();
    regional = [...regionProviders]
      .sort((a, b) => stableHash(`${pageKey}:${a.id}`) - stableHash(`${pageKey}:${b.id}`))
      .filter((provider) => {
        const key = companyKey(provider);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, regionalLimit)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  return {
    matched,
    region,
    regional,
    /** All providers in the page's region, for "browse all" links */
    regionTotal: regionProviders.length,
    regionalHeading: region && regional.length ? `Additional ${region.name} Equipment Rental Companies` : undefined,
  };
}

/** Provider counts per state, for summaries. */
export function providerCountByState(stateSlug: StateSlug) {
  return providers.filter((provider) => provider.stateSlug === stateSlug).length;
}

/** Every region of a state in display order, including regions with no providers yet. */
export function groupProvidersByRegion(stateSlug: StateSlug, category?: CategorySlug) {
  return getRegionsByState(stateSlug).map((region) => ({
    region,
    providers: filterProviders({ region: region.slug, category }),
  }));
}
