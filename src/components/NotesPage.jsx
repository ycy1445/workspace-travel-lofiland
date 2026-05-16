export default function NotesPage({ active, goTo }) {
  const notes = [
    { num: '01', title: '攜帶物品', body: '待補充詳細清單' },
    { num: '02', title: '天氣準備', body: '待補充詳細說明' },
    { num: '03', title: '安全守則', body: '待補充詳細說明' },
    { num: '04', title: '重要提醒', body: '待補充詳細說明' },
  ]

  return (
    <div className={`page page-sub${active ? ' active' : ''}`}>
      <div className="sub-inner">

        <div className="sub-header">
          <button className="btn-back" onClick={() => goTo('main')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="sub-title">注意事項</h2>
        </div>

        <div className="notes-list">
          {notes.map(n => (
            <div key={n.num} className="note-item">
              <span className="note-num">{n.num}</span>
              <div className="note-text">
                <strong>{n.title}</strong><br/>{n.body}
              </div>
            </div>
          ))}
        </div>

        <p className="page-stamp">✦ lofi land · 2026 ✦</p>
      </div>
    </div>
  )
}
