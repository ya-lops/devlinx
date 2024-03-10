import { defineConfig } from 'astro/config';
// import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "never",
  },
  integrations: [
    // partytown(),
    mdx()]
  ,
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
