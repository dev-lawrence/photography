import type { Rule } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

const project = {
  name: "projectSection",
  title: "Project Section",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "The main title for the Project section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the Project section",
    },

    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Client Name",
            },

            {
              name: "slug",
              type: "slug",
              title: "Slug",
              options: {
                source: (options: any) => {
                  return options.parent?.name;
                },
                maxLength: 200,
              },
            },

            {
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Commercial", value: "commercial" },
                  { title: "Portrait", value: "portrait" },
                  { title: "Wedding", value: "wedding" },
                ],
              },
              validation: (Rule: Rule) => Rule.required(),
              initialValue: "commercial",
            },

            {
              name: "duration",
              type: "string",
              title: "Duration",
            },

            {
              name: "year",
              type: "number",
              title: "Year",
            },

            {
              name: "details",
              type: "text",
              title: "Details",
            },

            {
              name: "challenges",
              type: "text",
              title: "Challenges",
            },

            {
              name: "location",
              type: "string",
              title: "Location",
            },
            {
              name: "imagesDelivered",
              type: "number",
              title: "Images Delivered",
            },

            {
              name: "equipment",
              type: "string",
              title: "Equipment",
            },

            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },

            {
              name: "thumbnailImgs",
              title: "Thumbnail Images",
              type: "array",
              of: [{ type: "image", options: { hotspot: true } }],
            },

            {
              name: "testimonial",
              type: "object",
              title: "Testimonial",
              fields: [
                {
                  name: "description",
                  type: "text",
                  title: "Description",
                },
                {
                  name: "name",
                  type: "string",
                  title: "Name",
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
                  title: "Testimonial Image",
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
                  title: "Testimonial Image URL",
                  type: "url",
                  hidden: ({ parent }: any) => parent?.imageType !== "url",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default project;
