import { ArrowRight, MapPin, Warehouse } from "lucide-react";
import Link from "next/link";
import { featuredProviders } from "../lib/providers";
import ArrowLink from "./ArrowLink";
import SectionHeading from "./SectionHeading";

export default function FeaturedProviders() {
  return (
    <section id="providers" aria-labelledby="providers-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="providers-heading"
            eyebrow="Featured Providers"
            title="Top Construction Rental Companies"
          />
          <ArrowLink href="/providers" className="hidden sm:inline-flex">
            View All Providers
          </ArrowLink>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProviders.map((provider) => (
            <li key={provider.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm transition hover:border-navy/25 hover:shadow-md">
                {/* Neutral placeholder until providers upload their own photos */}
                <div className="relative flex aspect-[2/1] items-center sm:aspect-[16/9] justify-center bg-sand-dark">
                  <Warehouse aria-hidden strokeWidth={1.5} className="size-12 text-steel/60" />
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-hazard" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg leading-snug font-bold text-navy">
                    {provider.name}
                  </h3>
                  <p className="mt-2 mb-5 flex items-center gap-1.5 text-sm text-steel">
                    <MapPin aria-hidden className="size-4 shrink-0" />
                    {provider.city}, {provider.state}
                  </p>
                  <Link
                    href={`/providers/${provider.slug}`}
                    className="mt-auto inline-flex items-center gap-2 border-t border-navy/10 pt-4 font-heading text-sm font-bold text-navy hover:underline"
                  >
                    View Profile
                    <span className="sr-only">for {provider.name}</span>
                    <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <ArrowLink href="/providers" className="mt-8 sm:hidden">
          View All Providers
        </ArrowLink>
      </div>
    </section>
  );
}
