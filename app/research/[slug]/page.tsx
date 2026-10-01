import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Download, FileText, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CustomPortableText } from "@/components/portable-text/portable-text";
import { ContactCta } from "@/components/home/contact-cta";
import { getResearchBySlug, getAllResearchSlugs } from "@/lib/sanity/queries";

export const revalidate = 60;
export const dynamicParams = true;

interface ResearchDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllResearchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResearchDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getResearchBySlug(slug);

  if (!doc) {
    return {
      title: "Research Not Found",
    };
  }

  const title = doc.seo?.metaTitle || doc.title;
  const description = doc.seo?.metaDescription || doc.excerpt;

  return {
    title: `${title} | ARALytica Research`,
    description,
    alternates: {
      canonical: `https://aralytica.com/research/${slug}`,
    },
    robots: doc.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://aralytica.com/research/${slug}`,
    },
  };
}

export default async function ResearchDetailPage({
  params,
}: ResearchDetailPageProps) {
  const { slug } = await params;
  const doc = await getResearchBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="flex flex-col">
      {/* Top Header & Metadata */}
      <header className="py-16 sm:py-20 bg-[#fafafa] border-b border-[#e5e7eb]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back to archive link */}
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#650dd4] hover:underline mb-8 group"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Research &amp; Studies</span>
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-[#650dd4] text-white text-xs font-semibold">
                {doc.publicationType}
              </span>
              {doc.domains?.map((domain) => (
                <Badge key={domain} variant="neutral" className="text-xs">
                  {domain}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#191919] tracking-tight leading-tight mb-6">
              {doc.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#5f5f5f] pt-4 border-t border-[#e5e7eb]">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{doc.publicationDate}</span>
              </div>

              {doc.authors && doc.authors.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-gray-400" />
                  <span>{doc.authors.join(", ")}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#650dd4]">
                <FileText className="h-3.5 w-3.5" />
                <span className="uppercase tracking-wider">
                  Status: {doc.status}
                </span>
              </div>
            </div>

            {/* Action Bar */}
            {doc.documentUrl && (
              <div className="mt-8">
                <a
                  href={doc.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#650dd4] text-white text-sm font-semibold hover:bg-[#520ab0] transition-colors shadow-xs"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Publication (PDF)</span>
                </a>
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Executive Abstract Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-[#e5e7eb] border-l-4 border-l-[#650dd4] shadow-xs">
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#650dd4] font-semibold mb-2">
                Executive Abstract
              </h2>
              <p className="text-base sm:text-lg text-[#333] leading-relaxed font-serif italic">
                {doc.excerpt}
              </p>
            </div>

            {/* Description if separate */}
            {doc.description && doc.description !== doc.excerpt && (
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-bold text-[#191919]">
                  Methodological Overview &amp; Context
                </h3>
                <p className="text-base text-[#444] leading-relaxed">
                  {doc.description}
                </p>
              </div>
            )}

            {/* Body Content */}
            {doc.body && doc.body.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <CustomPortableText value={doc.body} />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <ContactCta />
    </article>
  );
}
