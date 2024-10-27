import { defineConfig } from "vite";
import path from "path-browserify";

export default defineConfig({
  server: {
    port: 8080,
    host: '0.0.0.0',  // 允许外部访问
    hmr: {
      host: '3.107.26.214',  // 替换为你的 EC2 公共 IP 地址
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
