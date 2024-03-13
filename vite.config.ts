import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueExtends from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueExtends()],
});
