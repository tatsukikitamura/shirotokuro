import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'
import LegalPage from './components/LegalPage.jsx'
import Tokushoho from './components/Tokushoho.jsx'
import { TERMS, CHARGE_TERMS, PRIVACY } from './data/legal.js'

// ハッシュルーティング（GitHub Pages でもそのまま動く）。
//   「#」「#/」… ホーム（LP）。
//   「#/charge」「#/terms」… 先頭が「/」のものはページ遷移。
//   「#story」「#charge」… それ以外は “いま表示中のページ内のアンカー” として扱い、
//   ページは切り替えず、ブラウザのスムーズスクロールに任せる（null を返す）。
function pageRouteFromHash(hash) {
  const path = hash.replace(/^#/, '')
  if (path === '' || path === '/') return '' // ホーム（LP）
  return path.startsWith('/') ? path.slice(1) : null
}

export default function App() {
  const [route, setRoute] = useState(
    () => pageRouteFromHash(window.location.hash) ?? '',
  )
  const prevRouteRef = useRef(route)

  useEffect(() => {
    // ページ遷移時のスクロール位置は自前で制御する（ブラウザの自動復元を無効化）。
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    const onHash = () => {
      const next = pageRouteFromHash(window.location.hash)
      // ページ内アンカー（next === null）のときは route を変えない。
      if (next !== null) setRoute(next)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // 表示するページが切り替わった直後だけ、描画前に確実に最上部へスクロールする
  // （瞬間移動）。同一ページ内のアンカー移動はブラウザのスムーズスクロールに任せる。
  useLayoutEffect(() => {
    if (prevRouteRef.current === route) return
    prevRouteRef.current = route
    window.scrollTo(0, 0)
  }, [route])

  let content
  switch (route) {
    case 'charge':
      content = <Home />
      break
    case 'terms':
      content = <LegalPage doc={TERMS} />
      break
    case 'charge-terms':
      content = <LegalPage doc={CHARGE_TERMS} />
      break
    case 'privacy':
      content = <LegalPage doc={PRIVACY} />
      break
    case 'tokushoho':
      content = <Tokushoho />
      break
    default:
      content = <Landing />
  }

  return (
    <div className="page">
      <SiteHeader />
      {content}
      <SiteFooter />
    </div>
  )
}
