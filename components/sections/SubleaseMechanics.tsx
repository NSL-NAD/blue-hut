'use client'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const mechanics = [
  {
    number: '01',
    title: 'Time & Materials',
    description:
      'N-Squared provides time and materials to renovate the concession stand at cost.',
    color: 'var(--neon-pink)',
  },
  {
    number: '02',
    title: 'Storage Replacement',
    description:
      'Partners collaborate on replacing equivalent on-premises storage displaced by the renovation.',
    color: 'var(--neon-cyan)',
  },
  {
    number: '03',
    title: 'Lease Reduction',
    description:
      "MKE County Parks offers a reduction in Bartolotta's existing lease in exchange for renovation value delivered.",
    color: 'var(--neon-yellow)',
  },
  {
    number: '04',
    title: 'Revenue Share',
    description:
      'N-Squared and Bartolotta enter a revenue share agreement based on Blue Hut sales.',
    color: 'var(--neon-purple)',
  },
  {
    number: '05',
    title: 'Sublease (Alternative)',
    description:
      'As an alternative to rev share, N-Squared subleases the Blue Hut from Bartolotta based on proportional square footage.',
    color: 'var(--neon-orange)',
  },
]

export default function SubleaseMechanics() {
  return (
    <SectionWrapper sectionId="sublease-mechanics" bg="surface">
      {/* Geometric accents */}
      <div className="geo-diamond" style={{ top: '8%', right: '5%', width: '60px', height: '60px', borderColor: 'rgba(0,240,255,0.08)' }} />
      <div className="geo-ring" style={{ bottom: '12%', left: '4%', width: '50px', height: '50px', borderColor: 'rgba(255,107,45,0.08)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline mb-2">
          Sublease Mechanics
        </h2>
        <p
          className="font-mono text-[0.7rem] italic"
          style={{ color: 'var(--text-dim)' }}
        >
          For discussion purposes only.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* Timeline layout */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical gradient line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-[3px] rounded-full hidden md:block"
          style={{
            background: 'var(--gradient-sunset)',
            boxShadow: '0 0 12px rgba(255,45,123,0.2)',
          }}
        />

        <div className="flex flex-col gap-6">
          {mechanics.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex items-start gap-5 md:gap-8"
            >
              {/* Numbered circle */}
              <div
                className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-display text-lg md:text-xl font-bold relative z-10"
                style={{
                  backgroundColor: item.color,
                  color: '#0B0B1A',
                  boxShadow: `0 0 20px ${item.color}40, 0 0 40px ${item.color}15`,
                }}
              >
                {item.number}
              </div>

              {/* Content card */}
              <div className="card-glass flex-1">
                <h3 className="font-display text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
