import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({

  logLevel: 'info',

  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0', // Permite conexiones externas
    port: 5173, // Asegúrate de usar este puerto fijo
    hmr: {
      clientPort: 5173, // Fija el puerto del cliente HMR
    },
    proxy: {
      '^/api': {
        target: 'http://api',
        changeOrigin: true
      }
    }
  }
})
