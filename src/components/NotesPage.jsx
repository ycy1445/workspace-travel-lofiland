const notes = [
  {
    num: '01',
    title: '🌿 園區規定',
    items: [
      '農場屬於戶外空間，全區禁菸；停車場設有吸菸區',
      '農場備有停車場，僅供客人車輛停放，免費使用',
      '車輛因天災或相關損傷，農場不負相關責任',
    ],
  },
  {
    num: '02',
    title: '🎒 自備用品',
    items: [
      '圈內帳篷有移動式冷氣，晚上睡覺記得別踢被子',
      '需自備個人盥洗用具（牙膏、牙刷、毛巾、浴巾）',
      '圈內提供兩支吹風機、沐浴乳、洗髮精',
      '若需野餐墊、泳圈打氣機請自備',
      '溫泉水質為碳酸氫鈉泉，建議穿著泳衣',
    ],
  },
  {
    num: '03',
    title: '🍽️ 餐具提供',
    items: [
      '碗、盤、叉子、湯匙（需要筷子請自備）',
      '附簡易刀具、砧板、菜瓜布、洗碗精',
      '園區提供環保鋼杯，請勿攜帶離場',
    ],
  },
  {
    num: '04',
    title: '✨ 仙女棒 & 煙火',
    items: [
      '使用完仙女棒請集中放在圈內炭桶中',
      '請勿於園區施放煙火、拉炮、大量氣球',
    ],
  },
  {
    num: '05',
    title: '⚡ 安全用電',
    items: [
      '請勿同時在廁所使用吹風機',
      '請勿將吹風機帶入帳內使用，以免跳電',
    ],
  },
  {
    num: '06',
    title: '🐾 毛寵與動物',
    items: [
      '農場為友善毛寵場域，且為半開放式空間，若被毛寵打擾請見諒',
      '農場鄰近有浪貓浪狗，請勿餵養或觸摸',
      '如受到影響請告知吧台工作人員協助驅趕',
    ],
  },
  {
    num: '07',
    title: '🕒 Check In / Out',
    items: [
      '入圈時間：下午 3:30　／　退圈時間：早上 11:00',
      '禁止使用設備唱歌或播放 DJ',
      '晚上 11 點後寧靜時間：關閉音響、降低談話音量，不可打麻將、玩骰子',
    ],
  },
  {
    num: '08',
    title: '🔒 門禁管制',
    items: [
      '農場謝絕參觀',
      '晚間 18:00 後園區大門關閉',
      '夜間 22:00 ～ 早上 09:00 大門上鎖，禁止出入',
      '若有訪客前來，請提前通知人數（將有部分收費及配套）',
    ],
  },
]

export default function NotesPage({ active, goTo }) {
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
                <strong>{n.title}</strong>
                <ul className="note-ul">
                  {n.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="page-stamp">✦ lofi land · 2026 ✦</p>
      </div>
    </div>
  )
}
