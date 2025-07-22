import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MyPortfolio/', // 👈 Required for GitHub Pages
  plugins: [react()],
  assetsInclude: ['**/*.PNG'], // optional if using uppercase PNGs
});
