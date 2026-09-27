import { Plus } from "lucide-react";
import { faqJsonLd, type Faq } from "../lib/seo";
import JsonLd from "./JsonLd";
import SectionHeading from "./SectionHeading";

type FaqSectionProps = {
  title: string;
  faqs: Faq[];
  id?: string;
  className?: string;
};

/** FAQ accordion with FAQPage structured data. */
export default function FaqSection({ title, faqs, id = "faq", className = "bg-white" }: FaqSectionProps) {
  return (
    <section aria-labelledby={`${id}-heading`} className={`py-14 sm:py-16 lg:py-20 ${className}`}>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading id={`${id}-heading`} eyebrow="FAQ" title={title} />
        <div className="divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 font-heading text-base font-bold text-navy sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus aria-hidden className="mt-1 size-5 shrink-0 text-steel transition-transform group-open:rotate-45" />
              </summary>
              <p className="-mt-1 pb-5 leading-relaxed text-ink/80">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
