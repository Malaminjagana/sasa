import { motion } from 'framer-motion'

const steps = [
  {
    step: '1',
    icon: '📲',
    title: 'Download Kuringo',
    description: 'Get the free Kuringo app. Available for Android and iOS. Setup takes under 2 minutes.',
  },
  {
    step: '2',
    icon: '🪪',
    title: 'Verify Your Identity',
    description: 'Register with your phone number and verify with a valid ID required under FCA AML & KYC regulations to keep your transfers safe.',
  },
  {
    step: '3',
    icon: '💳',
    title: 'Fund Your Transfer',
    description: 'Add money from your UK or European bank account. Competitive exchange rates, shown upfront no surprises.',
  },
  {
    step: '4',
    icon: '🌍',
    title: 'Choose Delivery Rail',
    description: 'Your recipient picks how to receive: mobile wallet (Wave, AfriMoney, QMoney), bank deposit, or cash pickup at a JFIN agent.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C2242B] text-sm font-semibold uppercase tracking-widest">Getting Started</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"> Up and running in <span className="gradient-text">4 steps</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Send money from the UK or Europe to The Gambia and West Africa in minutes. Simple, safe, and regulated.
            </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#29B7F4] via-[#C2242B] to-[#29B7F4] opacity-30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-[#29B7F4]/40 transition-colors">
                {/* Step number bubble */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#29B7F4] to-[#29B7F4] flex items-center justify-center font-display text-white font-bold text-lg mb-5 shadow-lg shadow-[#29B7F4]/30">
                  {step.step}
                </div>

                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}