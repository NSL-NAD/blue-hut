'use client'
import SectionWrapper from '@/components/ui/SectionWrapper'
import MenuBoard from '@/components/ui/MenuBoard'

const menu = {
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

export default function MenuItems() {
  return (
    <SectionWrapper sectionId="menu-items" bg="surface">
      <MenuBoard
        headline={menu.headline}
        subhead={menu.subhead}
        items={menu.items}
        disclaimer={menu.disclaimer}
      />
    </SectionWrapper>
  )
}
