import { GoogleLogo, LineLogo } from './BrandIcons.jsx'
import subeteCard from '../assets/subete-card.png'
import { to, navigate } from '../routing.js'
import { login } from '../auth.js'

// ============================================================
// ログイン画面（/login）
// アプリ同様、Google / LINE のソーシャルログインに対応。
// 実際の認証は各ボタンの onClick で OAuth 連携につなぎ込む想定。
//   ・Google: Google Identity Services（OAuth 2.0）
//   ・LINE:   LINE Login（v2.1）
// ここでは UI と遷移のスタブのみを用意している。
// ============================================================

// ログイン後の遷移先。?redirect=<route> があればそこへ、なければチャージへ。
// 許可したルートのみに限定する（オープンリダイレクト防止）。
function redirectTarget() {
  const r = new URLSearchParams(window.location.search).get('redirect')
  const allowed = ['', 'charge', 'history']
  return allowed.includes(r) ? r : 'charge'
}

function signIn(provider) {
  // TODO: ここで実際の OAuth フローを開始する。
  //   Google → google.accounts.oauth2 / LINE → https://access.line.me/oauth2/...
  // 認証成功後にログイン状態を保存し、元のページへ戻す。
  login(provider)
  navigate(redirectTarget())
}

export default function LoginPage() {
  return (
    <main className="auth" id="login">
      <div className="wrap auth__inner">
        <div className="auth-card">
          <a className="auth-card__brand" href={to('')} aria-label="白と黒 トップへ">
            <span className="auth-card__mark">
              <img src={subeteCard} alt="" />
            </span>
            <span className="auth-card__brand-name">白と黒</span>
          </a>

          <p className="auth-card__eyebrow">公式チャージストア</p>
          <h1 className="auth-card__title">ログイン</h1>
          <p className="auth-card__lead">
            お持ちのアカウントでログインして、
            <br />
            スベテのチャージや購入履歴の確認ができます。
          </p>

          <div className="auth-card__providers">
            <button
              type="button"
              className="social-btn social-btn--google"
              onClick={() => signIn('Google')}
            >
              <span className="social-btn__icon">
                <GoogleLogo size={20} />
              </span>
              <span className="social-btn__label">Googleでログイン</span>
            </button>

            <button
              type="button"
              className="social-btn social-btn--line"
              onClick={() => signIn('LINE')}
            >
              <span className="social-btn__icon">
                <LineLogo size={22} />
              </span>
              <span className="social-btn__label">LINEでログイン</span>
            </button>
          </div>

          <p className="auth-card__note">
            ログインすることで、
            <a href={to('terms')}>利用規約</a>
            および
            <a href={to('privacy')}>プライバシーポリシー</a>
            に同意したものとみなされます。
          </p>
        </div>

        <p className="auth__back">
          <a href={to('')}>← トップへ戻る</a>
        </p>
      </div>
    </main>
  )
}
