'use client'
import { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import MenuBoard from '@/components/ui/MenuBoard'

const summerMenu = {
  headline: 'Summer Menu',
  subhead: 'Light, energizing, made for the lakefront',
  items: [
    { name: 'Coffee / Cold Brew' },
    { name: 'Watermelon (sliced / cups)' },
    { name: 'Popcorn (classic + flavored)' },
    { name: 'Avocado Toast' },
    { name: 'Electrolyte Drinks' },
    { name: 'Protein Cookies' },
    { name: 'Bartolotta Lobster Roll', tag: 'seasonal feature' },
  ],
  disclaimer:
    'Menu items for discussion purposes only. Final offerings subject to licensing, vendor agreements, and seasonal demand.',
}

const winterMenu = {
  headline: 'Fall / Winter Menu',
  subhead: 'Warm, cozy — made for the lakefront any time of year',
  items: [
    { name: 'Coffee & Hot Drinks' },
    { name: 'Protein Cookies' },
    { name: 'Fresh Bakery' },
    { name: 'Breakfast Wrap', tag: 'seasonal feature' },
  ],
  disclaimer:
    'Menu items for discussion purposes only. Final offerings subject to licensing, vendor agreements, and seasonal demand.',
}

const menus = { summer: summerMenu, winter: winterMenu }
type Season = 'summer' | 'winter'

export default function MenuItems() {
  const [active, setActive] = useState<Season>('summer')
  const [hovering, setHovering] = useState(false)
  const [hoveringBack, setHoveringBack] = useState(false)

  const front = menus[active]
  const backKey: Season = active === 'summer' ? 'winter' : 'summer'
  const back = menus[backKey]

  const swap = () => setActive(backKey)

  return (
    <SectionWrapper sectionId="menu-items" bg="surface">
      {/* Hint */}
      <p
        className="font-mono text-[0.65rem] text-center mb-6 tracking-widest uppercase"
        style={{ color: 'var(--text-dim)' }}
      >
        Click the card behind to switch menus
      </p>

      {/* Stacked deck — extra padding at bottom-right so back card peeks */}
      <div
        className="relative mx-auto"
        style={{ maxWidth: '672px', paddingBottom: '28px', paddingRight: '28px' }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Back card — peeking out, click to swap */}
        <div
          onClick={swap}
          onMouseEnter={() => setHoveringBack(true)}
          onMouseLeave={() => setHoveringBack(false)}
          style={{
            position: 'absolute',
            inset: 0,
            transform: hovering
              ? 'translate(22px, 26px) scale(0.975)'
              : 'translate(12px, 14px) scale(0.97)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.4, 0.64, 1)',
            zIndex: 1,
            cursor: 'pointer',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Card body */}
          <div
            className="w-full h-full rounded-2xl flex flex-col"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              border: hoveringBack ? '1px solid rgba(0,240,255,0.55)' : '1px solid rgba(255,255,255,0.07)',
              boxShadow: hoveringBack
                ? '0 0 25px rgba(0,240,255,0.55), 0 0 60px rgba(0,240,255,0.25), var(--shadow-soft)'
                : 'var(--shadow-soft)',
              transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
            }}
          >
            {/* Top stripe */}
            <div className="h-1 w-full shrink-0" style={{ background: 'var(--gradient-sunset-h)' }} />

            {/* Back card content — just the headline visible */}
            <div className="flex-1 flex flex-col items-center justify-start pt-8 px-8">
              <p
                className="font-display text-headline text-center"
                style={{ color: 'var(--neon-cyan)', opacity: 0.7 }}
              >
                {back.headline}
              </p>
              <p
                className="font-mono text-[0.65rem] mt-3 tracking-widest uppercase"
                style={{ color: 'var(--text-dim)' }}
              >
                tap to flip
              </p>
            </div>
          </div>
        </div>

        {/* Front card — full MenuBoard */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <MenuBoard
            headline={front.headline}
            subhead={front.subhead}
            items={front.items}
            disclaimer={front.disclaimer}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
