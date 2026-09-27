import Link from "next/link";
import { footerNav } from "../lib/navigation";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-[1.5fr_1fr_1fr] sm:py-14">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Construction Rental Finder helps contractors, builders and DIYers
            find construction equipment rentals from local providers.
          </p>
        </div>
        {footerNav.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <h2 className="font-heading text-xs font-bold tracking-[0.18em] text-yellow uppercase">
              {group.heading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-yellow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-sm text-white/60">
          © 2026 Construction Rental Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
