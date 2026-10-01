import { groq } from "next-sanity";
import { sanityFetch } from "./client";
import type { SanityResearch, SanityInsight, SanityTeamMember } from "./types";

// ==========================================
// GROQ Query Definitions
// ==========================================

export const publishedResearchQuery = groq`
  *[_type == "research" && !(_id in path("drafts.**")) && status == "Published"] | order(publicationDate desc) {
    _id,
    _type,
    title,
    slug,
    publicationType,
    excerpt,
    description,
    domains,
    publicationDate,
    authors,
    status,
    documentUrl,
    featured
  }
`;

export const featuredResearchQuery = groq`
  *[_type == "research" && !(_id in path("drafts.**")) && status == "Published" && featured == true] | order(publicationDate desc)[0...3] {
    _id,
    _type,
    title,
    slug,
    publicationType,
    excerpt,
    domains,
    publicationDate,
    authors,
    status,
    documentUrl
  }
`;

export const researchBySlugQuery = groq`
  *[_type == "research" && !(_id in path("drafts.**")) && status == "Published" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    publicationType,
    excerpt,
    description,
    domains,
    publicationDate,
    authors,
    status,
    documentUrl,
    featured,
    body,
    seo
  }
`;

export const allResearchSlugsQuery = groq`
  *[_type == "research" && !(_id in path("drafts.**")) && status == "Published" && defined(slug.current)][].slug.current
`;

export const publishedInsightsQuery = groq`
  *[_type == "insight" && !(_id in path("drafts.**")) && (status == "published" || !defined(status))] | order(publicationDate desc) {
    _id,
    _type,
    title,
    slug,
    excerpt,
    category,
    author,
    publicationDate,
    readingTime,
    featured,
    status,
    coverImage
  }
`;

export const featuredInsightsQuery = groq`
  *[_type == "insight" && !(_id in path("drafts.**")) && (status == "published" || !defined(status)) && featured == true] | order(publicationDate desc)[0...3] {
    _id,
    _type,
    title,
    slug,
    excerpt,
    category,
    author,
    publicationDate,
    readingTime,
    coverImage
  }
`;

export const insightBySlugQuery = groq`
  *[_type == "insight" && !(_id in path("drafts.**")) && (status == "published" || !defined(status)) && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    excerpt,
    category,
    author,
    publicationDate,
    readingTime,
    featured,
    status,
    coverImage,
    body,
    seo
  }
`;

export const allInsightSlugsQuery = groq`
  *[_type == "insight" && !(_id in path("drafts.**")) && (status == "published" || !defined(status)) && defined(slug.current)][].slug.current
`;

export const publishedTeamMembersQuery = groq`
  *[_type == "teamMember" && !(_id in path("drafts.**")) && (status == "published" || !defined(status))] | order(displayOrder asc) {
    _id,
    _type,
    name,
    slug,
    role,
    category,
    initials,
    summary,
    bio,
    photo,
    specialties,
    organizations,
    displayOrder,
    featured,
    status
  }
`;

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && !(_id in path("drafts.**")) && (status == "published" || !defined(status)) && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    role,
    category,
    initials,
    summary,
    bio,
    photo,
    specialties,
    organizations,
    displayOrder,
    featured,
    status,
    seo
  }
`;

// ==========================================
// Strongly-Typed Helper Fetchers
// ==========================================

export async function getPublishedResearch(): Promise<SanityResearch[]> {
  const data = await sanityFetch<SanityResearch[]>({
    query: publishedResearchQuery,
    tags: ["research"],
  });
  return data || [];
}

export async function getFeaturedResearch(): Promise<SanityResearch[]> {
  const data = await sanityFetch<SanityResearch[]>({
    query: featuredResearchQuery,
    tags: ["research"],
  });
  return data || [];
}

export async function getResearchBySlug(
  slug: string
): Promise<SanityResearch | null> {
  return await sanityFetch<SanityResearch>({
    query: researchBySlugQuery,
    params: { slug },
    tags: [`research:${slug}`],
  });
}

export async function getAllResearchSlugs(): Promise<string[]> {
  const data = await sanityFetch<string[]>({
    query: allResearchSlugsQuery,
    tags: ["research"],
  });
  return data || [];
}

export async function getPublishedInsights(): Promise<SanityInsight[]> {
  const data = await sanityFetch<SanityInsight[]>({
    query: publishedInsightsQuery,
    tags: ["insight"],
  });
  return data || [];
}

export async function getFeaturedInsights(): Promise<SanityInsight[]> {
  const data = await sanityFetch<SanityInsight[]>({
    query: featuredInsightsQuery,
    tags: ["insight"],
  });
  return data || [];
}

export async function getInsightBySlug(
  slug: string
): Promise<SanityInsight | null> {
  return await sanityFetch<SanityInsight>({
    query: insightBySlugQuery,
    params: { slug },
    tags: [`insight:${slug}`],
  });
}

export async function getAllInsightSlugs(): Promise<string[]> {
  const data = await sanityFetch<string[]>({
    query: allInsightSlugsQuery,
    tags: ["insight"],
  });
  return data || [];
}

export async function getPublishedTeamMembers(): Promise<SanityTeamMember[]> {
  const data = await sanityFetch<SanityTeamMember[]>({
    query: publishedTeamMembersQuery,
    tags: ["teamMember"],
  });
  return data || [];
}

export async function getTeamMemberBySlug(
  slug: string
): Promise<SanityTeamMember | null> {
  return await sanityFetch<SanityTeamMember>({
    query: teamMemberBySlugQuery,
    params: { slug },
    tags: [`teamMember:${slug}`],
  });
}
