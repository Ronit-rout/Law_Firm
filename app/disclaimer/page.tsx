import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import MatterIndex from "@/components/MatterIndex";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Disclaimer & BCI Compliance",
  description:
    "Bar Council of India compliance declaration, terms of website access, and legal disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <main className="pt-40 pb-28 bg-parchment min-h-screen">
      <div className="container-content max-w-4xl">
        <RevealOnScroll>
          <MatterIndex label="Regulatory Compliance" />
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <h1 className="mt-6 font-display text-4xl md:text-5xl text-navy">
            Bar Council of India Disclaimer & Terms of Use
          </h1>
          <p className="mt-3 font-mono text-xs tracking-widest2 uppercase text-brass">
            Under Rule 36, Section IV, Chapter II, Part VI of the Bar Council of India Rules
          </p>
        </RevealOnScroll>

        <div className="mt-12 space-y-12 border-t border-ink/10 pt-10">
          {/* Section 1 */}
          <RevealOnScroll delay={120}>
            <h2 className="font-display text-2xl text-navy">
              1. Prohibition of Advertisement and Solicitation
            </h2>
            <p className="mt-4 font-body text-base text-slate-muted leading-relaxed">
              As per the rules prescribed by the Bar Council of India (BCI), advocates and law firms are strictly prohibited from soliciting work, advertising, or creating a commercial presence in any public medium. This website is maintained strictly as an informational and educational repository for users who proactively seek factual information regarding the firm, its advocates, and areas of practice.
            </p>
          </RevealOnScroll>

          {/* Section 2 */}
          <RevealOnScroll delay={160}>
            <h2 className="font-display text-2xl text-navy">
              2. Voluntary User Access & Confirmation
            </h2>
            <p className="mt-4 font-body text-base text-slate-muted leading-relaxed">
              By accessing, browsing, or utilizing this website, the user explicitly acknowledges and confirms the following:
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm md:text-base text-slate-muted pl-6 list-disc">
              <li>
                The user has accessed this website voluntarily and of their own accord to gain factual information concerning {firm.name}.
              </li>
              <li>
                There has been no advertisement, personal communication, solicitation, invitation, inducement, or promotional effort of any kind whatsoever from the firm, its partners, advocates, or representatives to solicit work through this website.
              </li>
              <li>
                The information provided on this website is made available solely upon the user&apos;s specific request for informational, educational, and research purposes.
              </li>
            </ul>
          </RevealOnScroll>

          {/* Section 3 */}
          <RevealOnScroll delay={200}>
            <h2 className="font-display text-2xl text-navy">
              3. No Legal Advice or Legal Opinion
            </h2>
            <p className="mt-4 font-body text-base text-slate-muted leading-relaxed">
              The contents, articles, commentary, dockets, and materials on this website do not constitute formal legal advice, legal opinion, or counsel on any specific factual circumstance or legal question. Readers and visitors must not act or refrain from acting on the basis of any material contained herein without seeking direct and formal legal counsel from an enrolled advocate licensed in the relevant jurisdiction.
            </p>
          </RevealOnScroll>

          {/* Section 4 */}
          <RevealOnScroll delay={240}>
            <h2 className="font-display text-2xl text-navy">
              4. No Advocate-Client Relationship
            </h2>
            <p className="mt-4 font-body text-base text-slate-muted leading-relaxed">
              Visiting this website, reviewing its contents, or transmitting inquiries via contact forms or electronic mail does not create or constitute an advocate-client relationship between {firm.name} and the user. An advocate-client relationship can only be established after the firm has conducted thorough conflict-of-interest checks and formally executed an engagement agreement.
            </p>
          </RevealOnScroll>

          {/* Section 5 */}
          <RevealOnScroll delay={280}>
            <h2 className="font-display text-2xl text-navy">
              5. Confidentiality and Inquiries
            </h2>
            <p className="mt-4 font-body text-base text-slate-muted leading-relaxed">
              Unsolicited information sent to the firm through web forms or email prior to the formal establishment of an advocate-client engagement may not be treated as privileged or confidential. Users are strongly advised not to disclose sensitive or proprietary details through preliminary web forms.
            </p>
          </RevealOnScroll>

          {/* Section 6 */}
          <RevealOnScroll delay={320}>
            <h2 className="font-display text-2xl text-navy">
              6. Limitation of Liability
            </h2>
            <p className="mt-4 font-body text-base text-slate-muted leading-relaxed">
              {firm.name} expressly disclaims all liability for any loss, damage, or consequence arising directly or indirectly from actions taken or not taken based on any or all of the contents of this website. While reasonable efforts are made to keep information accurate, laws and judicial precedents change rapidly, and the firm does not warrant the completeness or currency of any article or commentary.
            </p>
          </RevealOnScroll>

          {/* Summary / Confirmation Box */}
          <RevealOnScroll delay={360}>
            <div className="bg-white border border-brass/40 p-8 mt-12">
              <p className="font-display text-xl text-navy">
                Acknowledgement & Navigation
              </p>
              <p className="mt-3 font-body text-sm text-slate-muted leading-relaxed">
                If you have questions regarding this compliance statement or wish to proceed to the main website, you may use the links below or contact the firm directly at its registered office.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest2 text-navy hover:text-brass transition-colors focus-ring"
                >
                  Return to Home →
                </Link>
                <Link
                  href="/contact"
                  className="font-body text-sm uppercase tracking-widest2 text-slate-muted hover:text-navy transition-colors focus-ring"
                >
                  Contact Office
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}
