import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://labs.thefocus.ai',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/dispatch/how-i-use-ai-jan-2026/': '/dispatch/how-ai-january-2026/',
    '/dispatch/how-i-code-may-2026/': '/dispatch/how-ai-may-2026/',
    '/thoughts/how-i-use-ai-jan-2026/': '/dispatch/how-ai-january-2026/',
    '/thoughts/how-i-code-may-2026/': '/dispatch/how-ai-may-2026/',
  },
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
