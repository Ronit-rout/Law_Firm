import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import AdvocateCard from "@/components/AdvocateCard";
import { advocates } from "@/data/advocates";

export const metadata: Metadata = {
  title: "People",
  description: "Advocates of the firm.",
};

export default function AdvocatesPage() {
  return (
    <section className="pt-44 pb-32 bg-parchment min-h-screen">
      <div className="container-content">
        <RevealOnScroll>
          <MatterIndex label="Our People" />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy max-w-3xl">
            The advocates.
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <p className="mt-6 max-w-xl font-body text-base text-slate-muted leading-relaxed">
            Advocates and counsel representing matters across Odisha courts and tribunals.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {advocates.map((a, i) => (
            <RevealOnScroll key={a.slug} delay={i * 80}>
              <AdvocateCard advocate={a} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
