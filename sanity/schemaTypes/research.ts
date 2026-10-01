import { defineArrayMember, defineField, defineType } from "sanity";
import { BookOpen } from "lucide-react";

export const research = defineType({
  name: "research",
  title: "Research & Publications",
  type: "document",
  icon: BookOpen,
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      description:
        "Full institutional title of the research paper or evaluation report",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description:
        "Unique URL identifier (e.g. foundational-learning-evaluation)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicationType",
      title: "Publication Type",
      type: "string",
      description: "Standard institutional classification",
      options: {
        list: [
          { title: "Working Paper", value: "Working Paper" },
          { title: "Policy Note", value: "Policy Note" },
          { title: "Evaluation Brief", value: "Evaluation Brief" },
          { title: "Technical Report", value: "Technical Report" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Publication Status",
      type: "string",
      description:
        "Only Published documents will be visible on the public website",
      options: {
        list: [
          { title: "Draft (Internal review)", value: "Draft" },
          { title: "Published (Publicly accessible)", value: "Published" },
          { title: "Archived (Historical record)", value: "Archived" },
        ],
        layout: "radio",
      },
      initialValue: "Published",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "domains",
      title: "Research Focus Domains",
      type: "array",
      description: "Primary thematic areas in ARALytica's practice",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: [
          {
            title: "Education Systems & Human Capital",
            value: "Education Systems & Human Capital",
          },
          {
            title: "Governance & Institutional Diagnostics",
            value: "Governance & Institutional Diagnostics",
          },
          {
            title: "Evaluation Methodologies & Data Systems",
            value: "Evaluation Methodologies & Data Systems",
          },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
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
      name: "authors",
      title: "Contributing Authors",
      type: "array",
      description:
        "Names of contributing researchers or evaluation consultants",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "excerpt",
      title: "Executive Summary / Abstract",
      type: "text",
      rows: 4,
      description:
        "Concise summary displayed on archive cards and search previews",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "description",
      title: "Extended Methodological Abstract",
      type: "text",
      rows: 6,
      description:
        "Detailed methodological scope and context for the repository listing",
    }),
    defineField({
      name: "documentUrl",
      title: "Downloadable Document URL (PDF)",
      type: "url",
      description:
        "Link to official PDF file (e.g. Cloud storage or hosted document)",
    }),
    defineField({
      name: "featured",
      title: "Featured Publication",
      type: "boolean",
      description:
        "Feature prominently on the homepage or top of research repository",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Full Body Content / Technical Sections",
      type: "blockContent",
      description:
        "Structured narrative, analytical findings, tables, and notes",
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
      subtitle: "publicationType",
      date: "publicationDate",
      status: "status",
    },
    prepare({ title, subtitle, date, status }) {
      return {
        title,
        subtitle: `${subtitle || "Publication"} • ${date || "No date"} [${status || "Draft"}]`,
      };
    },
  },
});
