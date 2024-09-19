import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  edgeMiddleware: true, // Comma added here
  experimental: { // No quotes needed around `experimental`
    contentLayer: true
  }
});
