import { useState } from 'react'

const CORRECT_PASSWORD = '20260530'

export default function PasswordGate({ onUnlock }) {
  const [input, setInput]   = useState('')
  const [shake, setShake]   = useState(false)
  const [error, setError]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem('unlocked', '1')
      onUnlock()
    } else {
      setError(true)
      setShake(true)
      setInput('')
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="gate-wrap">
      <div className={`gate-box${shake ? ' shake' : ''}`}>

        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect width="56" height="56" rx="16" fill="#eee8d8"/>
          <path d="M20 26v-6a8 8 0 1 1 16 0v6" stroke="#8b7355" strokeWidth="2" strokeLinecap="round"/>
          <rect x="14" y="26" width="28" height="18" rx="5" fill="#c9a87a"/>
          <circle cx="28" cy="35" r="3" fill="#8b6b45"/>
        </svg>

        <h2 className="gate-title">Lofi Land Camping</h2>
        <p className="gate-sub">請輸入密碼進入</p>

        <form className="gate-form" onSubmit={handleSubmit}>
          <input
            className={`gate-input${error ? ' gate-input-error' : ''}`}
            type="password"
            inputMode="numeric"
            placeholder="密碼"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false) }}
            autoFocus
          />
          {error && <p className="gate-error">密碼錯誤，請再試一次</p>}
          <button type="submit" className="gate-btn">進入</button>
        </form>

      </div>
    </div>
  )
}
