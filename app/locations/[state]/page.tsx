import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryCard from "../../components/CategoryCard";
import CtaBanner from "../../components/CtaBanner";
import FaqSection from "../../components/FaqSection";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";
import { getCategories } from "../../lib/categories";
import { getState, statePopularEquipment, states } from "../../lib/locations";
import { pageMetadata } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[state]">) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return {};

  const cityNames = state.cities.slice(0, 3).map((city) => city.name);
  return pageMetadata({
    title: `Construction Equipment Rentals in ${state.name}`,
    description: `Find construction equipment rentals in ${state.name}, including ${cityNames.join(", ")}. Browse excavators, skid steers, lifts and more.`,
    path: `/locations/${state.slug}`,
    image: state.image,
  });
}

export default async function StatePage({ params }: PageProps<"/locations/[state]">) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) notFound();

  const popular = getCategories(statePopularEquipment);
  const otherStates = states.filter((other) => other.slug !== state.slug);

  return (
    <>
      <PageHeader
        eyebrow={`${state.name} Equipment Rentals`}
        title={`Construction Equipment Rentals in ${state.name}`}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: state.name, href: `/locations/${state.slug}` },
        ]}
        image={{ src: state.image, alt: state.imageAlt }}
      >
        <p>{state.intro}</p>
      </PageHeader>

      <section aria-labelledby="overview-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading id="overview-heading" eyebrow="Overview" title={`Renting Equipment in ${state.name}`} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
            {state.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="popular-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading id="popular-heading" eyebrow="Popular Equipment" title={`Popular Equipment in ${state.name}`} />
            <Link href="/equipment" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline">
              View All Equipment
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-6">
            {popular.map((category) => (
              <li key={category.slug}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="cities-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="cities-heading" eyebrow="Cities We Serve" title={`Equipment Rentals Across ${state.name}`} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {state.cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/locations/${state.slug}/${city.slug}`}
                  className="group flex h-full flex-col rounded-md border border-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-md sm:p-6"
                >
                  <h3 className="flex items-center gap-2 font-heading text-xl font-extrabold text-navy">
                    <MapPin aria-hidden className="size-5 shrink-0 text-yellow-dark" />
                    {city.name}, {state.abbreviation}
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/75">{city.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy group-hover:underline">
                    {`Equipment rentals in ${city.name}`}
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex flex-col justify-center rounded-md border border-dashed border-navy/20 bg-sand p-5 sm:p-6">
              <p className="font-heading font-bold text-navy">Other launch markets</p>
              <ul className="mt-3 space-y-2">
                {otherStates.map((other) => (
                  <li key={other.slug}>
                    <Link href={`/locations/${other.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline">
                      {`${other.name} equipment rentals`}
                      <ArrowRight aria-hidden className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <FaqSection title={`Common Questions About Renting in ${state.name}`} faqs={state.faqs} className="bg-sand" />

      <CtaBanner
        title={`Find Construction Equipment Rentals in ${state.name}`}
        text="Start with the equipment you need, then connect with local providers."
        buttonLabel="Browse Equipment"
        buttonHref="/equipment"
      />
    </>
  );
}
