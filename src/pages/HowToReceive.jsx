import { motion } from 'framer-motion'
import AnimatedCard from '../components/ui/AnimatedCard'
import ChatBot from '../components/ui/ChatBot'
import { Link } from 'react-router-dom'

const receiveSteps = [
  { icon: '📲', title: 'Share Your Number', detail: 'Give the sender your KURINGO registered phone number. That\'s your unique wallet address.' },
  { icon: '⏳', title: 'Wait for the Transfer', detail: 'Once the sender confirms the transfer, the money will arrive in your KURINGO wallet instantly.' },
  { icon: '🔔', title: 'Get Notified', detail: 'You\'ll receive an SMS and in-app notification the moment money arrives.' },
  { icon: '👀', title: 'Check Your Balance', detail: 'Open KURINGO and your new balance will be displayed on the home screen.' },
  { icon: '💸', title: 'Use or Withdraw', detail: 'Pay bills, buy airtime, or visit a KURINGO agent to withdraw cash in Dalasi.' },
]

export default function HowToReceive() {
  return (
    <div className="min-h-screen bg-[#0D1117] pt-[140px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <Link to="/" className="text-[#29B7F4] text-sm hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
         <h1 className="font-display text-5xl font-bold text-white mb-4">
  How to <span className="gradient-text"></span><br />
  <span className="gradient-text"> Receive Money</span>
</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Receiving money on KURINGO is even easier than sending. No action needed from you!
          </p>
        </motion.div>

        <div className="space-y-4">
          {receiveSteps.map((step, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="p-6">
              <div className="flex items-start gap-5">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C2242B]/80 to-[#C2242B] flex items-center justify-center font-display font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                  {i < receiveSteps.length - 1 && (
                    <div className="w-px h-6 bg-[#C2242B]/30" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Cash out info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl border border-[#29B7F4]/30 bg-[#29B7F4]/5"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏪</span>
            <div>
              <div className="text-[#29B7F4] font-semibold text-sm mb-1">Cash Out Anywhere</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Can't find an ATM? No problem. Visit any of KURINGO's 500+ agents in markets, shops, and service centers across The Gambia. From Serrekunda to Basse — we're everywhere.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <a
          
            href="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C2242B]/90 to-[#C2242B] text-white font-semibold rounded-2xl hover:opacity-90 transition-all hover:scale-105"
          >
            Get KURINGO Free →
          </a>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}