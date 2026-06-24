import { useState, useEffect } from 'react'
import Hero from './Hero.jsx'
import PackageGrid from './PackageGrid.jsx'
import PaymentMethods from './PaymentMethods.jsx'
import OrderSummary from './OrderSummary.jsx'
import Features from './Features.jsx'
import PurchaseModal from './PurchaseModal.jsx'
import PurchaseResultModal from './PurchaseResultModal.jsx'
import { SUBETE_PRODUCTS, CURRENCY_LABEL } from '../data/products.js'
import { isLoggedIn } from '../auth.js'
import { navigate } from '../routing.js'

// 未ログインで購入しようとした際に、選択中パッケージを一時保持するキー。
// ログイン後にチャージへ戻った時、同じ金額を選択済みの状態に復元する。
const PENDING_KEY = 'stk_pending_pkg'

// デモ用の結果判定。?result=error で失敗ポップアップ、それ以外は成功を表示する。
// 本番では決済プロバイダのコールバック結果（成功/失敗）に置き換える。
function demoOutcome() {
  const r = new URLSearchParams(window.location.search).get('result')
  return r === 'error' ? 'error' : 'success'
}

// 注文番号（デモ用）。本番は決済システムが採番したIDを使う。
function makeOrderId() {
  const d = new Date()
  const ymd =
    `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}` +
    `${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase()
  return `STK-${ymd}-${rand}`
}

export default function Home() {
  const authed = isLoggedIn()
  // ログイン後にチャージへ戻ってきた場合、選択していたパッケージを復元する。
  // 初期化関数は副作用なし（StrictModeの二重実行に備え、消去は useEffect 側で行う）。
  const [selectedId, setSelectedId] = useState(() => {
    try {
      return authed ? sessionStorage.getItem(PENDING_KEY) : null
    } catch {
      return null
    }
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [result, setResult] = useState(null) // { status: 'success'|'error', orderId }
  const paymentId = 'card' // 決済方法はクレジットカードのみ

  // 復元に使った一時保持は破棄する（次回以降は自動選択しない）。
  useEffect(() => {
    try {
      sessionStorage.removeItem(PENDING_KEY)
    } catch {
      /* noop */
    }
  }, [])

  const products = SUBETE_PRODUCTS
  const selected = products.find((p) => p.id === selectedId) ?? null

  // 購入手続きへ。未ログインなら購入させず、選択中の金額を保持してログインへ誘導する。
  const handleCheckout = () => {
    if (!authed) {
      try {
        if (selectedId) sessionStorage.setItem(PENDING_KEY, selectedId)
      } catch {
        /* noop */
      }
      navigate('login?redirect=charge')
      return
    }
    setModalOpen(true)
  }

  const handleConfirm = () => {
    // TODO: ここで決済プロバイダ（Stripe / PAY.JP / KOMOJU 等）の
    // チェックアウトセッションを作成・実行し、その結果を受け取る。
    // デモでは確認モーダルを閉じ、結果ポップアップを表示する。
    setModalOpen(false)
    const status = demoOutcome()
    setResult({ status, orderId: status === 'success' ? makeOrderId() : null })
  }

  const closeResult = () => setResult(null)
  const retryPurchase = () => {
    setResult(null)
    setModalOpen(true)
  }

  return (
    <>
      <Hero />

      <main className="main" id="charge">
        <div className="wrap checkout">
          <div className="checkout__main">
            <section className="step">
              <div className="step__head">
                <span className="step__num">1</span>
                <h2 className="step__title">チャージ金額を選ぶ</h2>
                <span className="step__hint">お好きなパッケージをタップ</span>
              </div>
              <PackageGrid
                products={products}
                currencyLabel={CURRENCY_LABEL}
                selectedId={selectedId}
                onSelect={(p) => setSelectedId(p.id)}
              />
            </section>

            <section className="step">
              <div className="step__head">
                <span className="step__num">2</span>
                <h2 className="step__title">お支払い方法</h2>
                <span className="step__hint">主要カードブランドに対応</span>
              </div>
              <PaymentMethods />
            </section>
          </div>

          <OrderSummary
            currencyLabel={CURRENCY_LABEL}
            product={selected}
            paymentId={paymentId}
            authed={authed}
            onCheckout={handleCheckout}
          />
        </div>
      </main>

      <Features />

      <PurchaseModal
        open={modalOpen}
        product={selected}
        currencyLabel={CURRENCY_LABEL}
        paymentId={paymentId}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
      />

      <PurchaseResultModal
        open={Boolean(result)}
        status={result?.status}
        product={selected}
        currencyLabel={CURRENCY_LABEL}
        orderId={result?.orderId}
        onClose={closeResult}
        onRetry={retryPurchase}
      />
    </>
  )
}
