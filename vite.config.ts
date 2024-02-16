import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  css: {
    // 配置 css-module
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: "camelCase",
      // 类名 前缀
      generateScopedName: "[local]-[hash:base64:5]",
    },
  },
  build: {
    rollupOptions: {
      input: {
        background: path.resolve(__dirname, "src/scripts/background.ts"),
        [`content-script`]: path.resolve(
          __dirname,
          "src/scripts/content-script.tsx"
        ),
        popup: path.resolve(__dirname, "src/pages/popup.tsx"),
        options: path.resolve(__dirname, "src/pages/options.tsx"),
        sidepanel: path.resolve(__dirname, "src/pages/sidepanel.tsx"),
      },
      output: {
        dir: "dist/",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
