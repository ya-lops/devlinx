import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const Links = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/Links' }),
});

const Categories = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/Categories' }),
});

export const collections = { Links, Categories };
