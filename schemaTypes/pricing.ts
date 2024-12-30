import type { Rule } from "sanity";
import { CreditCardIcon } from "@sanity/icons";

const plans = [
  { title: "Silver", value: "silver" },
  { title: "Gold", value: "gold" },
  { title: "Platinum", value: "platinum" },
];

export default {
  name: "pricingSection",
  title: "Pricing Section",
  type: "document",
  icon: CreditCardIcon,
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "The main title for the Plan section",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "sectionSubtitle",
      title: "Section Subtitle",
      type: "string",
      description: "A subtitle or tagline for the Plan section",
    },
    {
      name: "plans",
      title: "Pricing Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Plan Name",
              type: "string",
              options: {
                list: plans,
              },
              description:
                "Name of the pricing plan, e.g., Silver, Gold, Platinum",
              initialValue: "silver",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              description: "Cost of the plan in USD",
              validation: (Rule: Rule) => Rule.required().min(0),
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
              description: "List of features included in this pricing plan",
            },

            {
              name: "link",
              title: "Link",
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
              description: "Link to the contact or purchase page",
            },
          ],
        },
      ],
    },
  ],
};
