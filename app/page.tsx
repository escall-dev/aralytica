import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { WhyAralytica } from "@/components/home/why-aralytica";
import { ServicesPreview } from "@/components/home/services-preview";
import { EvidenceInsightImpact } from "@/components/home/evidence-insight-impact";
import { ResearchPreview } from "@/components/home/research-preview";
import { TeamPreview } from "@/components/home/team-preview";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Evidence. Insight. Impact.",
  description:
    "ARALytica is a research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action through rigorous analysis and real-world impact.",
  alternates: {
    canonical: "https://aralytica.com",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Why ARALytica Section */}
      <WhyAralytica />

      {/* 3. Services Practice Section */}
      <ServicesPreview />

      {/* 4. Evidence -> Insight -> Impact Visual Section */}
      <EvidenceInsightImpact />

      {/* 5. Selected Research & Insights Portfolio Structure */}
      <ResearchPreview />

      {/* 6. Team & Leadership Preview */}
      <TeamPreview />

      {/* 7. Contact CTA */}
      <ContactCta />
    </div>
  );
}
