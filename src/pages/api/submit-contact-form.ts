import type { ContactProps } from "@/lib/types";
import type { APIRoute } from "astro";

import { Resend } from "resend";

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  RESEND_API_KEY,
  SANITY_TOKEN,
  NOTIFICATION_EMAIL,
} = import.meta.env;

const resend = new Resend(RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData: ContactProps = await request.json();

  const { name, email, message } = formData;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 },
    );
  }

  //  create new subscription
  const mutations = {
    mutations: [
      {
        create: {
          _type: "contactForm",
          name,
          email,
          message,
          submittedAt: new Date().toISOString(),
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${SANITY_DATASET}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SANITY_TOKEN}`,
        },
        body: JSON.stringify(mutations),
      },
    );

    // Send email notification
    await resend.emails.send({
      from: "onboarding@resend.dev", // You can customize this after domain verification
      to: NOTIFICATION_EMAIL,
      subject: "You've got a form submission 🎉",
      html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    });

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
