import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { WhoWeAre } from "@/components/about/who-we-are";
import { OurApproach } from "@/components/about/our-approach";
import { EvidenceInsightImpact } from "@/components/home/evidence-insight-impact";
import { ValuesPrinciples } from "@/components/about/values-principles";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ARALytica is a research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action through methodological rigor and contextual understanding.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="About ARALytica"
        title="Evidence that Informs. Insights that Improve."
        description="A research, monitoring, evaluation, and data analytics firm helping organizations turn evidence into practical action."
      />
      <WhoWeAre />
      <OurApproach />
      <EvidenceInsightImpact />
      <ValuesPrinciples />
      <ContactCta />
    </div>
  );
}
