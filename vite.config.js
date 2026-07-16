

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages =
  process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/sasa/' : '/',
})
