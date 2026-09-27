import Image from "next/image";
import type { Crumb } from "../lib/seo";
import Breadcrumbs from "./Breadcrumbs";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  breadcrumbs: Crumb[];
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

/** Navy page header for hub, state and city pages. Pass `image` for a photographic background. */
export default function PageHeader({ eyebrow, title, breadcrumbs, image, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-navy/80 lg:bg-transparent lg:bg-linear-to-r lg:from-navy lg:from-15% lg:via-navy/80 lg:via-55% lg:to-navy/20"
          />
        </>
      ) : (
        <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint" />
      )}

      <div className={`container-page ${image ? "py-12 sm:py-16 lg:py-24" : "py-12 sm:py-14 lg:py-16"}`}>
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 max-w-3xl">
          <p className="flex items-center gap-3 font-heading text-xs font-bold tracking-[0.12em] text-yellow uppercase sm:text-sm sm:tracking-[0.18em]">
            <span aria-hidden className="h-1 w-8 bg-yellow" />
            {eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
            {title}
          </h1>
          {children && <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-white/85">{children}</div>}
        </div>
      </div>
      <div aria-hidden className="h-1.5 bg-hazard" />
    </section>
  );
}
