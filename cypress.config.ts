import { defineConfig } from "cypress";

import config from "./vite.config";

export default defineConfig({
  defaultCommandTimeout: 5000,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: config,
    },
    indexHtmlFile: "./index.html",
    viewportHeight: 800,
    viewportWidth: 1280, // macbook pro 13, https://docs.cypress.io/api/commands/viewport
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
  },
  trashAssetsBeforeRuns: true,
});
