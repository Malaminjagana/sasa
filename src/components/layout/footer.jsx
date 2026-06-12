import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A6E4E] to-[#12A876] flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">K</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">KURINGO</span>
                <span className="text-[#12A876] text-xs block leading-none">Connecting Families. Empowering Communities.</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-3">
              Kuringo is a cross-border fintech built for the African diaspora in Europe and the UK. Our name means <span className="text-[#F4A72A]">Cowrie Shell</span> in Mandinka — a timeless symbol of trust and exchange used across Africa for over 3,000 years.
            </p>
            <p className="text-gray-600 text-xs">
              Regulated by the FCA (UK) · Kuringo UK Ltd · Kuringo Company (Gambia)
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: FaFacebook, href: '#', color: '#1877F2' },
                { icon: FaTwitter, href: '#', color: '#1DA1F2' },
                { icon: FaInstagram, href: '#', color: '#E4405F' },
                { icon: FaWhatsapp, href: '#', color: '#25D366' },
              ].map(({ icon: Icon, href, color }) => (
                
                  <a key={color}
                  href={href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all hover:scale-110">
                    
                  <Icon size={16} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'How to Send', path: '/how-to-send' },
                { label: 'How to Receive', path: '/how-to-receive' },
                { label: 'Payment Rails', path: '/payment-rails' },
                { label: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-[#12A876] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>🇬🇧 Kuringo UK Ltd — United Kingdom</li>
              <li>🇬🇲 Kuringo Company — The Gambia</li>
              <li className="pt-1">
                <span className="text-xs bg-[#0A6E4E]/20 text-[#12A876] px-3 py-1 rounded-full">
                  FCA Regulated
                </span>
              </li>
              <li className="pt-2 text-xs text-gray-500 leading-relaxed">
                Co-Founder & Executive Director:<br />
                <span className="text-gray-400">Muhammad M. Jagana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Markets strip */}
        <div className="border-t border-b border-white/10 py-5 mb-8">
          <p className="text-gray-600 text-xs text-center mb-3 uppercase tracking-widest">Serving diaspora communities across</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['🇬🇧 United Kingdom', '🇫🇷 France', '🇮🇹 Italy', '🇪🇸 Spain', '🇩🇪 Germany'].map((market) => (
              <span key={market} className="text-gray-400 text-sm">{market}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Kuringo UK Ltd · Kuringo Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">AML Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}