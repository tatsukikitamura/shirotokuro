// 決済履歴のモックデータ（デモ用）。
// 本番ではログインユーザーの取引履歴をAPIから取得して置き換える。
// status: 'completed'（完了） | 'refunded'（返金済み） | 'failed'（失敗）

export const PAYMENT_HISTORY = [
  {
    id: 'STK-20260620-7F3A9C',
    date: '2026/06/20 14:32',
    amount: 1730,
    bonus: 230,
    price: 1500,
    method: 'クレジットカード',
    brand: 'Visa •••• 4242',
    status: 'completed',
  },
  {
    id: 'STK-20260605-2B81D0',
    date: '2026/06/05 21:08',
    amount: 6000,
    bonus: 1000,
    price: 5000,
    method: 'クレジットカード',
    brand: 'Mastercard •••• 5588',
    status: 'completed',
  },
  {
    id: 'STK-20260528-9E47A1',
    date: '2026/05/28 09:51',
    amount: 570,
    bonus: 70,
    price: 500,
    method: 'クレジットカード',
    brand: 'Visa •••• 4242',
    status: 'refunded',
  },
  {
    id: 'STK-20260514-1C6F22',
    date: '2026/05/14 19:20',
    amount: 12500,
    bonus: 2500,
    price: 10000,
    method: 'クレジットカード',
    brand: 'JCB •••• 0117',
    status: 'completed',
  },
  {
    id: 'STK-20260502-5A0E8B',
    date: '2026/05/02 12:03',
    amount: 3470,
    bonus: 470,
    price: 3000,
    method: 'クレジットカード',
    brand: 'Visa •••• 4242',
    status: 'failed',
  },
]

// ステータスの表示ラベルと装飾クラス
export const STATUS_META = {
  completed: { label: '完了', cls: 'is-done' },
  refunded: { label: '返金済み', cls: 'is-refunded' },
  failed: { label: '失敗', cls: 'is-failed' },
}
