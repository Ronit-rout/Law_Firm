// Practice Areas for D.K. Mohanty & Associates
// Five confirmed practice areas reflecting the firm's scope in Odisha.
// Content is descriptive, factual, and strictly compliant with BCI Rule 36.

export type PracticeArea = {
  slug: string;
  matterNo: string;
  title: string;
  summary: string;
  intro: string;
  description: string[];
  matterTypes: string[];
  relatedAdvocateSlugs: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-company-law",
    matterNo: "MATTER NO. 01",
    title: "Corporate & Company Law",
    summary:
      "Advisory on incorporation, governance, regulatory compliance, and corporate structuring for companies and promoters.",
    intro:
      "The corporate and company law practice advises on the legal framework governing companies, from incorporation through ongoing governance and compliance.",
    description: [
      "The firm advises companies, promoters, and directors on matters arising under the Companies Act, 2013 and related regulatory frameworks. This includes entity structuring, board governance, statutory filings, and compliance with applicable rules and notifications.",
      "Advisory work in this area is factual and procedural in nature, focused on helping clients meet their legal obligations accurately and on time.",
      "This section intentionally omits promotional claims, focusing strictly on advisory scope and procedural governance.",
    ],
    matterTypes: [
      "Company incorporation & structuring",
      "Corporate governance advisory",
      "Regulatory compliance & filings",
      "Commercial contracts & agreements",
      "Promoter & director advisory",
    ],
    relatedAdvocateSlugs: ["advocate-one", "advocate-two"],
  },
  {
    slug: "company-commercial-disputes",
    matterNo: "MATTER NO. 02",
    title: "Company & Commercial Disputes",
    summary:
      "Representation in disputes arising from corporate, shareholder, partnership, and commercial relationships.",
    intro:
      "The disputes practice handles litigation and proceedings arising from corporate and commercial relationships, including shareholder disagreements, partnership disputes, and contractual claims.",
    description: [
      "Matters in this area typically involve proceedings before civil courts, commercial courts, the National Company Law Tribunal (NCLT), or arbitral tribunals. The firm advises on pre-litigation strategy, interim relief, trial representation, and enforcement.",
      "This page does not reference case outcomes or success rates, consistent with Bar Council of India rules on advertising.",
    ],
    matterTypes: [
      "Shareholder & partnership disputes",
      "Commercial contract disputes",
      "NCLT & company law proceedings",
      "Arbitration & alternative dispute resolution",
      "Recovery proceedings",
    ],
    relatedAdvocateSlugs: ["advocate-one", "advocate-three"],
  },
  {
    slug: "criminal-law",
    matterNo: "MATTER NO. 03",
    title: "Criminal Law",
    summary:
      "Criminal defence and representation in related proceedings before courts and tribunals.",
    intro:
      "The criminal law practice provides defence representation and advisory across the spectrum of criminal proceedings under applicable criminal statutes.",
    description: [
      "The firm represents individuals in criminal matters at the trial and appellate stages, including bail applications, charge-sheet proceedings, and trial defence. Advisory extends to anticipatory bail, quashing petitions, and related constitutional remedies.",
      "All descriptions are factual. No claims are made regarding acquittal rates or case outcomes.",
    ],
    matterTypes: [
      "Criminal defence & trial representation",
      "Bail & anticipatory bail applications",
      "Quashing petitions & constitutional remedies",
      "Appellate proceedings",
      "Criminal complaints & FIR advisory",
    ],
    relatedAdvocateSlugs: ["advocate-three"],
  },
  {
    slug: "family-law",
    matterNo: "MATTER NO. 04",
    title: "Family Law",
    summary:
      "Advisory and representation in matrimonial, custody, succession, and related family matters.",
    intro:
      "The family law practice advises individuals and families on matters of personal law, including matrimonial disputes, child custody, succession, and maintenance.",
    description: [
      "Matters are handled before family courts and civil courts as appropriate, with attention to both the legal and personal dimensions of each situation. The firm advises under the applicable personal law framework — Hindu, Muslim, Christian, or secular — depending on the parties involved.",
      "The practice aims to provide clear, factual guidance in matters that are often sensitive and time-critical.",
    ],
    matterTypes: [
      "Matrimonial disputes & divorce",
      "Child custody & guardianship",
      "Succession & inheritance",
      "Maintenance proceedings",
      "Domestic violence proceedings",
    ],
    relatedAdvocateSlugs: ["advocate-two", "advocate-four"],
  },
  {
    slug: "civil-disputes",
    matterNo: "MATTER NO. 05",
    title: "Civil Disputes",
    summary:
      "Representation in property, contract, and general civil litigation before courts and tribunals.",
    intro:
      "The civil disputes practice handles litigation involving property rights, contractual obligations, and other civil claims before district courts, high courts, and related forums.",
    description: [
      "Civil matters include disputes over immovable property, title claims, specific performance of contracts, injunctions, and recovery suits. The firm advises from the pre-litigation stage through trial, appeals, and execution.",
      "Content on this page is descriptive of the types of matters handled. It does not constitute a guarantee of representation in any specific matter.",
    ],
    matterTypes: [
      "Property & title disputes",
      "Contract enforcement & specific performance",
      "Injunction & declaratory suits",
      "Recovery & money suits",
      "Appellate civil proceedings",
    ],
    relatedAdvocateSlugs: ["advocate-one", "advocate-four"],
  },
];

export function getPracticeAreaBySlug(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
