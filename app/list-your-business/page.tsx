import { Eye, Inbox, LayoutGrid, MapPinned, UserSquare } from "lucide-react";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import ListBusinessForm from "../components/forms/ListBusinessForm";
import { states } from "../lib/locations";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "List Your Construction Rental Business",
  description:
    "List your construction equipment rental company on Construction Rental Finder and get in front of contractors and builders searching by equipment and location.",
  path: "/list-your-business",
});

const benefits = [
  { icon: Eye, title: "Local visibility", text: "Show up for contractors, builders and DIYers looking for equipment in your area." },
  { icon: LayoutGrid, title: "Category exposure", text: "Appear alongside the equipment categories you rent, from excavators to generators." },
  { icon: MapPinned, title: "City and state placement", text: "Be featured in the state and city pages that match your service area." },
  { icon: Inbox, title: "Rental inquiries", text: "Give renters a direct way to find you and reach out about equipment." },
  { icon: UserSquare, title: "Profile visibility", text: "Get a company profile that can be linked from across Construction Rental Finder." },
];

export default function ListYourBusinessPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Rental Companies"
        title="List Your Construction Rental Business"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "List Your Business", href: "/list-your-business" },
        ]}
      >
        <p>
          Construction Rental Finder connects contractors, builders and DIYers with local
          construction equipment rental companies. Apply to be listed in the categories and
          cities you serve.
        </p>
      </PageHeader>

      <section aria-labelledby="benefits-heading" className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="benefits-heading" eyebrow="Why List With Us" title="Get in Front of Local Renters" />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-yellow">
                  <Icon aria-hidden className="size-6 text-navy" />
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

      <section aria-labelledby="apply-heading" className="bg-sand py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-14">
          <div>
            <SectionHeading id="apply-heading" eyebrow="Apply to Be Listed" title="Tell Us About Your Business" />
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Share a few details about your company, the equipment you rent and where you
              operate. We&apos;ll follow up to talk through next steps.
            </p>
            <div className="mt-8 rounded-md border border-navy/10 bg-white p-5">
              <h3 className="font-heading text-sm font-bold tracking-wide text-navy uppercase">Current launch markets</h3>
              <ul className="mt-3 space-y-1.5 text-ink/80">
                {states.map((state) => (
                  <li key={state.slug}>
                    <span className="font-semibold text-navy">{state.name}:</span>{" "}
                    {state.cities.map((city) => city.name).join(", ")}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-steel">Operating somewhere else? Apply anyway — we&apos;d like to hear from you.</p>
            </div>
          </div>
          <ListBusinessForm />
        </div>
      </section>
    </>
  );
}
