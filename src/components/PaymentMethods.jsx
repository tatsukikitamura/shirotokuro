// 「ご利用可能な決済方法」バナー + 決済手段グリッド
// label を入れれば各セルにブランド名/ロゴが入る。空文字はプレースホルダー表示。
const METHODS = [
  'クレジットカード', 'コンビニ決済', 'キャリア決済',
  'PayPay', 'd払い', 'au PAY',
  '楽天ペイ', 'メルペイ', '銀行振込',
]

export default function PaymentMethods() {
  return (
    <section className="payments">
      <div className="payments-banner">ご利用可能な決済方法</div>
      <div className="payments-grid">
        {METHODS.map((m) => (
          <div className="payment-cell" key={m}>
            <span className="payment-cell-label">{m}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
