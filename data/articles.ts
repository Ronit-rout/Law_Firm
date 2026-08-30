// Legal commentary, updates, and educational insights.
// Categories correspond to the 5 confirmed practice areas of D.K. Mohanty & Associates.

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
    category: "Company & Commercial Disputes",
    title: "Drafting considerations for arbitration clauses in commercial contracts",
    dateLabel: "[Month Year]",
    excerpt:
      "A review of practical drafting points parties commonly encounter when including arbitration clauses in commercial agreements.",
    body: [
      "[Article content required.] This placeholder demonstrates the editorial article layout — typography, reading width, and section structure — pending genuine, informational content from the firm.",
      "Insight articles should remain educational in nature rather than promotional, consistent with BCI restrictions on solicitation.",
    ],
  },
  {
    slug: "recent-developments-corporate-governance",
    category: "Corporate & Company Law",
    title: "Recent developments in corporate governance compliance",
    dateLabel: "[Month Year]",
    excerpt:
      "An overview of regulatory updates relevant to corporate governance practices for Indian enterprises.",
    body: [
      "[Article content required.] Replace with genuinely informational commentary on the relevant regulatory development.",
    ],
  },
  {
    slug: "considerations-for-family-court-proceedings",
    category: "Family Law",
    title: "Procedural considerations when approaching family courts",
    dateLabel: "[Month Year]",
    excerpt:
      "A general overview of procedural steps and documentation typically involved in family court proceedings.",
    body: [
      "[Article content required.] Replace with genuinely informational commentary suitable for an educational insights section.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
