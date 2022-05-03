/* eslint-disable vue/sort-keys */

import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  root: "src/",
  plugins: [createVuePlugin()],
  server: {
    port: 8080,
    http: true,
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
    },
  },
  build: {
    outDir: "../dist",
  },
});
