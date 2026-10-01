import Link from "next/link";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function TeamPreview() {
  return (
    <section className="py-20 sm:py-24 bg-card border-b border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow="Leadership & Expertise"
          title="Methodological Rigor, Practical Leadership"
          description="Our work brings together specialists in evaluation, economics, policy analysis, and field research committed to producing evidence that drives real-world impact."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Founder Profile Spotlight Card */}
          <div className="rounded-2xl border border-border bg-background p-8 sm:p-10 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Monogram/Avatar Graphic */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-primary to-[#450993] text-primary-foreground flex items-center justify-center shadow-md shadow-purple-900/10 mb-4">
                  <span className="font-serif text-3xl font-bold tracking-tight">
                    JPM
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Joel Paulin Mendoza
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                  Founder & Technical Lead
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  <span>Evaluation & Education Policy</span>
                </div>
              </div>

              {/* Biography Details */}
              <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                <p className="text-base text-foreground leading-relaxed">
                  <strong>Joel Paulin Mendoza</strong> is the Founder and
                  Technical Lead of ARALytica. An evaluation consultant and
                  education policy specialist, he brings expertise in impact
                  evaluation, econometrics, and governance analysis.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  He has worked with premier development institutions including
                  the <strong>World Bank</strong>, <strong>USAID</strong>, and{" "}
                  <strong>DFAT</strong>, delivering data-driven insights that
                  support stronger institutional systems and better development
                  outcomes.
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-card border border-border text-muted-foreground font-medium">
                    Impact Evaluation
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-card border border-border text-muted-foreground font-medium">
                    Econometric Modeling
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-card border border-border text-muted-foreground font-medium">
                    Governance Diagnostics
                  </span>
                </div>
              </div>
            </div>

            {/* Network Note */}
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>
                  Supported by a collaborative network of international
                  associates and regional sector specialists.
                </span>
              </div>
              <Link
                href="/team"
                className="font-semibold text-primary hover:underline flex items-center gap-1 whitespace-nowrap"
              >
                <span>Read Full Team Overview</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/team" variant="outline" size="md">
              <Users className="h-4 w-4" />
              <span>Learn About Our Collective Experience</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
