'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Truck, Music, Disc3, Camera, Store, Flame, Snowflake } from 'lucide-react'
import { useSeason } from '@/context/SeasonContext'
import SectionWrapper from '@/components/ui/SectionWrapper'

const summerCards = [
  {
    icon: Truck,
    title: 'Food Truck Partnerships',
    description:
      'Rotating food truck lineup in the beach lot on weekends.',
  },
  {
    icon: Disc3,
    title: 'Public Disco',
    description:
      'Vancouver-inspired, alcohol-free, family-friendly, community-driven events. Public Disco happening on Saturdays between 2-5p — live music in the park, community-curated.',
  },
  {
    icon: Music,
    title: 'Roller Skating Rentals',
    description: 'Inline skate rentals along the lakefront path.',
  },
  {
    icon: Camera,
    title: 'Sunrise Live Stream',
    description:
      'Fixed camera setup streaming sunrise to social channels daily.',
  },
  {
    icon: Store,
    title: 'Pop-up Collabs',
    description:
      'Collectivo, Blooming Lotus, Bartolotta, and other MKE staples rotating through.',
  },
]

const winterCards = [
  {
    icon: Flame,
    title: 'Morning Fire + Coffee',
    description:
      'Fire pit setup, hot coffee, a reason to come to the beach in February.',
  },
  {
    icon: Camera,
    title: 'Sunrise Live Stream',
    description:
      'Year-round camera stream, especially powerful in winter light.',
  },
  {
    icon: Store,
    title: 'Warm Pop-up Collabs',
    description:
      'Partner with Collectivo and others for cold-weather activations.',
  },
  {
    icon: Snowflake,
    title: 'Community Skating',
    description:
      'Coordinate with nearby ice/skate community events.',
  },
]

export default function CommunityBuilding() {
  const { season } = useSeason()
  const isSummer = season === 'summer'
  const cards = isSummer ? summerCards : winterCards

  return (
    <SectionWrapper sectionId="community-building" bg="light">
      <AnimatePresence mode="wait">
        <motion.div
          key={season}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-8">
            <h2 className="font-display text-section-headline mb-3">
              {isSummer
                ? 'Community, All Summer Long'
                : 'The Hut in the Cold Season'}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl opacity-80">
              {isSummer
                ? "McKinley Beach already draws the crowd. The Blue Hut becomes the heartbeat."
                : "The lakefront in winter is underrated. We're changing that."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: 'easeOut',
                }}
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
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
