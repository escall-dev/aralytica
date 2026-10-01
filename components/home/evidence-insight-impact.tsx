import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  GitCommit,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const STAGES = [
  {
    step: "01",
    tagline: "EVIDENCE",
    keywords: ["Research", "Collect", "Validate"],
    headline: "Rigorous Data Foundations",
    description:
      "Grounded in disciplined empirical inquiry—from structured survey designs and administrative data consolidation to rigorous data quality assurance and baseline verification.",
    icon: GitCommit,
    indicatorColor: "bg-blue-500",
  },
  {
    step: "02",
    tagline: "INSIGHT",
    keywords: ["Analyze", "Interpret", "Understand"],
    headline: "Diagnostic & Econometric Depth",
    description:
      "Transforming complex variables into clear understanding through econometric estimation, qualitative context analysis, and causal evaluation modeling.",
    icon: Cpu,
    indicatorColor: "bg-[#650dd4]",
  },
  {
    step: "03",
    tagline: "IMPACT",
    keywords: ["Apply", "Recommend", "Improve"],
    headline: "Practical Strategic Change",
    description:
      "Bridging the gap between evaluation findings and policy action—delivering clear roadmaps, institutional capacity advisory, and measurable program improvements.",
    icon: Sparkles,
    indicatorColor: "bg-emerald-500",
  },
];

export function EvidenceInsightImpact() {
  return (
    <section className="relative py-20 sm:py-24 bg-card border-b border-border overflow-hidden transition-colors duration-200">
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="The ARALytica Progression"
          title="From Raw Evidence to Measurable Impact"
          description="A visual interpretation of our guiding philosophy: robust empirical research leads to deep diagnostic insight, which ultimately powers meaningful, sustainable impact."
        />

        {/* 3-Stage Progression Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.tagline}
                className="relative flex flex-col p-8 rounded-2xl bg-background border border-border hover:border-primary/40 hover:bg-surface-elevated transition-all duration-200 shadow-xs"
              >
                {/* Step badge & Tagline */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-primary bg-accent px-2.5 py-1 rounded-md">
                      STEP {stage.step}
                    </span>
                    <h3 className="text-base font-bold tracking-wider text-foreground uppercase">
                      {stage.tagline}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-card border border-border text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Keywords Subtext Pill */}
                <div className="flex flex-wrap items-center gap-1.5 mb-5">
                  {stage.keywords.map((kw, i) => (
                    <span
                      key={kw}
                      className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {kw}
                      {i < stage.keywords.length - 1 && (
                        <span className="ml-1.5 text-muted-foreground/60 font-bold">
                          •
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                  {stage.headline}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {stage.description}
                </p>

                {/* Progress Node Visual */}
                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${stage.indicatorColor}`}
                    />
                    <span className="font-mono text-[11px]">
                      Phase {stage.step} of 03
                    </span>
                  </div>
                  {idx < STAGES.length - 1 ? (
                    <div className="hidden lg:flex items-center gap-1 text-primary">
                      <span className="text-[11px] font-semibold">Proceed</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Outcome Delivery</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
