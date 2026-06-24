import { IconCheck } from './Icons.jsx'
import { bonusOf } from '../data/products.js'
import subeteCard from '../assets/subete-card.png'

const num = (n) => n.toLocaleString('ja-JP')

// チャージ金額の選択（選択式カードのグリッド）
export default function PackageGrid({ products, currencyLabel, selectedId, onSelect }) {
  if (!products.length) {
    return (
      <div className="empty-note">
        現在 {currencyLabel} の販売商品はありません。
      </div>
    )
  }

  return (
    <ul className="package-grid">
      {products.map((p) => {
        const active = p.id === selectedId
        const bonus = bonusOf(p)
        return (
          <li key={p.id}>
            <button
              type="button"
              className={`package ${active ? 'package--active' : ''}`}
              aria-pressed={active}
              onClick={() => onSelect(p)}
            >
              {p.best && <span className="package__badge package__badge--best">一番お得</span>}
              {p.popular && <span className="package__badge">人気</span>}

              <div className="package__top">
                <span className="package__icon" aria-hidden="true">
                  <img src={subeteCard} alt="" />
                </span>
                <span className="package__amount">
                  <strong>{num(p.amount)}</strong>
                  <span>{currencyLabel}</span>
                </span>
              </div>

              {bonus > 0 && (
                <span className="package__bonus">+{num(bonus)} ボーナス</span>
              )}

              <div className="package__foot">
                <span className="package__price">
                  <small>JPY</small>{num(p.price)}
                </span>
                <span className="package__check" aria-hidden="true">
                  <IconCheck />
                </span>
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
