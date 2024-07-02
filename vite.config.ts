import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4000,
    //port: 5000,
    strictPort: true,
   },
  server: {
    //port: 5000,
    port: 4000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:4000/",
    //origin: "http://0.0.0.0:5000/",
   },
})
