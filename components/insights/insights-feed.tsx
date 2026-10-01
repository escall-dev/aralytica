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
    <section className="py-20 sm:py-24 bg-card border-b border-border transition-colors duration-200">
      <Container>
        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-border">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">
            Editorial Desks:
          </span>
          <button
            type="button"
            onClick={() => setSelectedDesk("All Desks")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              selectedDesk === "All Desks"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "bg-background border border-border text-foreground hover:bg-muted"
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
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-background border border-border text-foreground hover:bg-muted"
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
              <div className="text-center py-12 p-8 rounded-2xl bg-background border border-border">
                <p className="text-sm text-muted-foreground">
                  No articles currently published under the &ldquo;
                  {selectedDesk}&rdquo; desk.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedDesk("All Desks")}
                  className="mt-3 text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  View all editorial desks
                </button>
              </div>
            )
          ) : (
            <div className="space-y-12">
              {/* Editorial Desk Lead Banner */}
              <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-background border border-border text-center space-y-4 shadow-xs">
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-2xl bg-accent text-primary">
                  <Newspaper className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Editorial &amp; Insights Desk
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  ARALytica&apos;s editorial desk publishes commentaries,
                  methodological notes, and research briefings. Articles and
                  briefs are indexed here upon release.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground font-mono">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>
                      Structured Knowledge Repository • Multi-Desk Publication
                      Stream
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Editorial Desks Overview */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground text-center mb-6">
                  Desk Architecture &amp; Coverage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {EDITORIAL_SECTIONS.map((sec) => {
                    const Icon = sec.icon;
                    return (
                      <div
                        key={sec.category}
                        className="p-6 rounded-2xl bg-background border border-border shadow-xs flex flex-col justify-between hover:border-primary/40 hover:bg-surface-elevated transition-all duration-200"
                      >
                        <div>
                          <div className="p-2.5 rounded-lg bg-accent text-primary inline-block mb-3">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-base font-serif font-bold text-foreground mb-2">
                            {sec.category}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {sec.description}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-primary">
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
