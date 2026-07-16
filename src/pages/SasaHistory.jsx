import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SasaHistory() {
  return (
    <div className="min-h-screen bg-[#0D1117] pt-[140px] text-white px-4 sm:px-6 lg:px-8 pl-2">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <Link to="/" className="text-[#29B7F4] text-sm hover:underline mb-4 inline-block">
            ← Back to Home
                  </Link>
                  
          <h1 className="font-display text-5xl font-bold text-white mb-4">
  <span className="gradient-text">The Story </span><br />
  <span className="gradient-text">Behind SASA</span>
</h1>

                  
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            SASA was built on top of Kuringo.
          </p>
        </motion.div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
          <strong>SASA</strong>  is inspired by the Soninke language, where <strong>SASA</strong> means “Right Now.” It represents speed,
            trust, and immediate impact because when your loved ones need support, every moment matters.
          </p>

          <p>
            Millions of Africans living abroad send money home every month to support their families.
            However, many people face a common challenge: they often don't know whether the money is being
            used for its intended purpose. This lack of transparency can create uncertainty and make it
            difficult to ensure that financial support is making the greatest possible difference.
          </p>

          <p>
            SASA was created to change that.
          </p>

          <p>
            SASA is more than a money transfer application it's a platform built on trust, transparency, and
            accountability. It empowers people in the diaspora to send money with greater confidence by
            providing better visibility into how their support is used.
          </p>

          <p>
            Whether you're helping to pay for school fees, healthcare, groceries, rent, or supporting a
            family project, SASA gives you peace of mind by keeping you informed throughout the process.
            When additional information is needed, our dedicated SASA support team is always available to
            assist and answer your questions.
          </p>

          <p>
            Although our name comes from the Soninke language, SASA is designed for everyone. We believe every
            African living abroad deserves a secure, transparent, and reliable way to support the people they
            care about.
          </p>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
            <p>
              To connect Africans around the world with their families through fast, secure, and transparent
              financial support, ensuring every transfer creates the impact it was intended to make.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Our Vision</h2>
            <p>
              To become Africa's most trusted diaspora financial platform, empowering millions of families with
              transparency, accountability, and confidence in every transaction.
            </p>
          </div>

          <p className="text-white text-xl font-semibold">
            SASA Send Support. Build Trust. Make Every Transfer Count.
          </p>
        </div>
      </div>
    </div>
  )
}
