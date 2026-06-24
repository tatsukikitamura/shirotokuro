import { LEGAL_UPDATED } from '../data/legal.js'

// 利用規約 / チャージ規約 / プライバシーポリシー 共通の表示
export default function LegalPage({ doc }) {
  return (
    <main className="legal">
      <div className="wrap legal__inner">
        <nav className="legal__breadcrumb" aria-label="パンくず">
          <a href="#/">ホーム</a> ／ <span>{doc.title}</span>
        </nav>

        <h1 className="legal__title">{doc.title}</h1>
        <p className="legal__updated">最終更新日：{LEGAL_UPDATED}</p>

        {doc.intro && <p className="legal__intro">{doc.intro}</p>}

        {doc.sections.map((sec) => (
          <section className="legal__section" key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.paragraphs?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {sec.items && (
              <ol className="legal__list">
                {sec.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ol>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
