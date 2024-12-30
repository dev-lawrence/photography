import { SearchIcon } from "@sanity/icons";
import type { Rule } from "sanity";

export default {
  name: "seo",
  title: "SEO",
  type: "document",
  icon: SearchIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Favicon",
      type: "image",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "ogType",
      title: "Open Graph Type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Article", value: "article" },
          { title: "Product", value: "product" },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "twitterHandle",
      title: "Twitter Handle",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
