import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/server-rules/', // Use your GitHub repository name here
  build: {
    outDir: 'dist', // Optional: Ensure output goes to the 'dist' folder
  },
  plugins: [react()],
})
