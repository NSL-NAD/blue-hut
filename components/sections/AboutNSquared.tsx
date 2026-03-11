'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const links = [
  { label: 'nicdemore.com', href: 'https://nicdemore.com' },
  { label: 'marglemedia.com', href: 'https://marglemedia.com' },
  { label: 'goodatscale.studio', href: 'https://goodatscale.studio' },
  { label: 'foacourse.com', href: 'https://foacourse.com' },
]

export default function AboutNSquared() {
  return (
    <SectionWrapper sectionId="about" bg="deep">
      {/* Ambient purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(176,38,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Geometric diamond decorations */}
      <div className="geo-diamond" style={{ top: '8%', right: '8%', width: '80px', height: '80px', borderColor: 'rgba(255,45,123,0.12)' }} />
      <div className="geo-diamond" style={{ bottom: '12%', left: '5%', width: '50px', height: '50px', borderColor: 'rgba(0,240,255,0.1)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline">
          About N-Squared
        </h2>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* Single combined bio card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="card-glass max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        {/* Photo placeholder with gradient border ring */}
        <div
          className="w-32 h-32 rounded-full mb-6 flex items-center justify-center"
          style={{
            background: 'var(--gradient-sunset)',
            padding: '3px',
          }}
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--bg-elevated)' }}
          >
            <span
              className="font-display text-2xl font-bold"
              style={{ color: 'var(--neon-pink)', opacity: 0.7 }}
            >
              N²
            </span>
          </div>
        </div>

        <h3 className="font-display text-2xl font-bold mb-4">
          Nic &amp; Natasha
        </h3>
        <p
          className="font-body text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Nic is a local business owner running a digital marketing agency in the Third Ward
          (Margle Media, est. 2017) with a background in web development, digital design, event
          planning, and hospitality. Natasha is a lawyer and insurance advisor from Canada with
          experience running her own firm, currently getting licensed in the States, with deep roots
          in customer service, hospitality, and event planning. Together, they share a passion for
          food, community, and creating vibrant gathering spaces — drawing inspiration from
          travels around the world.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)] transition-all duration-200"
              style={{ color: 'var(--neon-cyan)' }}
            >
              <ExternalLink size={10} />
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
