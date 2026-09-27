import type { Crumb } from "../lib/seo";
import PageHeader from "./PageHeader";

export const LEGAL_LAST_UPDATED = "September 27, 2026";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  breadcrumbs: Crumb[];
  intro: string;
  children: React.ReactNode;
};

/** Shared layout for policy pages. Children should be <section> blocks with an <h2>. */
export default function LegalPage({ eyebrow, title, breadcrumbs, intro, children }: LegalPageProps) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} breadcrumbs={breadcrumbs}>
        <p>{intro}</p>
        <p className="text-sm text-white/65">Last updated: {LEGAL_LAST_UPDATED}</p>
      </PageHeader>
      <div className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <article className="max-w-3xl space-y-10 text-[1.05rem] leading-relaxed text-ink/85 [&_a]:font-semibold [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-navy [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </article>
        </div>
      </div>
    </>
  );
}
