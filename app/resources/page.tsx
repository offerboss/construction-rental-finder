import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import { getCategories } from "../lib/categories";
import { resourceTopics } from "../lib/resources";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Construction Equipment Rental Resources",
  description:
    "Practical guides to help contractors, builders, property owners and project managers choose and rent the right construction equipment.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Construction Equipment Rental Resources"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      >
        <p>
          Practical guides to help contractors, builders, property owners and project managers
          choose and rent the right construction equipment.
        </p>
      </PageHeader>

      <section aria-labelledby="guides-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="guides-heading" eyebrow="Guides" title="Rental Guides in Progress" />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            Our first guides are being written now. In the meantime, each topic links to the
            equipment pages that cover it.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceTopics.map((topic) => (
              <li key={topic.slug}>
                <article className="flex h-full flex-col rounded-md border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-sm bg-navy">
                      <BookOpen aria-hidden className="size-5 text-yellow" />
                    </span>
                    <span className="rounded-sm bg-sand px-2.5 py-1 font-heading text-xs font-bold tracking-wide text-steel uppercase">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl leading-snug font-bold text-navy">{topic.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/75">{topic.description}</p>
                  <div className="mt-5 border-t border-navy/10 pt-4">
                    <p className="text-xs font-semibold tracking-wide text-steel uppercase">Related equipment</p>
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                      {getCategories(topic.related).map((category) => (
                        <li key={category.slug}>
                          <Link
                            href={`/equipment/${category.slug}`}
                            className="inline-flex items-center gap-1 font-heading text-sm font-bold text-navy hover:underline"
                          >
                            {category.name}
                            <ArrowRight aria-hidden className="size-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Ready to Find Equipment?"
        text="Browse all 12 equipment categories with rental considerations and FAQs for each."
        buttonLabel="Browse Equipment"
        buttonHref="/equipment"
      />
    </>
  );
}
