import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' を使うことで、GitHub Pages の
// プロジェクトページ（https://<user>.github.io/<repo>/）でも
// ユーザーページ（独自ドメイン）でも、どちらでも資産パスが解決できる。
export default defineConfig({
  plugins: [react()],
  base: './',
})
