import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ClipboardCheck, FileSpreadsheet, Presentation } from "lucide-react";

const ENGAGEMENT_STEPS = [
  {
    step: "01",
    title: "Needs Assessment & Scoping",
    icon: ClipboardCheck,
    description:
      "We begin by identifying institutional questions, mapping existing administrative and field data, and scoping a methodologically sound study or evaluation plan.",
  },
  {
    step: "02",
    title: "Fieldwork & Analytical Execution",
    icon: FileSpreadsheet,
    description:
      "Deploying rigorous surveys, qualitative diagnostics, and econometric modeling to extract reliable, verifiable insights free from bias.",
  },
  {
    step: "03",
    title: "Insight Translation & Advisory",
    icon: Presentation,
    description:
      "Synthesizing findings into clear executive briefs, workshop debriefs, and actionable policy roadmaps for institutional leadership.",
  },
];

export function HowWeEngage() {
  return (
    <section className="py-20 sm:py-24 bg-[#fafafa] border-b border-[#e5e7eb]">
      <Container>
        <SectionHeading
          eyebrow="Collaboration Model"
          title="How We Partner with Organizations"
          description="From initial study conceptualization through final policy briefing, our engagement is collaborative, transparent, and focused on institutional empowerment."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENGAGEMENT_STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="flex flex-col p-8 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#650dd4] bg-[#f5edff] px-2.5 py-1 rounded">
                    PHASE {s.step}
                  </span>
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-50 text-gray-700 border border-gray-200">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#191919] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#5f5f5f] leading-relaxed flex-1">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
