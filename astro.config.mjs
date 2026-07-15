// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: site
    ? [
        sitemap({
          filter: (page) => !page.endsWith("/404/") && !page.endsWith("/politicas/"),
        }),
      ]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
