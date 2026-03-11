'use client'
import { motion } from 'framer-motion'
import { Megaphone, Users } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const nSquaredHandles = [
  'Web development and ongoing site management',
  'Social content creation and channel management',
  'Primary event and pop-up promotion',
  'Digital design and creative assets',
  'Community outreach and local partnerships',
  'Email marketing and customer engagement',
]

const partnerContributes = [
  'Existing audience and brand equity',
  'Established food and beverage offerings',
]

export default function Marketing() {
  return (
    <SectionWrapper sectionId="marketing" bg="surface">
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
          Marketing & Promotion
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          A collaborative promotional model — no one party carries the load alone.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* N-Squared column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-glass"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(255,45,123,0.15) 0%, transparent 70%)',
                border: '1px solid rgba(255,45,123,0.2)',
              }}
            >
              <Megaphone size={24} style={{ color: 'var(--neon-pink)' }} />
            </div>
            <h3
              className="label-mono text-xs"
              style={{ color: 'var(--neon-pink)' }}
            >
              N-Squared handles
            </h3>
          </div>
          <ul className="space-y-4">
            {nSquaredHandles.map((item) => (
              <li
                key={item}
                className="font-body text-sm leading-relaxed flex items-start gap-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span
                  className="shrink-0 mt-2 w-4 h-[2px] rounded-full"
                  style={{ backgroundColor: 'var(--neon-pink)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Partners column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-glass"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)',
                border: '1px solid rgba(0,240,255,0.2)',
              }}
            >
              <Users size={24} style={{ color: 'var(--neon-cyan)' }} />
            </div>
            <h3
              className="label-mono text-xs"
              style={{ color: 'var(--neon-cyan)' }}
            >
              Bartolotta + Parks contribute
            </h3>
          </div>
          <ul className="space-y-4">
            {partnerContributes.map((item) => (
              <li
                key={item}
                className="font-body text-sm leading-relaxed flex items-start gap-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span
                  className="shrink-0 mt-2 w-4 h-[2px] rounded-full"
                  style={{ backgroundColor: 'var(--neon-cyan)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
