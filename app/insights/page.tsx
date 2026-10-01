import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { InsightsFeed } from "@/components/insights/insights-feed";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Insights & Briefs",
  description:
    "Analytical commentaries, research briefs, data insights, and methodological notes from ARALytica's evaluation and policy research practice.",
  alternates: {
    canonical: "https://aralytica.com/insights",
  },
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Insights & Analysis"
        title="Evidence-Based Perspectives"
        description="Perspectives on evaluation methodology, econometric diagnostics, and public sector policy reform from ARALytica and collaborators."
      />
      <InsightsFeed />
      <ContactCta />
    </div>
  );
}
