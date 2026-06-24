import { IconArrowRight } from './Icons.jsx'
import subeteCard from '../assets/subete-card.png'

// ヒーローバナー
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <span className="hero__eyebrow">公式チャージストア</span>
          <h1 className="hero__title">
            <span className="accent">スベテ</span>を、
            <br />
            もっとお得に
            <br />
            チャージ。
          </h1>
          <p className="hero__lead">
            「白と黒」のゲーム内通貨スベテをかんたん2ステップでチャージ。
            主要ブランドのクレジットカードに対応し、
            お支払い後すぐにアカウントへ反映されます。
          </p>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">最大19%</div>
              <div className="hero__stat-label">ボーナス還元</div>
            </div>
            <div>
              <div className="hero__stat-num">即時</div>
              <div className="hero__stat-label">アカウント反映</div>
            </div>
            <div>
              <div className="hero__stat-num">4ブランド</div>
              <div className="hero__stat-label">主要カード対応</div>
            </div>
          </div>

          <a className="hero__cta" href="#charge">
            今すぐチャージする
            <IconArrowRight />
          </a>
        </div>

        <div className="hero__art">
          <div className="hero__photo">
            <span className="hero__photo-glow" />
            <img src={subeteCard} alt="スベテ カード" />
          </div>
          <div className="hero__photo-caption">
            <span className="hero__photo-name">スベテ</span>
            <span className="hero__photo-sub">SHIRO TO KURO</span>
          </div>
        </div>
      </div>
    </section>
  )
}
