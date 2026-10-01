import { Newspaper, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { INSIGHTS_DATA, INSIGHT_CATEGORIES } from "@/lib/data/insights";
import { InsightCard } from "@/components/insights/insight-card";

export function InsightsFeed() {
  const hasInsights = INSIGHTS_DATA.length > 0;

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
      <Container>
        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-[#e5e7eb]">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mr-2">
            Categories:
          </span>
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#650dd4] text-white">
            All Insights
          </span>
          {INSIGHT_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-default"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Content Feed */}
        <div className="mt-12">
          {hasInsights ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INSIGHTS_DATA.map((item) => (
                <InsightCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto p-8 sm:p-14 rounded-3xl bg-[#fafafa] border border-[#e5e7eb] text-center space-y-5">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-[#f5edff] text-[#650dd4]">
                <Newspaper className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#191919]">
                Editorial Desk in Preparation
              </h2>
              <p className="text-base text-[#5f5f5f] leading-relaxed max-w-lg mx-auto">
                ARALytica&apos;s editorial desk produces analytical
                commentaries, methodological notes, and policy debriefs. Full
                article publishing and CMS integration are scheduled for
                upcoming implementation phases.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-gray-700 font-mono">
                  <Sparkles className="h-3.5 w-3.5 text-[#650dd4]" />
                  <span>
                    Sanity CMS &amp; Editorial Pipeline Integration in Phase 3+
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
