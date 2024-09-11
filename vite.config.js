import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust the base URL path if needed
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
