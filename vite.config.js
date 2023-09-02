import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.512x512.png'],
    manifest:{
      name: "Web Gym",
      short_name: "Web Gym",
      description: "web page the gym",
      theme_color: '#29bc12',
      icons:[
        {
          src:'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src:'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src:'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src:'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
      ]
    }
  })],
  base: 'https://Ruben-epic.github.io/web-gym'
})
