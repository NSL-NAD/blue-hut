'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Truck, Music, Disc3, Camera, Store, Flame, Snowflake } from 'lucide-react'
import { useSeason } from '@/context/SeasonContext'
import SectionWrapper from '@/components/ui/SectionWrapper'

const summerCards = [
  {
    icon: Disc3,
    title: 'Public Disco',
    description:
      'Vancouver-inspired, alcohol-free, family-friendly, community-driven events. Public Disco happening on Saturdays between 2-5p — live music in the park, community-curated.',
    color: 'var(--accent-3)',
  },
  {
    icon: Truck,
    title: 'Food Truck Partnerships',
    description:
      'Rotating food truck lineup in the beach lot on weekends.',
    color: 'var(--accent-1)',
  },
  {
    icon: Music,
    title: 'Roller Skating Rentals',
    description: 'Inline skate rentals along the lakefront path.',
    color: 'var(--accent-4)',
  },
  {
    icon: Camera,
    title: 'Sunrise Live Stream',
    description:
      'Fixed camera setup streaming sunrise to social channels daily.',
    color: 'var(--accent-2)',
  },
  {
    icon: Store,
    title: 'Pop-up Collabs',
    description:
      'Collectivo, Blooming Lotus, Bartolotta, and other MKE staples rotating through.',
    color: 'var(--accent-6)',
  },
]

const winterCards = [
  {
    icon: Flame,
    title: 'Morning Fire + Coffee',
    description:
      'Fire pit setup, hot coffee, a reason to come to the beach in February.',
    color: 'var(--accent-1)',
  },
  {
    icon: Camera,
    title: 'Sunrise Live Stream',
    description:
      'Year-round camera stream, especially powerful in winter light.',
    color: 'var(--accent-2)',
  },
  {
    icon: Store,
    title: 'Warm Pop-up Collabs',
    description:
      'Partner with Collectivo and others for cold-weather activations.',
    color: 'var(--accent-4)',
  },
  {
    icon: Snowflake,
    title: 'Community Skating',
    description:
      'Coordinate with nearby ice/skate community events.',
    color: 'var(--accent-6)',
  },
]

export default function CommunityBuilding() {
  const { season } = useSeason()
  const isSummer = season === 'summer'
  const cards = isSummer ? summerCards : winterCards

  return (
    <SectionWrapper sectionId="community-building" bg="cream">
      <AnimatePresence mode="wait">
        <motion.div
          key={season}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-6">
            <h2 className="font-display text-headline mb-2">
              {isSummer
                ? 'Community, All Summer Long'
                : 'The Hut in the Cold Season'}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              {isSummer
                ? "McKinley Beach already draws the crowd. The Blue Hut becomes the heartbeat."
                : "The lakefront in winter is underrated. We're changing that."}
            </p>
            <div className="geo-stripe w-20 mt-4" />
          </div>

          {/* Stacked row cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: 'easeOut',
                }}
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
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
