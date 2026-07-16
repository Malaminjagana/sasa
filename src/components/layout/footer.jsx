import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1.8fr_1fr_1fr] gap-10 xl:gap-12 pb-10 border-b border-white/10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#29B7F4] flex items-center justify-center shadow-lg shadow-[#29B7F4]/10">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h2 className="text-white text-xl font-semibold tracking-tight">KURINGO</h2>
                <p className="text-[#29B7F4] text-sm tracking-wide">Modern payments for the African diaspora</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-7 max-w-md">
              Fast, secure cross-border transfers between Europe, the UK and West Africa. Built for trusted community payments with simple compliance and clear support.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: FaTwitter, href: 'https://twitter.com/kuringo', color: '#1DA1F2' },
                { icon: FaInstagram, href: 'https://www.instagram.com/kuringo/', color: '#E4405F' },
                { icon: FaWhatsapp, href: 'https://wa.me/', color: '#25D366' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/kuringo', color: '#0A66C2' },
              ].map(({ icon: Icon, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Icon size={18} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-[0.24em]">Quick links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'How to Send', path: '/how-to-send' },
                { label: 'How to Receive', path: '/how-to-receive' },
                { label: 'Payment Rails', path: '/payment-rails' },
                { label: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[#29B7F4] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-8 pb-3.5">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2026 Kuringo. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-xs sm:text-sm text-gray-500">
            <a href="https://kuringo.com/privacy-policy-3/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://kuringo.com/terms-conditions/" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://kuringo.com/fraud-awarness/" className="hover:text-white transition-colors">Fraud Awarness</a>
          </div>
        </div>
      </div>
    </footer>
  )
}