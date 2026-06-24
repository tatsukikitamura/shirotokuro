import { PiCreditCard, PiStore, PiMobile, PiQr, PiBank } from './PaymentIcons.jsx'

// 「ご利用可能な決済方法」バナー + 決済手段グリッド
const METHODS = [
  { label: 'クレジットカード', Icon: PiCreditCard },
  { label: 'コンビニ決済', Icon: PiStore },
  { label: 'キャリア決済', Icon: PiMobile },
  { label: 'PayPay', Icon: PiQr },
  { label: 'd払い', Icon: PiQr },
  { label: 'au PAY', Icon: PiQr },
  { label: '楽天ペイ', Icon: PiQr },
  { label: 'メルペイ', Icon: PiQr },
  { label: '銀行振込', Icon: PiBank },
]

export default function PaymentMethods() {
  return (
    <section className="payments">
      <div className="payments-banner">ご利用可能な決済方法</div>
      <div className="payments-grid">
        {METHODS.map(({ label, Icon }) => (
          <div className="payment-cell" key={label}>
            <span className="payment-cell-icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="payment-cell-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
