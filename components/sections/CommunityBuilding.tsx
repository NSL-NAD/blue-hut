'use client'
import { motion } from 'framer-motion'
import { Truck, Music, Disc3, Camera, Store, ShoppingBag } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const cards = [
  {
    icon: Disc3,
    title: 'Public Disco',
    description:
      'Vancouver-inspired, alcohol-free, family-friendly community events. Live music in the park, Saturdays 2–5 PM. All ages welcome.',
    color: 'var(--neon-pink)',
  },
  {
    icon: Truck,
    title: 'Food Truck Partnerships',
    description:
      'Rotating food truck lineup in the beach lot on weekends — curated local vendors that complement the Blue Hut experience.',
    color: 'var(--neon-cyan)',
  },
  {
    icon: Music,
    title: 'Roller Skating Rentals',
    description: 'Inline skate rentals along the lakefront path. A throwback activity the whole family can enjoy.',
    color: 'var(--neon-yellow)',
  },
  {
    icon: Camera,
    title: 'Sunrise Live Stream',
    description:
      'Fixed camera streaming sunrise to social channels daily — free community content that keeps McKinley Beach top of mind year-round.',
    color: 'var(--neon-purple)',
  },
  {
    icon: Store,
    title: 'Pop-up Collabs',
    description:
      'Collectivo, Blooming Lotus, Bartolotta, and other MKE staples rotating through — bringing new audiences to the beach.',
    color: 'var(--neon-orange)',
  },
  {
    icon: ShoppingBag,
    title: 'Blue Hut Merch',
    description:
      'Shirts, stickers, and totes — Blue Hut branded goods that let beachgoers take a piece of the vibe home. A community badge of honor.',
    color: 'var(--neon-pink)',
  },
]

export default function CommunityBuilding() {
  return (
    <SectionWrapper sectionId="community-building" bg="deep">
      {/* Ambient cyan glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)',
        }}
      />
      {/* Star field */}
      <div className="star-field" />

      {/* Dot grid accents */}
      <div className="dot-grid" style={{ top: '5%', right: '3%', width: '120px', height: '96px' }} />
      <div className="dot-grid-pink" style={{ bottom: '8%', left: '2%', width: '96px', height: '72px' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline mb-3">
          Built for the Community
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley Beach already draws the crowd. The Blue Hut becomes the heartbeat —
          a family-friendly hub where Milwaukeeans gather, create memories, and come
          back all summer long.
        </p>
        <p
          className="font-mono text-xs uppercase tracking-widest mt-3"
          style={{ color: 'var(--text-dim)' }}
        >
          ✦ The following are brainstorm ideas — not commitments. We&rsquo;re open to shaping this together.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* 3 + 3 grid layout for 6 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        {cards.slice(0, 3).map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-glass flex flex-col items-start"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: `radial-gradient(circle, ${card.color}18 0%, transparent 70%)`,
                border: `1px solid ${card.color}20`,
              }}
            >
              <card.icon size={28} style={{ color: card.color }} />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">
              {card.title}
            </h3>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.slice(3).map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
            className="card-glass flex flex-col items-start"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: `radial-gradient(circle, ${card.color}18 0%, transparent 70%)`,
                border: `1px solid ${card.color}20`,
              }}
            >
              <card.icon size={28} style={{ color: card.color }} />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">
              {card.title}
            </h3>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
