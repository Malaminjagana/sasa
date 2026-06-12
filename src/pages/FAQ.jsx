import FAQSection from '../components/sections/FAQ'
import ChatBot from '../components/ui/ChatBot'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] pt-24">
      <div className="text-center py-12 px-4">
        <Link to="/" className="text-[#12A876] text-sm hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
      </div>
      <FAQSection />
      <ChatBot />
    </div>
  )
}