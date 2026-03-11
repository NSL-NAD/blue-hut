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
  },
  {
    icon: Popcorn,
    title: 'High-Margin Snacks',
    description:
      'Popcorn, protein cookies, beverages — items that move fast and keep the hut humming.',
  },
  {
    icon: Handshake,
    title: 'Local Food Partnerships',
    description:
      'Sourcing and collabs with Milwaukee-area producers and brands to reinforce community roots.',
  },
  {
    icon: ChefHat,
    title: 'Bartolotta Items',
    description:
      'Elevated, signature offerings from The Bartolotta Restaurants — beach-appropriate formats, premium quality.',
  },
]

export default function MenuConcept() {
  return (
    <SectionWrapper sectionId="menu-concept" bg="dark">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="font-display text-section-headline mb-3">
          Menu Concept
        </h2>
        <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl opacity-80">
          Seasonal quick eats built around accessibility, margin, and community.
          Healthy, gluten-free, and vegan options alongside high-margin snacks
          and Bartolotta signature items — all tailored to the beach environment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className="card-base"
          >
            <div className="flex items-start gap-3">
              <card.icon
                size={20}
                className="shrink-0 mt-0.5"
                style={{ color: 'var(--neon-teal)' }}
              />
              <div>
                <h3 className="font-body text-lg font-bold mb-1.5">
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-80">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
