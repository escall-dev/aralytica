export type InsightCategory =
  | "Featured Articles"
  | "Research Briefs"
  | "Data Insights"
  | "Methodological Notes";

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  category: InsightCategory;
  publishedAt: string;
  readTimeMinutes: number;
  excerpt: string;
  author: string;
  featured?: boolean;
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  "Featured Articles",
  "Research Briefs",
  "Data Insights",
  "Methodological Notes",
];

// Active items array - empty of fake placeholder articles per strict requirements
export const INSIGHTS_DATA: InsightItem[] = [];
