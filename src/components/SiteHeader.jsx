import subeteCard from '../assets/subete-card.png'

// 横幅フルのトップナビ
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark">
            <img src={subeteCard} alt="" />
          </span>
          <span className="brand__name">白と黒</span>
        </a>

        <nav className="site-nav" aria-label="メインメニュー">
          <a href="#charge">チャージ</a>
          <a href="#features">安心ポイント</a>
          <a href="#faq">よくある質問</a>
          <a href="#support">サポート</a>
        </nav>

        <div className="site-header__right">
          <span className="lang-pill">日本語</span>
          <button className="btn-ghost">ログイン</button>
        </div>
      </div>
    </header>
  )
}
