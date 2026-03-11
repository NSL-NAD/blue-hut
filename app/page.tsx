'use client'
import { useSeason } from '@/context/SeasonContext'
import SectionCarousel from '@/components/layout/SectionCarousel'

export default function Home() {
  const { season } = useSeason()

  return (
    <div className={season === 'winter' ? 'theme-winter' : ''}>
      <SectionCarousel />
    </div>
  )
}
