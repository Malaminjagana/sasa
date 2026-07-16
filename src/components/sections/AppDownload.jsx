import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'
import { FaGooglePlay, FaApple, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import AnimatedCard from '../ui/AnimatedCard'

// Official KURINGO website
const APP_URL = 'https://kuringo.com/'

export default function AppDownload() {
  return (
    <section id="download" className="py-24 bg-[#0D1117] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10,110,78,0.15) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#29B7F4] text-sm font-semibold uppercase tracking-widest">Download KURINGO</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
  Get <span className="gradient-text">KURINGO</span><br />
  <span className="gradient-text">Now</span>
</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
             Fast, free, and available on Android & iOS. Scan the QR code or tap below to download.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto">

          {/* QR Code Card */}
          <AnimatedCard className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#29B7F4] animate-pulse" />
              <span className="text-[#29B7F4] text-sm font-medium">Scan to Visit</span>
            </div>

            <div className="inline-flex p-4 rounded-2xl bg-white shadow-sm">
              <QRCodeSVG
                value={APP_URL}
                size={180}
                bgColor="#ffffff"
                fgColor="#29B7F4"
                level="H"
                includeMargin={false}
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#29B7F4]/30 bg-[#29B7F4]/10 px-5 py-2.5 text-sm font-semibold text-[#29B7F4] transition-all duration-200 hover:bg-[#29B7F4]/20 hover:scale-[1.02]"
              >
                Download KURINGO
              </a>

              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[13px] text-gray-300 hover:text-[#29B7F4] transition-colors"
              >
                {APP_URL}
              </a>

              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  href="#sasa-history"
                  className="inline-flex items-center justify-center rounded-full bg-[#29B7F4] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#7dd7ff]"
                >
                  The Story Behind SASA
                </a>

                <div className="flex items-center gap-3">
                  {[
                    { icon: FaFacebook, href: 'https://www.facebook.com/kuringo', color: '#1877F2' },
                    { icon: FaTwitter, href: 'https://twitter.com/kuringo', color: '#1DA1F2' },
                    { icon: FaInstagram, href: 'https://www.instagram.com/kuringo/', color: '#E1306C' },
                    { icon: FaWhatsapp, href: 'https://wa.me/', color: '#25D366' },
                    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/kuringo', color: '#0A66C2' },
                  ].map(({ icon: Icon, href, color }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hover:bg-white/10"
                    >
                      <Icon size={16} style={{ color }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-gray-400 text-sm">
              Scan the QR code or tap the button above to open the official website.
            </p>
          </AnimatedCard>

          {/* Download Buttons */}
          <div className="space-y-5">
            <AnimatedCard delay={0.1} className="p-6">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FaApple size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Download on the</div>
                  <div className="text-white font-bold text-xl font-display">App Store</div>
                </div>
                <div className="ml-auto text-[#29B7F4] opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                  →
                </div>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="p-6">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FaGooglePlay size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Get it on</div>
                  <div className="text-white font-bold text-xl font-display">Google Play</div>
                </div>
                <div className="ml-auto text-[#29B7F4] opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                  →
                </div>
              </a>
            </AnimatedCard>

            {/* Direct link */}
            <AnimatedCard delay={0.3} className="p-5 text-center">
              <p className="text-gray-500 text-xs mb-2">Or visit directly</p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#29B7F4] text-sm font-medium hover:underline"
              >
                kuringo.com/download
              </a>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  )
}