import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sanity({
      projectId: "3e2ke64l",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
      stega: {
        studioUrl: "/admin",
      },
    }),
  ],
  output: "server",
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 3000,
  },
  adapter: vercel(),

  image: {
    remotePatterns: [{ protocol: "http" }, { protocol: "https" }],
  },
});
