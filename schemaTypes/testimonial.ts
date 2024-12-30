import type { Rule } from "sanity";
import { HeartIcon } from "@sanity/icons";

export default {
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "document",
  icon: HeartIcon,
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "The main title for the Testimonial section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the Testimonial section",
    },

    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "profession",
              title: "Profession",
              type: "string",
              description:
                "This is the person's profession or role (e.g., Happy Customer)",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Testimonial Description",
              type: "text",
              description: "The testimonial content that will be displayed",
              validation: (Rule: Rule) => Rule.required().max(300),
            },
            {
              name: "imageType",
              title: "Image Type",
              type: "string",
              options: {
                list: [
                  { title: "Upload Image", value: "upload" },
                  { title: "External URL", value: "url" },
                ],
                layout: "radio",
              },
              initialValue: "upload",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "Upload an image if 'Upload Image' is selected",
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
              hidden: ({ parent }: any) => parent?.imageType === "url",
            },
            {
              name: "url",
              title: "Image URL",
              type: "url",
              description: "Enter an image URL if 'External URL' is selected",
              hidden: ({ parent }: any) => parent?.imageType === "upload",
            },
          ],
        },
      ],
    },
  ],
};
