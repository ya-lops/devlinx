import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  integrations: [
    mdx(),
  ],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
