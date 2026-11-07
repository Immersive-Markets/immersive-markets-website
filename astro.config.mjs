// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/ueber": "/ueber-mich",
    "/gespraech-vereinbaren": "/gespraech",
    "/gespraech-vereinbaren/danke": "/gespraech/danke",
    "/vorschau": "/zusammenarbeit",
    "/vorschau/danke": "/zusammenarbeit",
    // Preisseite stillgelegt (src/pages/_preise.astro)
    "/preise": "/zusammenarbeit",
  },
});
