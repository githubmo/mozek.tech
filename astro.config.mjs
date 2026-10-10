// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  redirects: { '/projects': '/case-studies' },
  vite: {
    plugins: [tailwindcss()]
  }
});