import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { breadcrumbJsonLd, type Crumb } from "../lib/seo";
import JsonLd from "./JsonLd";

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "light" | "dark";
};

/** Renders the visible trail plus BreadcrumbList structured data. The last item is the current page. */
export default function Breadcrumbs({ items, tone = "dark" }: BreadcrumbsProps) {
  const dark = tone === "dark";

  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbJsonLd(items)} />
      <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm ${dark ? "text-white/70" : "text-steel"}`}>
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight aria-hidden className="size-3.5 shrink-0 opacity-60" />}
              {current ? (
                <span aria-current="page" className={`font-semibold ${dark ? "text-white" : "text-navy"}`}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className={`hover:underline ${dark ? "hover:text-yellow" : "hover:text-navy"}`}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
