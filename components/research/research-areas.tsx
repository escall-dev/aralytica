import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH_AREAS } from "@/lib/data/research";

export function ResearchAreas() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e5e7eb]">
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
              className="flex flex-col p-8 rounded-2xl bg-[#fafafa] border border-[#e5e7eb] shadow-xs hover:border-[#650dd4]/30 hover:bg-white transition-all duration-200"
            >
              <h3 className="text-xl font-serif font-bold text-[#191919] mb-3 leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-[#5f5f5f] leading-relaxed mb-6 flex-1">
                {area.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#e5e7eb]/80 text-xs text-gray-700">
                <span className="font-bold text-[#191919] block uppercase tracking-wider text-[11px]">
                  Priority Topics:
                </span>
                {area.topics.map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#650dd4] shrink-0 mt-0.5" />
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
