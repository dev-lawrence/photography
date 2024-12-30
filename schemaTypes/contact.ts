import { LinkIcon } from "@sanity/icons";
import type { Rule } from "sanity";

export default {
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  icon: LinkIcon,

  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      description: "The main title for the contact section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the contact section",
    },

    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "The phone number to display in the contact section",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      description: "The email address to display in the contact section",
    },

    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "LinkedIn", value: "linkedin-in" },
                  { title: "Instagram", value: "instagram" },
                  { title: "GitHub", value: "github" },
                  { title: "Facebook", value: "facebook" },
                  { title: "YouTube", value: "youtube" },
                  { title: "TikTok", value: "tiktok" },
                ],
              },
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "The full URL for the selected social platform",
            },
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "url",
            },
          },
        },
      ],
    },
  ],
};
