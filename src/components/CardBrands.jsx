// クレジットカード主要ブランドの公式ロゴ（flat / ブランドカラー）。
// バンドルを最小化するため、flat サブパスから必要なブランドのみ取り込む。
import {
  VisaIcon,
  MastercardIcon,
  JCBIcon,
  AmericanExpressIcon,
} from 'react-svg-credit-card-payment-icons/icons/flat'

export const CARD_BRANDS = [VisaIcon, MastercardIcon, JCBIcon, AmericanExpressIcon]
