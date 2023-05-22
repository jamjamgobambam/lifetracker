import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ["./src/index.jsx"],
    }),
  ],
  build: {
    outDir: '../lifetracker-simple-api/public',
    emptyOutDir: true
  }
})