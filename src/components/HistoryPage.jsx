import { IconCoins, IconReceipt } from './Icons.jsx'
import { PAYMENT_HISTORY, STATUS_META } from '../data/history.js'
import { CURRENCY_LABEL } from '../data/products.js'
import { to } from '../routing.js'

const num = (n) => n.toLocaleString('ja-JP')

// ============================================================
// 決済履歴画面（/history）
// 過去のチャージ（決済）履歴を一覧表示する。
// デモではモックデータ（data/history.js）を表示。
// 本番はログインユーザーの取引履歴をAPIから取得して置き換える。
// ============================================================
export default function HistoryPage() {
  const items = PAYMENT_HISTORY

  // 完了分の合計（サマリー表示用）
  const done = items.filter((t) => t.status === 'completed')
  const totalSubete = done.reduce((s, t) => s + t.amount, 0)
  const totalSpent = done.reduce((s, t) => s + t.price, 0)

  return (
    <main className="legal history" id="history">
      <div className="wrap legal__inner">
        <p className="legal__breadcrumb">
          <a href={to('')}>トップ</a> ／ <a href={to('charge')}>チャージ</a> ／ 決済履歴
        </p>

        <div className="history__head">
          <div>
            <h1 className="legal__title">決済履歴</h1>
            <p className="history__desc">
              これまでのスベテのチャージ・お支払い状況を確認できます。
            </p>
          </div>
          <a className="history__charge-link" href={to('charge')}>
            スベテをチャージ
          </a>
        </div>

        {/* サマリー */}
        <div className="history-summary">
          <div className="history-summary__card">
            <span className="history-summary__label">チャージ済みスベテ（累計）</span>
            <span className="history-summary__value">
              {num(totalSubete)}
              <small>{CURRENCY_LABEL}</small>
            </span>
          </div>
          <div className="history-summary__card">
            <span className="history-summary__label">お支払い合計</span>
            <span className="history-summary__value">
              <small>JPY</small>
              {num(totalSpent)}
            </span>
          </div>
          <div className="history-summary__card">
            <span className="history-summary__label">取引件数</span>
            <span className="history-summary__value">
              {num(items.length)}
              <small>件</small>
            </span>
          </div>
        </div>

        {/* 履歴リスト */}
        {items.length === 0 ? (
          <div className="history-empty">
            <span className="history-empty__icon" aria-hidden="true">
              <IconReceipt size={30} />
            </span>
            <p>まだ決済履歴がありません。</p>
            <a className="history-empty__cta" href={to('charge')}>
              スベテをチャージする
            </a>
          </div>
        ) : (
          <>
            <div className="history-list" role="list">
              <div className="history-list__head" aria-hidden="true">
                <span>内容</span>
                <span>日時・決済方法</span>
                <span className="history-col--price">お支払い</span>
                <span className="history-col--status">ステータス</span>
              </div>

              {items.map((t) => {
                const meta = STATUS_META[t.status] ?? STATUS_META.completed
                return (
                  <article className="history-row" role="listitem" key={t.id}>
                    <div className="history-row__main">
                      <span className="history-row__icon" aria-hidden="true">
                        <IconCoins size={26} />
                      </span>
                      <div className="history-row__amount">
                        <strong>
                          {CURRENCY_LABEL} {num(t.amount)}
                        </strong>
                        {t.bonus > 0 && (
                          <span className="history-row__bonus">+{num(t.bonus)} ボーナス</span>
                        )}
                        <span className="history-row__id">注文番号 {t.id}</span>
                      </div>
                    </div>

                    <div className="history-row__meta">
                      <span className="history-row__date">{t.date}</span>
                      <span className="history-row__method">{t.brand}</span>
                    </div>

                    <div className="history-row__price history-col--price">
                      <small>JPY</small> {num(t.price)}
                    </div>

                    <div className="history-col--status">
                      <span className={`history-status ${meta.cls}`}>{meta.label}</span>
                    </div>
                  </article>
                )
              })}
            </div>

            <p className="history__note">
              ※ 表示は直近の取引です。返金・領収書の発行などは
              <a href="#support">サポート窓口</a>までお問い合わせください。
            </p>
          </>
        )}
      </div>
    </main>
  )
}
