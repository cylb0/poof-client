import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      '@assets': new URL('./src/assets', import.meta.url).pathname,
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@constants': new URL('./src/constants', import.meta.url).pathname,
      '@contexts': new URL('./src/contexts', import.meta.url).pathname,
      '@hooks:': new URL('./src/hooks', import.meta.url).pathname,
      '@layouts': new URL('./src/components/layouts', import.meta.url).pathname,
      '@routes': new URL('./src/routes', import.meta.url).pathname,
      '@tests': new URL('./src/tests', import.meta.url).pathname,
      '@': new URL('./src', import.meta.url).pathname,
    }, 
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts']
  }
})