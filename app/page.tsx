import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import PracticeCard from "@/components/PracticeCard";
import AdvocateCard from "@/components/AdvocateCard";
import ArticleCard from "@/components/ArticleCard";
import { firm } from "@/data/firm";
import { practiceAreas } from "@/data/practiceAreas";
import { advocates } from "@/data/advocates";
import { articles } from "@/data/articles";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end bg-navy text-parchment overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="h-full w-full [background-image:linear-gradient(rgba(246,243,236,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(246,243,236,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-content relative pb-16 md:pb-24 pt-40">
          <p className="font-mono text-xs tracking-widest2 uppercase text-brassLight">
            {firm.tagline} — {firm.registeredOffice.city}
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
      </section>

      {/* FIRM INTRODUCTION */}
      <section className="py-24 md:py-32 bg-parchment">
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
                {firm.descriptor} Founded {firm.founded}, the firm advises
                individuals, promoters and companies from its office in{" "}
                {firm.registeredOffice.city}.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm text-navy focus-ring"
              >
                About the firm →
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-24 md:py-32 bg-white">
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
                className="font-body text-sm uppercase tracking-widest2 text-navy focus-ring"
              >
                View all
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-10">
            {practiceAreas.slice(0, 5).map((area, i) => (
              <RevealOnScroll key={area.slug} delay={i * 60}>
                <PracticeCard area={area} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH / PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-navy text-parchment">
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

      {/* PEOPLE */}
      <section className="py-24 md:py-32 bg-parchment">
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
                className="font-body text-sm uppercase tracking-widest2 text-navy focus-ring"
              >
                View all
              </Link>
            </div>
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {advocates.map((a, i) => (
              <RevealOnScroll key={a.slug} delay={i * 80}>
                <AdvocateCard advocate={a} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-content">
          <RevealOnScroll>
            <MatterIndex label="Insights" />
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-12">
            <RevealOnScroll className="md:col-span-7" delay={80}>
              <ArticleCard article={articles[0]} featured />
            </RevealOnScroll>
            <div className="md:col-span-5 space-y-8">
              {articles.slice(1).map((a, i) => (
                <RevealOnScroll key={a.slug} delay={160 + i * 80}>
                  <ArticleCard article={a} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE / PRESENCE */}
      <section className="py-24 md:py-32 bg-stone">
        <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-10">
          <RevealOnScroll className="md:col-span-5">
            <MatterIndex label="Presence" />
            <h2 className="mt-6 font-display text-3xl md:text-4xl text-navy">
              {firm.offices.length} office
              {firm.offices.length > 1 ? "s" : ""}, one point of contact.
            </h2>
          </RevealOnScroll>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {firm.offices.map((o, i) => (
              <RevealOnScroll key={o.city} delay={i * 100}>
                <p className="font-display text-2xl text-navy">{o.city}</p>
                <p className="mt-1 font-body text-sm text-slate-muted">{o.note}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 md:py-32 bg-navy text-parchment">
        <div className="container-content flex flex-col items-center text-center justify-center gap-10">
          <RevealOnScroll>
            <h2 className="font-display text-4xl md:text-6xl max-w-xl leading-tight text-center">
              Reach the firm directly.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-parchment/30 px-8 py-4 font-body text-sm uppercase tracking-widest2 focus-ring justify-center"
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
