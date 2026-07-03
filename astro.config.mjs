// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://frankuxui.github.io',
  base: '/social-cards-components-tailwind-v4',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
