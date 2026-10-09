import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// One id per build: baked into the bundle as __BUILD_ID__ and written to version.json,
// so a page can tell when the server has a newer build (see src/UpdateNotice.jsx).
const BUILD_ID = new Date().toISOString();

const versionFile = {
  name: "version-file",
  apply: "build",
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "version.json", source: JSON.stringify({ build: BUILD_ID }) });
  },
};

// Relative base works for a user site (Hantu-Raya.github.io) and for a project-page subpath.
export default defineConfig({
  base: "./",
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [react(), versionFile],
});
