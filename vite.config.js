import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    global: {},
  },
  server: {
    // Handle SPA routing (redirect 404s to index.html)
    historyApiFallback: true,
  },
  build: {
    // Add rollup options to ensure SPA routing works in production
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
