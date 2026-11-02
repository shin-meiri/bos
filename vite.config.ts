import React, { reactCompilerPreset } from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    React(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
