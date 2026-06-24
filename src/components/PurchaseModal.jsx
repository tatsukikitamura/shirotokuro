import { useEffect } from 'react'
import { IconClose, IconCard } from './Icons.jsx'

const num = (n) => n.toLocaleString('ja-JP')

// 購入確認モーダル。
// 実際の決済は onConfirm 内で決済プロバイダ（Stripe / PAY.JP / KOMOJU 等）の
// チェックアウトに繋ぎ込む想定。ここでは確認ダイアログのみを担当。
export default function PurchaseModal({ product, currencyLabel, onClose, onConfirm }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!product) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-btn" aria-label="閉じる" onClick={onClose}>
          <IconClose size={20} />
        </button>

        <div className="modal-icon">
          <IconCard size={48} />
        </div>

        <h2 className="modal-title">購入の確認</h2>

        <dl className="modal-detail">
          <div>
            <dt>商品</dt>
            <dd>{currencyLabel} {num(product.amount)} point</dd>
          </div>
          <div>
            <dt>お支払い金額</dt>
            <dd className="modal-price">JPY {num(product.price)}</dd>
          </div>
        </dl>

        <button className="modal-confirm" onClick={() => onConfirm(product)}>
          この内容で購入する
        </button>
        <p className="modal-note">
          ※ お支払い完了後、アプリ内に自動でスベテが付与されます。
        </p>
      </div>
    </div>
  )
}
