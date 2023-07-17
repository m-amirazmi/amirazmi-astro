import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://amirazmi.dev",
  integrations: [robotsTxt(), mdx(), react()]
});