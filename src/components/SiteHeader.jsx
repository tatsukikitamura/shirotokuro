import subeteCard from '../assets/subete-card.png'
import { to, navigate } from '../routing.js'
import { isLoggedIn, logout } from '../auth.js'

// 横幅フルのトップナビ
export default function SiteHeader() {
  const authed = isLoggedIn()

  const onLogout = () => {
    logout()
    navigate('')
  }

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
          {authed ? (
            <>
              <a className="header-link" href={to('history')}>決済履歴</a>
              <button className="btn-ghost" onClick={onLogout}>ログアウト</button>
            </>
          ) : (
            <a className="btn-ghost" href={to('login')}>ログイン</a>
          )}
        </div>
      </div>
    </header>
  )
}
