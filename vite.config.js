import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: "./", // Use relative paths for assets

  build: {
    assetsDir: "assets", // Ensures assets go inside `dist/assets/`
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Ensures asset paths are correctly referenced
      },
    },
  },

  server: {
    port: 8080,
    host: true,
    strictPort: true,
    hmr: true,
  },
});
