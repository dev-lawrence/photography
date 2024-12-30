import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { presentationTool } from "sanity/presentation";
import { media } from "sanity-plugin-media";
const SANITY_STUDIO_PREVIEW_URL =
  import.meta.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000/";

export default defineConfig({
  name: "default",
  title: "photography-studio",

  projectId: "3e2ke64l",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: `${SANITY_STUDIO_PREVIEW_URL}?preview=true`,
    }),
    media({
      creditLine: {
        enabled: true,
        excludeSources: ["unsplash"],
      },
      maximumUploadSize: 10000000,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
