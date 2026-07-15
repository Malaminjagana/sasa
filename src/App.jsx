import { Routes, Route } from 'react-router-dom'
import { useLanguage } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WelcomeModal from './components/ui/WelcomeModal'
import Home from './pages/Home'
import HowToSend from './pages/HowToSend'
import HowToReceive from './pages/HowToReceive'
import FAQPage from './pages/FAQ'
import PaymentRailsPage from './pages/PaymentRailsPage'
import SoninkeAssistant from './pages/SoninkeAssistant'

function App() {
  const { showWelcomeModal } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      {showWelcomeModal && <WelcomeModal />}
      <Navbar />
      <main className="flex-1 pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-send" element={<HowToSend />} />
          <Route path="/how-to-receive" element={<HowToReceive />} />
          <Route path="/payment-rails" element={<PaymentRailsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/soninke-assistant" element={<SoninkeAssistant />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App