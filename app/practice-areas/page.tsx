import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import PracticeCard from "@/components/PracticeCard";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Areas of practice advised on by the firm.",
};

export default function PracticeAreasPage() {
  return (
    <section className="pt-44 pb-32 bg-parchment min-h-screen">
      <div className="container-content">
        <RevealOnScroll>
          <MatterIndex label="Practice Areas" />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy max-w-3xl">
            Areas of practice.
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <p className="mt-6 max-w-xl font-body text-base text-slate-muted leading-relaxed">
            Factual descriptions of the areas of law the firm advises on.
          </p>
        </RevealOnScroll>

        <div className="mt-16">
          {practiceAreas.map((area, i) => (
            <RevealOnScroll key={area.slug} delay={i * 60}>
              <PracticeCard area={area} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
