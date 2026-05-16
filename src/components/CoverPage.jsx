export default function CoverPage({ active, goTo }) {
  return (
    <div className={`page page-cover${active ? ' active' : ''}`}>
      <div className="cover-inner">

        <svg className="cover-illustration" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="220" height="220" rx="110" fill="#eee8d8"/>
          <circle cx="160" cy="52" r="22" fill="#d4c9a8"/>
          <circle cx="168" cy="46" r="18" fill="#eee8d8"/>
          <circle cx="60" cy="40" r="2" fill="#c8b99a"/>
          <circle cx="90" cy="28" r="1.5" fill="#c8b99a"/>
          <circle cx="130" cy="35" r="1.5" fill="#c8b99a"/>
          <circle cx="45" cy="70" r="1" fill="#c8b99a"/>
          <ellipse cx="110" cy="185" rx="95" ry="30" fill="#8b7355" opacity="0.25"/>
          <rect x="15" y="162" width="190" height="45" fill="#a89070" opacity="0.18"/>
          <polygon points="30,155 50,100 70,155" fill="#7a8c6e"/>
          <polygon points="20,155 42,108 64,155" fill="#5f7256"/>
          <polygon points="155,155 175,100 195,155" fill="#7a8c6e"/>
          <polygon points="150,155 170,108 190,155" fill="#5f7256"/>
          <polygon points="110,90 75,158 145,158" fill="#c9a87a"/>
          <polygon points="110,90 88,158 132,158" fill="#b5936a"/>
          <path d="M102,158 Q110,130 118,158" fill="#8b6b45"/>
          <line x1="110" y1="90" x2="110" y2="158" stroke="#a08050" strokeWidth="1" opacity="0.4"/>
          <ellipse cx="110" cy="172" rx="14" ry="4" fill="#8b7355" opacity="0.4"/>
          <path d="M104,172 Q107,158 110,162 Q113,155 116,172" fill="#e8894a" opacity="0.85"/>
          <path d="M107,172 Q109,162 110,165 Q111,160 113,172" fill="#f5b94a" opacity="0.9"/>
          <path d="M110,154 Q108,148 110,142 Q112,136 110,130" stroke="#c8b99a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>

        <div className="cover-title">
          <span className="title-sub">A weekend escape</span>
          <h1 className="title-main">
            Lofi Land<br />
            <span className="title-accent">Camping</span>
          </h1>
        </div>

        <div className="cover-date">
          <span className="line" />
          <span>May 30 – 31, 2026</span>
          <span className="line" />
        </div>

        <button className="btn-enter" onClick={() => goTo('main')}>
          查看旅遊計畫
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </div>
  )
}
