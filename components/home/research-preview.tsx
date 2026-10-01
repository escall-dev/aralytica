import Link from "next/link";
import { ArrowRight, BookMarked, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESEARCH_AREAS } from "@/lib/data/research";

export function ResearchPreview() {
  return (
    <section className="py-20 sm:py-24 bg-background border-b border-border transition-colors duration-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            align="left"
            eyebrow="Inquiry & Studies"
            title="Research Focus Areas"
            description="Our research agenda investigates structural bottlenecks, policy efficacy, and institutional performance across three foundational domains."
            className="mx-0"
          />
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover shrink-0 focus-visible:outline-primary"
          >
            <span>Explore Research Repository</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Research Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map((area, index) => (
            <div
              key={area.id}
              className="flex flex-col p-7 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-semibold text-primary bg-accent px-2.5 py-1 rounded">
                  Domain 0{index + 1}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  ARALytica
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                {area.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {area.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-border text-xs text-muted-foreground">
                <span className="font-semibold text-foreground block uppercase tracking-wider text-[11px]">
                  Priority Inquiries:
                </span>
                {area.topics.slice(0, 2).map((topic) => (
                  <div key={topic} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>View domain agenda</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Research Repository Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-accent text-primary shrink-0">
              <BookMarked className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Structured Institutional Publications Repository
              </p>
              <p className="text-xs text-muted-foreground">
                Working papers, evaluation briefs, and policy diagnostics will
                be cataloged and made downloadable as they complete
                institutional review.
              </p>
            </div>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover whitespace-nowrap"
          >
            <span>Browse repository</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
