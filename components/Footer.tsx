import Link from "next/link";
import { firm } from "@/data/firm";
import { primaryNav } from "@/data/navigation";
import { practiceAreas } from "@/data/practiceAreas";

export default function Footer() {
  return (
    <footer className="bg-navy text-parchment/90">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-display text-2xl text-parchment">{firm.shortName}</p>
            <p className="mt-3 font-body text-sm text-parchment/60">{firm.tagline}</p>
            <div className="mt-6 space-y-1 font-body text-sm text-parchment/70 leading-relaxed">
              <p>{firm.registeredOffice.line1}</p>
              <p>{firm.registeredOffice.line2}</p>
              <p>
                {firm.registeredOffice.city}, {firm.registeredOffice.state}{" "}
                {firm.registeredOffice.pin}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brassLight">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-parchment/75 hover:text-parchment transition-colors focus-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brassLight">
              Practice Areas
            </p>
            <ul className="mt-4 space-y-3">
              {practiceAreas.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="font-body text-sm text-parchment/75 hover:text-parchment transition-colors focus-ring"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] tracking-widest2 uppercase text-brassLight">
              Contact
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm text-parchment/75">
              <li>{firm.phone}</li>
              <li>{firm.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 w-full h-px bg-parchment/15" />

        <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-body text-xs leading-relaxed text-parchment/55">
              {firm.disclaimer}
            </p>
            <Link
              href="/disclaimer"
              className="mt-2 inline-block font-body text-xs text-brass hover:text-brassLight transition-colors underline underline-offset-4 focus-ring"
            >
              Bar Council of India Compliance & Disclaimer →
            </Link>
          </div>
          <p className="font-body text-xs text-parchment/45 shrink-0">
            © {new Date().getFullYear()} {firm.shortName}. Demo build — placeholder
            content, not for public use.
          </p>
        </div>
      </div>
    </footer>
  );
}
