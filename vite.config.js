import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', 
  },
  plugins: [
    ghPages(), 
  ],
  base: '/Tapiingo/',
});
