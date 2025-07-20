import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/online-store", // // нужно для GitHub Pages или если сайт не в корне
  plugins: [react()],
})
