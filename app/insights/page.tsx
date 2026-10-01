import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { InsightsFeed } from "@/components/insights/insights-feed";
import { ContactCta } from "@/components/home/contact-cta";
import { getPublishedInsights } from "@/lib/sanity/queries";
import { mapSanityInsightToItem } from "@/lib/sanity/adapters";
import { INSIGHTS_DATA } from "@/lib/data/insights";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Insights & Briefs",
  description:
    "Analytical commentaries, research briefs, data insights, and methodological notes from ARALytica's evaluation and policy research practice.",
  alternates: {
    canonical: "https://aralytica.com/insights",
  },
};

export default async function InsightsPage() {
  const sanityInsights = await getPublishedInsights();
  const items =
    sanityInsights.length > 0
      ? sanityInsights.map(mapSanityInsightToItem)
      : INSIGHTS_DATA;

  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Insights & Analysis"
        title="Evidence-Based Perspectives"
        description="Perspectives on evaluation methodology, econometric diagnostics, and public sector policy reform from ARALytica and collaborators."
      />
      <InsightsFeed items={items} />
      <ContactCta />
    </div>
  );
}
