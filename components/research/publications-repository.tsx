"use client";

import { useState } from "react";
import { BookOpen, FileCheck, Layers, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH_PUBLICATIONS, type ResearchItem } from "@/lib/data/research";
import { ResearchCard } from "@/components/research/research-card";

const DOCUMENT_TYPES = [
  "All Document Types",
  "Working Papers",
  "Policy Notes",
  "Evaluation Briefs",
  "Technical Reports",
];

const TYPE_MAP: Record<string, string> = {
  "Working Papers": "Working Paper",
  "Policy Notes": "Policy Note",
  "Evaluation Briefs": "Evaluation Brief",
  "Technical Reports": "Technical Report",
};

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

interface PublicationsRepositoryProps {
  items?: ResearchItem[];
}

export function PublicationsRepository({
  items = RESEARCH_PUBLICATIONS,
}: PublicationsRepositoryProps) {
  const [selectedType, setSelectedType] = useState("All Document Types");

  const filteredItems = items.filter((item) => {
    if (selectedType === "All Document Types") return true;
    const mapped = TYPE_MAP[selectedType];
    return item.documentType === mapped || item.category === selectedType;
  });

  const hasPublications = items.length > 0;

  return (
    <section className="py-20 sm:py-24 bg-background border-b border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow="Working Papers & Reports"
          title="Reports & Publications"
          description="ARALytica produces independent evaluation studies, methodological notes, and policy briefs. Browse our research publications repository."
        />

        {/* Repository Filter Bar (Ready for CMS / Publication indexing) */}
        <div className="mt-12 flex flex-wrap items-center gap-2 pb-8 border-b border-border">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">
            Filter by:
          </span>
          {DOCUMENT_TYPES.map((type) => {
            const isActive = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "bg-card border border-border text-foreground hover:bg-muted"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="mt-10">
          {hasPublications ? (
            filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <ResearchCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 p-8 rounded-2xl bg-card border border-border">
                <p className="text-sm text-muted-foreground">
                  No publications currently cataloged under &ldquo;
                  {selectedType}&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedType("All Document Types")}
                  className="mt-3 text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  View all publications
                </button>
              </div>
            )
          ) : (
            <div className="space-y-12">
              {/* Intentional Repository Status Banner */}
              <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-card border border-border text-center shadow-xs space-y-4">
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-2xl bg-accent text-primary">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Institutional Publication Archive
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  ARALytica&apos;s working papers, policy notes, and technical
                  evaluation reports will be cataloged and made accessible here
                  as they complete formal peer review and dissemination
                  clearance.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground font-mono">
                    <span className="h-2 w-2 rounded-full bg-primary" />
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
                      className="p-6 rounded-2xl bg-card border border-border shadow-xs flex flex-col items-start"
                    >
                      <div className="p-2.5 rounded-lg bg-accent text-primary mb-3">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground mb-1.5">
                        {std.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
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
