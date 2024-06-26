import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 设置基础路径
  build: {
    rollupOptions: {
      input: "/src/main.ts", // 设置入口文件
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: true,
    }),
    Components({
      resolvers: [VantResolver()],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
