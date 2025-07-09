import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React-Project-Manger/',  // ✅ Relative path only
  plugins: [react()],
})