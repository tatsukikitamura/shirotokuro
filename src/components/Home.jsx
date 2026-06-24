import { useState } from 'react'
import Hero from './Hero.jsx'
import PackageGrid from './PackageGrid.jsx'
import PaymentMethods from './PaymentMethods.jsx'
import OrderSummary from './OrderSummary.jsx'
import Features from './Features.jsx'
import PurchaseModal from './PurchaseModal.jsx'
import { SUBETE_PRODUCTS, CURRENCY_LABEL } from '../data/products.js'

export default function Home() {
  const [selectedId, setSelectedId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const paymentId = 'card' // 決済方法はクレジットカードのみ

  const products = SUBETE_PRODUCTS
  const selected = products.find((p) => p.id === selectedId) ?? null

  const handleConfirm = (product) => {
    // TODO: ここで決済プロバイダ（Stripe / PAY.JP / KOMOJU 等）の
    // チェックアウトセッションを作成してリダイレクトする。
    // 例: window.location.href = await createCheckout(product.id, paymentId)
    alert(
      `「${CURRENCY_LABEL} ${product.amount.toLocaleString('ja-JP')}」\n` +
      `JPY ${product.price.toLocaleString('ja-JP')} の決済へ進みます。\n\n` +
      `（ここに決済プロバイダのチェックアウトを接続してください）`,
    )
    setModalOpen(false)
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
            onCheckout={() => setModalOpen(true)}
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
    </>
  )
}
