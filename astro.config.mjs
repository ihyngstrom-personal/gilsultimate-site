import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.gilsultimate.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
