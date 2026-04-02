'use client'
import { useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Truck, Music, Disc3, Camera, Store, ShoppingBag,
  Sunrise, Coffee, Footprints, Leaf,
} from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const cards = [
  {
    icon: Disc3,
    title: 'Public Disco',
    description:
      'Vancouver-inspired, alcohol-free, family-friendly community events. Live music in the park, Saturdays 2\u20135 PM. All ages welcome.',
    color: 'var(--neon-pink)',
  },
  {
    icon: Truck,
    title: 'Food Truck Partnerships',
    description:
      'Rotating food truck lineup in the beach lot on weekends \u2014 curated local vendors that complement the Blue Hut experience.',
    color: 'var(--neon-cyan)',
  },
  {
    icon: Music,
    title: 'Roller Skating Rentals',
    description:
      'Inline skate rentals along the lakefront path. A throwback activity the whole family can enjoy.',
    color: 'var(--neon-yellow)',
  },
  {
    icon: Camera,
    title: 'Sunrise Live Stream',
    description:
      'Fixed camera streaming sunrise to social channels daily \u2014 free community content that keeps McKinley Beach top of mind year-round.',
    color: 'var(--neon-purple)',
  },
  {
    icon: Store,
    title: 'Pop-up Collabs',
    description:
      'Collectivo, Blooming Lotus, Bartolotta, and other MKE staples rotating through \u2014 bringing new audiences to the beach.',
    color: 'var(--neon-orange)',
  },
  {
    icon: ShoppingBag,
    title: 'Blue Hut Merch',
    description:
      'Shirts, stickers, and totes \u2014 Blue Hut branded goods that let beachgoers take a piece of the vibe home. A community badge of honor.',
    color: 'var(--neon-pink)',
  },
  {
    icon: Sunrise,
    title: 'Sunrise Yoga',
    description:
      'Start your morning on the sand. Guided sunrise sessions, open to all levels \u2014 grounding the community before the day begins.',
    color: 'var(--neon-purple)',
  },
  {
    icon: Coffee,
    title: 'Coffee + Fire Sessions',
    description:
      'Morning coffee by the fire pit. A low-key gathering spot before the beach wakes up \u2014 regulars, dog walkers, early risers welcome.',
    color: 'var(--neon-orange)',
  },
  {
    icon: Footprints,
    title: 'Run Club Partnerships',
    description:
      'Weekly lakefront run club meetups starting and ending at Blue Hut. Cold drinks and community waiting at the finish line.',
    color: 'var(--neon-cyan)',
  },
  {
    icon: Leaf,
    title: 'Farmers Market',
    description:
      'Weekend pop-up farmers market in the beach lot. Local produce, baked goods, and artisan vendors \u2014 connecting the neighborhood to the lakefront.',
    color: 'var(--neon-yellow)',
  },
]

export default function CommunityBuilding() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Triple the cards for seamless infinite scroll
  const tripleCards = [...cards, ...cards, ...cards]

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const oneSetWidth = el.scrollWidth / 3

    if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += oneSetWidth
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // Start at the middle set
    el.scrollLeft = el.scrollWidth / 3

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

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
          McKinley Beach already draws the crowd. The Blue Hut becomes the heartbeat &mdash;
          a family-friendly hub where Milwaukeeans gather, create memories, and come
          back all summer long.
        </p>
        <p
          className="font-mono text-xs uppercase tracking-widest mt-3"
          style={{ color: 'var(--text-dim)' }}
        >
          &#10022; The following are brainstorm ideas &mdash; not commitments. We&rsquo;re open to shaping this together.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* Infinite horizontal scroll carousel — 2 rows of 5 */}
      <div className="relative -mx-6 md:-mx-12">
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-deep), transparent)' }}
        />
        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-deep), transparent)' }}
        />

        <div ref={scrollRef} className="community-carousel">
          {tripleCards.map((card, i) => {
            const isMiddleSet = i >= 10 && i < 20
            const cardIndex = i % 10

            return (
              <motion.div
                key={`card-${i}`}
                initial={isMiddleSet ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  isMiddleSet
                    ? { duration: 0.4, delay: cardIndex * 0.06 }
                    : { duration: 0 }
                }
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
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
