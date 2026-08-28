import Link from "next/link";
import type { Article } from "@/data/articles";

export default function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={`group block focus-ring ${featured ? "" : "border-t border-ink/10 pt-8"}`}
    >
      <p className="font-mono text-[11px] tracking-widest2 uppercase text-brass">
        {article.category} · {article.dateLabel}
      </p>
      <h3
        className={`mt-3 font-display text-navy transition-colors duration-300 group-hover:text-brass ${
          featured ? "text-3xl md:text-4xl max-w-3xl" : "text-2xl"
        }`}
      >
        {article.title}
      </h3>
      <p className="mt-3 max-w-2xl font-body text-sm text-slate-muted leading-relaxed">
        {article.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 font-body text-sm text-navy">
        Read
        <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
