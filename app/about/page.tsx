import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "The Firm",
  description: firm.descriptor,
};

const values = [
  {
    title: "Factual, not promotional",
    body: "We describe our work plainly. We do not make claims about outcomes, rankings or success rates.",
  },
  {
    title: "Direct responsibility",
    body: "The advocate who takes on a matter remains the client's principal point of contact throughout.",
  },
  {
    title: "Considered pace",
    body: "Advice is given after proper consideration of the facts, not as a rushed first reaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-parchment">
        <div className="container-content">
          <RevealOnScroll>
            <MatterIndex label="The Firm" />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy max-w-3xl leading-tight">
              {firm.name}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={140}>
            <p className="mt-6 max-w-2xl font-body text-base md:text-lg text-slate-muted leading-relaxed">
              {firm.descriptor}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12">
          <RevealOnScroll className="md:col-span-4">
            <MatterIndex label="History" />
            <h2 className="mt-6 font-display text-2xl text-navy">
              Founded {firm.founded}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll className="md:col-span-8" delay={80}>
            <p className="font-body text-base text-slate-muted leading-relaxed max-w-2xl">
              [Content required from firm.] This section should describe the
              firm's actual history, founding circumstances, and growth —
              using only confirmed, factual information. It should not
              include self-promotional characterisations such as "leading"
              or "pioneering" unless the firm's compliance counsel has
              specifically cleared such language.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-parchment">
        <div className="container-content">
          <RevealOnScroll>
            <MatterIndex label="How We Work" />
          </RevealOnScroll>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 100}>
                <p className="font-display text-xl text-navy">{v.title}</p>
                <p className="mt-3 font-body text-sm text-slate-muted leading-relaxed">
                  {v.body}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12">
          <RevealOnScroll className="md:col-span-4">
            <MatterIndex label="Registered Office" />
          </RevealOnScroll>
          <RevealOnScroll className="md:col-span-8" delay={80}>
            <p className="font-body text-base text-navy leading-relaxed">
              {firm.registeredOffice.line1}
              <br />
              {firm.registeredOffice.line2}
              <br />
              {firm.registeredOffice.city}, {firm.registeredOffice.state}{" "}
              {firm.registeredOffice.pin}
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
