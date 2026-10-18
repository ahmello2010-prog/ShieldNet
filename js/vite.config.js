import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// Multi-page build: index.html + login.html
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL("./index.html", import.meta.url)),
                login: fileURLToPath(new URL("./login.html", import.meta.url))
            }
        }
    }
});
