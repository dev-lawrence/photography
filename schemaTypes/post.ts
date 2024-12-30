import { type Rule } from "sanity";
import { ComposeIcon } from "@sanity/icons";

const post = {
  name: "postSection",
  title: "Post Section",
  type: "document",
  icon: ComposeIcon,
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "The main title for the Blog section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the Blog section",
    },

    {
      name: "posts",
      title: "Post",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "slug",
              type: "slug",
              title: "Slug",
              options: {
                source: (options: any) => {
                  return options.parent?.title;
                },
                maxLength: 200,
              },
            },
            {
              name: "author",
              type: "string",
              title: "Author",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "tags",
              type: "array",
              title: "Tags",
              of: [{ type: "string" }],
              options: {
                layout: "tags",
              },
            },
            {
              name: "date",
              type: "datetime",
              title: "Date",
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
              title: "Image",
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
              title: "Image URL",
              type: "url",
              hidden: ({ parent }: any) => parent?.imageType !== "url",
            },

            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
};

export default post;
