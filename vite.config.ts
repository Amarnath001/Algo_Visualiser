import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@algorithms': path.resolve(__dirname, './src/algorithms'),
      '@visualizer': path.resolve(__dirname, './src/visualizer'),
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
