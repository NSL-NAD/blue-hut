'use client'
import { useSeason } from '@/context/SeasonContext'
import SectionCarousel from '@/components/layout/SectionCarousel'
import SeasonToggle from '@/components/layout/SeasonToggle'
import DotNav from '@/components/layout/DotNav'

export default function Home() {
  const { season } = useSeason()

  return (
    <div className={season === 'winter' ? 'theme-winter' : ''}>
      <SeasonToggle />
      <DotNav />
      <SectionCarousel />
    </div>
  )
}
