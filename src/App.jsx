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

function App() {
  const { showWelcomeModal } = useLanguage()
  return (
    <div className="min-h-screen flex flex-col">
      {/*showWelcomeModal && <WelcomeModal />*/}
      <Navbar />
      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-500 text-white">
  <div className="container mx-auto px-6 text-center">
    
    <h1 className="text-5xl font-bold mb-6">
      Connecting Families. Empowering Communities.
    </h1>

    <p className="text-xl max-w-3xl mx-auto mb-8">
      KURINGO is a trusted cross-border money transfer platform helping
      African diaspora communities in Europe and the United Kingdom send
      money quickly, securely, and affordably to families across The Gambia
      and West Africa.
    </p>

    <div className="flex justify-center gap-4">
      <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
        Download App
      </button>

      <button className="border border-white px-6 py-3 rounded-lg">
        Learn More
      </button>
    </div>
  </div>
</section>
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-send" element={<HowToSend />} />
          <Route path="/how-to-receive" element={<HowToReceive />} />
          <Route path="/payment-rails" element={<PaymentRailsPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App