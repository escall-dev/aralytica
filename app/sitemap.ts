import type { MetadataRoute } from "next";
import { getAllResearchSlugs, getAllInsightSlugs } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aralytica.com";
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  try {
    const [researchSlugs, insightSlugs] = await Promise.all([
      getAllResearchSlugs(),
      getAllInsightSlugs(),
    ]);

    researchSlugs.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/research/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    insightSlugs.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/insights/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  } catch (error) {
    console.warn("Could not retrieve dynamic sitemap routes from CMS:", error);
  }

  return routes;
}
