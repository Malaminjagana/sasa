import { motion } from 'framer-motion'
import AnimatedCard from '../ui/AnimatedCard'

const markets = [
  {
    flag: '🇫🇷',
    country: 'France',
    phase: 'Phase 1',
    phaseColor: '#12A876',
    detail: 'Largest West African community in Europe. Major Soninke, Senegalese, and Malian diaspora with strong cultural and remittance ties.',
  },
  {
    flag: '🇮🇹',
    country: 'Italy',
    phase: 'Phase 1',
    phaseColor: '#12A876',
    detail: 'Significant Gambian and Senegalese diaspora. Historically a major West African migration corridor.',
  },
  {
    flag: '🇪🇸',
    country: 'Spain',
    phase: 'Phase 1',
    phaseColor: '#12A876',
    detail: 'Growing West African population along Mediterranean cities with rising economic integration.',
  },
  {
    flag: '🇩🇪',
    country: 'Germany',
    phase: 'Phase 2',
    phaseColor: '#60A5FA',
    detail: 'Rapidly growing African diaspora; strong professional and student communities from across West Africa.',
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    phase: 'Active',
    phaseColor: '#F4A72A',
    detail: 'Well-established Gambian community. UK registration provides FCA regulatory credibility and direct market access.',
  },
]

export default function Markets() {
  return (
    <section className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F4A72A] text-sm font-semibold uppercase tracking-widest">Our Reach</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            5+ Markets Across <span className="gradient-text">Europe & UK</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Serving the Soninke diaspora first — Europe's most financially active remittance community —
            then expanding to the full West African diaspora.
          </p>
        </motion.div>

        {/* Soninke Phase highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 mb-10 border border-[#12A876]/30"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="text-[#12A876] text-xs font-bold uppercase tracking-wider">Phase 1 — Soninke Community</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-3">The most active remittance senders in Europe</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-[#12A876]">•</span> Highest per-capita remittance senders</li>
                <li className="flex items-center gap-2"><span className="text-[#12A876]">•</span> Strong associations in France, Italy & Spain</li>
                <li className="flex items-center gap-2"><span className="text-[#12A876]">•</span> Corridor alignment: Senegal, Mali, Gambia</li>
                <li className="flex items-center gap-2"><span className="text-[#12A876]">•</span> Deep culture of "Soninke solidarity" & tontines</li>
              </ul>
            </div>
            <div>
              <span className="text-[#60A5FA] text-xs font-bold uppercase tracking-wider">Phase 2 — Broader West African Diaspora</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-3">Expanding to serve all West African communities</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-[#60A5FA]">•</span> Gambians across all five markets</li>
                <li className="flex items-center gap-2"><span className="text-[#60A5FA]">•</span> Senegalese (France, Italy, Spain)</li>
                <li className="flex items-center gap-2"><span className="text-[#60A5FA]">•</span> Malians concentrated in France</li>
                <li className="flex items-center gap-2"><span className="text-[#60A5FA]">•</span> Guineans, Sierra Leoneans, Cape Verdeans & more</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Market cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {markets.map((m, i) => (
            <AnimatedCard key={m.country} delay={i * 0.1} className="p-5 text-center">
              <div className="text-4xl mb-3">{m.flag}</div>
              <div
                className="text-xs font-bold uppercase tracking-wider mb-1 inline-block rounded-full px-2 py-0.5"
                style={{ color: m.phaseColor, background: `${m.phaseColor}15` }}
              >
                {m.phase}
              </div>
              <h4 className="text-white font-semibold mb-2">{m.country}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{m.detail}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}