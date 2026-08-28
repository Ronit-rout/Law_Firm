import Link from "next/link";
import type { PracticeArea } from "@/data/practiceAreas";

export default function PracticeCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="group block border-t border-ink/10 py-8 md:py-10 focus-ring"
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
        <span className="font-mono text-xs tracking-widest2 uppercase text-brass shrink-0 md:w-32">
          {area.matterNo}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-3xl text-navy transition-transform duration-300 ease-editorial group-hover:translate-x-2">
            {area.title}
          </h3>
          <p className="mt-2 max-w-xl font-body text-sm text-slate-muted">
            {area.summary}
          </p>
        </div>
        <span className="font-body text-sm text-navy shrink-0 flex items-center gap-2 md:self-center">
          View
          <span className="inline-block transition-transform duration-300 ease-editorial group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
