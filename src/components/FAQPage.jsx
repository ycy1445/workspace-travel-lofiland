import { useState, useEffect } from 'react'
import { APPS_SCRIPT_URL } from '../config'

const IS_CONFIGURED = APPS_SCRIPT_URL !== 'YOUR_APPS_SCRIPT_URL_HERE'

const ChevronIcon = () => (
  <svg className="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <div className="faq-q" onClick={onToggle}>
        <span className="faq-q-text">{faq.question}</span>
        <ChevronIcon />
      </div>
      <div className="faq-a">
        <div className="faq-a-inner">
          {faq.answer || <em style={{ opacity: 0.6 }}>答覆整理中，敬請期待...</em>}
        </div>
      </div>
    </div>
  )
}

export default function FAQPage({ active, goTo }) {
  const [faqs, setFaqs] = useState([])
  const [openId, setOpenId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [question, setQuestion] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!active || !IS_CONFIGURED) {
      setLoading(false)
      return
    }

    const fetchFAQs = async () => {
      try {
        const res = await fetch(APPS_SCRIPT_URL)
        const data = await res.json()
        setFaqs(data)
      } catch (e) {
        console.error('FAQ fetch error:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchFAQs()
    const interval = setInterval(fetchFAQs, 15000)
    return () => clearInterval(interval)
  }, [active])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim() || submitting || !IS_CONFIGURED) return

    setSubmitting(true)
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ question: question.trim() }),
      })
    } catch {}

    setSubmitted(true)
    setQuestion('')
    setSubmitting(false)
  }

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <div className={`page page-sub${active ? ' active' : ''}`}>
      <div className="sub-inner">

        <div className="sub-header">
          <button className="btn-back" onClick={() => goTo('main')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="sub-title">FAQ</h2>
        </div>

        {/* FAQ List */}
        {loading ? (
          <p className="faq-loading">載入中...</p>
        ) : faqs.length === 0 ? (
          <p className="faq-empty">
            {IS_CONFIGURED ? '目前還沒有 FAQ，歡迎在下方提問！' : '尚未連接 Google Sheets，請先設定 APPS_SCRIPT_URL。'}
          </p>
        ) : (
          <div className="faq-list">
            {faqs.map(faq => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        )}

        {/* Submit Form */}
        {IS_CONFIGURED && (
          <>
            <div className="faq-divider" />
            <p className="faq-submit-label">提出你的問題</p>

            {submitted ? (
              <div className="faq-success">
                <span>✓</span>
                <span>問題已送出！主辦人整理後會更新在上方。</span>
              </div>
            ) : (
              <form className="faq-form" onSubmit={handleSubmit}>
                <textarea
                  className="faq-input"
                  rows={3}
                  placeholder="輸入你想問的問題..."
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                />
                <button
                  type="submit"
                  className="faq-submit-btn"
                  disabled={!question.trim() || submitting}
                >
                  {submitting ? '送出中...' : '送出問題'}
                </button>
              </form>
            )}
          </>
        )}

        <p className="page-stamp">✦ lofi land · 2026 ✦</p>
      </div>
    </div>
  )
}
