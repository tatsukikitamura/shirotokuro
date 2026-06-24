import subeteCard from '../assets/subete-card.png'

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="support">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <div className="brand">
            <span className="brand__mark">
              <img src={subeteCard} alt="" />
            </span>
            <span className="brand__name">白と黒</span>
          </div>
          <p>
            「白と黒」公式チャージストア。ゲーム内通貨スベテを安全・かんたんに
            購入いただけます。
          </p>
        </div>

        <div className="footer-col">
          <h4>サービス</h4>
          <a href="#charge">スベテをチャージ</a>
          <a href="#features">安心ポイント</a>
          <a href="#faq">よくある質問</a>
          <a href="#support">お問い合わせ</a>
        </div>

        <div className="footer-col">
          <h4>規約・ポリシー</h4>
          <a href="#/terms">利用規約</a>
          <a href="#/charge-terms">チャージ規約</a>
          <a href="#/tokushoho">特定商取引法に基づく表記</a>
          <a href="#/privacy">プライバシーポリシー</a>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="wrap">
          <p>© 2026 白と黒 / スベテ チャージストア</p>
          <p>運営：白と黒 運営事務局</p>
        </div>
      </div>
    </footer>
  )
}
