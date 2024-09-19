import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust the base URL path if needed (for deployment)
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for build
    rollupOptions: {
      external: ['react-helmet'], // Externalize react-helmet to avoid bundling issues
    },
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open in browser
  },
});
