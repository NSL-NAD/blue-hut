'use client'
import { motion } from 'framer-motion'
import { MapPin, Zap, Users } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const highlights = [
  { icon: MapPin, label: 'Prime Lakefront Location' },
  { icon: Zap, label: 'Currently Underutilized' },
  { icon: Users, label: 'Community-First Model' },
]

export default function Overview() {
  return (
    <SectionWrapper sectionId="overview" bg="surface">
      {/* Pink glow — top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,45,123,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="flex flex-col gap-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-headline">
            What We&rsquo;re Proposing
          </h2>
          <div className="neon-stripe w-24 mt-4" />
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-lg md:text-xl leading-relaxed max-w-3xl font-light"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley Beach&rsquo;s concession stand &mdash; the &ldquo;Blue Hut&rdquo; &mdash;
          is an untapped opportunity. Steps from one of Milwaukee&rsquo;s most beloved
          lakefront destinations, we&rsquo;re proposing a collaborative model that
          activates the space year-round, generates revenue for all parties, and
          builds something the community genuinely loves.
        </motion.p>

        {/* Highlight pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,45,123,0.08)',
                border: '1px solid rgba(255,45,123,0.1)',
              }}
            >
              <h.icon size={18} style={{ color: 'var(--neon-pink)' }} />
              <span className="font-mono text-xs font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
                {h.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-mono text-[0.65rem] italic mt-2"
          style={{ color: 'var(--text-dim)' }}
        >
          For discussion purposes only. All terms and structures are preliminary
          and subject to negotiation.
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
