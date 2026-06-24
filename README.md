# 白と黒 — スベテ 外部決済ページ

ポイ活アプリ「白と黒」の課金アイテム **スベテ** を販売する外部決済ページです。
React + Vite で構築し、GitHub Actions で GitHub Pages に自動デプロイします。

## スベテ 価格表

| 支払金額 | 付与スベテ |
| --- | --- |
| ¥160 | 180 |
| ¥500 | 570 |
| ¥1,500 | 1,730 |
| ¥3,000 | 3,470 |
| ¥5,000 | 6,000 |
| ¥10,000 | 12,500 |

価格は `src/data/products.js` で管理しています。

## 開発

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ に本番ビルド
npm run preview  # ビルド結果をローカル確認
```

## GitHub Pages へのデプロイ

1. このリポジトリを GitHub に push する（ブランチ名は `main`）。
2. GitHub の **Settings → Pages → Build and deployment → Source** を
   **GitHub Actions** に設定する。
3. `main` への push で `.github/workflows/deploy.yml` が走り、自動公開されます。

`vite.config.js` の `base: './'` により、`https://<user>.github.io/<repo>/`
形式のプロジェクトページでも、独自ドメインでも資産パスが解決されます。

## 決済プロバイダの接続

UI の「購入する」→ 確認モーダル → `この内容で購入する` までを実装済みです。
実際の決済は `src/App.jsx` の `handleConfirm()` 内に、
決済プロバイダ（Stripe / PAY.JP / KOMOJU など）のチェックアウトを接続してください。

```js
const handleConfirm = async (product) => {
  const url = await createCheckout(product.id) // ← サーバー側でセッション作成
  window.location.href = url
}
```

## アイコンの差し替え

`src/components/Icons.jsx` のモノクロ SVG はプレースホルダーです。
アプリ内と同じ金属調レンダリング画像を使う場合は、`public/` に画像を置いて
各コンポーネントで読み込んでください。

## 構成

```
src/
├─ App.jsx              画面全体の組み立て・状態管理
├─ index.css           白と黒テーマのスタイル
├─ data/products.js    価格・通貨データ
└─ components/
   ├─ Header.jsx         上部バー（閉じる / タイトル / メニュー）
   ├─ ItemShowcase.jsx   アイテムピル + カードマーク
   ├─ PaymentMethods.jsx ご利用可能な決済方法
   ├─ TabSelector.jsx    スベテ / キズナ / カケラ
   ├─ ProductList.jsx    価格×個数の購入リスト
   ├─ BottomNav.jsx      下部ナビ
   ├─ PurchaseModal.jsx  購入確認モーダル
   └─ Icons.jsx          モノクロアイコン集
```
