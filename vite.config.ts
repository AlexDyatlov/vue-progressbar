import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/vue-progressbar/' : '/',
    server: {
      host: true,
      port: Number(process.env.VITE_PORT) || 8080,
      hmr: true
    },
    preview: {
      port: Number(process.env.VITE_PORT) || 8080
    },
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import']
        }
      }
    },
    build: {
      assetsInlineLimit: 0
    },
    resolve: {
      alias: {
        '@/': fileURLToPath(new URL('./src/', import.meta.url))
      }
    }
  };
});
