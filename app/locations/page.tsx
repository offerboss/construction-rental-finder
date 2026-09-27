import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { equipmentCategories } from "../lib/categories";
import { states } from "../lib/locations";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Construction Equipment Rentals by Location",
  description:
    "Find construction equipment rentals in Colorado, Arizona and Texas. Browse launch markets and cities to connect with local rental providers.",
  path: "/locations",
});

export default function LocationsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Browse by Location"
        title="Construction Equipment Rentals by Location"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
      >
        <p>
          Browse construction equipment rental options across our launch markets in Colorado,
          Arizona and Texas.
        </p>
      </PageHeader>

      <section aria-labelledby="states-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="states-heading" eyebrow="Launch Markets" title="Choose Your State" />
          <ul className="mt-10 space-y-6 lg:space-y-8">
            {states.map((state, index) => (
              <li key={state.slug}>
                <article
                  className={`group relative flex flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm transition hover:shadow-lg lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy lg:aspect-auto lg:min-h-96 lg:w-[55%] lg:shrink-0">
                    <Image
                      src={state.image}
                      alt={state.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="font-heading text-xs font-bold tracking-[0.18em] text-steel uppercase">
                      {state.abbreviation} · Launch Market
                    </p>
                    <h2 className="mt-2 flex items-center gap-3 font-heading text-3xl font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
                      <span aria-hidden className="h-8 w-1.5 bg-yellow" />
                      {state.name}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-ink/80">{state.description}</p>

                    <h3 className="mt-6 font-heading text-xs font-bold tracking-wide text-navy uppercase">Featured cities</h3>
                    <ul className="relative z-10 mt-3 flex flex-wrap gap-2">
                      {state.cities.map((city) => (
                        <li key={city.slug}>
                          <Link
                            href={`/locations/${state.slug}/${city.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-sm border border-navy/15 bg-sand px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy"
                          >
                            <MapPin aria-hidden className="size-3.5 text-steel" />
                            {city.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/locations/${state.slug}`}
                      className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-sm bg-navy px-6 py-3 font-heading text-sm font-bold text-white transition-colors after:absolute after:inset-0 hover:bg-navy-deep"
                    >
                      {`Explore ${state.name} Rentals`}
                      <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="hub-equipment-heading" className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading id="hub-equipment-heading" eyebrow="Browse Equipment" title="Know What You Need?" />
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
        title="Browse Every Equipment Category"
        text="Compare excavators, loaders, lifts, forklifts, generators and more."
        buttonLabel="Browse Equipment"
        buttonHref="/equipment"
      />
    </>
  );
}
