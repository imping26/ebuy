import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "node:url";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components/", import.meta.url)
      ),
      "@store": fileURLToPath(new URL("./src/store/", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages/", import.meta.url)),
    },
  },
});
