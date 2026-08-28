import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import ArticleCard from "@/components/ArticleCard";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article className="pt-40 pb-20 bg-parchment">
        <div className="container-content max-w-3xl">
          <RevealOnScroll>
            <MatterIndex label={article.category} />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 className="mt-6 font-display text-3xl md:text-5xl text-navy leading-tight">
              {article.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={140}>
            <p className="mt-4 font-body text-xs uppercase tracking-widest2 text-slate-muted">
              {article.dateLabel}
            </p>
          </RevealOnScroll>

          <div className="mt-12 space-y-6">
            {article.body.map((para, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <p className="font-body text-lg text-ink/85 leading-relaxed">
                  {para}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={200}>
            <p className="mt-12 border-l-2 border-brass pl-6 font-body text-sm text-slate-muted leading-relaxed">
              This article is for general informational purposes only and
              does not constitute legal advice. Readers should consult an
              advocate regarding their specific circumstances.
            </p>
          </RevealOnScroll>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-content">
            <RevealOnScroll>
              <MatterIndex label="Further Reading" />
            </RevealOnScroll>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              {related.map((a, i) => (
                <RevealOnScroll key={a.slug} delay={i * 80}>
                  <ArticleCard article={a} />
                </RevealOnScroll>
              ))}
            </div>
            <RevealOnScroll delay={160}>
              <Link
                href="/insights"
                className="mt-14 inline-flex items-center gap-2 font-body text-sm text-navy focus-ring"
              >
                ← All insights
              </Link>
            </RevealOnScroll>
          </div>
        </section>
      )}
    </>
  );
}
