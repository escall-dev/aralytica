import Image from "next/image";
import { ArrowRight, BarChart3, Compass, Database } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-[#f5edff]/30 py-20 sm:py-28 lg:py-32 border-b border-[#e5e7eb]">
      {/* Background Subtle Analytical Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#191919 1px, transparent 1px), linear-gradient(to right, #191919 1px, transparent 1px), linear-gradient(to bottom, #191919 1px, transparent 1px)`,
          backgroundSize: "32px 32px, 128px 128px, 128px 128px",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5edff] border border-[#650dd4]/20">
              <span className="h-2 w-2 rounded-full bg-[#650dd4] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#650dd4]">
                Research • Analytics • Advisory
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#191919] tracking-tight leading-[1.15]">
                Evidence. <br />
                <span className="text-[#650dd4]">Insight.</span> Impact.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#191919]/80 font-serif">
                Rigorous analysis. Real-world impact.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#5f5f5f] leading-relaxed max-w-2xl">
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
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#e5e7eb] max-w-xl text-left">
              <div>
                <span className="text-xs font-semibold text-[#191919] uppercase tracking-wider block">
                  Methodology
                </span>
                <span className="text-xs text-[#5f5f5f]">
                  Econometric & Mixed-Methods
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#191919] uppercase tracking-wider block">
                  Evaluation
                </span>
                <span className="text-xs text-[#5f5f5f]">
                  Program & Policy Diagnostics
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#191919] uppercase tracking-wider block">
                  Application
                </span>
                <span className="text-xs text-[#5f5f5f]">
                  Actionable Strategy
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Analytical Visual Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e7eb] shadow-xl shadow-purple-950/5">
              {/* Card Header with Brand Logo */}
              <div className="flex items-center justify-between pb-6 border-b border-[#e5e7eb]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#f5edff]">
                    <Image
                      src="/logo/Aralytica-Logo.png"
                      alt="ARALytica Emblem"
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#191919]">
                      ARALytica
                    </h3>
                    <p className="text-xs text-[#5f5f5f]">
                      Analytical Framework
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#f5edff] text-[#650dd4] border border-[#650dd4]/20">
                  Core Model
                </span>
              </div>

              {/* Analytical Process Node Flow */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100 transition-colors hover:border-[#650dd4]/30">
                  <div className="p-2 rounded-md bg-[#f5edff] text-[#650dd4] mt-0.5">
                    <Database className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#191919]">
                        Phase 01: Evidence
                      </span>
                      <span className="text-[10px] font-mono text-[#650dd4]">
                        Collect & Validate
                      </span>
                    </div>
                    <p className="text-xs text-[#5f5f5f] mt-0.5">
                      Empirical baseline, field surveys & administrative data
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100 transition-colors hover:border-[#650dd4]/30">
                  <div className="p-2 rounded-md bg-[#f5edff] text-[#650dd4] mt-0.5">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#191919]">
                        Phase 02: Insight
                      </span>
                      <span className="text-[10px] font-mono text-[#650dd4]">
                        Model & Diagnose
                      </span>
                    </div>
                    <p className="text-xs text-[#5f5f5f] mt-0.5">
                      Econometric estimation & causal program evaluation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 border border-gray-100 transition-colors hover:border-[#650dd4]/30">
                  <div className="p-2 rounded-md bg-[#f5edff] text-[#650dd4] mt-0.5">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#191919]">
                        Phase 03: Impact
                      </span>
                      <span className="text-[10px] font-mono text-[#650dd4]">
                        Action & Reform
                      </span>
                    </div>
                    <p className="text-xs text-[#5f5f5f] mt-0.5">
                      Institutional advisory, policy roadmaps & capacity
                      building
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="pt-4 border-t border-[#e5e7eb] flex items-center justify-between text-[11px] text-[#5f5f5f]">
                <span className="italic font-serif">
                  &ldquo;From data to decisions, insight to impact.&rdquo;
                </span>
                <span className="font-semibold text-[#650dd4]">ARALytica</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
