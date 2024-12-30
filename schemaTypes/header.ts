import { HomeIcon } from "@sanity/icons";

export default {
  name: "header",
  title: "Header Section",
  type: "document",
  icon: HomeIcon,
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "object",
      fields: [
        {
          name: "logoType",
          title: "Logo Type",
          type: "string",
          options: {
            list: [
              { title: "Text", value: "text" },
              { title: "Image", value: "image" },
            ],
          },
        },
        {
          name: "text",
          title: "Logo Text",
          type: "string",
          hidden: ({ parent }: any) => parent?.logoType !== "text",
        },
        {
          name: "image",
          title: "Logo Image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
          hidden: ({ parent }: any) => parent?.logoType !== "image",
        },
      ],
    },

    {
      name: "navigation",
      title: "Navigation Items",
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
  preview: {
    select: {
      title: "logo.text",
      media: "logo.image",
    },
    prepare: ({ title, media }: any) => ({
      title: title || "Header",
      media,
    }),
  },
};
