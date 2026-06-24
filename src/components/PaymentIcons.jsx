// 決済方法セル用のモノクロアイコン（白と黒テーマ）
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// クレジットカード
export function PiCreditCard({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base} aria-hidden="true">
      <rect x="4" y="7" width="24" height="18" rx="3" />
      <path d="M4 12h24" />
      <path d="M8 19h6" />
    </svg>
  )
}

// コンビニ決済（店舗）
export function PiStore({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base} aria-hidden="true">
      <path d="M5 13l1.6-5.4A2 2 0 0 1 8.5 6h15a2 2 0 0 1 1.9 1.6L27 13" />
      <path d="M5 13a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      <path d="M7 17v8a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 25 25v-8" />
      <path d="M13 26.5V20h6v6.5" />
    </svg>
  )
}

// キャリア決済（スマートフォン）
export function PiMobile({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base} aria-hidden="true">
      <rect x="9" y="4" width="14" height="24" rx="3" />
      <path d="M13.5 7h5" />
      <path d="M16 24h.01" />
    </svg>
  )
}

// QRコード決済（PayPay / d払い / au PAY / 楽天ペイ / メルペイ など）
export function PiQr({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" stroke="none" aria-hidden="true">
      <path d="M5 5h8v8H5zm2 2v4h4V7zM5 19h8v8H5zm2 2v4h4v-4zM19 5h8v8h-8zm2 2v4h4V7z" />
      <path d="M19 19h3v3h-3zM24 19h3v3h-3zM19 24h3v3h-3zM24 24h3v3h-3z" />
    </svg>
  )
}

// 銀行振込
export function PiBank({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base} aria-hidden="true">
      <path d="M4 12.5 16 5l12 7.5" />
      <path d="M6 13v10M12 13v10M20 13v10M26 13v10" />
      <path d="M4 26.5h24" />
    </svg>
  )
}
