import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import type { DeprecationOrId } from 'sass';

export default defineConfig(() => {
  const basePath = process.env.GITHUB_ACTIONS ? '/vue-progressbar/' : '/';

  return {
    base: basePath,
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
          silenceDeprecations: ['import'] as DeprecationOrId[]
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
