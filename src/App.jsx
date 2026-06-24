import { useState, useEffect, useRef } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Home from './components/Home.jsx'
import LegalPage from './components/LegalPage.jsx'
import Tokushoho from './components/Tokushoho.jsx'
import { TERMS, CHARGE_TERMS, PRIVACY } from './data/legal.js'

// ハッシュルーティング（GitHub Pages でもそのまま動く）。
// 「#/terms」のように先頭が「/」のものをページ遷移、それ以外（#charge 等）は
// ホーム内のアンカーとして扱う。
function routeFromHash(hash) {
  const path = hash.replace(/^#/, '')
  return path.startsWith('/') ? path.slice(1) : ''
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash || '')

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const route = routeFromHash(hash)
  const prevRouteRef = useRef(route)

  // 表示するページが切り替わった直後だけ、JS で確実にスクロールする
  // （瞬間移動。新しいビューの描画を待つため 1 フレーム遅らせる）。
  // 同一ページ内のアンカー移動はブラウザのスムーズスクロールに任せる。
  useEffect(() => {
    const viewChanged = prevRouteRef.current !== route
    prevRouteRef.current = route
    if (!viewChanged) return

    const anchor = !route && hash && !hash.startsWith('#/') ? hash.slice(1) : ''
    const raf = requestAnimationFrame(() => {
      const el = anchor && document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: 'instant' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(raf)
  }, [hash, route])

  let content
  switch (route) {
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
      content = <Home />
  }

  return (
    <div className="page">
      <SiteHeader />
      {content}
      <SiteFooter />
    </div>
  )
}
