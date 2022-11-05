import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";
import { defineConfig as defineViteConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
const viteConfig = defineViteConfig({
  build: {
    outDir: "build"
  },
  base: "/CodiShark/",
  plugins: [tsconfigPaths(), svgrPlugin(), react()],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser"
    }
  }
});

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.tsx"
    }
  })
);
