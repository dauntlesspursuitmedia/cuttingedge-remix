import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vercelPreset } from "@vercel/remix/vite";
import path from "path";
installGlobals();

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"), // Replace with the correct path to your project root
    },
  },
  plugins: [
    remix({
      presets: [vercelPreset],
    }),
    tsconfigPaths(),
  ],
});
