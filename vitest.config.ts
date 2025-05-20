import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.spec.ts'],
    setupFiles: ['test/setup.ts'],
    // Use process.cwd() to ensure PostCSS config is found
    css: {
      postcss: path.resolve(__dirname, 'postcss.config.cjs'),
    },
  },
})
