import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'
import LegalPage from './components/LegalPage.jsx'
import Tokushoho from './components/Tokushoho.jsx'
import { TERMS, CHARGE_TERMS, PRIVACY } from './data/legal.js'
import { BASE, currentRoute } from './routing.js'

// パス形式のルーティング（/charge, /terms …）。
//   ・ページ遷移は History API（pushState）でリロードなしに行う。
//   ・「#story」「#charge」のような純粋なページ内アンカーはブラウザに任せる。
//   ・GitHub Pages では public/404.html → index.html の復元スクリプトで
//     ディープリンク（直接アクセス／リロード）にも対応する。
export default function App() {
  const [route, setRoute] = useState(() => currentRoute())
  const prevRouteRef = useRef(route)

  useEffect(() => {
    // 戻る/進む・ページ遷移のスクロールは自前で制御する。
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const onPop = () => setRoute(currentRoute())
    window.addEventListener('popstate', onPop)

    // 内部リンクのクリックを横取りして History 遷移に変換する。
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest('a')
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return

      const raw = a.getAttribute('href')
      if (!raw) return

      // ページ内アンカー（#story 等）は、スティッキーヘッダー分(84px)を
      // 考慮して自前でスムーズスクロールする（ブラウザ任せだと不安定なため）。
      if (raw.startsWith('#')) {
        const id = decodeURIComponent(raw.slice(1))
        const el = id && document.getElementById(id)
        if (el) {
          e.preventDefault()
          const y = el.getBoundingClientRect().top + window.scrollY - 84
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
          window.history.replaceState(
            null,
            '',
            window.location.pathname + window.location.search + raw,
          )
        }
        return
      }

      const url = new URL(a.href)
      if (url.origin !== window.location.origin) return // 外部リンク
      if (!url.pathname.startsWith(BASE)) return // サイト外

      e.preventDefault()
      if (url.pathname !== window.location.pathname) {
        window.history.pushState(null, '', url.pathname + url.search + url.hash)
        setRoute(currentRoute())
      } else if (url.hash) {
        // 同一ページ内のアンカー指定
        window.location.hash = url.hash
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('popstate', onPop)
      document.removeEventListener('click', onClick)
    }
  }, [])

  // 表示するページが切り替わった直後だけ、描画前に確実に最上部へスクロールする。
  // 同一ページ内のアンカー移動はブラウザのスムーズスクロールに任せる。
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
