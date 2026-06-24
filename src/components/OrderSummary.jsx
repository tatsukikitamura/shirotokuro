import { IconLock, IconCheck } from './Icons.jsx'
import { bonusOf } from '../data/products.js'
import { METHODS } from './PaymentMethods.jsx'

const num = (n) => n.toLocaleString('ja-JP')

// 注文サマリー（右カラム・購入ボタン）
export default function OrderSummary({ currencyLabel, product, paymentId, onCheckout }) {
  const bonus = product ? bonusOf(product) : 0
  const paymentLabel = METHODS.find((m) => m.id === paymentId)?.label ?? '未選択'
  const ready = Boolean(product && paymentId)

  return (
    <aside className="summary" aria-label="注文内容">
      <div className="summary__head">
        <h3>注文内容</h3>
        <p>選択した内容をご確認ください</p>
      </div>

      <div className="summary__body">
        <dl>
          <div className="summary__row">
            <dt>チャージ数</dt>
            <dd>{product ? `${num(product.amount)} ${currencyLabel}` : '—'}</dd>
          </div>
          <div className="summary__row summary__row--bonus">
            <dt>ボーナス</dt>
            <dd>{product && bonus > 0 ? `+${num(bonus)}` : '—'}</dd>
          </div>
          <div className="summary__row">
            <dt>決済方法</dt>
            <dd>{paymentId ? paymentLabel : '未選択'}</dd>
          </div>
        </dl>

        <dl className="summary__total">
          <dt>お支払い金額</dt>
          <dd>
            <small>JPY</small>{product ? num(product.price) : '0'}
          </dd>
        </dl>

        <button
          className="summary__pay"
          disabled={!ready}
          onClick={() => ready && onCheckout()}
        >
          {ready ? '購入手続きへ進む' : 'チャージ金額を選択'}
        </button>

        <p className="summary__note">
          ※ お支払い完了後、アカウントへ自動でスベテが付与されます。
        </p>

        <div className="summary__trust">
          <span><IconLock /> SSL暗号化通信</span>
          <span><IconCheck size={13} /> 即時反映</span>
        </div>
      </div>
    </aside>
  )
}
