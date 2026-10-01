import Image from "next/image";
import { ArrowRight, BarChart3, Compass, Database } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-card via-background to-accent/25 py-20 sm:py-28 lg:py-32 border-b border-border transition-colors duration-200">
      {/* Background Subtle Analytical Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px, 128px 128px, 128px 128px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-accent-foreground">
                Research • Analytics • Advisory
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-foreground tracking-tight leading-[1.15]">
                Evidence. <br />
                <span className="text-primary">Insight.</span> Impact.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-foreground/80 font-serif">
                Rigorous analysis. Real-world impact.
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              ARALytica is a research, monitoring, evaluation, and data
              analytics firm helping organizations turn evidence into practical
              action. We combine methodological rigor with contextual
              understanding to support better policies, stronger programs, and
              more informed decisions.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/services" variant="primary" size="lg">
                <span>Explore Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Quick Evidence Pillars Pill */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-border max-w-xl text-left">
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                  Methodology
                </span>
                <span className="text-xs text-muted-foreground">
                  Econometric & Mixed-Methods
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                  Evaluation
                </span>
                <span className="text-xs text-muted-foreground">
                  Program & Policy Diagnostics
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                  Application
                </span>
                <span className="text-xs text-muted-foreground">
                  Actionable Strategy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Analytical Visual Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xl shadow-purple-950/5">
              {/* Card Header with Brand Logo */}
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-border/50 shadow-xs">
                    <Image
                      src="/logo/Aralytica-Logo.png"
                      alt="ARALytica Emblem"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      ARALytica
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Analytical Framework
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-accent text-accent-foreground border border-primary/20">
                  Core Model
                </span>
              </div>

              {/* Analytical Process Node Flow */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-lg bg-surface-subtle border border-border transition-colors hover:border-primary/40">
                  <div className="p-2 rounded-md bg-accent text-primary mt-0.5">
                    <Database className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Phase 01: Evidence
                      </span>
                      <span className="text-[10px] font-mono text-primary font-medium">
                        Collect & Validate
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Empirical baseline, field surveys & administrative data
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-surface-subtle border border-border transition-colors hover:border-primary/40">
                  <div className="p-2 rounded-md bg-accent text-primary mt-0.5">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Phase 02: Insight
                      </span>
                      <span className="text-[10px] font-mono text-primary font-medium">
                        Model & Diagnose
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Econometric estimation & causal program evaluation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-surface-subtle border border-border transition-colors hover:border-primary/40">
                  <div className="p-2 rounded-md bg-accent text-primary mt-0.5">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Phase 03: Impact
                      </span>
                      <span className="text-[10px] font-mono text-primary font-medium">
                        Action & Reform
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Institutional advisory, policy roadmaps & capacity
                      building
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="pt-4 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="italic font-serif">
                  &ldquo;From data to decisions, insight to impact.&rdquo;
                </span>
                <span className="font-semibold text-primary">ARALytica</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
