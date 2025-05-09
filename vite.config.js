
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Rutas relativas para que siempre funcione
  publicDir: 'public', // Asegura que los recursos públicos se carguen correctamente
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/public/index.html'  // Ruta absoluta para evitar errores
    }
  },
  plugins: [react()]
});
