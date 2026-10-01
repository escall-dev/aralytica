import { defineField, defineType } from "sanity";
import { Newspaper } from "lucide-react";

export const insight = defineType({
  name: "insight",
  title: "Insights & Commentary",
  type: "document",
  icon: Newspaper,
  fields: [
    defineField({
      name: "title",
      title: "Article / Brief Title",
      type: "string",
      description: "Editorial headline for this insight piece",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "URL identifier (e.g. foundational-learning-diagnostics)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Editorial Desk / Category",
      type: "string",
      description: "Controlled ARALytica editorial category",
      options: {
        list: [
          { title: "Featured Articles", value: "Featured Articles" },
          { title: "Research Briefs", value: "Research Briefs" },
          { title: "Data Insights", value: "Data Insights" },
          { title: "Methodological Notes", value: "Methodological Notes" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Publication Status",
      type: "string",
      description: "Only Published insights will appear on the public website",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "published",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author / Practice Contributor",
      type: "string",
      description: "Name of writer, specialist, or ARALytica Practice Lead",
      initialValue: "ARALytica Practice Lead",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicationDate",
      title: "Publication Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingTime",
      title: "Estimated Reading Time (Minutes)",
      type: "number",
      description: "e.g. 5 for 5 min read",
      initialValue: 4,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "excerpt",
      title: "Article Excerpt / Lead Paragraph",
      type: "text",
      rows: 3,
      description: "Appears in article cards, RSS/previews, and search results",
      validation: (Rule) => Rule.required().max(350),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Featured visual for the insight header and social share",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Descriptive text for accessibility and search engines",
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Highlight at the top of the Insights feed",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Body Narrative",
      type: "blockContent",
      description:
        "Full editorial content, analysis, headings, callouts, and citations",
    }),
    defineField({
      name: "seo",
      title: "SEO Configuration",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
      status: "status",
    },
    prepare({ title, subtitle, media, status }) {
      return {
        title,
        subtitle: `${subtitle || "General"} [${status || "draft"}]`,
        media,
      };
    },
  },
});
