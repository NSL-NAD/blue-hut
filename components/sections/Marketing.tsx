'use client'
import { motion } from 'framer-motion'
import { Megaphone, Users } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const nSquaredHandles = [
  'Web development and ongoing site management',
  'Social content creation and channel management',
  'Primary event and pop-up promotion',
  'Digital design and creative assets',
]

const partnerContributes = [
  'Existing audience, brand equity, and PR relationships',
  'Local press and media contacts',
  'In-venue and in-park signage + activation',
]

export default function Marketing() {
  return (
    <SectionWrapper sectionId="marketing" bg="white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="font-display text-headline mb-2">
          Marketing & Promotion
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          A collaborative promotional model — no one party carries the load alone.
        </p>
        <div className="geo-stripe w-20 mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* N-Squared column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="card-pop"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-accent)' }}
            >
              <Megaphone size={22} style={{ color: 'var(--accent-1)' }} />
            </div>
            <h3
              className="label-mono text-xs"
              style={{ color: 'var(--accent-1)' }}
            >
              N-Squared handles
            </h3>
          </div>
          <ul className="space-y-3">
            {nSquaredHandles.map((item) => (
              <li
                key={item}
                className="font-body text-sm leading-relaxed flex items-start gap-2.5"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-1)' }} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Partners column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="card-pop"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-accent)' }}
            >
              <Users size={22} style={{ color: 'var(--accent-2)' }} />
            </div>
            <h3
              className="label-mono text-xs"
              style={{ color: 'var(--accent-2)' }}
            >
              Bartolotta + Parks contribute
            </h3>
          </div>
          <ul className="space-y-3">
            {partnerContributes.map((item) => (
              <li
                key={item}
                className="font-body text-sm leading-relaxed flex items-start gap-2.5"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-2)' }} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
