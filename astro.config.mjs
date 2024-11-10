import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

import simpleStackStream from "simple-stack-stream";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never"
  },
  integrations: [
  // partytown(),
  mdx(), simpleStackStream()],
  vite: {
    css: {
      devSourcemap: true
    }
  },
  experimental: {
    serverIslands: true,
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
