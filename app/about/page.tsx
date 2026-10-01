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
    "Learn about ARALytica's institutional mission, research approach, and the Filipino root 'Aral'—delivering rigorous empirical analysis and evidence-based development.",
  alternates: {
    canonical: "https://aralytica.com/about",
  },
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
