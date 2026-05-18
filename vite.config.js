import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],

  esbuild: {
    pure: ['console.log'],
  },

  build: {
    sourcemap: false,
    // Inline assets ≤4KB as base64 (removes extra HTTP requests for small icons/SVGs)
    assetsInlineLimit: 4096,

    // Split CSS per chunk — only loads styles needed for visible code
    cssCodeSplit: true,

    // Skip printing compressed size (faster CI builds)
    reportCompressedSize: false,

    // Warn only on genuinely oversized chunks
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Granular vendor splitting — each library loads independently and caches separately
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react'))   return 'vendor-icons';
            if (id.includes('framer-motion') || id.includes('motion-dom')) return 'vendor-motion';
            if (id.includes('react-dom') || id.includes('react/'))         return 'vendor-react';
            if (id.includes('react-helmet-async'))                          return 'vendor-seo';
            if (id.includes('react-router'))                                return 'vendor-router';
            if (id.includes('lenis'))                                       return 'vendor-lenis';
            return 'vendor-misc';
          }
        },
        // Deterministic filenames — improves CDN cache-hit rates
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },
  },

  // Ensure absolute imports work cleanly
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
