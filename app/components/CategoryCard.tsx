import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { EquipmentCategory } from "../lib/categories";

type CategoryCardProps = {
  category: EquipmentCategory;
  /** Show the one-line summary under the name */
  detailed?: boolean;
  sizes?: string;
};

export default function CategoryCard({
  category,
  detailed = false,
  sizes = "(min-width: 1280px) 200px, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 48vw",
}: CategoryCardProps) {
  return (
    <Link
      href={`/equipment/${category.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-md"
    >
      <div className="relative aspect-square border-b border-navy/10 bg-[#f8f4ec]">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes={sizes}
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-yellow opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      {detailed ? (
        <div className="flex flex-1 flex-col px-4 py-4 sm:px-5">
          <h3 className="font-heading text-base leading-snug font-bold text-navy sm:text-lg">{category.name}</h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-steel">{category.summary}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-navy group-hover:underline">
            View rentals
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between gap-2 px-3.5 py-3.5 sm:px-4">
          <h3 className="font-heading text-sm leading-snug font-bold text-navy sm:text-[0.95rem]">{category.name}</h3>
          <ArrowRight aria-hidden className="size-4 shrink-0 text-steel transition group-hover:translate-x-0.5 group-hover:text-navy" />
        </div>
      )}
    </Link>
  );
}
