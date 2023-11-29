import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://angieprog.github.io/threeD-portfolio/',
  plugins: [react()],
})
