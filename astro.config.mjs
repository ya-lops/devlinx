import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  i18n: {
    locales: ["ru", "en"],
  },
  integrations: [
    mdx(),
  ],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  experimental: {
    serverIslands: true,
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
