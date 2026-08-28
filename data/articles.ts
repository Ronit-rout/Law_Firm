// DEMO CONTENT NOTICE
// Article titles and content below are illustrative placeholders written to
// demonstrate the editorial layout. They must be reviewed and replaced with
// genuinely informational content before publication, and should not be
// framed as client-acquisition or solicitation material.

export type Article = {
  slug: string;
  category: string;
  title: string;
  dateLabel: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "arbitration-clause-drafting-considerations",
    category: "Dispute Resolution",
    title: "Drafting considerations for arbitration clauses in commercial contracts",
    dateLabel: "[Month Year]",
    excerpt:
      "A review of practical drafting points parties commonly overlook when including arbitration clauses in commercial agreements.",
    body: [
      "[Article content required.] This placeholder demonstrates the editorial article layout — typography, reading width, and section structure — pending genuine, informational content from the firm.",
      "Insight articles should remain educational in nature rather than promotional, consistent with BCI restrictions on solicitation.",
    ],
  },
  {
    slug: "recent-developments-corporate-governance",
    category: "Corporate & Commercial",
    title: "Recent developments in corporate governance compliance",
    dateLabel: "[Month Year]",
    excerpt:
      "An overview of recent regulatory changes relevant to corporate governance practices for Indian companies.",
    body: [
      "[Article content required.] Replace with genuinely informational commentary on the relevant regulatory development.",
    ],
  },
  {
    slug: "due-diligence-checklist-considerations",
    category: "Mergers & Acquisitions",
    title: "Points of focus during transaction due diligence",
    dateLabel: "[Month Year]",
    excerpt:
      "A general overview of areas that typically warrant attention during the due diligence phase of a transaction.",
    body: [
      "[Article content required.] Replace with genuinely informational commentary suitable for an educational insights section.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
