import type { Rule } from "sanity";
import { BulbOutlineIcon } from "@sanity/icons";

export default {
  name: "about",
  title: "About Section",
  type: "document",
  icon: BulbOutlineIcon,
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "The main title for the About section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the About section",
    },

    {
      name: "text",
      title: "About Text",
      type: "array",
      of: [{ type: "block" }],
      description: "Add a short description about yourself or your business.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "About Image",
      type: "image",
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
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "statValue",
              title: "Stat Value",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "statLabel",
              title: "Stat Label",
              type: "string",
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
      description:
        "Add stats to showcase things like years of experience, number of customers, etc.",
    },
  ],
};
