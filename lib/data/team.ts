export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "advisory" | "associate";
  initials: string;
  summary: string;
  bio: string[];
  expertise: string[];
  institutions: string[];
  photoUrl?: string | null;
}

export const TEAM_DATA: TeamMember[] = [
  {
    id: "joel-paulin-mendoza",
    name: "Joel Paulin Mendoza",
    role: "Founder & Technical Lead",
    category: "leadership",
    initials: "JPM",
    summary:
      "Evaluation consultant and education policy specialist with extensive experience across impact evaluation, econometrics, and governance analysis.",
    bio: [
      "Joel Paulin Mendoza is the Founder and Technical Lead of ARALytica. An evaluation consultant and education policy specialist, he brings expertise in impact evaluation, econometrics, and governance analysis.",
      "Throughout his career, he has worked with premier bilateral and multilateral development institutions—including the World Bank, USAID, and DFAT—delivering data-driven insights that support stronger institutional systems and better development outcomes.",
      "His technical leadership anchors ARALytica's methodological rigor, guiding study designs from conceptual frameworks to counterfactual evaluations and strategic policy advisories.",
    ],
    expertise: [
      "Impact Evaluation",
      "Econometric Analysis",
      "Education Policy",
      "Governance Diagnostics",
      "Institutional Capacity Assessment",
    ],
    institutions: ["World Bank", "USAID", "DFAT"],
  },
];

export const TEAM_PHILOSOPHY = {
  headline: "Multidisciplinary Capability & Global Network",
  paragraphs: [
    "At ARALytica, our strength lies in a diverse team of researchers, analysts, and development practitioners committed to producing evidence that drives real-world impact. We combine expertise in evaluation, economics, policy analysis, and field research to deliver solutions that are both rigorous and practical.",
    "Our collective experience spans impact evaluation, institutional capacity assessment, governance diagnostics, enterprise competitiveness, and strategic development planning. We bring deep technical capability in both quantitative and qualitative methods, including econometric analysis, mixed-methods research design, and data-driven policy advisory.",
    "Our team works collaboratively across disciplines and regions, bringing together global experience and local insight. We are supported by a network of international associates who contribute specialized expertise and regional knowledge, enabling us to work effectively across diverse development contexts and sectors.",
  ],
};
