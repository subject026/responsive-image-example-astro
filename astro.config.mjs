// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    // Used for all `<Image />` and `<Picture />` components unless overridden
    experimentalLayout: "responsive",
  },
  experimental: {
    responsiveImages: true,
  },
});
