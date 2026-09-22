import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  root,
  publicDir: fileURLToPath(new URL('../../public', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('../../dist-openrouter', import.meta.url)),
    emptyOutDir: true,
  },
});
