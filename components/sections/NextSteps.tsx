'use client'
import { motion } from 'framer-motion'
import { ScrollText, MapPin, HardHat, Landmark } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    icon: ScrollText,
    title: 'Discuss Lease Terms',
    description:
      'Walk through the sublease structure or revenue share arrangement and land on a framework that works for all parties. No pressure — just alignment.',
    color: 'var(--neon-cyan)',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Site Visit',
    description:
      'A quick walkthrough of the Blue Hut to assess existing infrastructure — storage, power, water, and utility access. Helps N-Squared scope the renovation accurately.',
    color: 'var(--neon-pink)',
  },
  {
    number: '03',
    icon: HardHat,
    title: 'Renovation Spec',
    description:
      'N-Squared delivers a detailed renovation plan: scope, materials, timeline, and cost. This also refines the deal terms with real numbers attached.',
    color: 'var(--neon-yellow)',
  },
  {
    number: '04',
    icon: Landmark,
    title: 'Loop in MKE County Parks',
    description:
      'Bring Milwaukee County Parks into the conversation to align on permits, lease structure, and county-side approvals. We handle the legwork — partners just need to make the intro.',
    color: 'var(--neon-purple)',
  },
]

export default function NextSteps() {
  return (
    <SectionWrapper sectionId="next-steps" bg="deep">
      {/* Star field */}
      <div className="star-field" />

      {/* Dot grid accents */}
      <div className="dot-grid" style={{ top: '6%', right: '4%', width: '144px', height: '96px' }} />
      <div className="dot-grid-pink" style={{ bottom: '10%', left: '3%', width: '96px', height: '72px' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline mb-3">
          Next Steps
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          We&rsquo;re ready when you are. Here&rsquo;s how we move from conversation to open doors.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="card-glass flex gap-5"
          >
            {/* Number + icon column */}
            <div className="shrink-0 flex flex-col items-center gap-3 pt-1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold"
                style={{
                  backgroundColor: step.color,
                  color: '#0B0B1A',
                  boxShadow: `0 0 16px ${step.color}50`,
                }}
              >
                {step.number}
              </div>
              <step.icon size={20} style={{ color: step.color, opacity: 0.6 }} />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-display text-lg font-bold mb-2">
                {step.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing nudge */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-mono text-xs text-center mt-10"
        style={{ color: 'var(--text-dim)' }}
      >
        None of these steps require a commitment — just a willingness to explore.
      </motion.p>
    </SectionWrapper>
  )
}
