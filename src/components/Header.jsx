import { IconClose, IconMore } from './Icons.jsx'

export default function Header() {
  return (
    <header className="app-header">
      <button className="icon-btn" aria-label="閉じる" onClick={() => window.close()}>
        <IconClose />
      </button>
      <h1 className="app-title">白と黒</h1>
      <button className="icon-btn" aria-label="メニュー">
        <IconMore />
      </button>
    </header>
  )
}
