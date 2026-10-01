export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string[];
  areasOfWork: string[];
  image: string;
  imageAlt: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "research-policy-analysis",
    slug: "research-policy-analysis",
    title: "Research & Policy Analysis",
    eyebrow: "Core Research",
    shortDescription:
      "We design and deliver rigorous, policy-relevant research that informs strategy, strengthens decision-making, and supports evidence-based development.",
    fullDescription: [
      "We design and deliver rigorous, policy-relevant research that informs strategy, strengthens decision-making, and supports evidence-based development.",
      "Our research practice combines advanced quantitative modeling, econometric analysis, and contextual qualitative inquiry. We work alongside government institutions, international development agencies, and civil society partners to investigate complex systemic challenges, identify structural bottlenecks, and ground strategic reform in empirical evidence.",
    ],
    areasOfWork: [
      "Policy diagnostic studies and strategic reviews",
      "Quantitative econometric analysis and modeling",
      "Public sector and education systems research",
      "Field survey design, sampling, and data quality assurance",
      "Evidence synthesis and policy brief formulation",
    ],
    image: "/images/research-policy-analysis.png",
    imageAlt: "Research and policy analysis methodology at ARALytica",
  },
  {
    id: "evaluation-support",
    slug: "evaluation-support",
    title: "Evaluation Support",
    eyebrow: "Diagnostics & Review",
    shortDescription:
      "We conduct independent and learning-focused evaluations to assess program effectiveness, improve performance, and generate actionable insights.",
    fullDescription: [
      "We conduct independent and learning-focused evaluations to assess program effectiveness, improve performance, and generate actionable insights.",
      "Our evaluation framework focuses on understanding what works, why it works, and how interventions can be optimized. We employ mixed-methods designs, theory-of-change validation, and rigorous outcome tracking to help program implementers and funding partners understand developmental returns and achieve verifiable impact.",
    ],
    areasOfWork: [
      "Independent baseline, midterm, and endline program evaluations",
      "Causal impact evaluation and counterfactual analysis",
      "Monitoring and evaluation (M&E) framework architecture",
      "Governance diagnostics and institutional accountability reviews",
      "Learning-focused evaluative debriefs and operational feedback loops",
    ],
    image: "/images/evaluation-support.png",
    imageAlt: "Independent evaluation support framework at ARALytica",
  },
  {
    id: "capacity-building-advisory",
    slug: "capacity-building-advisory",
    title: "Capacity Building & Advisory",
    eyebrow: "Advisory & Systems",
    shortDescription:
      "We support organizations in strengthening systems, enhancing institutional capacity, and translating evidence into practice through tailored advisory and learning support.",
    fullDescription: [
      "We support organizations in strengthening systems, enhancing institutional capacity, and translating evidence into practice through tailored advisory and learning support.",
      "Sustainable development requires institutions that can generate, interpret, and act upon empirical evidence independently. We partner with public sector leaders, operational teams, and analysts to build enduring internal evaluation capabilities, modernize data workflows, and institutionalize evidence-informed decision-making cultures.",
    ],
    areasOfWork: [
      "Institutional M&E systems diagnostics and strengthening",
      "Hands-on training in data collection, cleaning, and econometric analysis",
      "Advisory on evidence translation into executive decision roadmaps",
      "Technical assistance for public agency analytics units",
      "Interactive learning workshops and methodological coaching",
    ],
    image: "/images/capacity-building-advisory.png",
    imageAlt: "Capacity building and technical advisory at ARALytica",
  },
];
