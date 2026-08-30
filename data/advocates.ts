// Advocates and counsel profile data for D.K. Mohanty & Associates.
// Areas of practice correspond to the 5 confirmed firm practice domains.
// Enrolment references State Bar Council of Odisha.

export type Advocate = {
  slug: string;
  name: string;
  designation: string;
  areas: string[];
  qualification: string[];
  enrolment: string;
  barAssociation: string;
  bio: string[];
};

export const advocates: Advocate[] = [
  {
    slug: "advocate-one",
    name: "[Advocate Name]",
    designation: "[Senior Partner]",
    areas: [
      "Corporate & Company Law",
      "Company & Commercial Disputes",
      "Civil Disputes",
    ],
    qualification: ["[LL.B., University Name, Year]", "[Additional Qualification]"],
    enrolment: "[Enrolment No., Bar Council of Odisha]",
    barAssociation: "[Bar Association, Odisha]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background. Avoid superlative or promotional language.",
    ],
  },
  {
    slug: "advocate-two",
    name: "[Advocate Name]",
    designation: "[Partner]",
    areas: ["Corporate & Company Law", "Family Law"],
    qualification: ["[LL.B., University Name, Year]"],
    enrolment: "[Enrolment No., Bar Council of Odisha]",
    barAssociation: "[Bar Association, Odisha]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background.",
    ],
  },
  {
    slug: "advocate-three",
    name: "[Advocate Name]",
    designation: "[Partner]",
    areas: ["Company & Commercial Disputes", "Criminal Law"],
    qualification: ["[LL.B., University Name, Year]", "[Additional Qualification]"],
    enrolment: "[Enrolment No., Bar Council of Odisha]",
    barAssociation: "[Bar Association, Odisha]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background.",
    ],
  },
  {
    slug: "advocate-four",
    name: "[Advocate Name]",
    designation: "[Associate]",
    areas: ["Family Law", "Civil Disputes"],
    qualification: ["[LL.B., University Name, Year]"],
    enrolment: "[Enrolment No., Bar Council of Odisha]",
    barAssociation: "[Bar Association, Odisha]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background.",
    ],
  },
];

export function getAdvocateBySlug(slug: string) {
  return advocates.find((a) => a.slug === slug);
}
