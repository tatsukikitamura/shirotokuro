import { IconArrowRight, IconPuzzle, IconStar } from './Icons.jsx'
import kuuhakusha from '../assets/kuuhakusha.png'
import { to } from '../routing.js'

// ============================================================
// 「白と黒」LP（トップページ）
// パズル × 物語アドベンチャーの世界観を伝えるランディング。
// 決済（チャージ）ページは #/charge に分離。
// ============================================================

const STEPS = [
  {
    no: '01',
    title: 'パズルを解く',
    text: '断片を繋ぎ、欠けた形を修復し、止まった時間に意味を与えていく。',
  },
  {
    no: '02',
    title: '空白が満ちる',
    text: '言葉が増え、感情がにじみ、あなたと空白者の距離が縮まっていく。',
  },
  {
    no: '03',
    title: '一面を知る',
    text: 'やがてあなたは出会う。彼らの、まだ誰も見たことのない一面に。',
  },
]

export default function Landing() {
  return (
    <>
      {/* ヒーロー */}
      <section className="lp-hero" id="top">
        <div
          className="lp-hero__bg"
          style={{ backgroundImage: `url(${kuuhakusha})` }}
          aria-hidden="true"
        />
        <div className="lp-hero__scrim" aria-hidden="true" />
        <div className="wrap lp-hero__inner">
          <span className="lp-eyebrow">PUZZLE × STORY ADVENTURE</span>
          <h1 className="lp-hero__title">白と黒</h1>
          <p className="lp-hero__tagline">空白を、満たしていく物語。</p>
          <p className="lp-hero__lead">
            パズルの中に閉じ込められた存在――「空白者（くうはくしゃ）」。
            <br />
            その白い空白に触れられるのは、特別な力を持つあなただけ。
          </p>
          <div className="lp-cta-row">
            <a className="lp-btn lp-btn--light" href="#story">
              物語を知る
              <IconArrowRight />
            </a>
            <a className="lp-btn lp-btn--outline" href={to('charge')}>
              スベテをチャージ
            </a>
          </div>
        </div>
        <a className="lp-scroll" href="#story" aria-label="下へスクロール">
          <span className="lp-scroll__line" />
        </a>
      </section>

      {/* 世界観の導入 */}
      <section className="lp-world" id="story">
        <div className="wrap lp-narrow">
          <p className="lp-kicker">― THE WORLD ―</p>
          <p className="lp-lede">
            この世界には、
            <br />
            <em>パズルの中に閉じ込められた存在</em>がいる。
          </p>
          <p className="lp-body">
            彼らは「空白者（くうはくしゃ）」と呼ばれ、時間も、感情も、出口もない
            白い空白の中で、ただ静かに時を過ごしている。
          </p>
        </div>
      </section>

      {/* 空白者とは */}
      <section className="lp-concept">
        <div className="wrap lp-concept__grid">
          <figure className="lp-concept__media">
            <img src={kuuhakusha} alt="空白者" />
            <figcaption className="lp-concept__rating" aria-hidden="true">
              <IconStar size={18} />
              <IconStar size={18} />
              <IconStar size={18} />
              <IconStar size={18} />
              <IconStar size={18} />
            </figcaption>
          </figure>
          <div className="lp-concept__text">
            <p className="lp-kicker lp-kicker--ink">空白者 / KUUHAKUSHA</p>
            <h2 className="lp-h2">
              白い空白に
              <br />
              閉じ込められた者たち。
            </h2>
            <p className="lp-body lp-body--ink">
              その空白に触れられるのは、特別な能力を持つ者だけ。
              断片を繋ぎ、欠けた形を修復し、止まった時間に意味を与えられる者――。
            </p>
            <p className="lp-body lp-body--ink">
              そして、その人物は <strong>あなた</strong> だ。
            </p>
          </div>
        </div>
      </section>

      {/* 救済者＝あなた */}
      <section className="lp-savior">
        <div className="wrap lp-narrow lp-center">
          <span className="lp-eyebrow">そして――</span>
          <h2 className="lp-savior__title">
            その人物は、<span className="lp-accent">あなた</span>だ。
          </h2>
          <p className="lp-body">
            プレイヤーは “救済者” としてパズルの世界に入り、
            空白の中に閉じ込められた空白者と、まっすぐに向き合う。
          </p>
        </div>
      </section>

      {/* 遊び方 / ゲームループ */}
      <section className="lp-loop" id="how">
        <div className="wrap">
          <div className="lp-section-head lp-center">
            <span className="lp-loop__mark" aria-hidden="true">
              <IconPuzzle size={30} />
            </span>
            <p className="lp-kicker lp-kicker--ink">HOW TO PLAY</p>
            <h2 className="lp-h2">
              パズルを解くたび、
              <br />
              空白は満たされていく。
            </h2>
          </div>
          <ol className="lp-steps">
            {STEPS.map(({ no, title, text }) => (
              <li className="lp-step" key={no}>
                <span className="lp-step__no">{no}</span>
                <h3 className="lp-step__title">{title}</h3>
                <p className="lp-step__text">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* クロージング CTA */}
      <section className="lp-cta">
        <div
          className="lp-cta__bg"
          style={{ backgroundImage: `url(${kuuhakusha})` }}
          aria-hidden="true"
        />
        <div className="lp-cta__scrim" aria-hidden="true" />
        <div className="wrap lp-narrow lp-center lp-cta__inner">
          <h2 className="lp-cta__title">
            やがてあなたは知ることになる。
            <br />
            彼らの、まだ見たことのない一面を。
          </h2>
          <p className="lp-cta__sub">
            救済の旅に必要なゲーム内通貨「スベテ」は、公式ストアでかんたんにチャージできます。
          </p>
          <div className="lp-cta-row lp-cta-row--center">
            <a className="lp-btn lp-btn--light" href={to('charge')}>
              スベテをチャージ
              <IconArrowRight />
            </a>
            <a className="lp-btn lp-btn--outline" href="#top">
              トップへ戻る
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
