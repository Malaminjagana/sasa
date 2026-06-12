import { QRCodeSVG } from 'qrcode.react'
import { motion } from 'framer-motion'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import AnimatedCard from '../ui/AnimatedCard'

// Replace this URL with the real KURINGO app download link
const APP_URL = 'https://kuringo.gm/download'

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
          <span className="text-[#12A876] text-sm font-semibold uppercase tracking-widest">Get the App</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Download <span className="gradient-text">KURINGO</span> Free
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Available for Android and iOS. Scan the QR code or tap a button below to download.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto">

          {/* QR Code Card */}
          <AnimatedCard className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#12A876] animate-pulse" />
              <span className="text-[#12A876] text-sm font-medium">Scan to Download</span>
            </div>

            {/* QR Code with border */}
            <div className="inline-block p-4 rounded-2xl bg-white mb-6">
              <QRCodeSVG
                value={APP_URL}
                size={180}
                bgColor="#ffffff"
                fgColor="#0A6E4E"
                level="H"
                includeMargin={false}
              />
            </div>

            <p className="text-gray-400 text-sm">
              Point your phone camera at the QR code to open the download page
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
                <div className="ml-auto text-[#12A876] opacity-0 group-hover:opacity-100 transition-opacity text-xl">
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
                <div className="ml-auto text-[#12A876] opacity-0 group-hover:opacity-100 transition-opacity text-xl">
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
                className="text-[#12A876] text-sm font-medium hover:underline"
              >
                kuringo.gm/download
              </a>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  )
}