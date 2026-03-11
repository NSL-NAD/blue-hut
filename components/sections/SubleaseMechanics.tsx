'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const mechanics = [
  {
    number: '01',
    title: 'Time & Materials',
    description:
      'N-Squared provides time and materials to renovate the concession stand at cost.',
    color: 'var(--accent-1)',
  },
  {
    number: '02',
    title: 'Storage Replacement',
    description:
      'Partners collaborate on replacing equivalent on-premises storage displaced by the renovation.',
    color: 'var(--accent-2)',
  },
  {
    number: '03',
    title: 'Lease Reduction',
    description:
      "MKE County Parks offers a reduction in Bartolotta's existing lease in exchange for renovation value delivered.",
    color: 'var(--accent-4)',
  },
  {
    number: '04',
    title: 'Revenue Share',
    description:
      'N-Squared and Bartolotta enter a revenue share agreement based on Blue Hut sales.',
    color: 'var(--accent-6)',
  },
  {
    number: '05',
    title: 'Sublease (Alternative)',
    description:
      'As an alternative to rev share, N-Squared subleases the Blue Hut from Bartolotta based on proportional square footage of the overall leased premises.',
    color: 'var(--accent-3)',
  },
]

export default function SubleaseMechanics() {
  return (
    <SectionWrapper sectionId="sublease-mechanics" bg="white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="font-display text-headline mb-2">
          Sublease Mechanics
        </h2>
        <p className="font-mono text-[0.7rem] italic" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
          For discussion purposes only.
        </p>
        <div className="geo-stripe w-20 mt-4" />
      </motion.div>

      {/* Stacked row cards with numbered steps */}
      <div className="flex flex-col gap-4">
        {mechanics.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className="card-pop flex items-start gap-5"
          >
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display text-lg font-bold text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.number}
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-1">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
