import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH_AREAS } from "@/lib/data/research";

export function ResearchAreas() {
  return (
    <section className="py-20 sm:py-24 bg-card border-b border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow="Domains of Inquiry"
          title="Active Research Areas"
          description="Our research portfolio focuses on institutional and developmental themes where empirical evidence can drive significant policy and programmatic improvement."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area) => (
            <div
              key={area.id}
              className="flex flex-col p-8 rounded-2xl bg-background border border-border shadow-xs hover:border-primary/40 hover:bg-surface-elevated transition-all duration-200"
            >
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {area.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-border text-xs text-muted-foreground">
                <span className="font-bold text-foreground block uppercase tracking-wider text-[11px]">
                  Priority Topics:
                </span>
                {area.topics.map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
