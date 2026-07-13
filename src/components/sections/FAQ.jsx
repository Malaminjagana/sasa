import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    q: 'What is Kuringo?',
    a: 'Kuringo is a cross-border fintech company built for the African diaspora in Europe and the UK. We make it fast, affordable, and safe to send money from the UK or Europe to The Gambia and West Africa. Our name means Cowrie Shell in Mandinka — a symbol of trust and exchange used across Africa for over 3,000 years.',
  },
  {
    q: 'Who are Kuringo\'s legal entities?',
    a: 'Kuringo operates through two entities: Kuringo UK Ltd (United Kingdom), which handles European and UK operations under FCA-aligned regulations, and Kuringo Company (Gambia), which manages West African operations on the ground.',
  },
  {
    q: 'How fast are transfers?',
    a: 'Mobile wallet transfers (Wave, AfriMoney, QMoney) are typically instant. Bank account deposits are same-day or next-day depending on the recipient\'s bank. Cash pickup via JFIN agents is available as soon as the transfer is confirmed.',
  },
  {
    q: 'What are Kuringo\'s fees?',
    a: 'Kuringo charges competitive, fully transparent rates with zero hidden fees. We beat the industry average of 8%+ send costs. You will always see the exact fee and exchange rate before you confirm a transfer.',
  },
  {
    q: 'How can recipients in The Gambia collect their money?',
    a: 'Three ways: (1) Mobile Wallet — directly into Wave, AfriMoney, or QMoney; (2) Bank Transfer — into any licensed Gambian bank including Trust Bank, GTBank, Access Bank, Ecobank, and more; (3) Cash Pickup — at JFIN (J-Financial Services) agents or affiliated bureaux across Banjul, the Greater Banjul Area, and upcountry.',
  },
  {
    q: 'Is Kuringo regulated?',
    a: 'Yes. Kuringo UK Ltd operates in compliance with UK Financial Services regulations (FCA). We follow full AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements. All transfers use end-to-end encryption and real-time transaction tracking.',
  },
  {
    q: 'Which countries does Kuringo serve?',
    a: 'Senders: UK, France, Italy, Spain, and Germany (with more markets coming). Recipients: The Gambia and West Africa broadly, including Senegal, Mali, and more.',
  },
  {
    q: 'Does Kuringo support Soninke speakers?',
    a: 'Yes! Kuringo specifically designed Phase 1 of its expansion around the Soninke diaspora — Europe\'s most active per-capita remittance community. The SASA platform includes a Soninke voice-guided experience to ensure language is never a barrier.',
  },
  {
    q: 'How do I become a Kuringo agent or ambassador?',
    a: 'Kuringo offers Community Ambassadors (introducing Kuringo within your network), Agent Network roles (assisting customers in select cities), Association Partnerships (for Soninke, Gambian, and West African community groups), and a Referral Programme where every verified referral earns a reward.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-medium pr-4">{item.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#29B7F4] flex-shrink-0"
        >
          <HiChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C2242B] text-sm font-semibold uppercase tracking-widest">Got Questions?</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to know about KURINGO. Can't find your answer? Chat with our assistant.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}