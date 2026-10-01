import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ResearchAreas } from "@/components/research/research-areas";
import { PublicationsRepository } from "@/components/research/publications-repository";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore ARALytica's research and study focus areas: Education Systems, Governance Diagnostics, and Impact Evaluation Methodologies.",
};

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Research & Studies"
        title="Research that Informs Decisions"
        description="Grounded in empirical inquiry and methodological discipline, our research portfolio investigates critical questions across education, governance, and institutional performance."
      />
      <ResearchAreas />
      <PublicationsRepository />
      <ContactCta />
    </div>
  );
}
