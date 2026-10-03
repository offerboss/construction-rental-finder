import { ArrowRight, BookOpen, Check, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "../../components/CtaBanner";
import FaqSection from "../../components/FaqSection";
import JsonLd from "../../components/JsonLd";
import PageHeader from "../../components/PageHeader";
import RichText from "../../components/RichText";
import SectionHeading from "../../components/SectionHeading";
import { getCategory } from "../../lib/categories";
import { getGuide, guides, type GuideBlock, type GuideSection } from "../../lib/resources";
import { articleJsonLd } from "../../lib/seo";
import { siteConfig } from "../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const path = `/resources/${guide.slug}`;
  const socialTitle = `${guide.metaTitle} | ${siteConfig.name}`;
  const image = { url: guide.heroImage.src, alt: guide.heroImage.alt };
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: socialTitle,
      description: guide.metaDescription,
      url: path,
      siteName: siteConfig.name,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: guide.metaDescription,
      images: [image],
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-lg leading-relaxed text-ink/85">
          <RichText text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="space-y-3 text-lg leading-relaxed text-ink/85">
          {block.items.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3">
              <span aria-hidden className="mt-2.5 size-2 shrink-0 bg-yellow" />
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "columns":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.columns.map((column) => (
            <div key={column.title} className="rounded-md border border-navy/10 border-t-4 border-t-yellow bg-sand p-5 sm:p-6">
              <h3 className="font-heading text-lg font-bold text-navy">{`Best for: ${column.title}`}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2.5 leading-relaxed text-ink/85">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-navy" strokeWidth={2.5} />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <figure>
          <div className="overflow-x-auto rounded-md border border-navy/10 shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="bg-sand px-4 py-3 text-left font-heading text-base font-bold text-navy">{block.caption}</caption>
              <thead className="bg-navy text-white">
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} scope="col" className="px-4 py-3 font-heading font-bold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-navy/10 even:bg-sand/60">
                    {row.map((cell, index) =>
                      index === 0 ? (
                        <th key={index} scope="row" className="px-4 py-3 font-semibold text-navy">
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td key={index} className="px-4 py-3 text-ink/85">
                          <RichText text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <figcaption className="mt-2 text-sm text-steel">{block.note}</figcaption>}
        </figure>
      );
  }
}

function Section({ section }: { section: GuideSection }) {
  return (
    <section aria-labelledby={section.id} className="scroll-mt-24">
      <h2 id={section.id} className="font-heading text-2xl leading-tight font-extrabold tracking-tight text-balance text-navy sm:text-3xl">
        {section.heading}
      </h2>
      <div className="mt-5 space-y-5">
        {section.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
      {section.sources && section.sources.length > 0 && (
        <div className="mt-5 border-t border-navy/10 pt-4">
          <p className="text-xs font-semibold tracking-wide text-steel uppercase">Sources</p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {section.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 font-semibold text-steel hover:text-navy hover:underline"
                >
                  <ExternalLink aria-hidden className="mt-0.5 size-3.5 shrink-0" />
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default async function GuidePage({ params }: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/resources/${guide.slug}`;
  const equipment = guide.relatedEquipment.flatMap(({ slug: categorySlug, reason }) => {
    const category = getCategory(categorySlug);
    return category ? [{ category, reason }] : [];
  });
  const related = guide.relatedGuides.flatMap((relatedSlug) => {
    const other = getGuide(relatedSlug);
    return other ? [other] : [];
  });

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          headline: guide.title,
          description: guide.metaDescription,
          path,
          image: guide.heroImage.src,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
        })}
      />
      <PageHeader
        eyebrow="Rental Guide"
        title={guide.title}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: guide.shortTitle, href: path },
        ]}
        figure={guide.heroImage}
      >
        {guide.intro.map((paragraph, index) => (
          <p key={index} className={index > 0 ? "text-base text-white/75" : undefined}>
            {paragraph}
          </p>
        ))}
        <p className="text-sm text-white/60">
          Updated <time dateTime={guide.dateModified}>{dateFormat.format(new Date(guide.dateModified))}</time>
        </p>
      </PageHeader>

      <section aria-labelledby="takeaways-heading" className="bg-sand py-12 sm:py-14">
        <div className="container-page grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
          <div className="rounded-md border border-navy/10 border-l-4 border-l-yellow bg-white p-6 shadow-sm sm:p-8">
            <h2 id="takeaways-heading" className="font-heading text-xl font-extrabold text-navy sm:text-2xl">
              The Short Answer
            </h2>
            <ul className="mt-5 space-y-3">
              {guide.keyTakeaways.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink/85">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-yellow">
                    <Check aria-hidden className="size-4 text-navy" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <nav aria-labelledby="toc-heading" className="rounded-md border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 id="toc-heading" className="font-heading text-sm font-bold tracking-[0.18em] text-navy uppercase">
              On This Page
            </h2>
            <ol className="mt-4 space-y-2">
              {guide.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="font-semibold text-steel hover:text-navy hover:underline">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <div className="bg-white py-14 sm:py-16 lg:py-20">
        <article className="container-page">
          <div className="mx-auto max-w-4xl space-y-14">
            {guide.sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
            <p className="text-sm text-steel">
              Specifications are taken from manufacturers&apos; published materials and can change. This guide is general
              information. Always follow the manufacturer&apos;s instructions, your rental provider&apos;s requirements and
              your jobsite&apos;s safety rules.
            </p>
          </div>
        </article>
      </div>

      {equipment.length > 0 && (
        <section aria-labelledby="guide-equipment-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading id="guide-equipment-heading" eyebrow="Related Equipment" title="Equipment in This Guide" />
              <Link href="/equipment" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline">
                View All Equipment
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {equipment.map(({ category, reason }) => (
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

      <FaqSection title="Frequently Asked Questions" faqs={guide.faqs} />

      {related.length > 0 && (
        <section aria-labelledby="related-guides-heading" className="bg-sand py-14 sm:py-16">
          <div className="container-page">
            <SectionHeading id="related-guides-heading" eyebrow="Guides" title="More Rental Guides" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/resources/${other.slug}`}
                    className="group flex h-full gap-4 rounded-md border border-navy/10 bg-white p-5 shadow-sm transition hover:border-navy/25 hover:shadow-md"
                  >
                    <BookOpen aria-hidden className="size-6 shrink-0 text-navy" />
                    <span>
                      <span className="block font-heading text-lg font-bold text-navy">{other.title}</span>
                      <span className="mt-1 block leading-relaxed text-ink/75">{other.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBanner
        title="Find Equipment for Your Project"
        text="Browse equipment categories with rental considerations and FAQs for each."
        buttonLabel="Browse Equipment"
        buttonHref="/equipment"
      />
    </>
  );
}
