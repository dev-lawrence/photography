import { defineType, defineField } from "sanity";
import { ColorWheelIcon } from "@sanity/icons";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: ColorWheelIcon,
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "colorScheme",
      title: "Color Scheme",
      type: "object",
      fields: [
        defineField({
          name: "preset",
          title: "Color Preset",
          type: "string",
          options: {
            list: [
              { title: "Default", value: "default" },
              { title: "Orange", value: "orange" },
              { title: "Blue", value: "blue" },
              { title: "Red", value: "red" },
              { title: "Rose", value: "rose" },
              { title: "Green", value: "green" },
              { title: "Yellow", value: "yellow" },
              { title: "Violet", value: "violet" },
              { title: "Custom", value: "custom" },
            ],
          },
        }),
        defineField({
          name: "customColors",
          title: "Custom Colors",
          type: "object",
          fields: [
            defineField({
              name: "background",
              type: "string",
              title: "Background",
            }),
            defineField({
              name: "foreground",
              type: "string",
              title: "Foreground",
            }),
            defineField({
              name: "card",
              type: "string",
              title: "Card",
            }),
            defineField({
              name: "cardForeground",
              type: "string",
              title: "Card Foreground",
            }),
            defineField({
              name: "popover",
              type: "string",
              title: "Popover",
            }),
            defineField({
              name: "popoverForeground",
              type: "string",
              title: "Popover Foreground",
            }),
            defineField({
              name: "primary",
              type: "string",
              title: "Primary",
            }),
            defineField({
              name: "primaryForeground",
              type: "string",
              title: "Primary Foreground",
            }),
            defineField({
              name: "secondary",
              type: "string",
              title: "Secondary",
            }),
            defineField({
              name: "secondaryForeground",
              type: "string",
              title: "Secondary Foreground",
            }),
            defineField({
              name: "muted",
              type: "string",
              title: "Muted",
            }),
            defineField({
              name: "mutedForeground",
              type: "string",
              title: "Muted Foreground",
            }),
            defineField({
              name: "accent",
              type: "string",
              title: "Accent",
            }),
            defineField({
              name: "accentForeground",
              type: "string",
              title: "Accent Foreground",
            }),
            defineField({
              name: "destructive",
              type: "string",
              title: "Destructive",
            }),
            defineField({
              name: "destructiveForeground",
              type: "string",
              title: "Destructive Foreground",
            }),
            defineField({
              name: "border",
              type: "string",
              title: "Border",
            }),
            defineField({
              name: "input",
              type: "string",
              title: "Input",
            }),
            defineField({
              name: "ring",
              type: "string",
              title: "Ring",
            }),
          ],
          hidden: ({ parent }) => parent?.preset !== "custom",
        }),
      ],
    }),
  ],
});
