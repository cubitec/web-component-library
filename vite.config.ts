import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CubitecComponentLibrary',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // Don't externalize Vue - we need to bundle it for custom elements to work standalone
      // This allows the components to work in Vue 2 apps without requiring Vue 3
      output: {
        // Provide global variables for UMD build
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
