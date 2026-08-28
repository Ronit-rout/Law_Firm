import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Insights",
  description: "Legal commentary and updates from the firm.",
};

export default function InsightsPage() {
  return (
    <section className="pt-40 pb-28 bg-parchment min-h-screen">
      <div className="container-content">
        <RevealOnScroll>
          <MatterIndex label="Insights" />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy max-w-3xl">
            Commentary & updates.
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <p className="mt-6 max-w-xl font-body text-base text-slate-muted leading-relaxed">
            Informational articles intended to help readers understand
            developments in the law. Nothing on this page constitutes legal
            advice or solicitation of work.
          </p>
        </RevealOnScroll>

        <div className="mt-16 space-y-10 max-w-3xl">
          {articles.map((a, i) => (
            <RevealOnScroll key={a.slug} delay={i * 60}>
              <ArticleCard article={a} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
