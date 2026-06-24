import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://labs.thefocus.ai',
  integrations: [mdx(), sitemap()],
  image: {
    // Use the no-op service — we're not processing images client-side.
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
