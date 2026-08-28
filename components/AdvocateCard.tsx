import Link from "next/link";
import type { Advocate } from "@/data/advocates";

export default function AdvocateCard({ advocate }: { advocate: Advocate }) {
  return (
    <Link
      href={`/advocates/${advocate.slug}`}
      className="group block focus-ring"
    >
      <div className="aspect-[4/5] w-full bg-stone overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-ink/30">
            Photo Placeholder
          </span>
        </div>
        <div className="absolute inset-0 border border-ink/0 group-hover:border-brass/60 transition-colors duration-300 ease-editorial" />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-xl text-navy">{advocate.name}</h3>
        <p className="mt-1 font-body text-xs uppercase tracking-widest2 text-slate-muted">
          {advocate.designation}
        </p>
        <p className="mt-2 font-body text-sm text-slate-muted">
          {advocate.areas.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
