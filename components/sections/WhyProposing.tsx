'use client'
import { motion } from 'framer-motion'
import { Anchor, Sparkles, Sunrise } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const reasons = [
  {
    icon: Anchor,
    title: 'Legacy',
    headline: 'It Runs in the Family',
    description:
      "Nic's grandfather spent years casting lines off McKinley Pier. Now Nic and Natasha have a 6-month-old son, Leo — and they want him growing up with those same deep Milwaukee roots. This proposal isn't just a business play. It's about building something worth passing down.",
    color: 'var(--neon-orange)',
  },
  {
    icon: Sparkles,
    title: 'Milwaukee',
    headline: 'A City Ready for This',
    description:
      "Milwaukee is growing — and a new generation is hungry for community-first experiences that feel real, not manufactured. The lakefront is the city's front porch. The Blue Hut is a chance to build something people actually come back for, summer after summer.",
    color: 'var(--neon-yellow)',
  },
  {
    icon: Sunrise,
    title: 'Our Spot',
    headline: 'We Already Call It Home',
    description:
      "McKinley Marina is where Nic and Natasha watch the sunrise. They know this stretch of lakefront — not as investors studying a market, but as people who already love being here. That's not a pitch line. That's just the truth.",
    color: 'var(--neon-pink)',
  },
]

export default function WhyProposing() {
  return (
    <SectionWrapper sectionId="why-proposing" bg="surface">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,45,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Dot grid accents */}
      <div className="dot-grid" style={{ top: '8%', right: '4%', width: '120px', height: '96px' }} />
      <div className="dot-grid-pink" style={{ bottom: '8%', left: '3%', width: '96px', height: '72px' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline mb-3">
          Why We&rsquo;re Proposing
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          This isn&rsquo;t just a business pitch. It&rsquo;s personal.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
            className="card-glass flex flex-col"
          >
            {/* Icon + label */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: `radial-gradient(circle, ${reason.color}20 0%, transparent 70%)`,
                  border: `1px solid ${reason.color}30`,
                }}
              >
                <reason.icon size={24} style={{ color: reason.color }} />
              </div>
              <span
                className="font-mono text-[0.65rem] uppercase tracking-widest font-bold"
                style={{ color: reason.color }}
              >
                {reason.title}
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-display text-xl font-bold mb-3">
              {reason.headline}
            </h3>

            {/* Body */}
            <p
              className="font-body text-sm leading-relaxed flex-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
