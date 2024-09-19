import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nishwithx.github.io/',
  base: 'astro',
  experimental: {
    contentLayer: true,
  },
});
