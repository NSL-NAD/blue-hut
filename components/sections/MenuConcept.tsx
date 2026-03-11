'use client'
import { motion } from 'framer-motion'
import { UtensilsCrossed, Popcorn, Handshake, ChefHat } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const cards = [
  {
    icon: UtensilsCrossed,
    title: 'Seasonal Quick Eats',
    description: 'Fresh, approachable food that fits the lakefront setting.',
    note: undefined,
    color: 'var(--neon-pink)',
  },
  {
    icon: Popcorn,
    title: 'High-Margin Snacks',
    description: 'Popcorn, protein cookies, beverages — fast-moving staples.',
    color: 'var(--neon-cyan)',
  },
  {
    icon: Handshake,
    title: 'Local Partnerships',
    description: 'Collabs with Milwaukee-area producers and brands.',
    color: 'var(--neon-yellow)',
  },
  {
    icon: ChefHat,
    title: 'Bartolotta Items',
    description: 'Signature offerings — beach-appropriate, premium quality.',
    note: 'if desired',
    color: 'var(--neon-purple)',
  },
]

export default function MenuConcept() {
  return (
    <SectionWrapper sectionId="menu-concept" bg="deep">
      {/* Star field */}
      <div className="star-field" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="font-display text-headline mb-3">
          Menu Concept
        </h2>
        <p className="font-body text-lg font-light max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          Built around accessibility, margin, and community.
        </p>
        <div className="neon-stripe w-20 mt-4" />
      </motion.div>

      {/* 2x2 grid of wide cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
            className="card-glass flex items-center gap-6"
          >
            <div
              className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: `radial-gradient(circle, ${card.color}18 0%, transparent 70%)`,
                border: `1px solid ${card.color}20`,
              }}
            >
              <card.icon size={32} style={{ color: card.color }} />
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="font-display text-lg font-bold">
                  {card.title}
                </h3>
                {card.note && (
                  <span className="font-mono text-[0.6rem] italic" style={{ color: 'var(--text-dim)' }}>
                    {card.note}
                  </span>
                )}
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
