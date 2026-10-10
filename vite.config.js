import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the built site work from any GitHub Pages sub-path.
export default defineConfig({
  plugins: [react()],
  base: './',
});
