import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/forms/ContactForm";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Contact Construction Rental Finder",
  description:
    "Get in touch with Construction Rental Finder with questions about the directory, listing your rental business, or feedback on the site.",
  path: "/contact",
});

const shortcuts = [
  { title: "Rental companies", text: "Want your business listed in the directory?", href: "/list-your-business", cta: "List Your Business" },
  { title: "Looking for equipment", text: "Start with the machine you need or your location.", href: "/equipment", cta: "Browse Equipment" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Construction Rental Finder"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      >
        <p>
          Have a question about the directory, a suggestion, or feedback about the site? Send us
          a message and we&apos;ll get back to you.
        </p>
      </PageHeader>

      <section aria-labelledby="contact-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-14">
          <div>
            <SectionHeading id="contact-heading" eyebrow="Send a Message" title="How Can We Help?" />
            <ul className="mt-8 space-y-4">
              {shortcuts.map((item) => (
                <li key={item.title} className="rounded-md border border-navy/10 bg-white p-5">
                  <h3 className="font-heading font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-ink/75">{item.text}</p>
                  <Link href={item.href} className="mt-3 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy hover:underline">
                    {item.cta}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
