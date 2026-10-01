"use client";

import { useState } from "react";
import { Newspaper, BookOpen, BarChart2, FileCode } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  INSIGHTS_DATA,
  INSIGHT_CATEGORIES,
  type InsightItem,
} from "@/lib/data/insights";
import { InsightCard } from "@/components/insights/insight-card";

const EDITORIAL_SECTIONS = [
  {
    category: "Featured Articles",
    icon: Newspaper,
    description:
      "In-depth analytical essays and commentaries bridging empirical evidence with national and regional policy decision-making.",
  },
  {
    category: "Research Briefs",
    icon: BookOpen,
    description:
      "Concise, executive-level summaries translating extensive field evaluations and econometric findings into actionable takeaways.",
  },
  {
    category: "Data Insights",
    icon: BarChart2,
    description:
      "Data-driven diagnostic notes exploring administrative datasets, quantitative trends, and public sector benchmarks.",
  },
  {
    category: "Methodological Notes",
    icon: FileCode,
    description:
      "Technical guidance and discussions on evaluation designs, counterfactual modeling, survey sampling, and data quality assurance.",
  },
];

interface InsightsFeedProps {
  items?: InsightItem[];
}

export function InsightsFeed({ items = INSIGHTS_DATA }: InsightsFeedProps) {
  const [selectedDesk, setSelectedDesk] = useState<string>("All Desks");

  const filteredItems = items.filter((item) => {
    if (selectedDesk === "All Desks") return true;
    return item.category === selectedDesk;
  });

  const hasInsights = items.length > 0;

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
      <Container>
        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-[#e5e7eb]">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mr-2">
            Editorial Desks:
          </span>
          <button
            type="button"
            onClick={() => setSelectedDesk("All Desks")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              selectedDesk === "All Desks"
                ? "bg-[#650dd4] text-white"
                : "bg-[#fafafa] border border-[#e5e7eb] text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Desks
          </button>
          {INSIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedDesk(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                selectedDesk === cat
                  ? "bg-[#650dd4] text-white font-semibold"
                  : "bg-[#fafafa] border border-[#e5e7eb] text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Feed */}
        <div className="mt-12">
          {hasInsights ? (
            filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <InsightCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 p-8 rounded-2xl bg-[#fafafa] border border-[#e5e7eb]">
                <p className="text-sm text-[#5f5f5f]">
                  No articles currently published under the &ldquo;
                  {selectedDesk}&rdquo; desk.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedDesk("All Desks")}
                  className="mt-3 text-xs font-semibold text-[#650dd4] hover:underline"
                >
                  View all editorial desks
                </button>
              </div>
            )
          ) : (
            <div className="space-y-12">
              {/* Editorial Desk Lead Banner */}
              <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#fafafa] border border-[#e5e7eb] text-center space-y-4 shadow-xs">
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-2xl bg-[#f5edff] text-[#650dd4]">
                  <Newspaper className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#191919]">
                  Editorial &amp; Insights Desk
                </h2>
                <p className="text-base text-[#5f5f5f] leading-relaxed max-w-xl mx-auto">
                  ARALytica&apos;s editorial desk publishes commentaries,
                  methodological notes, and research briefings. Articles and
                  briefs are indexed here upon release.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-gray-700 font-mono">
                    <span className="h-2 w-2 rounded-full bg-[#650dd4]" />
                    <span>
                      Structured Knowledge Repository • Multi-Desk Publication
                      Stream
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Editorial Desks Overview */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#191919] text-center mb-6">
                  Desk Architecture &amp; Coverage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {EDITORIAL_SECTIONS.map((sec) => {
                    const Icon = sec.icon;
                    return (
                      <div
                        key={sec.category}
                        className="p-6 rounded-2xl bg-[#fafafa] border border-[#e5e7eb] shadow-xs flex flex-col justify-between hover:border-[#650dd4]/30 hover:bg-white transition-all duration-200"
                      >
                        <div>
                          <div className="p-2.5 rounded-lg bg-[#f5edff] text-[#650dd4] inline-block mb-3">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-base font-serif font-bold text-[#191919] mb-2">
                            {sec.category}
                          </h4>
                          <p className="text-xs text-[#5f5f5f] leading-relaxed">
                            {sec.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-[#650dd4]">
                          <span>Active Desk</span>
                          <span>ARALytica</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
