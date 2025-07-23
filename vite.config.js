// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/myportfolio/', // 🔴 Add this line
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-simple-typewriter']
    }
  }
})
