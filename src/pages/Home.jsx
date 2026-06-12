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
      <Hero />
      <Features />
      <HowItWorks />
      <PaymentRails />
      <Markets />
      <AppDownload />
      <FAQSection />
      <ChatBot />
    </>
  )
}