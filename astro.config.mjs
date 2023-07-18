import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://amirazmi.dev",
  integrations: [robotsTxt(), mdx(), react(), sitemap()],
});
