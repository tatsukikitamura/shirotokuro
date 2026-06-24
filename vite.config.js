import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// パス形式のクリーンURL（/charge 等）を GitHub Pages で使うため、base を
// リポジトリ名に固定する。これにより import.meta.env.BASE_URL が
// '/shirotokuro/' になり、ルーティング・404 リダイレクトの基準になる。
// ※ 独自ドメイン（ルート直下）へ移行する場合は base を '/' に変更すること。
export default defineConfig({
  plugins: [react()],
  base: '/shirotokuro/',
})
