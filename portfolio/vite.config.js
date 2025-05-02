import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'icons/favicon-16x16.png',
        'icons/favicon-32x32.png',
        'icons/favicon-64x64.png',
        'icons/favicon-128x128.png',
        'icons/favicon-256x256.png',
        'icons/favicon-512x512.png'
      ],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        start_url: '/Portfolio/',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: 'icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: 'icons/favicon-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'icons/favicon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/favicon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: '',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true
  }
});
