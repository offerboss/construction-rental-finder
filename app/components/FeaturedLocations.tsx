import { states } from "../lib/locations";
import ArrowLink from "./ArrowLink";
import LocationCard from "./LocationCard";
import SectionHeading from "./SectionHeading";

export default function FeaturedLocations() {
  return (
    <section id="locations" aria-labelledby="locations-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionHeading
              id="locations-heading"
              eyebrow="Browse by Location"
              title="Find Construction Equipment Rentals Near You"
            />
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel">
              Browse local construction equipment rental options across our
              first launch markets.
            </p>
          </div>
          <ArrowLink href="/locations" className="hidden sm:inline-flex">
            View All Locations
          </ArrowLink>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {states.map((state) => (
            <li key={state.slug}>
              <LocationCard state={state} />
            </li>
          ))}
        </ul>

        <ArrowLink href="/locations" className="mt-8 sm:hidden">
          View All Locations
        </ArrowLink>
      </div>
    </section>
  );
}
