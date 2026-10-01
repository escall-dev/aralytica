export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const useCdn = false; // Always get fresh data on revalidation

/**
 * Returns true if Sanity project ID is configured
 */
export function isSanityConfigured(): boolean {
  return Boolean(projectId && projectId.trim().length > 0);
}
