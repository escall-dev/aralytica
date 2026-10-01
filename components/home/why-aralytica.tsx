import { BookOpen, LineChart, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Rooted in Disciplined Study",
    highlight: "“Aral”",
    description:
      "ARALytica draws its foundation from the Filipino word “Aral”—signifying disciplined study, learning, and reflection. We believe strong institutions and lasting development require genuine inquiry grounded in evidence.",
  },
  {
    icon: LineChart,
    title: "Rigorous Methodological Standards",
    highlight: "Methodology",
    description:
      "Our work unites advanced quantitative analytics, econometric methods, and qualitative field research. We deliver analytical depth that ensures conclusions withstand scrutiny and provide confidence in critical choices.",
  },
  {
    icon: Target,
    title: "Real-World Application & Impact",
    highlight: "Execution",
    description:
      "Our engagement extends beyond diagnostic reports. We partner with public agencies and international organizations to translate analytical insights into actionable strategies that measurably improve outcomes.",
  },
];

export function WhyAralytica() {
  return (
    <section className="py-20 sm:py-24 bg-card border-b border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow="Why ARALytica"
          title="Disciplined Inquiry. Actionable Results."
          description="We combine methodological expertise with practical application—helping organizations move from raw data to informed decisions, and from strategic insight to tangible impact."
        />

        {/* Visual Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col p-8 rounded-2xl bg-background border border-border transition-all duration-200 hover:bg-surface-elevated hover:border-primary/40 hover:shadow-lg hover:shadow-purple-900/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent text-primary group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-card border border-border text-primary">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                  {pillar.description}
                </p>

                <div className="mt-6 pt-4 border-t border-border flex items-center text-xs font-semibold text-primary">
                  <span>Evidence-based approach</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
