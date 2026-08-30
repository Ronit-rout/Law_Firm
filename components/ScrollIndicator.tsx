"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrolled, setScrolled] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2 transition-all duration-500 ease-editorial ${
        scrolled
          ? `opacity-0 ${prefersReduced ? "" : "translate-y-4"}`
          : "opacity-100 translate-y-0"
      }`}
    >
      <div className="h-10 w-10 rounded-full border border-parchment/40 flex items-center justify-center">
        <div className="h-1.5 w-1.5 rounded-full bg-parchment/60" />
      </div>
      <span className="font-mono text-[9px] tracking-widest2 uppercase text-parchment/40">
        Scroll
      </span>
    </div>
  );
}
