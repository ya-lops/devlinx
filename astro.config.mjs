import { defineConfig } from 'astro/config';
// import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

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
  adapter: netlify()
});