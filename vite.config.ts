import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setup-test.ts",
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/Components",
    },
  },
});
