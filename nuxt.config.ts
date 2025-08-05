export default defineNuxtConfig({
  ssr: false,
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: [
      'favicon.ico',
      'icon-192x192.png',
      'icon-512x512.png'
    ],
    manifest: {
      name: 'My PWA App',
      short_name: 'PWAApp',
      description: 'My awesome PWA built with Nuxt 4',
      lang: 'en',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,ico,png,svg,json,webmanifest}'],
    }
  }
})