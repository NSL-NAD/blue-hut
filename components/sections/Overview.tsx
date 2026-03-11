'use client'
import { motion } from 'framer-motion'
import { MapPin, Zap, Users, ShieldCheck } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const highlights = [
  { icon: MapPin, label: 'Prime Lakefront Location' },
  { icon: Zap, label: 'Currently Underutilized' },
  { icon: Users, label: 'Family-Friendly & Community-First' },
  { icon: ShieldCheck, label: 'Hands-Off for Partners' },
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
      {/* Dot grid accents */}
      <div className="dot-grid" style={{ bottom: '12%', right: '4%', width: '120px', height: '96px' }} />
      <div className="dot-grid-pink" style={{ top: '15%', right: '10%', width: '72px', height: '72px' }} />

      <div className="flex flex-col gap-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-lg md:text-xl leading-relaxed max-w-3xl font-light"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley Beach&rsquo;s concession stand &mdash; the &ldquo;Blue Hut&rdquo; &mdash;
          is an untapped opportunity. We&rsquo;re proposing a hands-off, trusted
          partnership that activates this underutilized space year-round. Family-friendly
          programming, community-first design, and a self-sustaining operation &mdash;
          all with zero operational lift from existing partners. At minimum, a cost
          reduction. At best, a meaningful new revenue stream.
        </motion.p>

        {/* Highlight pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(255,45,123,0.15)]"
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
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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
