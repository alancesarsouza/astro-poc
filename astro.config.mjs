import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), tailwind(), partytown()]
});