import { useEffect } from 'react'
import { IconCheck, IconAlert, IconClose } from './Icons.jsx'
import { bonusOf } from '../data/products.js'
import { to } from '../routing.js'

const num = (n) => n.toLocaleString('ja-JP')

// ============================================================
// 購入結果ポップアップ（成功 / 失敗）
// status = 'success' | 'error' で表示を切り替える。
//   ・success: 付与スベテ・注文番号・支払金額を表示
//   ・error:   失敗理由と再試行導線を表示
// 実決済では、決済プロバイダのコールバック結果に応じて
// status と reason / orderId を渡す想定。
// ============================================================
export default function PurchaseResultModal({
  open,
  status,
  product,
  currencyLabel,
  orderId,
  reason,
  onClose,
  onRetry,
}) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  const isSuccess = status === 'success'
  const bonus = product ? bonusOf(product) : 0

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal modal--result ${isSuccess ? 'modal--success' : 'modal--error'}`}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="result-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" aria-label="閉じる" onClick={onClose}>
          <IconClose size={20} />
        </button>

        <div className="result-badge" aria-hidden="true">
          <span className="result-badge__ring" />
          {isSuccess ? <IconCheck size={40} /> : <IconAlert size={40} />}
        </div>

        {isSuccess ? (
          <>
            <h2 className="modal-title" id="result-title">
              購入が完了しました
            </h2>
            <p className="result-sub">
              ご購入ありがとうございます。スベテをアカウントへ反映しました。
            </p>

            <dl className="modal-detail">
              <div>
                <dt>獲得スベテ</dt>
                <dd>
                  {currencyLabel} {num(product.amount)}
                  {bonus > 0 ? `（+${num(bonus)}）` : ''}
                </dd>
              </div>
              <div>
                <dt>お支払い金額</dt>
                <dd className="modal-price">JPY {num(product.price)}</dd>
              </div>
              <div>
                <dt>注文番号</dt>
                <dd className="result-orderid">{orderId}</dd>
              </div>
            </dl>

            <a className="modal-confirm" href={to('history')}>
              決済履歴を見る
            </a>
            <button className="modal-ghost" onClick={onClose}>
              閉じる
            </button>
          </>
        ) : (
          <>
            <h2 className="modal-title" id="result-title">
              お支払いが完了しませんでした
            </h2>
            <p className="result-sub">
              {reason || 'カードが承認されませんでした。時間をおいて、もう一度お試しください。'}
            </p>

            <div className="result-help">
              <p>考えられる原因：</p>
              <ul>
                <li>カード残高・利用限度額の不足</li>
                <li>カード情報の入力誤り</li>
                <li>通信環境の一時的な不具合</li>
              </ul>
            </div>

            <button className="modal-confirm" onClick={onRetry}>
              もう一度試す
            </button>
            <button className="modal-ghost" onClick={onClose}>
              閉じる
            </button>
          </>
        )}
      </div>
    </div>
  )
}
