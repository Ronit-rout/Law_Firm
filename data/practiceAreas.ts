// DEMO CONTENT NOTICE
// Practice-area names below are generic, industry-standard legal categories
// used only to populate the demo. They are not a factual claim about which
// matters this firm actually handles. Confirm the firm's real practice
// focus before launch and replace this file accordingly.

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
    slug: "dispute-resolution",
    matterNo: "MATTER NO. 01",
    title: "Dispute Resolution",
    summary:
      "Advisory and representation in civil, commercial and arbitration proceedings before courts and tribunals.",
    intro:
      "The dispute resolution practice advises clients through the life of a matter — from early assessment and pre-litigation strategy through to hearings, appeals and enforcement.",
    description: [
      "[Content required from firm.] This section should describe the nature of disputes the firm advises on — for instance commercial contract disputes, shareholder and partnership disputes, or real estate litigation — using factual, restrained language rather than promotional claims.",
      "Matters are typically handled before the appropriate forum, whether civil courts, commercial courts, or arbitral tribunals, with advocates coordinating closely with clients at each procedural stage.",
      "This page intentionally omits case outcomes, settlement figures, or success-rate statistics, in line with Bar Council of India restrictions on advertising results.",
    ],
    matterTypes: [
      "Commercial contract disputes",
      "Arbitration & alternative dispute resolution",
      "Real estate and title disputes",
      "Shareholder & partnership disputes",
      "Recovery proceedings",
    ],
    relatedAdvocateSlugs: ["advocate-one", "advocate-three"],
  },
  {
    slug: "corporate-commercial",
    matterNo: "MATTER NO. 02",
    title: "Corporate & Commercial",
    summary:
      "Structuring, contracts and ongoing advisory for companies, promoters and commercial counterparties.",
    intro:
      "Advisory support across entity structuring, commercial contracting, and day-to-day corporate governance matters.",
    description: [
      "[Content required from firm.] Describe the firm's actual corporate advisory scope here — for example incorporation, contract drafting and review, corporate governance, or commercial negotiations.",
      "Content should remain factual and descriptive of services rendered, without superlative claims about scale or standing.",
    ],
    matterTypes: [
      "Entity structuring & incorporation",
      "Commercial contracts",
      "Corporate governance advisory",
      "Vendor & distribution agreements",
    ],
    relatedAdvocateSlugs: ["advocate-two"],
  },
  {
    slug: "mergers-acquisitions",
    matterNo: "MATTER NO. 03",
    title: "Mergers & Acquisitions",
    summary:
      "Transaction advisory across due diligence, documentation and closing for domestic transactions.",
    intro:
      "Support across the transaction lifecycle, from preliminary due diligence to definitive documentation and closing mechanics.",
    description: [
      "[Content required from firm.] Outline the firm's actual M&A experience and typical transaction size or sector focus, if the firm wishes to disclose this factually.",
    ],
    matterTypes: [
      "Due diligence",
      "Share & asset purchase agreements",
      "Joint ventures",
      "Regulatory approvals",
    ],
    relatedAdvocateSlugs: ["advocate-two"],
  },
  {
    slug: "banking-finance",
    matterNo: "MATTER NO. 04",
    title: "Banking & Finance",
    summary:
      "Advisory on lending documentation, security creation and regulatory compliance for financial transactions.",
    intro:
      "Advisory support to lenders and borrowers on facility documentation, security packages and regulatory requirements.",
    description: [
      "[Content required from firm.] Describe the firm's banking & finance advisory scope factually.",
    ],
    matterTypes: [
      "Facility agreements",
      "Security documentation",
      "Regulatory compliance",
    ],
    relatedAdvocateSlugs: ["advocate-three"],
  },
  {
    slug: "employment-labour",
    matterNo: "MATTER NO. 05",
    title: "Employment & Labour",
    summary: "Advisory on employment contracts, policy design and workplace compliance.",
    intro:
      "Advisory on the employment relationship — from onboarding documentation to policy design and statutory compliance.",
    description: [
      "[Content required from firm.] Describe the firm's employment & labour advisory scope factually.",
    ],
    matterTypes: [
      "Employment contracts & policies",
      "Statutory compliance",
      "Workplace inquiries",
    ],
    relatedAdvocateSlugs: ["advocate-one"],
  },
  {
    slug: "intellectual-property",
    matterNo: "MATTER NO. 06",
    title: "Intellectual Property",
    summary: "Advisory on trademark, copyright and IP portfolio matters.",
    intro:
      "Advisory support on the creation, protection and enforcement of intellectual property rights.",
    description: [
      "[Content required from firm.] Describe the firm's IP advisory scope factually.",
    ],
    matterTypes: [
      "Trademark advisory",
      "Copyright matters",
      "IP portfolio management",
    ],
    relatedAdvocateSlugs: ["advocate-three"],
  },
];

export function getPracticeAreaBySlug(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}
