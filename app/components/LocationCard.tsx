import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { State } from "../lib/locations";

type LocationCardProps = {
  state: State;
};

/** Photographic state card. Stacked on mobile, horizontal from sm to lg, stacked in a 3-up grid on desktop. */
export default function LocationCard({ state }: LocationCardProps) {
  const featuredCities = state.cities.slice(0, 3).map((city) => city.name);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm transition hover:border-navy/25 hover:shadow-lg sm:flex-row lg:flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy sm:aspect-auto sm:min-h-56 sm:w-1/2 sm:shrink-0 lg:aspect-[16/10] lg:min-h-0 lg:w-auto">
        <Image
          src={state.image}
          alt={state.imageAlt}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
        <h3 className="absolute bottom-4 left-5 flex items-center gap-3 font-heading text-2xl font-extrabold tracking-wide text-white uppercase sm:text-[1.7rem]">
          <span aria-hidden className="h-7 w-1.5 bg-yellow" />
          {state.name}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:justify-center sm:p-7 lg:justify-start lg:p-5">
        <p className="flex items-start gap-2 text-[0.95rem] leading-snug text-ink">
          <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-steel" />
          {featuredCities.join(" · ")}
        </p>
        <Link
          href={`/locations/${state.slug}`}
          className="mt-5 inline-flex items-center gap-2 border-t border-navy/10 pt-4 font-heading text-sm font-bold text-navy after:absolute after:inset-0 hover:underline"
        >
          {`Browse ${state.name} Rentals`}
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
