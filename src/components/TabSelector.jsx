import { CURRENCIES } from '../data/products.js'

export default function TabSelector({ active, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="通貨の種類">
      {CURRENCIES.map((c) => (
        <button
          key={c.id}
          role="tab"
          aria-selected={active === c.id}
          className={`tab ${active === c.id ? 'tab--active' : ''}`}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
