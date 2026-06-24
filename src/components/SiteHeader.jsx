import subeteCard from '../assets/subete-card.png'
import { to } from '../routing.js'

// 横幅フルのトップナビ
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="brand" href={to('')}>
          <span className="brand__mark">
            <img src={subeteCard} alt="" />
          </span>
          <span className="brand__name">白と黒</span>
        </a>

        <div className="site-header__right">
          <span className="lang-pill">日本語</span>
          <button className="btn-ghost">ログイン</button>
        </div>
      </div>
    </header>
  )
}
