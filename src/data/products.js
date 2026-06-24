// スベテ の価格と販売個数
// price: 支払金額 (JPY) / amount: 付与されるスベテの個数
export const SUBETE_PRODUCTS = [
  { id: 'subete-160', price: 160, amount: 180 },
  { id: 'subete-500', price: 500, amount: 570 },
  { id: 'subete-1500', price: 1500, amount: 1730 },
  { id: 'subete-3000', price: 3000, amount: 3470 },
  { id: 'subete-5000', price: 5000, amount: 6000 },
  { id: 'subete-10000', price: 10000, amount: 12500 },
]

// タブ（通貨種別）
export const CURRENCIES = [
  { id: 'subete', label: 'スベテ', desc: 'スベテは特別なコンテンツ解放に使用できます' },
  { id: 'kizuna', label: 'キズナ', desc: 'キズナはキャラクターとの絆を深めるのに使用できます' },
  { id: 'kakera', label: 'カケラ', desc: 'カケラはアイテムの強化・合成に使用できます' },
]

export const PRODUCTS_BY_CURRENCY = {
  subete: SUBETE_PRODUCTS,
  // キズナ・カケラ は未実装（必要になったらここに追加）
  kizuna: [],
  kakera: [],
}
