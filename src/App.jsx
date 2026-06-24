import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import ItemShowcase from './components/ItemShowcase.jsx'
import PaymentMethods from './components/PaymentMethods.jsx'
import TabSelector from './components/TabSelector.jsx'
import ProductList from './components/ProductList.jsx'
import BottomNav from './components/BottomNav.jsx'
import PurchaseModal from './components/PurchaseModal.jsx'
import { CURRENCIES, PRODUCTS_BY_CURRENCY } from './data/products.js'

export default function App() {
  const [activeCurrency, setActiveCurrency] = useState('subete')
  const [selected, setSelected] = useState(null)

  const currency = useMemo(
    () => CURRENCIES.find((c) => c.id === activeCurrency),
    [activeCurrency],
  )
  const products = PRODUCTS_BY_CURRENCY[activeCurrency] ?? []

  const handleConfirm = (product) => {
    // TODO: ここで決済プロバイダ（Stripe / PAY.JP / KOMOJU 等）の
    // チェックアウトセッションを作成してリダイレクトする。
    // 例: window.location.href = await createCheckout(product.id)
    alert(
      `「${currency.label} ${product.amount.toLocaleString('ja-JP')} point」\n` +
      `JPY ${product.price.toLocaleString('ja-JP')} の決済へ進みます。\n\n` +
      `（ここに決済プロバイダのチェックアウトを接続してください）`,
    )
    setSelected(null)
  }

  return (
    <div className="phone">
      <div className="screen">
        <Header />

        <main className="content">
          <ItemShowcase />
          <PaymentMethods />

          <TabSelector active={activeCurrency} onChange={setActiveCurrency} />

          <p className="currency-desc">{currency.desc}</p>

          <ProductList
            products={products}
            currencyLabel={currency.label}
            onPurchase={setSelected}
          />
        </main>

        <BottomNav />
      </div>

      <PurchaseModal
        product={selected}
        currencyLabel={currency.label}
        onClose={() => setSelected(null)}
        onConfirm={handleConfirm}
      />
    </div>
  )
}
