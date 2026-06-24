// 決済まわりのモノクロアイコン（白と黒テーマ）
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
