import { ArrowRight, BookOpen, CalendarRange, ExternalLink, Mountain, Puzzle, Ruler, ShieldCheck, Truck, Warehouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryCard from "../../../components/CategoryCard";
import CtaBanner from "../../../components/CtaBanner";
import FaqSection from "../../../components/FaqSection";
import PageHeader from "../../../components/PageHeader";
import SectionHeading from "../../../components/SectionHeading";
import { getCategories, getCategory } from "../../../lib/categories";
import { cityPopularEquipment, getCity, getState, states, type City, type State } from "../../../lib/locations";
import { projectTypes } from "../../../lib/projects";
import { getPublishedGuide } from "../../../lib/resources";
import { pageMetadata, type Faq } from "../../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return states.flatMap((state) => state.cities.map((city) => ({ state: state.slug, city: city.slug })));
}

function resolve(stateSlug: string, citySlug: string) {
  const state = getState(stateSlug);
  const city = getCity(stateSlug, citySlug);
  return state && city ? { state, city } : null;
}

export async function generateMetadata({ params }: PageProps<"/locations/[state]/[city]">) {
  const { state: stateSlug, city: citySlug } = await params;
  const match = resolve(stateSlug, citySlug);
  if (!match) return {};
  const { state, city } = match;

  return pageMetadata({
    title: `Construction Equipment Rentals in ${city.name}, ${state.abbreviation}`,
    description:
      city.metaDescription ??
      `Find construction equipment rentals in ${city.name}, ${state.abbreviation}. Browse excavators, skid steers, telehandlers, aerial lifts and more from local providers.`,
    path: `/locations/${state.slug}/${city.slug}`,
    image: city.heroImage?.src ?? state.image,
  });
}

function rentalTips(city: City, state: State) {
  return [
    { icon: Truck, title: "Delivery radius", text: `Confirm the provider delivers to your ${city.name} jobsite, and ask how delivery and pickup fees are calculated for your location in ${city.region}.` },
    { icon: Warehouse, title: "Jobsite access", text: "Check gate widths, overhead lines, parking and unloading space before delivery, especially on tight urban or residential lots." },
    { icon: Ruler, title: "Machine size", text: "Match the machine to your work area, dig or lift requirements and the surfaces you need to protect. Bigger isn't always better." },
    { icon: Mountain, title: "Terrain and conditions", text: state.terrainTip },
    { icon: CalendarRange, title: "Rental duration", text: `${state.seasonTip} Ask about daily, weekly and monthly rates to match your timeline.` },
    { icon: Puzzle, title: "Attachments", text: "Request buckets, forks, augers or other attachments when you book so everything arrives together." },
  ];
}

function cityFaqs(city: City, state: State): Faq[] {
  return [
    {
      question: `How do I find construction equipment rentals in ${city.name}?`,
      answer: `Start by choosing the type of equipment your project needs, then contact providers that serve ${city.region} to confirm availability, delivery to your ${city.name} jobsite and rental terms.`,
    },
    {
      question: `Can rental equipment be delivered to jobsites in ${city.name}?`,
      answer: `Many rental providers offer delivery and pickup, but delivery areas and fees vary. Share your site address and any access limits in ${city.name} when you request a quote.`,
    },
    {
      question: `What equipment is commonly rented for projects in ${city.name}?`,
      answer: `Excavators, mini excavators, skid steers, telehandlers and aerial lifts are common choices for site work and building projects. ${state.terrainTip}`,
    },
    {
      question: `How far ahead should I book equipment in ${city.name}?`,
      answer: `It depends on the machine and the time of year. ${state.seasonTip} Larger or specialty equipment may need more lead time.`,
    },
  ];
}

/** Cities from `nearbyCities` when set, otherwise every other city in the state. */
function nearbyFor(city: City, state: State) {
  if (!city.nearbyCities) return state.cities.filter((other) => other.slug !== city.slug);
  return city.nearbyCities
    .map((slug) => state.cities.find((other) => other.slug === slug))
    .filter((other): other is City => Boolean(other));
}

function NearbySection({ city, state, title }: { city: City; state: State; title: string }) {
  return (
    <section aria-labelledby="nearby-heading" className="bg-sand py-14 sm:py-16">
      <div className="container-page">
        <SectionHeading id="nearby-heading" eyebrow="Nearby Cities" title={title} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nearbyFor(city, state).map((other) => (
            <li key={other.slug}>
              <Link
                href={`/locations/${state.slug}/${other.slug}`}
                className="group flex items-center justify-between gap-3 rounded-md border border-navy/10 bg-white px-5 py-4 font-heading font-bold text-navy shadow-sm transition hover:border-navy/25 hover:shadow-md"
              >
                {other.name}, {state.abbreviation}
                <ArrowRight aria-hidden className="size-4 shrink-0 text-steel transition group-hover:translate-x-0.5 group-hover:text-navy" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/locations/${state.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline"
        >
          {`All ${state.name} equipment rentals`}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function breadcrumbsFor(city: City, state: State) {
  return [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: state.name, href: `/locations/${state.slug}` },
    { name: city.name, href: `/locations/${state.slug}/${city.slug}` },
  ];
}

/** Layout for cities with researched local content (`localIntro` set). */
function RichCityPage({ city, state }: { city: City; state: State }) {
  const featured = (city.featuredEquipment ?? []).flatMap(({ slug, reason }) => {
    const category = getCategory(slug);
    return category ? [{ category, reason }] : [];
  });
  const guides = (city.guides ?? []).flatMap(({ slug, reason }) => {
    const guide = getPublishedGuide(slug);
    return guide ? [{ ...guide, reason }] : [];
  });

  return (
    <>
      <PageHeader
        eyebrow={`${city.name} Equipment Rentals`}
        title={`Construction Equipment Rentals in ${city.name}, ${state.abbreviation}`}
        breadcrumbs={breadcrumbsFor(city, state)}
        image={{ src: state.image, alt: state.imageAlt }}
        figure={city.heroImage}
      >
        {city.localIntro?.map((paragraph, index) => (
          <p key={index} className={index > 0 ? "text-base text-white/75" : undefined}>
            {paragraph}
          </p>
        ))}
      </PageHeader>

      {city.useCaseContext && city.useCaseContext.length > 0 && (
        <section aria-labelledby="city-work-heading" className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <SectionHeading id="city-work-heading" eyebrow="Local Work" title={`Equipment Work in ${city.name}`} />
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
              {city.useCaseContext.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {featured.length > 0 && (
        <section aria-labelledby="city-featured-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                id="city-featured-heading"
                eyebrow="Featured Equipment"
                title={`Equipment for ${city.name} Projects`}
              />
              <Link href="/equipment" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline">
                View All Equipment
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map(({ category, reason }) => (
                <li key={category.slug}>
                  <Link
                    href={`/equipment/${category.slug}`}
                    className="group flex h-full gap-4 rounded-md border border-navy/10 bg-white p-4 shadow-sm transition hover:border-navy/25 hover:shadow-md sm:p-5"
                  >
                    <span className="relative size-20 shrink-0 overflow-hidden rounded-sm border border-navy/10 bg-[#f8f4ec]">
                      <Image src={category.image} alt="" fill sizes="80px" className="object-contain p-1" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 font-heading text-lg font-bold text-navy">
                        {category.singular} Rentals
                        <ArrowRight aria-hidden className="size-4 shrink-0 text-steel transition group-hover:translate-x-0.5 group-hover:text-navy" />
                      </span>
                      <span className="mt-1.5 block leading-relaxed text-ink/75">{reason}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {city.siteConsiderations && city.siteConsiderations.length > 0 && (
        <section aria-labelledby="city-rules-heading" className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="container-page">
            <SectionHeading id="city-rules-heading" eyebrow="Site Rules" title={`Before You Rent in ${city.name}`} />
            <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">
              Local rules and conditions worth checking before equipment arrives. Requirements change and
              depend on the project, so confirm the details with the agency for your site.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.siteConsiderations.map((item) => (
                <li key={item.title} className="flex flex-col rounded-md border border-navy/10 bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-navy">
                      <ShieldCheck aria-hidden className="size-5 text-yellow" />
                    </span>
                    <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink/75">{item.text}</p>
                  <ul className="mt-auto space-y-1.5 border-t border-navy/10 pt-4 text-sm">
                    {item.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-1.5 font-semibold text-steel hover:text-navy hover:underline"
                        >
                          <ExternalLink aria-hidden className="mt-0.5 size-3.5 shrink-0" />
                          {`Source: ${source.label}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <NearbySection city={city} state={state} title={`Equipment Rentals Near ${city.name}`} />

      {guides.length > 0 && (
        <section aria-labelledby="city-guides-heading" className="bg-white py-14 sm:py-16">
          <div className="container-page">
            <SectionHeading id="city-guides-heading" eyebrow="Guides" title="Helpful Rental Guides" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/resources/${guide.slug}`}
                    className="group flex h-full gap-4 rounded-md border border-navy/10 bg-white p-5 shadow-sm transition hover:border-navy/25 hover:shadow-md"
                  >
                    <BookOpen aria-hidden className="size-6 shrink-0 text-navy" />
                    <span>
                      <span className="block font-heading text-lg font-bold text-navy">{guide.title}</span>
                      <span className="mt-1 block leading-relaxed text-ink/75">{guide.reason}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {city.faqs && city.faqs.length > 0 && (
        <FaqSection title={`Questions About Renting in ${city.name}`} faqs={city.faqs} />
      )}

      <CtaBanner
        title={`Find Construction Equipment Rentals in ${city.name}`}
        text="Browse equipment categories to find the right machine for your project."
        buttonLabel="Browse Equipment"
        buttonHref="/equipment"
      />
    </>
  );
}

export default async function CityPage({ params }: PageProps<"/locations/[state]/[city]">) {
  const { state: stateSlug, city: citySlug } = await params;
  const match = resolve(stateSlug, citySlug);
  if (!match) notFound();
  const { state, city } = match;

  if (city.localIntro) return <RichCityPage city={city} state={state} />;

  const popular = getCategories(cityPopularEquipment);

  return (
    <>
      <PageHeader
        eyebrow={`${city.name} Equipment Rentals`}
        title={`Construction Equipment Rentals in ${city.name}, ${state.abbreviation}`}
        breadcrumbs={breadcrumbsFor(city, state)}
        image={{ src: state.image, alt: state.imageAlt }}
      >
        <p>
          {city.shortDescription} Construction Rental Finder helps contractors, builders and DIYers
          find local providers for excavators, skid steers, aerial lifts, forklifts and more across{" "}
          {city.region}.
        </p>
        <p className="text-base text-white/75">
          Choose the equipment your project needs, then contact providers that serve {city.name} to
          confirm availability, delivery and rental terms. Sharing your site address, access limits
          and timeline up front makes it easier to get the right machine on time.
        </p>
      </PageHeader>

      <section aria-labelledby="city-popular-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              id="city-popular-heading"
              eyebrow="Popular Equipment"
              title={`Popular Equipment Rentals in ${city.name}`}
            />
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

      <section aria-labelledby="projects-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="projects-heading" eyebrow="By Project" title="Equipment for Common Projects" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project) => (
              <li key={project.title} className="flex flex-col rounded-md border border-navy/10 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-heading text-lg font-bold text-navy">{project.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink/75">{project.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2 border-t border-navy/10 pt-4">
                  {project.equipment.map((slug) => {
                    const category = getCategory(slug)!;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/equipment/${slug}`}
                          className="inline-flex rounded-sm bg-sand px-2.5 py-1 text-sm font-semibold text-navy transition-colors hover:bg-yellow"
                        >
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="tips-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="tips-heading" eyebrow="Rental Tips" title={`Rental Tips for ${city.name}`} />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {rentalTips(city, state).map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-navy">
                  <Icon aria-hidden className="size-6 text-yellow" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-1 leading-relaxed text-ink/75">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NearbySection city={city} state={state} title={`More ${state.name} Locations`} />

      <FaqSection title={`Questions About Renting in ${city.name}`} faqs={cityFaqs(city, state)} />

      <CtaBanner
        title={`Find Construction Equipment Rentals in ${city.name}`}
        text="Browse equipment categories to find the right machine for your project."
        buttonLabel="Browse Equipment"
        buttonHref="/equipment"
      />
    </>
  );
}
