import { useState, useEffect } from 'react'

const API_URL =
  'https://api.open-meteo.com/v1/forecast' +
  '?latitude=24.37&longitude=120.82' +
  '&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode' +
  '&timezone=Asia/Taipei&start_date=2026-05-30&end_date=2026-05-31'

const WMO_MAP = {
  0:  { icon: '☀️',  label: '晴天' },
  1:  { icon: '🌤️', label: '大致晴朗' },
  2:  { icon: '⛅',  label: '局部多雲' },
  3:  { icon: '☁️',  label: '多雲' },
  45: { icon: '🌫️', label: '有霧' },
  48: { icon: '🌫️', label: '有霧' },
  51: { icon: '🌦️', label: '毛毛雨' },
  53: { icon: '🌦️', label: '毛毛雨' },
  55: { icon: '🌧️', label: '毛毛雨' },
  61: { icon: '🌧️', label: '小雨' },
  63: { icon: '🌧️', label: '中雨' },
  65: { icon: '🌧️', label: '大雨' },
  80: { icon: '🌦️', label: '陣雨' },
  81: { icon: '🌧️', label: '陣雨' },
  82: { icon: '⛈️', label: '大陣雨' },
  95: { icon: '⛈️', label: '雷雨' },
  99: { icon: '⛈️', label: '雷雨' },
}

function getWeather(code) {
  return WMO_MAP[code] ?? { icon: '🌡️', label: '未知' }
}

function getClothing(maxTemp, rainProb) {
  const clothes = maxTemp >= 28
    ? '短袖短褲'
    : maxTemp >= 24
    ? '短袖、薄外套備用'
    : '長袖外套'
  const rain = rainProb >= 50
    ? '☂️ 雨傘雨衣必備'
    : rainProb >= 30
    ? '☂️ 建議帶雨傘雨衣'
    : null
  return { clothes, rain }
}

const DAYS = ['5/30 週六', '5/31 週日']

export default function WeatherWidget() {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(json => {
        const d = json.daily
        setData([
          {
            date:  DAYS[0],
            max:   d.temperature_2m_max[0],
            min:   d.temperature_2m_min[0],
            rain:  d.precipitation_probability_max[0],
            code:  d.weathercode[0],
          },
          {
            date:  DAYS[1],
            max:   d.temperature_2m_max[1],
            min:   d.temperature_2m_min[1],
            rain:  d.precipitation_probability_max[1],
            code:  d.weathercode[1],
          },
        ])
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="weather-widget weather-loading">
      <span className="faq-loading-dot" />
      載入天氣中...
    </div>
  )

  if (!data) return null

  return (
    <div className="weather-widget">
      <p className="weather-title">📍 自然圈營區 天氣預報</p>
      <div className="weather-grid">
        {data.map(day => {
          const { icon, label } = getWeather(day.code)
          const { clothes, rain } = getClothing(day.max, day.rain)
          return (
            <div key={day.date} className="weather-card">
              <div className="weather-date">{day.date}</div>
              <div className="weather-icon">{icon}</div>
              <div className="weather-label">{label}</div>
              <div className="weather-temp">
                <span className="temp-max">{day.max}°</span>
                <span className="temp-sep">/</span>
                <span className="temp-min">{day.min}°</span>
              </div>
              <div className={`weather-rain ${day.rain >= 50 ? 'rain-high' : day.rain >= 30 ? 'rain-mid' : 'rain-low'}`}>
                💧 降雨 {day.rain}%
              </div>
              <div className="weather-clothes">
                👕 {clothes}
                {rain && <span className="weather-rain-warn"><br/>{rain}</span>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
