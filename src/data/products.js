// スベテ の価格と販売個数
// price: 支払金額 (JPY) / amount: 付与されるスベテの個数
// popular: おすすめ表示 / best: 一番お得表示
export const CURRENCY_LABEL = 'スベテ'

export const SUBETE_PRODUCTS = [
  { id: 'subete-160', price: 160, amount: 180 },
  { id: 'subete-500', price: 500, amount: 570 },
  { id: 'subete-1500', price: 1500, amount: 1730, popular: true },
  { id: 'subete-3000', price: 3000, amount: 3470 },
  { id: 'subete-5000', price: 5000, amount: 6000 },
  { id: 'subete-10000', price: 10000, amount: 12500, best: true },
]

// 付与ボーナス（お得分）を算出
export const bonusOf = (p) => Math.max(0, p.amount - p.price)
