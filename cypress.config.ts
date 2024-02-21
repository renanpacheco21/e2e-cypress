import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  video: false,
  chromeWebSecurity: false,
  retries: 0,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
