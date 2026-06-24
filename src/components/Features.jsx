import { IconBolt, IconShield, IconSupport } from './Icons.jsx'

const FEATURES = [
  {
    Icon: IconBolt,
    title: '即時チャージ',
    text: 'お支払いが完了すると、その場でスベテがアカウントへ反映。待ち時間はありません。',
  },
  {
    Icon: IconShield,
    title: '安全な決済',
    text: 'SSL暗号化通信と信頼できる決済代行を採用。カード情報は当ストアに保存されません。',
  },
  {
    Icon: IconSupport,
    title: '24時間サポート',
    text: '決済や反映に関するお困りごとは、専用サポート窓口がいつでも対応します。',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="features__head">
          <h2>安心してチャージできる理由</h2>
          <p>はじめての方も、いつもの方も、安全・かんたんに。</p>
        </div>
        <div className="features__grid">
          {FEATURES.map(({ Icon, title, text }) => (
            <div className="feature" key={title}>
              <span className="feature__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
