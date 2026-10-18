import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf"
};

const server = http.createServer((req, res) => {
    try {
        const reqUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
        let pathname = decodeURIComponent(reqUrl.pathname);

        // Normalize root path to index.html
        if (pathname === "/" || pathname === "") {
            pathname = "/index.html";
        }

        // Clean path to prevent directory traversal
        let resolvedPath = path.normalize(path.join(__dirname, pathname));

        // If no file extension and file does not exist directly, check for .html extension
        if (!path.extname(resolvedPath) && !fs.existsSync(resolvedPath)) {
            const htmlPath = `${resolvedPath}.html`;
            if (fs.existsSync(htmlPath)) {
                resolvedPath = htmlPath;
            }
        }

        // Ensure target is within the root directory
        if (!resolvedPath.startsWith(__dirname)) {
            res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("403 Forbidden");
            return;
        }

        fs.stat(resolvedPath, (err, stats) => {
            if (err || !stats.isFile()) {
                // If directory, check for directory index.html
                if (stats && stats.isDirectory()) {
                    const dirIndex = path.join(resolvedPath, "index.html");
                    if (fs.existsSync(dirIndex)) {
                        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                        fs.createReadStream(dirIndex).pipe(res);
                        return;
                    }
                }

                res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
                res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 Not Found | ShieldNet</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body style="display:flex;align-items:center;justify-content:center;min-height:100vh;color:#ffffff;text-align:center;">
    <div>
        <h1 style="color:#d4af37;font-size:3rem;margin-bottom:1rem;">404</h1>
        <p style="font-size:1.2rem;margin-bottom:1.5rem;">Page or asset not found.</p>
        <a href="/" style="color:#d4af37;text-decoration:underline;">Return to Home</a>
    </div>
</body>
</html>`);
                return;
            }

            const ext = path.extname(resolvedPath).toLowerCase();
            const contentType = MIME_TYPES[ext] || "application/octet-stream";

            res.writeHead(200, {
                "Content-Type": contentType,
                "Content-Length": stats.size,
                "Cache-Control": "no-cache"
            });

            fs.createReadStream(resolvedPath).pipe(res);
        });
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("500 Internal Server Error");
    }
});

server.listen(PORT, HOST, () => {
    console.log(`ShieldNet static server running on http://${HOST}:${PORT}`);
});
