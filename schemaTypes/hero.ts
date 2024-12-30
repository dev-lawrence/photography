import type { Rule } from "sanity";
import { DesktopIcon } from "@sanity/icons";

export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: DesktopIcon,
  fields: [
    // select your niche
    {
      name: "variant",
      title: "Hero Variant",
      type: "string",
      options: {
        list: [
          { title: "Default Hero", value: "default" },
          { title: "Featured Hero", value: "featured" },
          { title: "Extended Hero", value: "extended" },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },

    // title
    {
      name: "title",
      title: "Title/Tagline",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },

    // subtitle
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },

    // tag
    {
      name: "tag",
      title: "Tag",
      type: "string",
      hidden: ({ parent }: any) => parent?.variant !== "featured",
    },

    // Social Proof Fields
    {
      name: "socialProof",
      title: "Social Proof",
      type: "object",
      hidden: ({ parent }: any) => parent?.variant !== "extended",
      fields: [
        {
          name: "enabled",
          title: "Enable Social Proof",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "profiles",
          title: "Profile Images",
          type: "array",
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
              ],
            },
          ],
          validation: (Rule: Rule) => Rule.max(5),
        },
        {
          name: "rating",
          title: "Star Rating",
          type: "number",
          options: {
            list: [1, 2, 3, 4, 5],
          },
          initialValue: 5,
        },
        {
          name: "count",
          title: "Client Count",
          type: "number",
        },
        {
          name: "text",
          title: "Social Proof Text",
          type: "string",
          initialValue: "clients",
        },
      ],
    },

    // Hero image
    {
      name: "imageType",
      title: "Image Type",
      type: "string",
      options: {
        list: [
          { title: "Upload Image", value: "upload" },
          { title: "Image URL", value: "url" },
        ],
        layout: "radio",
      },
      initialValue: "upload",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Background Image",
      type: "image",
      hidden: ({ parent }: any) => parent?.imageType !== "upload",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "Background Image URL",
      type: "url",
      hidden: ({ parent }: any) => parent?.imageType !== "url",
    },

    // button
    {
      name: "button",
      title: "CTA",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "url", type: "string" },
          ],
        },
      ],
    },
  ],
};
