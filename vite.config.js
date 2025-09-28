import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // opsional, port lokal
  },
  build: {
    outDir: "dist", // folder hasil build, Vercel akan cari ini
  },
});
