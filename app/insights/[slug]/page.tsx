import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CategoryBadge } from "@/components/insights/category-badge";
import { CustomPortableText } from "@/components/portable-text/portable-text";
import { ContactCta } from "@/components/home/contact-cta";
import { getInsightBySlug, getAllInsightSlugs } from "@/lib/sanity/queries";
import { getSanityImageUrl } from "@/lib/sanity/image";

export const revalidate = 60;
export const dynamicParams = true;

interface InsightDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getInsightBySlug(slug);

  if (!doc) {
    return {
      title: "Article Not Found",
    };
  }

  const title = doc.seo?.metaTitle || doc.title;
  const description = doc.seo?.metaDescription || doc.excerpt;
  const ogImageUrl = getSanityImageUrl(
    doc.seo?.openGraphImage || doc.coverImage,
    1200,
    630
  );

  return {
    title: `${title} | ARALytica Insights`,
    description,
    alternates: {
      canonical: `https://aralytica.com/insights/${slug}`,
    },
    robots: doc.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://aralytica.com/insights/${slug}`,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const { slug } = await params;
  const doc = await getInsightBySlug(slug);

  if (!doc) {
    notFound();
  }

  const coverImageUrl = getSanityImageUrl(doc.coverImage, 1200, 675);

  return (
    <article className="flex flex-col">
      {/* Header & Meta Section */}
      <header className="py-16 sm:py-20 bg-[#fafafa] border-b border-[#e5e7eb]">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#650dd4] hover:underline mb-8 group"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Insights &amp; Analysis</span>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <CategoryBadge category={doc.category} />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#191919] tracking-tight leading-tight mb-6">
              {doc.title}
            </h1>

            {/* Publication Metadata */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#5f5f5f] pt-4 border-t border-[#e5e7eb]">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-gray-400" />
                <span className="font-medium text-[#191919]">{doc.author}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{doc.publicationDate}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gray-400" />
                <span>{doc.readingTime} min read</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Narrative Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#e5e7eb]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Cover Image if present */}
            {coverImageUrl && (
              <figure className="rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xs">
                <div className="relative aspect-video w-full">
                  <Image
                    src={coverImageUrl}
                    alt={doc.coverImage?.alt || doc.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </figure>
            )}

            {/* Lead Excerpt Paragraph */}
            <p className="text-lg sm:text-xl text-[#191919] leading-relaxed font-serif font-medium border-l-2 border-[#650dd4] pl-5 italic">
              {doc.excerpt}
            </p>

            {/* Portable Text Body */}
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
