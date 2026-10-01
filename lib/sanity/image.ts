import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import type { SanityImageAsset } from "./types";

// Initialize the image URL builder
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
});

export type ImageSource =
  SanityImageAsset | { _ref?: string; asset?: { _ref?: string } } | string;

/**
 * Returns a builder to generate CDN image URLs from Sanity image assets
 */
export function urlForImage(source: ImageSource) {
  return imageBuilder.image(source).auto("format").fit("max");
}

/**
 * Generate a responsive image URL with width and optional height
 */
export function getSanityImageUrl(
  source?: ImageSource | null,
  width: number = 800,
  height?: number
): string | null {
  if (!source) {
    return null;
  }

  if (typeof source !== "string") {
    const hasRef =
      Boolean(source.asset?._ref) ||
      ("_ref" in source && Boolean((source as { _ref?: string })._ref));
    if (!hasRef) {
      return null;
    }
  }

  let builder = imageBuilder.image(source).width(width).auto("format");

  if (height) {
    builder = builder.height(height);
  }

  return builder.url();
}
