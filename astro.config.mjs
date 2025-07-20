// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://social-cards-components-tailwind-v4.vercel.app',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});