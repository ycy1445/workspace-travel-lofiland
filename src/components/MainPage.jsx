import WeatherWidget from './WeatherWidget'

const ArrowIcon = () => (
  <svg className="card-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function MainPage({ active, goTo }) {
  return (
    <div className={`page page-main${active ? ' active' : ''}`}>
      <div className="main-inner">

        <div className="main-header">
          <span className="main-header-title">Lofi Land Camping</span>
          <span className="main-header-date">5/30 – 5/31</span>
        </div>

        <p className="section-label">主要功能</p>

        {/* 行程安排：填滿中間空間 */}
        <div className="menu-card menu-card-primary" onClick={() => goTo('itinerary')}>
          <div className="card-icon icon-itinerary">🏕️</div>
          <div className="card-content">
            <div className="card-title">行程安排</div>
            <div className="card-desc">兩天一夜完整時間表<br/>集合地點・活動・用餐</div>
          </div>
          <ArrowIcon />
        </div>

        <WeatherWidget />

        {/* 注意事項 + FAQ：固定在底部 */}
        <div className="menu-row">
          <div className="menu-card menu-card-sm" onClick={() => goTo('notes')}>
            <div className="card-icon icon-notes">📋</div>
            <div className="card-title">注意事項</div>
            <div className="card-desc-sm">攜帶物品・安全守則</div>
          </div>

          <div className="menu-card menu-card-sm" onClick={() => goTo('faq')}>
            <div className="card-icon icon-faq">💬</div>
            <div className="card-title">FAQ</div>
            <div className="card-desc-sm">常見問題解答</div>
          </div>
        </div>

        <p className="main-stamp">✦ lofi land · 2026 ✦</p>
      </div>
    </div>
  )
}
