import { motion } from 'framer-motion'

export default function AnimatedCard({ children, className = '', delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      className={`glass-card rounded-2xl transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(10,110,78,0.2)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
