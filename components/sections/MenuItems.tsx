'use client'
import SectionWrapper from '@/components/ui/SectionWrapper'
import MenuBoard from '@/components/ui/MenuBoard'
import SeasonToggle from '@/components/layout/SeasonToggle'
import { useSeason } from '@/context/SeasonContext'

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

export default function MenuItems() {
  const { season } = useSeason()
  const menu = season === 'summer' ? summerMenu : winterMenu

  return (
    <SectionWrapper sectionId="menu-items" bg="surface">
      {/* Season toggle — top right */}
      <div className="flex justify-end mb-6">
        <SeasonToggle />
      </div>
      <MenuBoard
        headline={menu.headline}
        subhead={menu.subhead}
        items={menu.items}
        disclaimer={menu.disclaimer}
      />
    </SectionWrapper>
  )
}
