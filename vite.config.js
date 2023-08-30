import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@module": path.resolve(__dirname, "./src/module"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
