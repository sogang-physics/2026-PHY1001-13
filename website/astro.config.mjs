// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yw-choi.github.io',
  base: '/2026-PHY1001-13/',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
