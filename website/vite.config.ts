import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_AUTH_DOMAIN: "dev-76holcf3ea4ld50v.jp.auth0.com",
      REACT_APP_AUTH_CLIENT_ID: "DTyznQIuT8pFccdd6BeRUNJxVwxkB1j6",
    },
  },
});
