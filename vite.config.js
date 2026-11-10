import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Menggunakan './' agar path aset bersifat relatif dan tidak pernah broken di hosting manapun
  base: './',
})