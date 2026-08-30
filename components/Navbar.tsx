"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/data/navigation";
import { firm } from "@/data/firm";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Pages with a dark hero section at the top (bg-navy)
  const isDarkHero =
    pathname === "/" ||
    (pathname ? pathname.startsWith("/practice-areas/") && pathname !== "/practice-areas" : false);

  // Theme is dark only when on a dark hero section AND at the top of the page (not scrolled)
  const isDarkTheme = isDarkHero && !scrolled;

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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-editorial ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(11,20,32,0.08)]"
          : isDarkHero
          ? "bg-transparent"
          : "bg-parchment/85 backdrop-blur-sm border-b border-ink/5"
      }`}
    >
      <div className="container-content">
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-editorial ${
            scrolled ? "py-4" : "py-6"
          }`}
        >
          {/* PLACEHOLDER LOGO & WORDMARK — replace with commissioned design when available */}
          <Link
            href="/"
            className={`group inline-flex items-center gap-3 focus-ring transition-colors duration-300 ${
              isDarkTheme ? "text-parchment" : "text-navy"
            }`}
          >
            <span className="flex flex-col items-center">
              <span className="font-display text-lg md:text-xl font-bold tracking-wider leading-none">
                DKM
              </span>
              <span className="mt-0.5 h-[1.5px] w-full bg-brass" />
            </span>
            <span className="font-display text-base md:text-lg tracking-wide hidden sm:inline-block">
              {firm.shortName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {primaryNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative font-body text-[13px] uppercase tracking-widest2 transition-colors duration-300 focus-ring ${
                    isDarkTheme
                      ? isActive
                        ? "text-parchment font-medium"
                        : "text-parchment/75 hover:text-parchment"
                      : isActive
                      ? "text-navy font-semibold"
                      : "text-ink/75 hover:text-navy"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-brass transition-all duration-300 ease-editorial ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-50 h-9 w-9 flex flex-col items-center justify-center gap-[5px] focus-ring"
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 ease-editorial ${
                menuOpen
                  ? "translate-y-[3px] rotate-45 bg-navy"
                  : isDarkTheme
                  ? "bg-parchment"
                  : "bg-ink"
              }`}
            />
            <span
              className={`block h-px w-6 transition-opacity duration-200 ${
                menuOpen
                  ? "opacity-0 bg-navy"
                  : isDarkTheme
                  ? "opacity-100 bg-parchment"
                  : "opacity-100 bg-ink"
              }`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 ease-editorial ${
                menuOpen
                  ? "-translate-y-[3px] -rotate-45 bg-navy"
                  : isDarkTheme
                  ? "bg-parchment"
                  : "bg-ink"
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
          {primaryNav.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-3xl transition-colors focus-ring ${
                  isActive ? "text-brass font-bold" : "text-navy hover:text-brass"
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
