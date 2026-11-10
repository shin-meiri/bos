import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Gunakan '/' untuk lokal dev, atau gunakanconditional agar aman untuk build
  base: process.env.NODE_ENV === 'production' ? '/bos/' : '/',
})