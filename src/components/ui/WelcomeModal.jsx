import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { HiSpeakerphone } from 'react-icons/hi'
import { MdLanguage } from 'react-icons/md'

export default function WelcomeModal() {
  const { selectLanguage } = useLanguage()
  const [visible, setVisible] = useState(false)
  const audioPlayed = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    if (!audioPlayed.current) {
      audioPlayed.current = true
      const utterance = new SpeechSynthesisUtterance(
        'Welcome to SASA, powered by Kuringo. Connecting families across Europe and the UK to West Africa. Fast, affordable, and trusted.'
      )
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      setTimeout(() => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.speak(utterance)
        }
      }, 800)
    }
    return () => clearTimeout(timer)
  }, [])

  const handleSelect = (language) => {
    window.speechSynthesis?.cancel()
    selectLanguage(language)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="relative glass-card rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#0A6E4E]/40"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#0A6E4E] to-[#12A876] rounded-full" />
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A6E4E] to-[#12A876] flex items-center justify-center shadow-lg"
              >
                <span className="font-display text-white text-3xl font-bold">K</span>
              </motion.div>
            </div>
            <div className="text-center mb-2">
              <div className="flex items-center justify-center gap-2 mb-3">
                <HiSpeakerphone className="text-[#F4A72A]" size={18} />
                <span className="text-[#F4A72A] text-xs font-medium uppercase tracking-wider">
                  Welcome Message Playing...
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Welcome to SASA
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Powered by{' '}
                <span className="text-[#12A876] font-semibold">Kuringo</span> — cross-border
                fintech connecting the African diaspora in Europe and UK with families in
                West Africa.
              </p>
            </div>
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/10" />
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <MdLanguage size={14} />
                <span>Choose your experience</span>
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect('soninke')}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-[#0A6E4E]/30 to-[#12A876]/20 border border-[#0A6E4E]/50 hover:border-[#12A876] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A6E4E]/40 flex items-center justify-center text-2xl flex-shrink-0">
                    🎙️
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm group-hover:text-[#12A876] transition-colors">
                      I Speak Soninke
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      Voice-guided experience in Soninke
                    </div>
                    <div className="text-[#F4A72A] text-xs mt-1 font-medium">
                      Soninke · Soninké
                    </div>
                  </div>
                  <div className="ml-auto text-[#12A876] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect('english')}
                className="w-full p-4 rounded-2xl glass-card border border-white/10 hover:border-[#12A876]/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0">
                    💬
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm group-hover:text-[#12A876] transition-colors">
                      I Do Not Speak Soninke
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      Text-based chat in English
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      English and other languages
                    </div>
                  </div>
                  <div className="ml-auto text-[#12A876] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.button>
            </div>
            <p className="text-center text-gray-600 text-xs mt-4">
              You can change this preference anytime
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
