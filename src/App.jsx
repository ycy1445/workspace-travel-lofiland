import { useState } from 'react'
import PasswordGate from './components/PasswordGate'
import CoverPage from './components/CoverPage'
import MainPage from './components/MainPage'
import ItineraryPage from './components/ItineraryPage'
import NotesPage from './components/NotesPage'
import FAQPage from './components/FAQPage'

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('unlocked') === '1'
  )
  const [page, setPage] = useState('cover')

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div className="app">
      <CoverPage     active={page === 'cover'}     goTo={setPage} />
      <MainPage      active={page === 'main'}      goTo={setPage} />
      <ItineraryPage active={page === 'itinerary'} goTo={setPage} />
      <NotesPage     active={page === 'notes'}     goTo={setPage} />
      <FAQPage       active={page === 'faq'}       goTo={setPage} />
    </div>
  )
}
