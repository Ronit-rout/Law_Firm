import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import ContactForm from "@/components/ContactForm";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for the firm.",
};

export default function ContactPage() {
  return (
    <section className="pt-44 pb-32 bg-parchment min-h-screen">
      <div className="container-content grid grid-cols-1 md:grid-cols-12 gap-14">
        <div className="md:col-span-5">
          <RevealOnScroll>
            <MatterIndex label="Contact" />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h1 className="mt-6 font-display text-4xl md:text-5xl text-navy">
              Contact the firm.
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={140}>
            <p className="mt-6 font-body text-base text-slate-muted leading-relaxed max-w-md">
              Reach the firm using the details below, or send an enquiry using
              the form.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <dl className="mt-10 space-y-6 border-t border-ink/10 pt-8">
              <div>
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-muted">
                  Registered Office
                </dt>
                <dd className="mt-2 font-body text-sm text-navy leading-relaxed">
                  {firm.registeredOffice.line1}
                  <br />
                  {firm.registeredOffice.line2}
                  <br />
                  {firm.registeredOffice.city}, {firm.registeredOffice.state}{" "}
                  {firm.registeredOffice.pin}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-muted">
                  Phone
                </dt>
                <dd className="mt-2 font-body text-sm text-navy">
                  {firm.phone}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-muted">
                  Email
                </dt>
                <dd className="mt-2 font-body text-sm text-navy">
                  {firm.email}
                </dd>
              </div>
            </dl>
          </RevealOnScroll>

          <RevealOnScroll delay={260}>
            <p className="mt-10 font-body text-xs text-slate-muted leading-relaxed border-t border-ink/10 pt-6">
              {firm.privacyNote}
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="md:col-span-6 md:col-start-7" delay={120}>
          <div className="bg-white border border-ink/10 px-6 py-10 md:px-10 md:py-12">
            <ContactForm />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
