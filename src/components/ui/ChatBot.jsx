import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChat, HiX, HiPaperAirplane } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'

const responses = {
  send: "To send money with Kuringo: 1) Download the app, 2) Verify your ID (FCA KYC required), 3) Enter recipient number, 4) Choose amount and delivery rail, 5) Confirm with PIN. Same-day delivery!",
  receive: "Recipients in The Gambia can receive via: (1) Mobile wallet — Wave, AfriMoney, or QMoney; (2) Bank deposit — all major Gambian banks; (3) Cash pickup — JFIN agents nationwide.",
  register: "Download the Kuringo app, tap Sign Up, enter your phone number, verify with OTP, then submit a photo of your national ID. Required under UK FCA AML and KYC regulations.",
  fees: "Kuringo charges transparent, competitive fees with zero hidden charges. We beat the industry average of 8% send costs. You will always see the exact rate before confirming.",
  security: "Kuringo UK Ltd operates under UK Financial Services FCA regulations with full AML and KYC compliance, end-to-end encryption, and real-time transaction tracking.",
  rails: "Kuringo offers 3 payment rails: Rail 1 = Mobile Wallet (Wave, AfriMoney, QMoney). Rail 2 = Bank Transfer (all licensed Gambian banks). Rail 3 = Cash Pickup via JFIN agents.",
  markets: "Kuringo serves senders in the UK, France, Italy, Spain, and Germany — with a focus on the Soninke diaspora and broader West African communities.",
  default: "Great question! Kuringo is a cross-border fintech built for the African diaspora. Co-founded by Muhammad M. Jagana. For more help, visit any section of this site or contact Kuringo directly."
}

function getBotResponse(message) {
  const msg = message.toLowerCase()
  if (msg.includes('send')) return responses.send
  if (msg.includes('receiv')) return responses.receive
  if (msg.includes('register') || msg.includes('account') || msg.includes('sign')) return responses.register
  if (msg.includes('fee') || msg.includes('cost') || msg.includes('charge')) return responses.fees
  if (msg.includes('safe') || msg.includes('secure') || msg.includes('fca')) return responses.security
  if (msg.includes('rail') || msg.includes('wave') || msg.includes('jfin') || msg.includes('cash')) return responses.rails
  if (msg.includes('france') || msg.includes('italy') || msg.includes('country')) return responses.markets
  return responses.default
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I am the SASA Assistant. Ask me anything about Kuringo Money Transfer!" }
  ])
  const [input, setInput] = useState('')
  const { language } = useLanguage()

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    const botMsg = { from: 'bot', text: getBotResponse(input) }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#29B7F4] to-[#29B7F4] rounded-full flex items-center justify-center shadow-2xl animate-glow"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }}><HiX size={22} className="text-white" /></motion.div>
            : <motion.div key="chat" initial={{ rotate: 90 }} animate={{ rotate: 0 }}><HiChat size={22} className="text-white" /></motion.div>
          }
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-card rounded-3xl overflow-hidden shadow-2xl border border-[#29B7F4]/40"
          >
            <div className="bg-gradient-to-r from-[#29B7F4] to-[#29B7F4] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">SASA Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                    <span className="text-green-200 text-xs">
                      {language === 'soninke' ? 'Voice + Text Ready' : 'Online'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-[#0D1117]/80">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-gradient-to-br from-[#29B7F4] to-[#29B7F4] text-white rounded-br-sm'
                      : 'glass-card text-gray-300 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 bg-[#111827]/80">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about sending money..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#29B7F4]/50 transition-colors"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={sendMessage}
                  className="w-10 h-10 bg-gradient-to-br from-[#29B7F4] to-[#29B7F4] rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <HiPaperAirplane size={16} className="text-white rotate-90" />
                </motion.button>
              </div>
              <p className="text-gray-600 text-xs mt-2 text-center">
                AI upgrade coming soon
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
