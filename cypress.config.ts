import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 880,
  //defaultCommandTimeout: 5000,
  //pageLoadTimeout: 30000,
  videoCompression: false,
  chromeWebSecurity: false,
  retries: 0,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
