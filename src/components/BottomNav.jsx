import { IconPuzzle, IconGift, IconHourglass, IconCoins, IconStar } from './Icons.jsx'

const ITEMS = [
  { id: 'mission', label: 'ミッション', Icon: IconPuzzle },
  { id: 'gift', label: 'プレゼント', Icon: IconGift },
  { id: 'history', label: '履歴', Icon: IconHourglass },
  { id: 'shop', label: 'ショップ', Icon: IconCoins, active: true },
  { id: 'special', label: '特典', Icon: IconStar },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="メインメニュー">
      {ITEMS.map(({ id, label, Icon, active }) => (
        <button key={id} className={`nav-item ${active ? 'nav-item--active' : ''}`}>
          <Icon size={26} />
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
