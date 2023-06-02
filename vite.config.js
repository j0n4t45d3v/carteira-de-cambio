import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/carteira-de-cambio/",
  plugins: [react()],
})
