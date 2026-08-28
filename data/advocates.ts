// DEMO CONTENT NOTICE
// Names, qualifications, enrolment numbers and biographies below are
// placeholders only. No real advocate's identity, credentials or
// professional history should ever be inferred from this file.

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
    areas: ["Dispute Resolution", "Employment & Labour"],
    qualification: ["[LL.B., University Name, Year]", "[Additional Qualification]"],
    enrolment: "[Enrolment No., State Bar Council]",
    barAssociation: "[Bar Association Name]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background. Avoid superlative or promotional language.",
    ],
  },
  {
    slug: "advocate-two",
    name: "[Advocate Name]",
    designation: "[Partner]",
    areas: ["Corporate & Commercial", "Mergers & Acquisitions"],
    qualification: ["[LL.B., University Name, Year]"],
    enrolment: "[Enrolment No., State Bar Council]",
    barAssociation: "[Bar Association Name]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background.",
    ],
  },
  {
    slug: "advocate-three",
    name: "[Advocate Name]",
    designation: "[Partner]",
    areas: ["Dispute Resolution", "Banking & Finance", "Intellectual Property"],
    qualification: ["[LL.B., University Name, Year]", "[Additional Qualification]"],
    enrolment: "[Enrolment No., State Bar Council]",
    barAssociation: "[Bar Association Name]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background.",
    ],
  },
  {
    slug: "advocate-four",
    name: "[Advocate Name]",
    designation: "[Associate]",
    areas: ["Corporate & Commercial"],
    qualification: ["[LL.B., University Name, Year]"],
    enrolment: "[Enrolment No., State Bar Council]",
    barAssociation: "[Bar Association Name]",
    bio: [
      "[Biography required from firm.] Replace with a factual, professional summary of this advocate's practice areas and professional background.",
    ],
  },
];

export function getAdvocateBySlug(slug: string) {
  return advocates.find((a) => a.slug === slug);
}
