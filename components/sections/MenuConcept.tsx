'use client'
import { motion } from 'framer-motion'
import { UtensilsCrossed, Popcorn, Handshake, ChefHat } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const cards = [
  {
    icon: UtensilsCrossed,
    title: 'Seasonal Quick Eats',
    description:
      'Fresh, approachable food that fits the setting. Light in summer, warm and hearty in cooler months.',
    color: 'var(--accent-1)',
  },
  {
    icon: Popcorn,
    title: 'High-Margin Snacks',
    description:
      'Popcorn, protein cookies, beverages — items that move fast and keep the hut humming.',
    color: 'var(--accent-2)',
  },
  {
    icon: Handshake,
    title: 'Local Food Partnerships',
    description:
      'Sourcing and collabs with Milwaukee-area producers and brands to reinforce community roots.',
    color: 'var(--accent-4)',
  },
  {
    icon: ChefHat,
    title: 'Bartolotta Items',
    description:
      'Elevated, signature offerings from The Bartolotta Restaurants — beach-appropriate formats, premium quality.',
    color: 'var(--accent-6)',
  },
]

export default function MenuConcept() {
  return (
    <SectionWrapper sectionId="menu-concept" bg="white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="font-display text-headline mb-2">
          Menu Concept
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          Seasonal quick eats built around accessibility, margin, and community.
        </p>
        <div className="geo-stripe w-20 mt-4" />
      </motion.div>

      {/* Cards as stacked rows */}
      <div className="flex flex-col gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className="card-pop flex items-center gap-5"
          >
            <div
              className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `color-mix(in srgb, ${card.color} 15%, transparent)` }}
            >
              <card.icon size={28} style={{ color: card.color }} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold mb-1">
                {card.title}
              </h3>
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
