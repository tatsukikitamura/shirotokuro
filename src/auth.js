// 簡易ログイン状態（デモ用）。
// 本番では OAuth（Google / LINE）のセッション/トークンに置き換える。
// ここではブラウザの localStorage にログイン状態を保持するだけ。
const KEY = 'stk_auth'

// 現在のログイン情報（{ provider, at } | null）を返す
export function getAuth() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || 'null')
  } catch {
    return null
  }
}

export function isLoggedIn() {
  return Boolean(getAuth())
}

// ログイン状態を保存する
export function login(provider) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ provider, at: Date.now() }))
  } catch {
    /* localStorage 不可（プライベートモード等）でも遷移は継続させる */
  }
}

export function logout() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* noop */
  }
}
