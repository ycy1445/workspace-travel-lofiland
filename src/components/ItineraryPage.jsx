function BackButton({ goTo }) {
  return (
    <button className="btn-back" onClick={() => goTo('main')}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

function TimelineItem({ time, event, note }) {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-dot" />
        <span className="timeline-time">{time}</span>
      </div>
      <div className="timeline-content">
        <div className="timeline-event">{event}</div>
        {note && <div className="timeline-note">{note}</div>}
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
              time="11:00"
              event="🍽️ 午餐"
              note={
                <>
                  <span className="tag-prize" style={{ marginLeft: 0, marginRight: '0.4rem' }}>確定</span>
                  鵝肉擔
                  <a
                    href="https://maps.app.goo.gl/MLVFMy2ARwRUMy1a9"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    📍 Google Maps
                  </a>
                </>
              }
            />

            <TimelineItem
              time="13:00"
              event="🛒 採買補給"
              note={
                <>
                  全聯福利中心 卓蘭經國店
                  <a
                    href="https://maps.app.goo.gl/eXu7JN5V2pWa9J8Y9"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    📍 Google Maps
                  </a>
                  <br/>
                  泡麵・酒類飲品・冰塊・零食<br/>
                  <span style={{ color: 'var(--muted-sage)' }}>＋ 其他大家想帶去的物品</span>
                </>
              }
            />

            <TimelineItem
              time="14:00"
              event="🍵 迎賓茶飲點心"
              note={
                <>
                  抵達 自然圈營區
                  <a
                    href="https://maps.app.goo.gl/Xw7q1P6ewfLim3EN8"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    📍 Google Maps
                  </a>
                  <br/>
                  享用迎賓茶飲與點心
                </>
              }
            />

            <TimelineItem
              time="15:00"
              event="🏕️ Check In・安營"
              note="入住營地，搭帳篷、整理環境"
            />

            <TimelineItem
              time="下午"
              event="🎮 自由活動時間"
              note={
                <>
                  活動自由選擇，不限順序：<br/>
                  🪀 陀螺比賽 <span className="tag-prize">有獎品</span><br/>
                  🥊 拳上對決（阿賢 vs 昱翔）<br/>
                  🌊 憋氣比賽<br/>
                  ⚾ 樂樂棒傳接球<br/>
                  🎲 阿瓦隆<br/>
                  🪶 毽子<br/>
                  🚗 遙控車<br/>
                  📽️ 投影機 <span className="tag-note">需確認誰能帶</span><br/>
                  🍞 做麵包<br/>
                  ♨️ 溫泉池
                </>
              }
            />

            <TimelineItem
              time="晚上"
              event="🔥 晚餐烤肉"
              note="待補充詳細資訊"
            />

          </div>
        </div>

        {/* Day 2 */}
        <div className="day-block">
          <span className="day-label">DAY 2 · 5/31</span>
          <div className="timeline">

            <TimelineItem
              time="TBD"
              event="🌅 早晨活動"
              note="待補充詳細資訊"
            />

            <TimelineItem
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
