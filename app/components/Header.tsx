"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { listBusinessLink, primaryNav } from "../lib/navigation";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-yellow bg-white shadow-sm">
      <div className="container-page flex h-18 items-center justify-between gap-6 sm:h-20">
        <Logo className="w-[128px] sm:w-[148px] lg:w-[160px]" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.95rem] font-semibold text-ink decoration-yellow decoration-2 underline-offset-8 transition-colors hover:text-navy hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={listBusinessLink.href}
            className="hidden rounded-sm bg-yellow px-5 py-2.5 font-heading text-sm font-bold text-navy transition-colors hover:bg-yellow-dark sm:inline-flex"
          >
            {listBusinessLink.label}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm text-navy hover:bg-navy/5 lg:hidden"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!menuOpen}
        className="border-t border-navy/10 bg-white lg:hidden"
      >
        <ul className="container-page py-3">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block border-b border-navy/10 py-3.5 font-semibold text-navy hover:bg-sand"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <Link
              href={listBusinessLink.href}
              onClick={closeMenu}
              className="flex justify-center rounded-sm bg-yellow px-5 py-3 font-heading font-bold text-navy hover:bg-yellow-dark"
            >
              {listBusinessLink.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
