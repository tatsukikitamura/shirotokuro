// 白と黒テーマのモノクロ・アイコン集
// 本番では金属調レンダリング画像（PNG/SVG）に差し替え可能。
// 各アイコンは currentColor を使うので CSS で色を制御できる。

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconClose({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconMore({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  )
}

// 宝箱（スベテ＝特別コンテンツ）
export function IconChest({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M9 20a15 9 0 0 1 30 0v3H9z" />
      <rect x="8" y="23" width="32" height="15" rx="2.5" />
      <path d="M8 30h32" />
      <rect x="21" y="27" width="6" height="7" rx="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

// コイン（決済・通貨）
export function IconCoins({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <ellipse cx="24" cy="16" rx="13" ry="5.5" />
      <path d="M11 16v8c0 3 5.8 5.5 13 5.5s13-2.5 13-5.5v-8" />
      <path d="M11 24v8c0 3 5.8 5.5 13 5.5s13-2.5 13-5.5v-8" />
    </svg>
  )
}

// カード（カードマーク）
export function IconCard({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <rect x="7" y="13" width="34" height="22" rx="3.5" />
      <path d="M24 18.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" fill="currentColor" stroke="none" />
    </svg>
  )
}

// パズルピース
export function IconPuzzle({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M19 10a3 3 0 0 1 6 0c0 1.6 1 2 2.4 2H32a2 2 0 0 1 2 2v4.6c0 1.4.4 2.4 2 2.4a3 3 0 0 1 0 6c-1.6 0-2 1-2 2.4V36a2 2 0 0 1-2 2h-5.6c-1.4 0-2.4.4-2.4 2a3 3 0 0 1-6 0c0-1.6-1-2-2.4-2H12a2 2 0 0 1-2-2v-4.6c0-1.4-.4-2.4-2-2.4a3 3 0 0 1 0-6c1.6 0 2-1 2-2.4V14a2 2 0 0 1 2-2h4.6c1.4 0 2.4-.4 2.4-2z" />
    </svg>
  )
}

// プレゼント箱
export function IconGift({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <rect x="9" y="20" width="30" height="18" rx="2" />
      <path d="M7 14h34v6H7zM24 14v24" />
      <path d="M24 14c-3-6-9-6-9-2 0 3 5 2 9 2zM24 14c3-6 9-6 9-2 0 3-5 2-9 2z" />
    </svg>
  )
}

// 砂時計（期限・チャージ）
export function IconHourglass({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M14 8h20M14 40h20" />
      <path d="M16 8c0 9 8 11 8 16s-8 7-8 16M32 8c0 9-8 11-8 16s8 7 8 16" />
    </svg>
  )
}

// 星（おすすめ・特典）
export function IconStar({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M24 7l5 11 12 1.5-9 8 2.5 12L24 33l-10.5 6.5L16 27l-9-8 12-1.5z" />
    </svg>
  )
}

// チェック（選択中）
export function IconCheck({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.6} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

// 右矢印（CTA）
export function IconArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} aria-hidden="true">
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  )
}

// 稲妻（即時付与）
export function IconBolt({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M27 5 12 27h10l-2 16 16-23H26z" />
    </svg>
  )
}

// 盾＋鍵（安全な決済）
export function IconShield({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M24 5 9 11v9c0 11 6.5 18 15 23 8.5-5 15-12 15-23v-9z" />
      <path d="M18 24l4.5 4.5L31 20" />
    </svg>
  )
}

// ヘッドセット（サポート）
export function IconSupport({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M10 26v-3a14 14 0 0 1 28 0v3" />
      <rect x="7" y="26" width="7" height="11" rx="2.5" />
      <rect x="34" y="26" width="7" height="11" rx="2.5" />
      <path d="M38 37v1a5 5 0 0 1-5 5h-5" />
    </svg>
  )
}

// 感嘆符（エラー・警告）
export function IconAlert({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} aria-hidden="true">
      <path d="M12 7.5v6" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
      <path d="M12 17h0" strokeWidth={2.6} />
    </svg>
  )
}

// 時計（履歴・最近の取引）
export function IconClock({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

// レシート（決済履歴）
export function IconReceipt({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} aria-hidden="true">
      <path d="M12 5h24v38l-4-3-4 3-4-3-4 3-4-3-4 3z" />
      <path d="M18 16h12M18 23h12M18 30h8" />
    </svg>
  )
}

// 鍵（SSL / 安全）
export function IconLock({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}
