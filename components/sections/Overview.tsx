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
    <SectionWrapper sectionId="overview" bg="cream">
      <div className="flex flex-col gap-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-headline" style={{ color: 'var(--accent-5)' }}>
            What We&rsquo;re Proposing
          </h2>
          <div className="geo-stripe w-24 mt-4" />
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-base md:text-lg leading-relaxed max-w-3xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley Beach&rsquo;s existing concession stand &mdash; affectionately
          dubbed the &ldquo;Blue Hut&rdquo; &mdash; represents an untapped opportunity.
          Currently underutilized, the structure sits steps from one of
          Milwaukee&rsquo;s most beloved lakefront destinations. We&rsquo;re proposing
          a collaborative renovation and operation model that activates the
          space year-round, generates revenue for all parties, and builds
          something the community genuinely loves.
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
              className="flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{
                background: 'var(--bg-secondary)',
                border: '2px solid var(--border-pop)',
              }}
            >
              <h.icon size={18} style={{ color: 'var(--accent-1)' }} />
              <span className="font-mono text-xs font-medium tracking-wide">{h.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-mono text-[0.65rem] italic opacity-40 mt-2"
        >
          For discussion purposes only. All terms and structures presented
          herein are preliminary and subject to negotiation.
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
