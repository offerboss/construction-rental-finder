import { ArrowRight, Check, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoryCard from "../../components/CategoryCard";
import CtaBanner from "../../components/CtaBanner";
import FaqSection from "../../components/FaqSection";
import LocationCard from "../../components/LocationCard";
import SectionHeading from "../../components/SectionHeading";
import { equipmentCategories, getCategories, getCategory } from "../../lib/categories";
import { categoryContent, rentalDurationConsideration } from "../../lib/category-content";
import { states } from "../../lib/locations";
import { pageMetadata } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return equipmentCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/equipment/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return pageMetadata({
    title: `${category.singular} Rentals Near You`,
    description: categoryContent[category.slug].metaDescription,
    path: `/equipment/${category.slug}`,
    image: category.image,
  });
}

export default async function CategoryPage({ params }: PageProps<"/equipment/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const content = categoryContent[category.slug];
  const considerations = [...content.considerations, rentalDurationConsideration];
  const related = getCategories(content.related);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-navy/10 bg-sand">
        <div className="container-page grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-16">
          <div>
            <Breadcrumbs
              tone="light"
              items={[
                { name: "Home", href: "/" },
                { name: "Equipment", href: "/equipment" },
                { name: category.name, href: `/equipment/${category.slug}` },
              ]}
            />
            <p className="mt-6 flex items-center gap-3 font-heading text-xs font-bold tracking-[0.12em] text-navy uppercase sm:text-sm sm:tracking-[0.18em]">
              <span aria-hidden className="h-1 w-8 bg-yellow" />
              Equipment Rentals
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-navy sm:text-5xl">
              {category.singular} Rentals Near You
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">{content.intro}</p>

            <div className="mt-8 max-w-xl rounded-md border border-navy/10 bg-white p-4 shadow-sm sm:p-5">
              <p className="font-heading text-xs font-bold tracking-wide text-navy uppercase">Where do you need it?</p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {states.map((state) => (
                  <li key={state.slug}>
                    <Link
                      href={`/locations/${state.slug}`}
                      className="flex items-center justify-center gap-2 rounded-sm border border-navy/15 bg-sand px-3 py-3 font-heading text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-yellow"
                    >
                      <MapPin aria-hidden className="size-4" />
                      {state.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/locations" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-navy hover:underline">
                View all locations
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div aria-hidden className="absolute top-5 -right-3 -bottom-3 left-5 bg-hazard sm:-right-4 sm:-bottom-4" />
            <div className="relative aspect-square overflow-hidden rounded-md border border-navy/10 bg-[#f8f4ec] shadow-lg">
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                preload
                sizes="(min-width: 1024px) 520px, (min-width: 448px) 448px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading id="about-heading" eyebrow="About This Equipment" title={`About ${category.name}`} />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
            {content.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Common uses */}
      <section aria-labelledby="uses-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="uses-heading" eyebrow="Common Uses" title="Jobs and Applications" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.uses.map((use) => (
              <li key={use} className="flex items-center gap-4 rounded-md border border-navy/10 bg-white p-4 shadow-sm sm:p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-yellow">
                  <Check aria-hidden className="size-5 text-navy" strokeWidth={2.5} />
                </span>
                <span className="font-heading font-bold text-navy">{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Locations */}
      <section aria-labelledby="category-locations-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            id="category-locations-heading"
            eyebrow="Find Rentals by Location"
            title={`${category.singular} Rentals by State`}
          />
          <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {states.map((state) => (
              <li key={state.slug}>
                <LocationCard state={state} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Considerations */}
      <section aria-labelledby="considerations-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="considerations-heading" eyebrow="Rental Considerations" title="What to Know Before You Rent" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {considerations.map((item) => (
              <li key={item.title} className="rounded-md border border-navy/10 border-l-4 border-l-yellow bg-white p-5 shadow-sm sm:p-6">
                <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm text-steel">
            This guidance is general. Always follow the manufacturer&apos;s instructions, your rental
            provider&apos;s requirements and your jobsite&apos;s safety rules.
          </p>
        </div>
      </section>

      <FaqSection title={`${category.singular} Rental Questions`} faqs={content.faqs} />

      {/* Related */}
      <section aria-labelledby="related-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading id="related-heading" eyebrow="Related Equipment" title="Other Equipment to Consider" />
            <Link href="/equipment" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline">
              View All Equipment
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <CategoryCard category={item} detailed sizes="(min-width: 1280px) 300px, (min-width: 1024px) 23vw, 48vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title={`Find ${category.singular} Rentals Near You`}
        text="Choose your state and city to find local rental options for your project."
        buttonLabel="Browse Locations"
        buttonHref="/locations"
      />
    </>
  );
}
