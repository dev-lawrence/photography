import type { Rule } from "sanity";
import { CaseIcon } from "@sanity/icons";

export default {
  name: "serviceSection",
  title: "Services Section",
  type: "document",
  icon: CaseIcon,
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "The main title for the Services section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the Services section",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (Rule: Rule) => Rule.required().max(100),
            },
            {
              name: "content",
              title: "Service Description",
              type: "text",
              validation: (Rule: Rule) => Rule.required(),
            },
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
              title: "Service Image",
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
              title: "Service Image URL",
              type: "url",
              hidden: ({ parent }: any) => parent?.imageType !== "url",
            },
          ],
        },
      ],
    },
  ],
};
