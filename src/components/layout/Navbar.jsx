import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
 { label: 'Home', path: '/' },
{ label: 'How to Send', path: '/how-to-send' },
{ label: 'How to Receive', path: '/how-to-receive' },
{ label: 'Payment Rails', path: '/payment-rails' },
{ label: 'FAQ', path: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1117]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#29B7F4] to-[#29B7F4] flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-lg font-display">K</span>
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white">SASA</span>
              <span className="text-[#29B7F4] text-xs block leading-none">Connecting Families</span>

            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#29B7F4] relative group ${
                  location.pathname === link.path
                    ? 'text-[#29B7F4]'
                    : 'text-gray-400'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#29B7F4] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            
              <a href="#download"
              className="px-5 py-2.5 bg-gradient-to-r from-[#29B7F4] to-[#29B7F4] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1117]/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#29B7F4]/20 text-[#29B7F4]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#download"
                className="block py-3 px-4 bg-gradient-to-r from-[#29B7F4] to-[#29B7F4] text-white text-sm font-semibold rounded-xl text-center"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}