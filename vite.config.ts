import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks:': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@tests': path.resolve(__dirname, './src/tests'),
      '@': path.resolve(__dirname, './src')
    }
  },
})
