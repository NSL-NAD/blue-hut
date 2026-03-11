'use client'
import { motion } from 'framer-motion'
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
    <SectionWrapper sectionId="marketing" bg="dark">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="font-display text-section-headline mb-3">
          Marketing & Promotion
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl opacity-80">
          A collaborative promotional model — no one party carries the load
          alone.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* N-Squared column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="card-base"
        >
          <h3
            className="label-mono mb-4"
            style={{ color: 'var(--neon-teal)' }}
          >
            N-Squared handles
          </h3>
          <ul className="space-y-3">
            {nSquaredHandles.map((item) => (
              <li
                key={item}
                className="font-body text-sm leading-relaxed flex items-start gap-2 opacity-80"
              >
                <span
                  className="shrink-0 mt-1"
                  style={{ color: 'var(--neon-teal)' }}
                >
                  &mdash;
                </span>
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
          className="card-base"
        >
          <h3
            className="label-mono mb-4"
            style={{ color: 'var(--highlight)' }}
          >
            Bartolotta + Parks contribute
          </h3>
          <ul className="space-y-3">
            {partnerContributes.map((item) => (
              <li
                key={item}
                className="font-body text-sm leading-relaxed flex items-start gap-2 opacity-80"
              >
                <span
                  className="shrink-0 mt-1"
                  style={{ color: 'var(--highlight)' }}
                >
                  &mdash;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
