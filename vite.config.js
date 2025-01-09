import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/server-rules/', // Use your GitHub repository name here
  build: {
    outDir: 'dist', // Optional: Ensure output goes to the 'dist' folder
  },
  plugins: [
    react(),
    {
      name: 'write-build-time',
      writeBundle() {
        const buildTime = new Date().toISOString();
        const outputPath = path.resolve(__dirname, 'dist', 'buildTime.json');
        fs.writeFileSync(outputPath, JSON.stringify({ buildTime }, null, 2));
      },
    },
  ],
})
