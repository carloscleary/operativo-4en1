
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
   base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html'
    }
  },
  plugins: [react()]
});
