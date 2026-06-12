import { motion } from 'framer-motion'
import AnimatedCard from '../ui/AnimatedCard'

const features = [
  {
    icon: '⚡',
    title: 'Same-Day Delivery',
    description: 'Send money that arrives the same day or next day. Bank transfers and wallet payments processed within minutes.',
    color: '#F4A72A',
    glow: 'rgba(244,167,42,0.2)',
  },
  {
    icon: '🔒',
    title: 'FCA Regulated',
    description: 'Kuringo UK Ltd operates under UK Financial Services regulations and the FCA. Full AML & KYC compliance — your money is protected.',
    color: '#12A876',
    glow: 'rgba(18,168,118,0.2)',
  },
  {
    icon: '💰',
    title: 'Zero Hidden Fees',
    description: 'Transparent pricing that beats traditional remittance providers. We charge far less than the 8%+ industry average.',
    color: '#60A5FA',
    glow: 'rgba(96,165,250,0.2)',
  },
  {
    icon: '🐚',
    title: 'Built by the Diaspora',
    description: 'Our name, Kuringo, means Cowrie Shell in Mandinka — a 3,000-year-old symbol of trust. Built by and for the African diaspora community.',
    color: '#F4A72A',
    glow: 'rgba(244,167,42,0.15)',
  },
  {
    icon: '🌍',
    title: 'Soninke & Multilingual',
    description: 'Serving the Soninke diaspora — Europe\'s most active remittance community — plus Gambians, Senegalese, Malians, and more. English & French supported.',
    color: '#F472B6',
    glow: 'rgba(244,114,182,0.2)',
  },
  {
    icon: '🏪',
    title: '3 Ways to Receive',
    description: 'Mobile wallets (Wave, AfriMoney, QMoney), direct bank deposits (all Gambian banks), or cash pickup via JFIN agents nationwide.',
    color: '#34D399',
    glow: 'rgba(52,211,153,0.2)',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-[#0D1117] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(10,110,78,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#12A876] text-sm font-semibold uppercase tracking-widest">Why KURINGO</span>
         <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4"> Why Choose <span className="gradient-text">Kuringo</span>
         </h2>
         <p className="text-gray-400 max-w-2xl mx-auto">Cross-border fintech built around the real needs of African diaspora communities — from Europe's cities to West Africa's homes.
          
         </p>

        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1} className="p-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: feature.glow }}
              >
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              <div
                className="mt-4 h-0.5 w-12 rounded-full"
                style={{ background: feature.color }}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}