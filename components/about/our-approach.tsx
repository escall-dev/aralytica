import { CheckCircle2, FileSearch, Layers, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const APPROACH_PILLARS = [
  {
    icon: FileSearch,
    title: "Methodological Rigor",
    description:
      "We design studies and evaluations with disciplined statistical, econometric, and qualitative standards. Every analytical claim is verified against sound empirical data and reproducible methods.",
  },
  {
    icon: Layers,
    title: "Contextual Understanding",
    description:
      "Data achieves true meaning only within institutional, cultural, and operational contexts. We examine systemic nuances, policy environments, and local dynamics to avoid generic prescriptions.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Complex analytical findings are only valuable if leaders can understand and apply them. We translate dense econometric and technical findings into transparent, executive-ready insights.",
  },
];

export function OurApproach() {
  return (
    <section className="py-20 sm:py-24 bg-background border-b border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow="Our Methodology"
          title="How We Approach Evidence & Analytics"
          description="We believe research must be both academically sound and practically applicable. Our engagement model bridges theoretical discipline with field-level execution."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {APPROACH_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col p-8 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent text-primary mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {pillar.description}
                </p>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Core standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
