import type { PortableTextBlock } from "@portabletext/types";

export interface SanitySeo {
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: SanityImageAsset;
  noIndex?: boolean;
}

export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export type PublicationType =
  "Working Paper" | "Policy Note" | "Evaluation Brief" | "Technical Report";

export type ResearchStatus = "Draft" | "Published" | "Archived";

export interface SanityResearch {
  _id: string;
  _type: "research";
  title: string;
  slug: {
    current: string;
  };
  publicationType: PublicationType;
  excerpt: string;
  description?: string;
  domains: string[];
  publicationDate: string;
  authors?: string[];
  status: ResearchStatus;
  documentUrl?: string;
  featured?: boolean;
  body?: PortableTextBlock[];
  seo?: SanitySeo;
}

export type InsightCategoryType =
  | "Featured Articles"
  | "Research Briefs"
  | "Data Insights"
  | "Methodological Notes";

export type InsightStatus = "draft" | "published" | "archived";

export interface SanityInsight {
  _id: string;
  _type: "insight";
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  category: InsightCategoryType;
  author: string;
  publicationDate: string;
  readingTime: number;
  featured?: boolean;
  status: InsightStatus;
  coverImage?: SanityImageAsset;
  body?: PortableTextBlock[];
  seo?: SanitySeo;
}

export type TeamCategory = "leadership" | "advisory" | "associate";

export interface SanityTeamMember {
  _id: string;
  _type: "teamMember";
  name: string;
  slug: {
    current: string;
  };
  role: string;
  category: TeamCategory;
  initials?: string;
  summary?: string;
  bio: string[];
  photo?: SanityImageAsset;
  specialties: string[];
  organizations?: string[];
  displayOrder: number;
  featured?: boolean;
  status: "draft" | "published";
  seo?: SanitySeo;
}
