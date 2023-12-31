// vite.config.js
import react from "file:///F:/Programacion/repos/e-commerce/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///F:/Programacion/repos/e-commerce/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxQcm9ncmFtYWNpb25cXFxccmVwb3NcXFxcZS1jb21tZXJjZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcUHJvZ3JhbWFjaW9uXFxcXHJlcG9zXFxcXGUtY29tbWVyY2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1Byb2dyYW1hY2lvbi9yZXBvcy9lLWNvbW1lcmNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtyZWFjdCgpXSxcblx0dGVzdDoge1xuXHRcdGdsb2JhbHM6IHRydWUsXG5cdFx0ZW52aXJvbm1lbnQ6ICdqc2RvbScsXG5cdFx0c2V0dXBGaWxlczogJy4vc3JjL19fdGVzdHNfXy9zZXR1cC5qcycsXG5cdH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUixPQUFPLFdBQVc7QUFDNVMsU0FBUyxvQkFBb0I7QUFHN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE1BQU07QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxFQUNiO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
