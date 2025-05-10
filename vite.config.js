
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html'  // Asegurando la ruta correcta para Vercel
    }
  },
  plugins: [react()]
});
