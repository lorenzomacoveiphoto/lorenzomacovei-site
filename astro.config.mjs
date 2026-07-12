import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Sito multilingua con URL separati per lingua (/en, /it, /es) e hreflang.
export default defineConfig({
  site: 'https://lorenzomacovei.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'es'],
    routing: { prefixDefaultLocale: true },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', it: 'it', es: 'es' },
      },
    }),
  ],
});
