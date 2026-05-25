function BackButton({ goTo }) {
  return (
    <button className="btn-back" onClick={() => goTo('main')}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

function TimelineItem({ time, event, note, theme = 'default' }) {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <div className={`timeline-dot dot-${theme}`} />
        <span className="timeline-time">{time}</span>
      </div>
      <div className="timeline-content">
        <div className={`timeline-card card-${theme}`}>
          <div className="timeline-event">{event}</div>
          {note && <div className="timeline-note">{note}</div>}
        </div>
      </div>
    </div>
  )
}

export default function ItineraryPage({ active, goTo }) {
  return (
    <div className={`page page-sub${active ? ' active' : ''}`}>
      <div className="sub-inner">

        <div className="sub-header">
          <BackButton goTo={goTo} />
          <h2 className="sub-title">行程安排</h2>
        </div>

        {/* Day 1 */}
        <div className="day-block">
          <span className="day-label">DAY 1 · 5/30</span>
          <div className="timeline">

            <TimelineItem
              theme="lunch"
              time="11:00"
              event="🍽️ 午餐"
              note={
                <>
                  <span className="tag-prize" style={{ marginLeft: 0, marginRight: '0.4rem' }}>確定</span>
                  鵝肉擔
                  <a href="https://maps.app.goo.gl/MLVFMy2ARwRUMy1a9" target="_blank" rel="noreferrer" className="map-link">
                    📍 Google Maps
                  </a>
                </>
              }
            />

            <TimelineItem
              theme="shop"
              time="13:00"
              event="🛒 採買補給"
              note={
                <>
                  全聯福利中心 卓蘭經國店
                  <a href="https://maps.app.goo.gl/eXu7JN5V2pWa9J8Y9" target="_blank" rel="noreferrer" className="map-link">
                    📍 Google Maps
                  </a>
                  <br/>
                  泡麵・酒類飲品・冰塊・零食<br/>
                  <span style={{ color: 'var(--muted-sage)' }}>＋ 其他大家想帶去的物品</span>
                </>
              }
            />

            <TimelineItem
              theme="welcome"
              time="14:00"
              event="🍵 迎賓茶飲點心"
              note={
                <>
                  抵達 自然圈營區
                  <a href="https://maps.app.goo.gl/Xw7q1P6ewfLim3EN8" target="_blank" rel="noreferrer" className="map-link">
                    📍 Google Maps
                  </a>
                  <br/>
                  享用迎賓茶飲與點心
                </>
              }
            />

            <TimelineItem
              theme="checkin"
              time="15:00"
              event="🏕️ Check In・安營"
              note="入住營地，搭帳篷、整理環境"
            />

            <TimelineItem
              theme="activity"
              time="下午"
              event="🎮 自由活動時間"
              note={
                <>
                  活動自由選擇，不限順序：
                  <div className="note-grid">
                    <span>🪀 陀螺比賽 <span className="tag-prize">有獎品</span></span>
                    <span>🥊 拳上對決（阿賢 vs 昱翔）</span>
                    <span>🌊 憋氣比賽</span>
                    <span>⚾ 樂樂棒傳接球</span>
                    <span>🎲 阿瓦隆</span>
                    <span>🪶 毽子</span>
                    <span>🚗 遙控車</span>
                    <span>📽️ 投影機 <span className="tag-prize">已租到</span></span>
                    <span>🍞 做麵包</span>
                    <span>♨️ 溫泉池</span>
                  </div>
                </>
              }
            />

            <TimelineItem
              theme="dinner"
              time="晚上"
              event="🔥 晚餐烤肉"
              note={
                <>
                  <div className="bbq-grid">
                    <div className="bbq-section">
                      <span className="bbq-label">🥩 肉類</span>
                      牛梅花・板腱牛<br/>
                      橙香戰斧豬・梅花豬肉片<br/>
                      紐奧良雞翅・南洋雞腿排
                    </div>
                    <div className="bbq-section">
                      <span className="bbq-label">🦐 海鮮</span>
                      鱸魚（洋蔥／干貝粉／椒鹽／番茄）<br/>
                      蝦子・透抽
                    </div>
                    <div className="bbq-section">
                      <span className="bbq-label">🥬 蔬菜湯</span>
                      山東大白菜・當季綜合蔬菜<br/>
                      和風蔬菜湯底（6人起兩壺）
                    </div>
                  </div>
                  <div className="bbq-note">
                    食材依人數準備，份量非常足夠。大胃王建議另外加點 😄<br/>
                    <span className="bbq-warn">⚠️ 不吃牛可統一換成雞肉，無法單獨更換 1 人份</span>
                  </div>
                </>
              }
            />

          </div>
        </div>

        {/* Day 2 */}
        <div className="day-block">
          <span className="day-label">DAY 2 · 5/31</span>
          <div className="timeline">

            <TimelineItem
              theme="morning"
              time="TBD"
              event="🌅 早晨活動"
              note="待補充詳細資訊"
            />

            <TimelineItem
              theme="checkout"
              time="TBD"
              event="🧹 收拾・賦歸"
              note="待補充詳細資訊"
            />

          </div>
        </div>

        <p className="page-stamp">✦ lofi land · 2026 ✦</p>
      </div>
    </div>
  )
}
