import Link from "next/link";

type WordmarkProps = {
  className?: string;
};

export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Construction Rental Finder home"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <span aria-hidden className="h-10 w-1.5 shrink-0 bg-yellow" />
      <span className="font-heading leading-none font-extrabold uppercase">
        <span className="block text-[0.7rem] tracking-[0.24em] text-white/75">
          Construction
        </span>
        <span className="mt-1 block text-lg tracking-tight text-white sm:text-xl">
          Rental <span className="text-yellow">Finder</span>
        </span>
      </span>
    </Link>
  );
}
