"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { firm } from "@/data/firm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-editorial ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(11,20,32,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-content">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-editorial ${
            scrolled ? "py-4" : "py-7"
          }`}
        >
          <Link
            href="/"
            className="font-display text-lg md:text-xl tracking-wide text-navy focus-ring"
          >
            {firm.shortName}
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-body text-[13px] uppercase tracking-widest2 text-ink/80 hover:text-navy transition-colors focus-ring"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-brass transition-all duration-300 ease-editorial group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-50 h-9 w-9 flex flex-col items-center justify-center gap-[5px] focus-ring"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ease-editorial ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ease-editorial ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-0 bg-parchment transition-transform duration-400 ease-editorial ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col justify-center container-content gap-8">
          {primaryNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-navy focus-ring"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
