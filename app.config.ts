import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from '@tanstack/start/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './app'),
            },
        },
    }
});
