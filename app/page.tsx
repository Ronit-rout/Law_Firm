import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import PracticeCard from "@/components/PracticeCard";
import AdvocateCard from "@/components/AdvocateCard";
import ArticleCard from "@/components/ArticleCard";
import ScrollIndicator from "@/components/ScrollIndicator";
import { firm } from "@/data/firm";
import { practiceAreas } from "@/data/practiceAreas";
import { advocates } from "@/data/advocates";
import { articles } from "@/data/articles";
import { sectors } from "@/data/sectors";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end bg-navy text-parchment overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="h-full w-full [background-image:linear-gradient(rgba(246,243,236,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(246,243,236,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-content relative pb-20 md:pb-28 pt-40">
          <p className="font-mono text-xs tracking-widest2 uppercase text-brassLight">
            {firm.tagline} — {firm.registeredOffice.state}
          </p>
          <h1 className="mt-6 font-display text-[13vw] leading-[0.95] md:text-[6.4vw] md:leading-[0.95] max-w-5xl text-parchment">
            Counsel built on
            <br />
            precision, not promises.
          </h1>
          <p className="mt-8 max-w-xl font-body text-base md:text-lg text-parchment/70 leading-relaxed">
            {firm.descriptor}
          </p>
          <div className="mt-10 flex items-center gap-8">
            <Link
              href="/practice-areas"
              className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-widest2 text-parchment focus-ring"
            >
              Areas of Practice
              <span className="h-px w-8 bg-brass transition-all duration-300 ease-editorial group-hover:w-14" />
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm uppercase tracking-widest2 text-parchment/60 hover:text-parchment transition-colors focus-ring"
            >
              Contact the Firm
            </Link>
          </div>
        </div>

        {/* Circular scroll indicator with fade/drift animation */}
        <ScrollIndicator />
      </section>

      {/* FIRM INTRODUCTION */}
      <section className="py-28 md:py-36 bg-parchment">
        <div className="container-content">
          <RevealOnScroll>
            <MatterIndex label="Firm Profile" />
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
            <RevealOnScroll className="md:col-span-7" delay={80}>
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-navy">
                A firm structured around{" "}
                <span className="text-brass">how clients actually
                encounter problems</span> — not around internal
                departments.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll className="md:col-span-4 md:col-start-9" delay={160}>
              <p className="font-body text-sm md:text-base text-slate-muted leading-relaxed">
                {firm.descriptor}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm text-navy hover:text-brass transition-colors focus-ring"
              >
                About the firm →
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-content">
          <RevealOnScroll>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <MatterIndex label="Practice Areas" />
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-navy max-w-2xl">
                  Where we advise.
                </h2>
              </div>
              <Link
                href="/practice-areas"
                className="font-body text-sm uppercase tracking-widest2 text-navy hover:text-brass transition-colors focus-ring"
              >
                View all 5 areas →
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-12">
            {practiceAreas.slice(0, 3).map((area, i) => (
              <RevealOnScroll key={area.slug} delay={i * 60}>
                <PracticeCard area={area} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH / PHILOSOPHY */}
      <section className="py-28 md:py-36 bg-navy text-parchment">
        <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-10">
          <RevealOnScroll className="md:col-span-4">
            <MatterIndex label="Approach" className="[&_span:first-child]:text-brassLight" />
          </RevealOnScroll>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                title: "Restrained by design",
                body: "Advice is stated plainly, without embellishment. Where a matter is uncertain, we say so.",
              },
              {
                title: "Matter-first structure",
                body: "Every engagement is organised around the client's actual problem, not the firm's internal departments.",
              },
              {
                title: "Direct advocate access",
                body: "Clients work directly with the advocate responsible for their matter, not a rotating team.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 100}>
                <p className="font-display text-xl text-parchment">{item.title}</p>
                <p className="mt-3 font-body text-sm text-parchment/60 leading-relaxed">
                  {item.body}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS & DOMAINS OF ENGAGEMENT */}
      <section className="py-28 md:py-36 bg-stone/50 border-y border-ink/10">
        <div className="container-content">
          <RevealOnScroll>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <MatterIndex label="Sectors of Engagement" />
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-navy max-w-2xl">
                  Domains & industries.
                </h2>
              </div>
              <p className="font-body text-xs text-slate-muted max-w-sm">
                Industry experience across Odisha and regional commercial sectors.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100} className="mt-10">
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="font-body text-xs uppercase tracking-widest2 border border-ink/15 bg-white/80 px-4 py-3 text-navy transition-colors hover:border-brass hover:text-brass"
                >
                  {sector}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="py-28 md:py-36 bg-parchment">
        <div className="container-content">
          <RevealOnScroll>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <MatterIndex label="Our People" />
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-navy max-w-2xl">
                  The advocates.
                </h2>
              </div>
              <Link
                href="/advocates"
                className="font-body text-sm uppercase tracking-widest2 text-navy hover:text-brass transition-colors focus-ring"
              >
                View all counsel →
              </Link>
            </div>
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {advocates.slice(0, 3).map((a, i) => (
              <RevealOnScroll key={a.slug} delay={i * 80}>
                <AdvocateCard advocate={a} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-28 md:py-36 bg-white">
        <div className="container-content">
          <RevealOnScroll>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <MatterIndex label="Insights" />
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-navy max-w-2xl">
                  Commentary & updates.
                </h2>
              </div>
              <Link
                href="/insights"
                className="font-body text-sm uppercase tracking-widest2 text-navy hover:text-brass transition-colors focus-ring"
              >
                View all articles →
              </Link>
            </div>
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-12">
            <RevealOnScroll className="md:col-span-8" delay={80}>
              <ArticleCard article={articles[0]} featured />
            </RevealOnScroll>
            <div className="md:col-span-4 space-y-8">
              {articles.slice(1, 3).map((a, i) => (
                <RevealOnScroll key={a.slug} delay={160 + i * 80}>
                  <ArticleCard article={a} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESENCE (ODISHA) */}
      <section className="py-28 md:py-36 bg-stone">
        <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-10">
          <RevealOnScroll className="md:col-span-5">
            <MatterIndex label="Presence" />
            <h2 className="mt-6 font-display text-3xl md:text-4xl text-navy">
              Odisha. One office, one point of contact.
            </h2>
          </RevealOnScroll>
          <div className="md:col-span-7">
            <RevealOnScroll delay={100}>
              <p className="font-display text-2xl text-navy">
                {firm.registeredOffice.state}
              </p>
              <p className="mt-2 font-body text-sm text-slate-muted">
                {firm.registeredOffice.line1}, {firm.registeredOffice.city}, {firm.registeredOffice.state} {firm.registeredOffice.pin}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-brass">
                Registered Office
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-28 md:py-36 bg-navy text-parchment">
        <div className="container-content flex flex-col items-center text-center justify-center gap-10">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight text-center">
              Reach the firm directly.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-parchment/30 px-8 py-4 font-body text-sm uppercase tracking-widest2 hover:border-brass hover:text-brass transition-colors focus-ring justify-center"
            >
              Contact the Firm
              <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
                →
              </span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
