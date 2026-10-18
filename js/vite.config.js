// Builds EVERY .html file in the project root automatically.
// Add a new page (e.g. profile.html) and it is included in `npm run build` with no config change.
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));

const pages = Object.fromEntries(
    readdirSync(root)
        .filter((file) => file.endsWith(".html"))
        .map((file) => [file.replace(".html", ""), resolve(root, file)])
);

export default defineConfig({
    build: { rollupOptions: { input: pages } }
});
