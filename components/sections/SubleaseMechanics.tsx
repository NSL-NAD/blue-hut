'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const mechanics = [
  {
    number: '01',
    title: 'Time & Materials',
    description:
      'N-Squared provides time and materials to renovate the concession stand at cost.',
  },
  {
    number: '02',
    title: 'Storage Replacement',
    description:
      'Partners collaborate on replacing equivalent on-premises storage displaced by the renovation.',
  },
  {
    number: '03',
    title: 'Lease Reduction',
    description:
      "MKE County Parks offers a reduction in Bartolotta's existing lease in exchange for renovation value delivered.",
  },
  {
    number: '04',
    title: 'Revenue Share',
    description:
      'N-Squared and Bartolotta enter a revenue share agreement based on Blue Hut sales.',
  },
  {
    number: '05',
    title: 'Sublease (Alternative)',
    description:
      'As an alternative to rev share, N-Squared subleases the Blue Hut from Bartolotta based on proportional square footage of the overall leased premises.',
  },
]

export default function SubleaseMechanics() {
  return (
    <SectionWrapper sectionId="sublease-mechanics" bg="light">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <h2 className="font-display text-section-headline mb-2">
          Sublease Mechanics
        </h2>
        <p className="font-mono text-[0.7rem] italic opacity-50 mb-6">
          For discussion purposes only.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mechanics.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className={`card-base ${i >= 3 ? 'lg:last:col-start-2' : ''}`}
          >
            <span
              className="font-mono text-xs font-medium block mb-2"
              style={{ color: 'var(--neon-teal)' }}
            >
              {item.number}
            </span>
            <h3 className="font-body text-lg font-bold mb-1.5">
              {item.title}
            </h3>
            <p className="font-body text-sm leading-relaxed opacity-80">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
