// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/casos-dayamineral',
  outDir: 'apps/abbott/casos-dayamineral',
  vite: {
    plugins: [tailwindcss()]
  }
});
