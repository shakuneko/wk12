import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, 
      }
    }
  },
})