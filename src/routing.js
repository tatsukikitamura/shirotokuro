// パスベースのルーティング用ヘルパー。
// GitHub Pages プロジェクトページでは base が '/shirotokuro/' になる。
// （Vite の base 設定 = import.meta.env.BASE_URL を基準にする）
export const BASE = import.meta.env.BASE_URL

// ルート名（'' | 'charge' | 'terms' …）から実URLを作る。
//   to('')        -> '/shirotokuro/'
//   to('charge')  -> '/shirotokuro/charge'
export function to(route = '') {
  return BASE + route
}

// プログラムによるページ遷移（リロードなし）。
// App 側の popstate ハンドラが拾ってルートを更新する。
//   navigate('login?redirect=charge') -> /shirotokuro/login?redirect=charge
export function navigate(route = '') {
  window.history.pushState(null, '', BASE + route)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

// 現在の location.pathname からルート名を取り出す。
//   '/shirotokuro/'        -> ''
//   '/shirotokuro/charge'  -> 'charge'
//   '/shirotokuro/charge/' -> 'charge'
export function currentRoute() {
  let p = window.location.pathname
  if (p.startsWith(BASE)) p = p.slice(BASE.length)
  else p = p.replace(/^\/+/, '')
  return p.replace(/\/+$/, '')
}
