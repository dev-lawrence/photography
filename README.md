---
title: Getting Started
description: A comprehensive guide to set up and customize your new portfolio website using Astro and Sanity.
---

import { Steps } from "@astrojs/starlight/components";

Welcome to your new portfolio starter template! This guide will walk you through the initial setup and customization process, helping you create a stunning portfolio website that showcases your work and skills using Astro and Sanity. Let's GO 🚀

## Quick Links

- [Documentation](https://alex-rivera-photograhpy.netlify.app/guides/getting-started/)
- [Telegram Support Group](https://t.me/+jz1ungK-s6Q2ZmE0)
- [Email Support](mailto:lawrencestixx@gmail.com)


## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/) (for version control)
- A code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))
- A [Sanity](https://www.sanity.io/) account (free tier available)

## Step 1: Project Setup

<Steps>

1. Extract the `.zip` file you received after purchase.

2. Open the extracted folder in your preferred code editor (e.g., VS Code).

3. Open your terminal `ctrl + ~` and Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a new Sanity project:

   - Go to [sanity.io](https://www.sanity.io/) and sign in or create a new account.
   - Click on "Create new project" and follow the prompts to set up your Sanity studio.
   - Copy the Project ID, as you'll need it for configuration.

5. Set up environment variables:

   - Rename `.env.example` to `.env`
   - Replace the placeholder values with your Sanity credentials:
     ```
     SANITY_TOKEN=your_sanity_api_token (You can get it from the next step)
     SANITY_PROJECT_ID=your_sanity_api_token
     ```

   Note: leave `SANITY_DATASET` as it is.

6. Obtain a Sanity API token:
   - Log in to your Sanity account and go to your project settings.
   - Navigate to the "API" section.
   - Click "Tokens," and Click "Add API token."
   - Give your token a name (e.g., "Portfolio Token") and select the appropriate permissions (usually "Read" and "write" access to all datasets, with access to project settings for developers).
   - Click on save.
   - Copy the generated token and paste it into your `.env` file as the `SANITY_TOKEN` value.

</Steps>

## Step 2: Configuration

<Steps>

1. Navigate to `astro.config.mjs` and replace the projectId with your projectId

   ```javascript
   import { defineConfig } from "astro/config";
   import tailwind from "@astrojs/tailwind";
   import react from "@astrojs/react";
   import sanity from "@sanity/astro";
   import netlify from "@astrojs/netlify";
   import starlight from "@astrojs/starlight";

   export default defineConfig({
     integrations: [
       tailwind({
         applyBaseStyles: false,
       }),
       react(),
       sanity({
         projectId: "your_project_id", // Replace with your actual project ID
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
     adapter: netlify(),
     image: {
       remotePatterns: [{ protocol: "http" }, { protocol: "https" }],
     },
   });
   ```

2. Update `sanity.config.ts` with your Sanity projectId and you can change the title to the project name of your sanity studio:

   ```typescript
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
     title: "starter-studio", // Change this to your project name

     projectId: "your_project_id", // Replace with your actual project ID
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
   ```

3. Update `sanity.cli.ts` with your Sanity projectId:

   ```typescript
   import { defineCliConfig } from "sanity/cli";

   export default defineCliConfig({
     api: {
       projectId: "your_project_id",
       dataset: "production",
     },
   });
   ```

</Steps>

## Step 3: Import Preconfigured Dataset

<Steps>

1. Run the following command in your terminal:

   ```javascript




   sanity dataset import data.zip production
   ```

   This will load the placeholder content into your Sanity project.

</Steps>

## Step 5: Preview Your Site

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000` to see your site.

## Step 5: Customize your site

Once you've started the development server, you can easily customize your portfolio directly from Sanity by 👇🏼

Opening a new tab on your browser and go to `http://localhost:3000/admin` to see your studio.

You'll see a pop up to add your link to cors

Click on the link and add the link to the cors

Then you will be prompted to sign in with your Sanity credentials.

## Step 6: Building for Production

When you're ready to deploy:

1. Build your site:

   ```bash
   npm run build
   ```

2. The output will be in the `dist/` folder, ready for deployment.

## Need Help?

If you encounter issues or need help, feel free to contact us:

- Email: lawrencestixx@gmail.com
- Community: Join our Telegram support group [here](https://t.me/+jz1ungK-s6Q2ZmE0).

Happy portfolio building!
