import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Contatti from './pages/Contatti'
import Degenza from './pages/Degenza'
import Home from './pages/Home'
import LaClinica from './pages/LaClinica'
import LegalPage from './pages/Legal'
import Prevenzione from './pages/Prevenzione'
import Servizi from './pages/Servizi'
import Staff from './pages/Staff'

export default function App() {
  return (
    <div className="min-h-svh bg-cream text-ink">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-terracotta focus:px-4 focus:py-2 focus:text-cream"
      >
        Vai al contenuto
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/la-clinica" element={<LaClinica />} />
          <Route path="/ambulatorio" element={<LaClinica />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/degenza" element={<Degenza />} />
          <Route path="/prevenzione" element={<Prevenzione />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy" element={<LegalPage doc="privacy" />} />
          <Route path="/cookie" element={<LegalPage doc="cookie" />} />
          <Route path="/note-legali" element={<LegalPage doc="legalNotice" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
