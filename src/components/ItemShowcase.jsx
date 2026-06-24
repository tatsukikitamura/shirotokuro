import { IconChest, IconCoins, IconCard } from './Icons.jsx'

// 上部の3つのアイテムピル + 「スベテ / カードマーク」ラベル
export default function ItemShowcase() {
  return (
    <section className="showcase">
      <div className="showcase-label">
        <span className="showcase-label-accent">スベテ</span>
        <span className="showcase-label-sub">カードマーク</span>
      </div>

      <div className="showcase-pills">
        <div className="pill-card">
          <IconChest />
        </div>
        <div className="pill-card">
          <IconCoins />
        </div>
        <div className="pill-card pill-card--active">
          <IconCard />
        </div>
      </div>
    </section>
  )
}
