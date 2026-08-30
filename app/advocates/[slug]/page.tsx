import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import { advocates, getAdvocateBySlug } from "@/data/advocates";
import { practiceAreas } from "@/data/practiceAreas";

export function generateStaticParams() {
  return advocates.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const advocate = getAdvocateBySlug(params.slug);
  if (!advocate) return {};
  return { title: advocate.name, description: advocate.designation };
}

export default function AdvocateDetail({
  params,
}: {
  params: { slug: string };
}) {
  const advocate = getAdvocateBySlug(params.slug);
  if (!advocate) notFound();

  const relatedAreas = practiceAreas.filter((p) =>
    advocate.areas.includes(p.title)
  );

  return (
    <section className="pt-40 pb-28 bg-parchment min-h-screen">
      <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-12">
        <RevealOnScroll className="md:col-span-4">
          <div className="aspect-[4/5] w-full bg-stone flex items-center justify-center">
            <span className="font-mono text-[11px] tracking-widest2 uppercase text-ink/30">
              Photo Placeholder
            </span>
          </div>
        </RevealOnScroll>

        <div className="md:col-span-7 md:col-start-6">
          <RevealOnScroll>
            <MatterIndex label="Advocate Profile" />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 className="mt-6 font-display text-4xl md:text-5xl text-navy">
              {advocate.name}
            </h1>
            <p className="mt-2 font-body text-sm uppercase tracking-widest2 text-brass">
              {advocate.designation}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <div className="mt-8 space-y-4">
              {advocate.bio.map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base text-slate-muted leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-ink/10 pt-8">
              <div>
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-muted">
                  Qualification
                </dt>
                <dd className="mt-2 font-body text-sm text-navy">
                  {advocate.qualification.join(", ")}
                </dd>
              </div>
              <div className="border-l-2 border-brass pl-3">
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-brass">
                  Enrolment No., Bar Council of Odisha
                </dt>
                <dd className="mt-1 font-body text-base font-semibold text-navy">
                  {advocate.enrolment}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-muted">
                  Bar Association
                </dt>
                <dd className="mt-2 font-body text-sm text-navy">
                  {advocate.barAssociation}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-muted">
                  Areas of Practice
                </dt>
                <dd className="mt-2 font-body text-sm text-navy">
                  {advocate.areas.join(", ")}
                </dd>
              </div>
            </dl>
          </RevealOnScroll>

          {relatedAreas.length > 0 && (
            <RevealOnScroll delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                {relatedAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/practice-areas/${area.slug}`}
                    className="font-body text-xs uppercase tracking-widest2 border border-ink/15 px-4 py-2 text-navy hover:border-brass hover:text-brass transition-colors focus-ring"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
