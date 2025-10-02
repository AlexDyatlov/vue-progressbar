import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

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
    }
  };
});
