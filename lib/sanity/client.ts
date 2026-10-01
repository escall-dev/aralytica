import { createClient, type QueryParams } from "next-sanity";
import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  isSanityConfigured,
} from "@/sanity/env";

export const client = isSanityConfigured()
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: "published",
    })
  : null;

/**
 * Safe fetch wrapper that handles missing configuration, returns fallback or empty array/null
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T | null> {
  if (!client) {
    return null;
  }

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: revalidate === false ? undefined : revalidate,
        tags,
      },
    });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
}
