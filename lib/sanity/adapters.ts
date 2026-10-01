import type { ResearchItem } from "@/lib/data/research";
import type { InsightItem } from "@/lib/data/insights";
import type { TeamMember } from "@/lib/data/team";
import type { SanityResearch, SanityInsight, SanityTeamMember } from "./types";
import { getSanityImageUrl } from "./image";

/**
 * Maps a Sanity Research document to the website's ResearchItem format
 */
export function mapSanityResearchToItem(doc: SanityResearch): ResearchItem {
  return {
    id: doc._id,
    slug: doc.slug.current,
    title: doc.title,
    category: doc.domains?.[0] || doc.publicationType,
    documentType: doc.publicationType,
    date: doc.publicationDate,
    abstract: doc.excerpt || doc.description || "",
    status: doc.status === "Published" ? "published" : "forthcoming",
    authors: doc.authors,
    downloadUrl: doc.documentUrl,
  };
}

/**
 * Maps a Sanity Insight document to the website's InsightItem format
 */
export function mapSanityInsightToItem(doc: SanityInsight): InsightItem {
  return {
    id: doc._id,
    slug: doc.slug.current,
    title: doc.title,
    category: doc.category,
    publishedAt: doc.publicationDate,
    readTimeMinutes: doc.readingTime || 4,
    excerpt: doc.excerpt,
    author: doc.author || "ARALytica Practice Lead",
    featured: doc.featured,
  };
}

/**
 * Maps a Sanity TeamMember document to the website's TeamMember format
 */
export function mapSanityTeamMemberToMember(doc: SanityTeamMember): TeamMember {
  // Generate initials if not provided
  const initials =
    doc.initials ||
    doc.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

  return {
    id: doc.slug.current || doc._id,
    name: doc.name,
    role: doc.role,
    category: doc.category || "leadership",
    initials,
    summary: doc.summary || "",
    bio: Array.isArray(doc.bio) ? doc.bio : [String(doc.bio || "")],
    expertise: doc.specialties || [],
    institutions: doc.organizations || [],
    photoUrl: doc.photo ? getSanityImageUrl(doc.photo, 300, 300) : undefined,
  };
}
