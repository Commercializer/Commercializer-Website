import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Components({
    resolvers: [BootstrapVueNextResolver()],
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_mixins.scss";`
      }
    }
  },
  
  server: {
    host: '0.0.0.0',
    port: 8080,
  },

})
