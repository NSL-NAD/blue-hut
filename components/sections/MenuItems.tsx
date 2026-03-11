'use client'
import { AnimatePresence } from 'framer-motion'
import { useSeason } from '@/context/SeasonContext'
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
  headline: 'Cold Season Menu',
  subhead: 'Warming up the lakefront, one cup at a time',
  items: [
    { name: 'Drip Coffee / Cold Brew' },
    { name: 'Hot Chocolate' },
    { name: 'Morning Breakfast Wrap' },
    { name: 'Protein Cookies' },
    { name: 'Popcorn' },
    { name: 'Electrolyte Drinks' },
  ],
  disclaimer: 'Menu items for discussion purposes only.',
}

export default function MenuItems() {
  const { season } = useSeason()
  const menu = season === 'summer' ? summerMenu : winterMenu

  return (
    <SectionWrapper sectionId="menu-items" bg="accent">
      <AnimatePresence mode="wait">
        <MenuBoard
          key={season}
          headline={menu.headline}
          subhead={menu.subhead}
          items={menu.items}
          disclaimer={menu.disclaimer}
        />
      </AnimatePresence>
    </SectionWrapper>
  )
}
