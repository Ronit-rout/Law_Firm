import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import AdvocateCard from "@/components/AdvocateCard";
import ArticleCard from "@/components/ArticleCard";
import {
  practiceAreas,
  getPracticeAreaBySlug,
} from "@/data/practiceAreas";
import { advocates } from "@/data/advocates";
import { articles } from "@/data/articles";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = getPracticeAreaBySlug(params.slug);
  if (!area) return {};
  return { title: area.title, description: area.summary };
}

export default function PracticeAreaDetail({
  params,
}: {
  params: { slug: string };
}) {
  const area = getPracticeAreaBySlug(params.slug);
  if (!area) notFound();

  const relatedAdvocates = advocates.filter((a) =>
    area.relatedAdvocateSlugs.includes(a.slug)
  );
  const relatedArticles = articles.filter(
    (a) => a.category === area.title
  );

  return (
    <>
      <section className="pt-40 pb-20 bg-navy text-parchment">
        <div className="container-content">
          <RevealOnScroll>
            <MatterIndex
              label={area.matterNo}
              className="[&_span:first-child]:text-brassLight"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 className="mt-6 font-display text-4xl md:text-6xl max-w-3xl leading-tight">
              {area.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={140}>
            <p className="mt-6 max-w-2xl font-body text-base md:text-lg text-parchment/70 leading-relaxed">
              {area.intro}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6">
            {area.description.map((para, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <p className="font-body text-base text-slate-muted leading-relaxed">
                  {para}
                </p>
              </RevealOnScroll>
            ))}
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <RevealOnScroll>
              <MatterIndex label="Matter Types" />
              <ul className="mt-6 space-y-3">
                {area.matterTypes.map((t) => (
                  <li
                    key={t}
                    className="font-body text-sm text-navy pb-3 border-b border-ink/10"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {relatedAdvocates.length > 0 && (
        <section className="py-20 bg-parchment">
          <div className="container-content">
            <RevealOnScroll>
              <MatterIndex label="Advocates in this Area" />
            </RevealOnScroll>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedAdvocates.map((a, i) => (
                <RevealOnScroll key={a.slug} delay={i * 80}>
                  <AdvocateCard advocate={a} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-content">
            <RevealOnScroll>
              <MatterIndex label="Related Insights" />
            </RevealOnScroll>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              {relatedArticles.map((a, i) => (
                <RevealOnScroll key={a.slug} delay={i * 80}>
                  <ArticleCard article={a} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-navy text-parchment">
        <div className="container-content flex flex-col items-center text-center justify-center gap-10">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-5xl max-w-xl leading-tight text-center">
              Discuss a matter in this area.
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
