import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [tailwind(), mdx(), react(), pagefind()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  renderers: ["@astrojs/renderer-react"],
});