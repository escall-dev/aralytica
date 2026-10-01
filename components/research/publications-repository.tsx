import { BookOpen, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH_PUBLICATIONS } from "@/lib/data/research";
import { ResearchCard } from "@/components/research/research-card";

export function PublicationsRepository() {
  const hasPublications = RESEARCH_PUBLICATIONS.length > 0;

  return (
    <section className="py-20 sm:py-24 bg-[#fafafa] border-b border-[#e5e7eb]">
      <Container>
        <SectionHeading
          eyebrow="Working Papers & Reports"
          title="Reports & Publications"
          description="ARALytica produces independent evaluation studies, methodological notes, and policy briefs. Browse our research publications repository."
        />

        <div className="mt-14">
          {hasPublications ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESEARCH_PUBLICATIONS.map((item) => (
                <ResearchCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl bg-white border border-[#e5e7eb] text-center shadow-xs space-y-4">
              <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-2xl bg-[#f5edff] text-[#650dd4]">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#191919]">
                Publication Repository in Preparation
              </h3>
              <p className="text-sm text-[#5f5f5f] leading-relaxed max-w-lg mx-auto">
                ARALytica&apos;s forthcoming working papers, policy diagnostic
                briefs, and technical evaluation frameworks are currently
                undergoing editorial review and cataloging.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 font-mono">
                <Clock className="h-3.5 w-3.5 text-[#650dd4]" />
                <span>
                  Working papers and PDF downloads will be released in Phase 3+
                </span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
