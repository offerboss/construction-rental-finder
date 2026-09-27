import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-heading text-sm font-bold text-navy underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}
