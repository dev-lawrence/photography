import { UsersIcon } from "@sanity/icons";

export default {
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  icon: UsersIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "message",
      title: "Message",
      type: "text",
    },

    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    },
  ],
};