import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import plugin from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    plugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
  server: {
    port: 3000,
  },
});
