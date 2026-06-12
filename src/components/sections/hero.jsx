import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function FloatingOrb({ size, color, x, y, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full blur-sm"
      style={{ width: size, height: size, background: color, left: x, top: y }}
    />
  )
}

const stats = [
  { value: '5+', label: 'European Markets' },
  { value: '3', label: 'Payment Rails' },
  { value: '$54B+', label: 'Annual Africa Remittances' },
  { value: '25%+', label: 'of Gambia GDP from remittances' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">

      {/* Background orbs */}
      <FloatingOrb size={300} color="rgba(10,110,78,0.15)" x="10%" y="20%" delay={0} />
      <FloatingOrb size={200} color="rgba(244,167,42,0.1)" x="75%" y="10%" delay={1} />
      <FloatingOrb size={150} color="rgba(18,168,118,0.12)" x="85%" y="60%" delay={2} />
      <FloatingOrb size={100} color="rgba(244,167,42,0.08)" x="5%" y="70%" delay={0.5} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#12A876] animate-pulse" />
              <span className="text-[#12A876] text-xs font-medium">
                Cross-border fintech for the African diaspora
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Send Money
              <br />
              <span className="gradient-text">Home. Fast.</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">with Kuringo</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-4 max-w-lg"
            >
              Kuringo connects the African diaspora across Europe & UK with their families
              in West Africa. Fast transfers, zero hidden fees, same-day delivery.
            </motion.p>

            {/* Cowrie shell badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-8 bg-[#F4A72A]/10 border border-[#F4A72A]/20 rounded-full px-4 py-1.5"
            >
              <span className="text-[#F4A72A] text-xs">🐚</span>
              <span className="text-[#F4A72A] text-xs">
                <em>Kuringo</em> means Cowrie Shell in Mandinka — a symbol of trust for 3,000+ years
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              
                < a href="#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A6E4E] to-[#12A876] text-white font-semibold rounded-2xl hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgba(10,110,78,0.4)]">
                Send Money Now
                <HiArrowRight size={18} />
              </a>
              <Link
                to="/how-to-send"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card text-white font-semibold rounded-2xl hover:border-[#12A876]/50 transition-all border border-white/10"
              >
                <HiPlay size={18} className="text-[#12A876]" />
                How It Works
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT: App Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">

              {/* Main card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative glass-card rounded-3xl p-8 border border-[#0A6E4E]/30 shadow-[0_20px_60px_rgba(10,110,78,0.2)]"
              >
                {/* App header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A6E4E] to-[#12A876] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">K</span>
                    </div>
                    <span className="text-white text-sm font-semibold">Kuringo</span>
                  </div>
                  <div className="text-[#12A876] text-xs font-medium">● Live</div>
                </div>

                {/* Transfer visual */}
                <div className="bg-gradient-to-br from-[#0A6E4E] to-[#0D4F38] rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🇬🇧</div>
                      <div className="text-green-300 text-xs">United Kingdom</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-center text-[#F4A72A] text-xl"
                      >
                        →→→
                      </motion.div>
                      <div className="text-center text-green-300/60 text-xs mt-1">Same day</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🇬🇲</div>
                      <div className="text-green-300 text-xs">The Gambia</div>
                    </div>
                  </div>
                  <p className="text-green-300 text-xs text-center">Zero hidden fees · FCA regulated</p>
                </div>

                {/* Payment rails */}
                <div className="mb-5">
                  <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">Receive via</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Wave / AfriMoney / QMoney', icon: '📱', type: 'Wallet' },
                      { label: 'Trust Bank, GTBank, Access Bank...', icon: '🏦', type: 'Bank Transfer' },
                      { label: 'JFIN & bureaux nationwide', icon: '🏪', type: 'Cash Pickup' },
                    ].map((rail) => (
                      <div key={rail.type} className="flex items-center gap-3 glass-card rounded-xl p-3">
                        <span className="text-lg">{rail.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-xs font-medium">{rail.type}</div>
                          <div className="text-gray-500 text-xs truncate">{rail.label}</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#12A876]" />
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl px-4 py-3 border border-[#12A876]/30 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#12A876]/20 flex items-center justify-center text-sm">
                    ✅
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Transfer Complete!</div>
                    <div className="text-[#12A876] text-xs">Arrived in minutes</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-8 glass-card rounded-2xl px-4 py-3 border border-[#F4A72A]/30 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🐚</span>
                  <div>
                    <div className="text-white text-xs font-semibold">FCA Regulated</div>
                    <div className="text-[#F4A72A] text-xs">Kuringo UK Ltd</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-gray-600 text-xs">Scroll to explore</div>
        <div className="w-px h-8 bg-gradient-to-b from-[#12A876] to-transparent" />
      </motion.div>

    </section>
  )
}