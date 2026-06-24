import { LEGAL_UPDATED, TOKUSHOHO } from '../data/legal.js'
import { to } from '../routing.js'

// 特定商取引法に基づく表記（key-value テーブル）
export default function Tokushoho() {
  return (
    <main className="legal">
      <div className="wrap legal__inner">
        <nav className="legal__breadcrumb" aria-label="パンくず">
          <a href={to('')}>ホーム</a> ／ <span>{TOKUSHOHO.title}</span>
        </nav>

        <h1 className="legal__title">{TOKUSHOHO.title}</h1>
        <p className="legal__updated">最終更新日：{LEGAL_UPDATED}</p>

        <table className="legal-table">
          <tbody>
            {TOKUSHOHO.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="legal__note">
          ※ 本ページは表記のひな形です。「［ ］」で示した事業者情報・連絡先等は、
          公開前に必ず実際の情報へ置き換えてください。
        </p>
      </div>
    </main>
  )
}
