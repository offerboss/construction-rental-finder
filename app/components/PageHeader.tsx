import Image from "next/image";
import type { Crumb } from "../lib/seo";
import Breadcrumbs from "./Breadcrumbs";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  breadcrumbs: Crumb[];
  image?: { src: string; alt: string };
  /** 3:2 photo framed beside the title (rich city pages). Takes precedence over `image`. */
  figure?: { src: string; alt: string };
  children?: React.ReactNode;
};

/**
 * Navy page header for hub, state and city pages. Pass `image` for a photographic
 * background, or `figure` for a framed 3:2 photo beside the title.
 */
export default function PageHeader({ eyebrow, title, breadcrumbs, image, figure, children }: PageHeaderProps) {
  const background = figure ? undefined : image;

  const text = (
    <>
      <p className="flex items-center gap-3 font-heading text-xs font-bold tracking-[0.12em] text-yellow uppercase sm:text-sm sm:tracking-[0.18em]">
        <span aria-hidden className="h-1 w-8 bg-yellow" />
        {eyebrow}
      </p>
      <h1 className="mt-4 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
        {title}
      </h1>
      {children && <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-white/85">{children}</div>}
    </>
  );

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {background ? (
        <>
          <Image
            src={background.src}
            alt={background.alt}
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

      <div className={`container-page ${background ? "py-12 sm:py-16 lg:py-24" : "py-12 sm:py-14 lg:py-16"}`}>
        <Breadcrumbs items={breadcrumbs} />
        {figure ? (
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div>{text}</div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div aria-hidden className="absolute top-5 -right-3 -bottom-3 left-5 bg-hazard sm:-right-4 sm:-bottom-4" />
              <div className="relative aspect-[3/2] overflow-hidden rounded-md border border-white/15 bg-navy-deep shadow-lg">
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  fill
                  preload
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, (min-width: 576px) 576px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 max-w-3xl">{text}</div>
        )}
      </div>
      <div aria-hidden className="h-1.5 bg-hazard" />
    </section>
  );
}
