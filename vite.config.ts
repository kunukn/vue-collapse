import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({insertTypesEntry: true})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/lib/main.ts'),
      name: 'VueCollapse',
      // the proper extensions will be added
      fileName: 'vue-collapse',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', new RegExp('/__tests__/.*'), '*.spec.ts'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          const renamed: string[] = []

          if(!assetInfo.names) return ''

          assetInfo.names.forEach((name) => {
            if (name === 'style.css') renamed.push('vue-collapse.css')
            else  renamed.push(name)
          })

          return renamed.join('/')
        },
      },
    },
  },
})
