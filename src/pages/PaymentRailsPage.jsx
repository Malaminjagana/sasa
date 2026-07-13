import PaymentRails from '../components/sections/PaymentRails'
import ChatBot from '../components/ui/ChatBot'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PaymentRailsPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] pt-24">
      <div className="text-center py-12 px-4">
        <Link to="/" className="text-[#29B7F4] text-sm hover:underline mb-4 inline-block">← Back to Home</Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          How Recipients <span className="gradient-text">Receive Money</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto"
        >
          Kuringo offers 3 delivery rails so every family in The Gambia and West Africa can receive funds, regardless of banking access.
        </motion.p>
      </div>
      <PaymentRails />
      <ChatBot />
    </div>
  )
}