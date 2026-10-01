import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO & Social Sharing",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Custom search engine and browser title. Falls back to document title if left empty.",
      validation: (Rule) =>
        Rule.max(70).warning(
          "Titles longer than 70 characters may be truncated by search engines."
        ),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Summary displayed in search results and social share previews. Falls back to document excerpt if empty.",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Descriptions longer than 160 characters may be truncated by search engines."
        ),
    }),
    defineField({
      name: "openGraphImage",
      title: "Social Share Image (Open Graph)",
      type: "image",
      description: "Recommended dimension: 1200x630px.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "noIndex",
      title: "Prevent Search Engine Indexing (noindex)",
      type: "boolean",
      description:
        "When enabled, instructs search engine crawlers not to index this page.",
      initialValue: false,
    }),
  ],
});
