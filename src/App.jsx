import { useState } from 'react'
import CoverPage from './components/CoverPage'
import MainPage from './components/MainPage'
import ItineraryPage from './components/ItineraryPage'
import NotesPage from './components/NotesPage'
import FAQPage from './components/FAQPage'

export default function App() {
  const [page, setPage] = useState('cover')

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
