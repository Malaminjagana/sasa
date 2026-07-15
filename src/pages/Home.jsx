import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import PaymentRails from '../components/sections/PaymentRails'
import Markets from '../components/sections/Markets'
import AppDownload from '../components/sections/AppDownload'
import FAQSection from '../components/sections/FAQ'
import ChatBot from '../components/ui/ChatBot'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0D1117] pt-[140px]">
        <AppDownload />
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <PaymentRails />
      <Markets />
      <FAQSection />
      <ChatBot />
    </>
  )
}