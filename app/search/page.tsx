import type { Metadata } from "next";
import { ArrowRight, MapPin, Search, Wrench } from "lucide-react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { equipmentCategories } from "../lib/categories";
import { allCities, getState, states } from "../lib/locations";

export const metadata: Metadata = {
  title: "Search Equipment Rentals",
  description: "Search construction equipment rentals by equipment type and location.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

function readParam(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw?.trim().slice(0, 80) ?? "";
}

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** Existing category pages whose name contains, or is contained in, the query. */
function matchCategories(query: string) {
  const q = normalize(query);
  if (q.length < 3) return [];
  return equipmentCategories.filter((category) => {
    const names = [normalize(category.name), normalize(category.singular)];
    return names.some((name) => name.includes(q) || q.includes(name));
  });
}

/** Existing state and city pages named in the query. */
function matchLocations(query: string) {
  const q = ` ${normalize(query)} `;
  if (q.trim().length < 2) return [];
  const cityMatches = allCities
    .filter((city) => q.includes(` ${normalize(city.name)} `))
    .map((city) => ({
      label: `${city.name}, ${getState(city.stateSlug)!.abbreviation}`,
      href: `/locations/${city.stateSlug}/${city.slug}`,
    }));
  const stateMatches = states
    .filter((state) => q.includes(` ${normalize(state.name)} `) || q.includes(` ${state.abbreviation.toLowerCase()} `))
    .map((state) => ({ label: state.name, href: `/locations/${state.slug}` }));
  return [...cityMatches, ...stateMatches];
}

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const params = await searchParams;
  const equipment = readParam(params.equipment);
  const location = readParam(params.location);

  const categoryMatches = equipment ? matchCategories(equipment) : [];
  const locationMatches = location ? matchLocations(location) : [];
  const hasMatches = categoryMatches.length > 0 || locationMatches.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Search Is Expanding"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Search", href: "/search" },
        ]}
      >
        <p>
          Full equipment search is on the way. For now, browse by equipment type or location to
          find rental options near your jobsite.
        </p>
      </PageHeader>

      <section aria-labelledby="search-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="max-w-4xl">
          <SectionHeading id="search-heading" eyebrow="Your Search" title={equipment || location ? "You searched for" : "Start browsing"} />

          {(equipment || location) && (
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {equipment && (
                <div className="flex items-center gap-3 rounded-md border border-navy/10 bg-white p-4">
                  <Wrench aria-hidden className="size-5 shrink-0 text-steel" />
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-steel uppercase">Equipment</dt>
                    <dd className="font-heading text-lg font-bold break-words text-navy">{equipment}</dd>
                  </div>
                </div>
              )}
              {location && (
                <div className="flex items-center gap-3 rounded-md border border-navy/10 bg-white p-4">
                  <MapPin aria-hidden className="size-5 shrink-0 text-steel" />
                  <div>
                    <dt className="text-xs font-bold tracking-wide text-steel uppercase">Location</dt>
                    <dd className="font-heading text-lg font-bold break-words text-navy">{location}</dd>
                  </div>
                </div>
              )}
            </dl>
          )}

          {hasMatches && (
            <div className="mt-8 rounded-md border border-navy/10 border-l-4 border-l-yellow bg-white p-5 sm:p-6">
              <h3 className="font-heading text-lg font-bold text-navy">Pages that match your search</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {categoryMatches.map((category) => (
                  <li key={category.slug}>
                    <Link href={`/equipment/${category.slug}`} className="inline-flex items-center gap-1.5 rounded-sm bg-sand px-3 py-2 font-heading text-sm font-bold text-navy transition-colors hover:bg-yellow">
                      {`${category.singular} Rentals`}
                      <ArrowRight aria-hidden className="size-3.5" />
                    </Link>
                  </li>
                ))}
                {locationMatches.map((match) => (
                  <li key={match.href}>
                    <Link href={match.href} className="inline-flex items-center gap-1.5 rounded-sm bg-sand px-3 py-2 font-heading text-sm font-bold text-navy transition-colors hover:bg-yellow">
                      {`Equipment Rentals in ${match.label}`}
                      <ArrowRight aria-hidden className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link href="/equipment" className="group flex items-center justify-between gap-4 rounded-md bg-navy p-6 text-white transition-colors hover:bg-navy-deep">
              <span>
                <span className="block font-heading text-xl font-extrabold">Browse Equipment</span>
                <span className="mt-1 block text-sm text-white/75">All 12 rental categories</span>
              </span>
              <ArrowRight aria-hidden className="size-6 shrink-0 text-yellow transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/locations" className="group flex items-center justify-between gap-4 rounded-md bg-navy p-6 text-white transition-colors hover:bg-navy-deep">
              <span>
                <span className="block font-heading text-xl font-extrabold">Browse Locations</span>
                <span className="mt-1 block text-sm text-white/75">Colorado, Arizona and Texas</span>
              </span>
              <ArrowRight aria-hidden className="size-6 shrink-0 text-yellow transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-steel">
            <Search aria-hidden className="size-4" />
            <Link href="/#hero-heading" className="font-semibold text-navy hover:underline">Search again from the homepage</Link>
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
