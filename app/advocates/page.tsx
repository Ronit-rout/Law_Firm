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
    <section className="pt-40 pb-28 bg-parchment min-h-screen">
      <div className="container-content">
        <RevealOnScroll>
          <MatterIndex label="Our People" />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy max-w-3xl">
            The advocates.
          </h1>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
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
