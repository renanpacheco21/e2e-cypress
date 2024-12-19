import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 880,
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
