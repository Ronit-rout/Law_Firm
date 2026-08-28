import Link from "next/link";
import MatterIndex from "@/components/MatterIndex";

export default function NotFound() {
  return (
    <section className="pt-40 pb-28 min-h-[80vh] flex items-center bg-parchment">
      <div className="container-content">
        <MatterIndex label="404" />
        <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md font-body text-base text-slate-muted leading-relaxed">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-body text-sm text-navy focus-ring"
        >
          ← Return home
        </Link>
      </div>
    </section>
  );
}
