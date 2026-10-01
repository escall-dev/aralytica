export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  documentType:
    "Working Paper" | "Evaluation Brief" | "Policy Note" | "Technical Report";
  date: string;
  abstract: string;
  status: "forthcoming" | "published";
  authors?: string[];
  downloadUrl?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "education-human-capital",
    title: "Education Systems & Human Capital",
    description:
      "Investigating foundational learning outcomes, pedagogical efficacy, education governance, and school-level accountability mechanisms.",
    topics: [
      "Student learning assessment & counterfactual analysis",
      "Teacher deployment and instructional support systems",
      "Public financing for basic and higher education",
    ],
  },
  {
    id: "governance-institutional-development",
    title: "Governance & Institutional Diagnostics",
    description:
      "Assessing institutional capacity, administrative integrity, regulatory compliance, and public sector modernization programs.",
    topics: [
      "Subnational governance and service delivery benchmarks",
      "Institutional capability diagnostics",
      "Civil society participation and oversight mechanisms",
    ],
  },
  {
    id: "program-impact-methodologies",
    title: "Evaluation Methodologies & Data Systems",
    description:
      "Advancing rigorous mixed-methods protocols, field measurement standards, and routine monitoring integration for public sector programs.",
    topics: [
      "Quasi-experimental and experimental evaluation designs",
      "Administrative data quality audits and verification",
      "Real-time monitoring and adaptive management systems",
    ],
  },
];

// Active items array - empty of fictional research per strict instructions
export const RESEARCH_PUBLICATIONS: ResearchItem[] = [];
