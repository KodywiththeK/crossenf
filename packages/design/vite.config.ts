import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@common/design": path.resolve(__dirname, "../../packages/design/src/main.ts"),
    },
  },
});
