import { defineConfig } from "vite";
import path from "path-browserify";

export default defineConfig({
  server: {
    port: 8080,
    host: "0.0.0.0", // 允许外部访问
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
