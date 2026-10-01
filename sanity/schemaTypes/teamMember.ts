import { defineArrayMember, defineField, defineType } from "sanity";
import { Users } from "lucide-react";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Members & Leadership",
  type: "document",
  icon: Users,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      description: "e.g. Joel Paulin Mendoza",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      description: "Unique identifier (e.g. joel-paulin-mendoza)",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Organizational Role / Title",
      type: "string",
      description: "e.g. Founder & Technical Lead",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Team Category",
      type: "string",
      options: {
        list: [
          { title: "Principal Leadership", value: "leadership" },
          { title: "Senior Advisory", value: "advisory" },
          { title: "Practice Associate", value: "associate" },
        ],
        layout: "radio",
      },
      initialValue: "leadership",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials (Avatar Fallback)",
      type: "string",
      description: "e.g. JPM",
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: "Only Published profiles will appear on the public website",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "published",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      description: "Professional headshot image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "e.g. Portrait of Joel Paulin Mendoza",
        }),
      ],
    }),
    defineField({
      name: "summary",
      title: "Executive Summary",
      type: "text",
      rows: 2,
      description: "One-sentence executive summary of background and expertise",
    }),
    defineField({
      name: "bio",
      title: "Biographical Paragraphs",
      type: "array",
      description: "Verified institutional background paragraphs",
      of: [
        defineArrayMember({
          type: "text",
          rows: 3,
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "specialties",
      title: "Core Specializations",
      type: "array",
      description:
        "Verified technical competencies (e.g. Impact Evaluation, Econometrics, Education Policy, Governance Diagnostics, Institutional Capacity Assessment)",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "organizations",
      title: "Collaborating Institutions / Background",
      type: "array",
      description:
        "Verified bilateral & multilateral institutions (e.g. World Bank, USAID, DFAT)",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      description:
        "Determines sort order on the Team page (lower numbers first)",
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Profile",
      type: "boolean",
      description: "Highlight as principal team member",
      initialValue: true,
    }),
    defineField({
      name: "seo",
      title: "SEO Configuration",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
      status: "status",
    },
    prepare({ title, subtitle, media, status }) {
      return {
        title,
        subtitle: `${subtitle || "Team Member"} [${status || "draft"}]`,
        media,
      };
    },
  },
});
