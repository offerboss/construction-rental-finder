import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CtaBannerProps = {
  title: string;
  text?: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CtaBanner({ title, text, buttonLabel, buttonHref }: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-banner-heading" className="bg-navy">
      <div aria-hidden className="h-1.5 bg-hazard" />
      <div className="container-page flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <h2 id="cta-banner-heading" className="font-heading text-2xl leading-tight font-extrabold text-balance text-white sm:text-3xl">
            {title}
          </h2>
          {text && <p className="mt-3 text-lg leading-relaxed text-white/80">{text}</p>}
        </div>
        <Link
          href={buttonHref}
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-sm bg-yellow px-7 py-3.5 font-heading text-base font-bold text-navy transition-colors hover:bg-yellow-dark lg:self-auto"
        >
          {buttonLabel}
          <ArrowRight aria-hidden className="size-5" />
        </Link>
      </div>
    </section>
  );
}
