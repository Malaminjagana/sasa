import { motion } from 'framer-motion'
import AnimatedCard from '../components/ui/AnimatedCard'
import ChatBot from '../components/ui/ChatBot'
import { Link } from 'react-router-dom'

const sendSteps = [
  { icon: '🔓', title: 'Open KURINGO App', detail: 'Launch the KURINGO app on your phone and log in with your PIN or fingerprint.' },
  { icon: '📤', title: 'Tap "Send Money"', detail: 'On the home screen, tap the green "Send Money" button.' },
  { icon: '📞', title: 'Enter Recipient Number', detail: "Type the recipient's KURINGO phone number or select from your contacts." },
  { icon: '💵', title: 'Enter Amount', detail: 'Type the amount in Dalasi (GMD) you want to send. The fee will show instantly.' },
  { icon: '📝', title: 'Add a Note (Optional)', detail: 'Add a short message like "For school fees" or "Market money" if you like.' },
  { icon: '✅', title: 'Confirm with PIN', detail: 'Review all details, then enter your 4-digit PIN to authorize the transfer.' },
  { icon: '🎉', title: 'Transfer Complete!', detail: 'The money arrives in the recipient\'s wallet in under 10 seconds. You both get a notification.' },
]

export default function HowToSend() {
  return (
    <div className="min-h-screen bg-[#0D1117] pt-[140px]">
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16">


        {/* Page header */}
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
  <span className="gradient-text">Send Money</span>
</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Sending money with KURINGO is quick and simple. Follow these steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4">
          {sendSteps.map((step, i) => (
            <AnimatedCard key={i} delay={i * 0.08} className="p-6">
              <div className="flex items-start gap-5">
                {/* Step number + icon */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#29B7F4] to-[#29B7F4] flex items-center justify-center font-display font-bold text-white">
                    {i + 1}
                  </div>
                  {i < sendSteps.length - 1 && (
                    <div className="w-px h-6 bg-[#29B7F4]/30" />
                  )}
                </div>

                {/* Content */}
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

        {/* Pro tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl border border-[#C2242B]/30 bg-[#C2242B]/5"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <div className="text-[#C2242B] font-semibold text-sm mb-1">Pro Tip</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Save your frequently used contacts in KURINGO for faster transfers. You can also schedule recurring sends — great for regular remittances to family.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#29B7F4] to-[#29B7F4] text-white font-semibold rounded-2xl hover:opacity-90 transition-all hover:scale-105"
          >
            Download KURINGO Now →
          </a>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}