import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const mimeMap = {
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function serveRootAssets() {
  return {
    name: 'serve-root-assets',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url?.split('?')[0] || '';
          const decoded = decodeURIComponent(rawUrl);
          if (decoded.startsWith('/assets/')) {
            const rel = decoded.replace(/^\/assets\//, '');
            const filePath = path.join(process.cwd(), 'assets', rel);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream');
              return fs.createReadStream(filePath).pipe(res);
            }
          }
          next();
        });
      },
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const outAssets = path.join(outDir, 'assets');
        const srcAssets = path.join(process.cwd(), 'assets');
        fs.cpSync(srcAssets, outAssets, { recursive: true });
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), serveRootAssets()],
  server: {
    port: 3000,
    host: true
  }
});
