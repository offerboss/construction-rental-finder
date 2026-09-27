import {
  HardHat,
  LayoutGrid,
  MapPin,
  Scale,
  Search,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/images/construction rental finder hero image.png";

const trustItems = [
  { label: "Local Rental Providers", icon: MapPin },
  { label: "Compare Options", icon: Scale },
  { label: "Construction-Focused", icon: HardHat },
  { label: "All in One Place", icon: LayoutGrid },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-navy">
      <Image
        src={heroImage}
        alt="Yellow wheel loader on a construction site at sunset"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-[72%_center] lg:object-center"
      />
      {/* Solid wash on small screens, left-weighted gradient on desktop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-navy/75 lg:bg-transparent lg:bg-linear-to-r lg:from-navy lg:from-10% lg:via-navy/80 lg:via-50% lg:to-navy/10"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-navy-deep/90 to-transparent"
      />

      <div className="container-page pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-heading text-xs font-bold tracking-[0.12em] text-yellow sm:tracking-[0.18em] uppercase sm:text-sm">
            <span aria-hidden className="h-1 w-8 bg-yellow" />
            Find. Compare. Rent. Get to work.
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
          >
            Construction Equipment Rentals Near You
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Find reliable local providers for excavators, lifts, forklifts,
            generators and more. Compare options, get in touch, and keep your
            project moving.
          </p>
        </div>

        <form
          role="search"
          action="/search"
          method="get"
          className="mt-8 grid max-w-4xl gap-3 rounded-md bg-white p-3 shadow-2xl shadow-navy-deep/40 sm:p-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end"
        >
          <div>
            <label
              htmlFor="search-equipment"
              className="mb-1.5 block font-heading text-xs font-bold tracking-wide text-navy uppercase"
            >
              What equipment do you need?
            </label>
            <div className="relative">
              <Wrench aria-hidden className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-steel" />
              <input
                id="search-equipment"
                name="equipment"
                type="text"
                placeholder="Excavator, Skid Steer, Forklift..."
                autoComplete="off"
                className="h-13 w-full rounded-sm border border-navy/15 bg-sand pr-3 pl-11 text-base text-ink placeholder:text-steel focus:border-navy focus:bg-white focus:ring-2 focus:ring-yellow focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="search-location"
              className="mb-1.5 block font-heading text-xs font-bold tracking-wide text-navy uppercase"
            >
              Location
            </label>
            <div className="relative">
              <MapPin aria-hidden className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-steel" />
              <input
                id="search-location"
                name="location"
                type="text"
                placeholder="City, State or ZIP"
                className="h-13 w-full rounded-sm border border-navy/15 bg-sand pr-3 pl-11 text-base text-ink placeholder:text-steel focus:border-navy focus:bg-white focus:ring-2 focus:ring-yellow focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-sm bg-yellow px-7 sm:col-span-2 lg:col-span-1 font-heading text-base font-bold text-navy transition-colors hover:bg-yellow-dark focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Search aria-hidden className="size-5" />
            Find Rentals
          </button>
        </form>

        <ul className="mt-8 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4">
          {trustItems.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-3 text-sm font-semibold text-white sm:text-base">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-yellow/40 bg-navy-deep/60">
                <Icon aria-hidden className="size-5 text-yellow" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
