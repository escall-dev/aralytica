import { Hero } from "@/components/home/hero";
import { WhyAralytica } from "@/components/home/why-aralytica";
import { ServicesPreview } from "@/components/home/services-preview";
import { EvidenceInsightImpact } from "@/components/home/evidence-insight-impact";
import { ResearchPreview } from "@/components/home/research-preview";
import { TeamPreview } from "@/components/home/team-preview";
import { ContactCta } from "@/components/home/contact-cta";

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
