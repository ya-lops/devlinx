import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never"
  },
  integrations: [
  // partytown(),
  mdx()],
  vite: {
    css: {
      devSourcemap: true
    }
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
