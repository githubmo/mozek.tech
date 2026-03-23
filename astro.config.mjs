// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT' && warning.exporter === '@astrojs/internal-helpers/remote') return;
          defaultHandler(warning);
        },
      },
    },
  }
});