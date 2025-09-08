// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs',  // Ensure the path is relative to the root folder
  },
  // build: {
  //   outDir: 'docs',
  // },
  path: 'satyobroto-portfolio',
});
