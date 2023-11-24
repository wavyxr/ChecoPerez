// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configura la proxy para redirigir solicitudes al archivo PHP
      '/src/components/login/prueba2.php': {
        target: 'http://localhost/api/HastaLaVergi/ProyectoCheco/src/components/login/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src\/components\/login\/prueba2.php/, '/prueba2.php'),
      },
    },
  },
})
