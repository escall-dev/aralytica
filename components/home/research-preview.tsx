import Link from "next/link";
import { ArrowRight, BookMarked, Calendar, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

const PREVIEW_TOPICS = [
  {
    category: "Education Policy",
    title:
      "Econometric Approaches to Learning Outcomes & Institutional Quality",
    type: "Working Paper Series",
    status: "Upcoming Publication",
    date: "Scheduled 2026",
    description:
      "Methodological framework exploring causal inference models for evaluating student learning interventions and policy reforms in developing education systems.",
  },
  {
    category: "Impact Evaluation",
    title: "Diagnostic Methods for Program Governance & Field Operations",
    type: "Evaluation Brief",
    status: "Upcoming Publication",
    date: "Scheduled 2026",
    description:
      "A structured guide to designing mixed-methods evaluation protocols for institutional partners, focusing on data reliability and stakeholder feedback loops.",
  },
  {
    category: "Institutional Advisory",
    title:
      "Data Systems Capacity: Bridging Field Evidence and Executive Action",
    type: "Policy Note",
    status: "Upcoming Publication",
    date: "Scheduled 2026",
    description:
      "Strategic insights on building internal monitoring and evaluation capability within public agencies and development organizations.",
  },
];

export function ResearchPreview() {
  return (
    <section className="py-20 sm:py-24 bg-[#fafafa] border-b border-[#e5e7eb]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            align="left"
            eyebrow="Knowledge & Publications"
            title="Research & Insights"
            description="Our forthcoming publication repository will host working papers, evaluation briefs, and policy diagnostics prepared by ARALytica and international collaborators."
            className="mx-0"
          />
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#650dd4] hover:text-[#520ab0] shrink-0 focus-visible:outline-[#650dd4]"
          >
            <span>View All Research Outlines</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Future-Ready Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PREVIEW_TOPICS.map((topic) => (
            <div
              key={topic.title}
              className="flex flex-col p-7 rounded-2xl bg-white border border-[#e5e7eb] shadow-xs hover:border-[#650dd4]/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="primary" className="text-[11px]">
                  {topic.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs text-[#5f5f5f]">
                  <Calendar className="h-3.5 w-3.5 text-gray-400" />
                  <span>{topic.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#5f5f5f] mb-3">
                <FileText className="h-3.5 w-3.5 text-[#650dd4]" />
                <span>{topic.type}</span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#191919] group-hover:text-[#650dd4] transition-colors mb-3 leading-snug">
                {topic.title}
              </h3>

              <p className="text-sm text-[#5f5f5f] leading-relaxed flex-1">
                {topic.description}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-[#650dd4] bg-[#f5edff] px-2.5 py-1 rounded">
                  {topic.status}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  ARALytica
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Research Repository Notice */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-[#e5e7eb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#f5edff] text-[#650dd4]">
              <BookMarked className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#191919]">
                Full research repository and CMS integration coming in
                subsequent phases
              </p>
              <p className="text-xs text-[#5f5f5f]">
                Working papers and formal evaluation reports will be made
                downloadable directly through our publication library.
              </p>
            </div>
          </div>
          <Link
            href="/research"
            className="text-xs font-semibold text-[#650dd4] hover:underline whitespace-nowrap"
          >
            Learn more →
          </Link>
        </div>
      </Container>
    </section>
  );
}
