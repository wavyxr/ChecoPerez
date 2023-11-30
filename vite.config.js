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
      // Agrega una nueva configuración para otro archivo PHP si es necesario
      '/src/Udara/Inventario/Validar_Clientes.php': {
        target: 'http://localhost/api/HastaLaVergi/ProyectoCheco/src/Udara/Inventario/', // Reemplaza con la dirección y puerto de tu servidor PHP
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src\/Udara\/Inventario\/Validar_Clientes.php/, '/Validar_Clientes.php'),
      },
      // Agrega una nueva configuración para otro archivo PHP si es necesario
      '/src/Udara/Inventario/InsertarClientes.php': {
        target: 'http://localhost/api/HastaLaVergi/ProyectoCheco/src/Udara/Inventario/InsertarClientes.php', // Reemplaza con la dirección y puerto de tu servidor PHP
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src\/Udara\/Inventario\/InsertarClientes.php/, '/InsertarClientes.php'),
      },
      
      // Agrega una nueva configuración para otro archivo PHP si es necesario
      '/src/Udara/Inventario/EliminarCliente.php': {
        target: 'http://localhost/api/HastaLaVergi/ProyectoCheco/src/Udara/Inventario/EliminarCliente.php', // Reemplaza con la dirección y puerto de tu servidor PHP
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src\/Udara\/Inventario\/EliminarCliente.php/, '/EliminarCliente.php'),
      },
      
      // Agrega una nueva configuración para otro archivo PHP si es necesario
      '/src/Udara/Inventario/EditarCliente.php': {
        target: 'http://localhost/api/HastaLaVergi/ProyectoCheco/src/Udara/Inventario/EditarCliente.php', // Reemplaza con la dirección y puerto de tu servidor PHP
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src\/Udara\/Inventario\/EditarCliente.php/, '/EditarCliente.php'),
      },

      // Agrega una nueva configuración para otro archivo PHP si es necesario
      '/src/Udara/Inventario/AgregarProducto.php': {
        target: 'http://localhost/api/HastaLaVergi/ProyectoCheco/src/Udara/Inventario/AgregarProducto.php', // Reemplaza con la dirección y puerto de tu servidor PHP
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src\/Udara\/Inventario\/AgregarProducto.php/, '/AgregarProducto.php'),
      },
      
    },
  },
})
