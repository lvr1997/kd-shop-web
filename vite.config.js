import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import RadixVueResolver from 'radix-vue/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      include: [
        /\.[tj]sx?$/, //.ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, //.vue
        /\.md$/ //.md
      ],
      resolvers: [
        RadixVueResolver()
      ],
    }),
    Components({
      dts: true,
      resolvers: [
        RadixVueResolver()
      ],
    }),
  ],
  css: {
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    hmr: true,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: false,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
