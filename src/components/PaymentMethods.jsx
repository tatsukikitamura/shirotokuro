import { PiCreditCard } from './PaymentIcons.jsx'
import { IconCheck } from './Icons.jsx'
import { CARD_BRANDS } from './CardBrands.jsx'

// 決済方法はクレジットカードのみ（OrderSummary / PurchaseModal がラベル解決に使用）
export const METHODS = [{ id: 'card', label: 'クレジットカード' }]

export default function PaymentMethods() {
  return (
    <div className="paycard paycard--active" aria-label="お支払い方法：クレジットカード">
      <div className="paycard__main">
        <span className="paycard__icon" aria-hidden="true">
          <PiCreditCard size={28} />
        </span>
        <div className="paycard__text">
          <span className="paycard__title">クレジットカード</span>
          <span className="paycard__sub">主要ブランドに対応・SSLで安全に決済</span>
        </div>
        <span className="paycard__check" aria-hidden="true">
          <IconCheck />
        </span>
      </div>

      <div className="paycard__brands" aria-label="対応カードブランド">
        {CARD_BRANDS.map((Brand, i) => (
          <Brand key={i} />
        ))}
      </div>
    </div>
  )
}
