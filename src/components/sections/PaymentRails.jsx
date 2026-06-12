import { motion } from 'framer-motion'
import AnimatedCard from '../ui/AnimatedCard'

const rails = [
  {
    number: '01',
    title: 'Mobile Wallet',
    subtitle: 'Instant delivery into a mobile money wallet',
    color: '#12A876',
    glow: 'rgba(18,168,118,0.15)',
    icon: '📱',
    providers: [
      {
        name: 'Wave',
        detail: 'Leading mobile wallet in Gambia & West Africa. Low fees, wide merchant acceptance, instant settlement.',
      },
      {
        name: 'AfriMoney',
        detail: 'Trusted across Gambia & Sierra Leone. Serves banked and unbanked recipients alike.',
      },
      {
        name: 'QMoney',
        detail: 'Gambian digital wallet for straightforward mobile-based money management.',
      },
    ],
  },
  {
    number: '02',
    title: 'Bank Transfer',
    subtitle: 'Direct deposit into any licensed bank in The Gambia',
    color: '#60A5FA',
    glow: 'rgba(96,165,250,0.15)',
    icon: '🏦',
    providers: [
      {
        name: 'Full Bank Coverage',
        detail: 'Trust Bank, GTBank, Access Bank, First International Bank, Ecobank, AGIB, Zenith Bank, FBN Bank, Vista Bank and more.',
      },
      {
        name: 'Best For',
        detail: 'Professionals, business owners, and families managing larger or recurring transfers.',
      },
    ],
  },
  {
    number: '03',
    title: 'Cash Pickup',
    subtitle: 'Over-the-counter collection via JFIN & affiliates nationwide',
    color: '#F4A72A',
    glow: 'rgba(244,167,42,0.15)',
    icon: '🏪',
    providers: [
      {
        name: 'J-Financial Services (JFIN)',
        detail: 'Primary cash disbursement partner. Established infrastructure and deep community trust across The Gambia.',
      },
      {
        name: 'Affiliated Bureaux',
        detail: 'Licensed partners across Banjul, Greater Banjul Area, and upcountry — true last-mile access. Valid ID + reference code required.',
      },
    ],
  },
]

export default function PaymentRails() {
  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#12A876] text-sm font-semibold uppercase tracking-widest">Delivery Options</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            3 Ways to <span className="gradient-text">Receive Money</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every family can access their funds — whether they use a smartphone, a bank account, or need cash in hand.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {rails.map((rail, i) => (
            <AnimatedCard key={rail.number} delay={i * 0.15} className="p-8">
              {/* Rail header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-3">{rail.icon}</div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: rail.color }}
                  >
                    Rail {rail.number}
                  </span>
                  <h3 className="text-white font-display font-bold text-2xl mt-1">{rail.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 italic">{rail.subtitle}</p>
                </div>
              </div>

              {/* Colored divider */}
              <div className="h-px mb-6 rounded-full" style={{ background: rail.color, opacity: 0.3 }} />

              {/* Providers */}
              <div className="space-y-4">
                {rail.providers.map((p) => (
                  <div key={p.name} className="flex gap-3">
                    <div
                      className="w-1.5 rounded-full flex-shrink-0 mt-1"
                      style={{ background: rail.color, minHeight: '1rem' }}
                    />
                    <div>
                      <div className="text-white text-sm font-semibold">{p.name}</div>
                      <div className="text-gray-400 text-xs leading-relaxed mt-0.5">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom glow tag */}
              <div
                className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: rail.glow, color: rail.color }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: rail.color }} />
                Available Now
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Market note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-6 text-center border border-[#F4A72A]/20"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-[#F4A72A] font-semibold">Note for recipients:</span> No bank account? No problem.
            With mobile wallets and JFIN cash pickup across Banjul and upcountry, every family in The Gambia can receive money from KURINGO.
          </p>
        </motion.div>
      </div>
    </section>
  )
}