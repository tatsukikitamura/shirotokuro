import { IconCard } from './Icons.jsx'

const yen = (n) => '¥' + n.toLocaleString('ja-JP')
const num = (n) => n.toLocaleString('ja-JP')

export default function ProductList({ products, currencyLabel, onPurchase }) {
  if (!products.length) {
    return (
      <div className="empty-note">
        現在 {currencyLabel} の販売商品はありません。
      </div>
    )
  }

  return (
    <ul className="product-list">
      {products.map((p) => (
        <li className="product-row" key={p.id}>
          <div className="product-info">
            <span className="product-icon" aria-hidden="true">
              <IconCard size={30} />
            </span>
            <span className="product-name">{currencyLabel}</span>
            <span className="product-amount">
              <strong>{num(p.amount)}</strong>
              <small>point</small>
            </span>
          </div>

          <button className="product-buy" onClick={() => onPurchase(p)}>
            <span className="product-price">JPY {num(p.price)}</span>
            <span className="product-buy-label">購入する</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
