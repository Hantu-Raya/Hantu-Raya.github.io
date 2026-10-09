import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base works for a user site (Hantu-Raya.github.io) and for a project-page subpath.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
