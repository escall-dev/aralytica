import { BookOpen, FileCheck, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH_PUBLICATIONS } from "@/lib/data/research";
import { ResearchCard } from "@/components/research/research-card";

const DOCUMENT_TYPES = [
  "All Document Types",
  "Working Papers",
  "Policy Notes",
  "Evaluation Briefs",
  "Technical Reports",
];

const REPOSITORY_STANDARDS = [
  {
    icon: FileCheck,
    title: "Methodological Verification",
    description:
      "All analytical papers undergo rigorous internal peer review and data verification before publication.",
  },
  {
    icon: ShieldCheck,
    title: "Partner Clearance Protocol",
    description:
      "Client and partner dissemination protocols are strictly observed for all project-based evaluation outputs.",
  },
  {
    icon: Layers,
    title: "Open Knowledge Access",
    description:
      "Published research will be accessible as downloadable executive briefs and complete technical papers.",
  },
];

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

        {/* Repository Filter Bar (Ready for CMS / Publication indexing) */}
        <div className="mt-12 flex flex-wrap items-center gap-2 pb-8 border-b border-[#e5e7eb]">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mr-2">
            Filter by:
          </span>
          {DOCUMENT_TYPES.map((type, i) => (
            <span
              key={type}
              className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-colors ${
                i === 0
                  ? "bg-[#650dd4] text-white font-semibold"
                  : "bg-white border border-[#e5e7eb] text-gray-700 hover:bg-gray-50"
              }`}
            >
              {type}
            </span>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-10">
          {hasPublications ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESEARCH_PUBLICATIONS.map((item) => (
                <ResearchCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {/* Intentional Repository Status Banner */}
              <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-[#e5e7eb] text-center shadow-xs space-y-4">
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-2xl bg-[#f5edff] text-[#650dd4]">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#191919]">
                  Institutional Publication Archive
                </h3>
                <p className="text-base text-[#5f5f5f] leading-relaxed max-w-xl mx-auto">
                  ARALytica&apos;s working papers, policy notes, and technical
                  evaluation reports will be cataloged and made accessible here
                  as they complete formal peer review and dissemination
                  clearance.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-600 font-mono">
                    <span className="h-2 w-2 rounded-full bg-[#650dd4]" />
                    <span>
                      Cataloging in progress • Direct inquiries welcome via
                      contact
                    </span>
                  </span>
                </div>
              </div>

              {/* Repository Governance Standards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {REPOSITORY_STANDARDS.map((std) => {
                  const Icon = std.icon;
                  return (
                    <div
                      key={std.title}
                      className="p-6 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs flex flex-col items-start"
                    >
                      <div className="p-2.5 rounded-lg bg-[#f5edff] text-[#650dd4] mb-3">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#191919] mb-1.5">
                        {std.title}
                      </h4>
                      <p className="text-xs text-[#5f5f5f] leading-relaxed">
                        {std.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
