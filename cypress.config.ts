import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 880,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  videoCompression: false,
  chromeWebSecurity: false,
  retries: 0,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
