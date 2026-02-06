import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { visualizer } from "rollup-plugin-visualizer";
const APP_BASE_PATH = "/"

// https://vite.dev/config/
export default defineConfig({
  base: APP_BASE_PATH,
  plugins: [react(), tailwindcss(), visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks for large dependencies
          if (id.includes("node_modules/react-dom")) {
            return "vendor-react-dom";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor-router";
          }
          if (id.includes("node_modules/tailwind-merge")) {
            return "vendor-tailwind";
          }
        },
      },
    },
  },
})
