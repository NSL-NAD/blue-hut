'use client'
import SectionCarousel from '@/components/layout/SectionCarousel'
import DotNav from '@/components/layout/DotNav'
import ProgressBar from '@/components/layout/ProgressBar'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <DotNav />
      <SectionCarousel />
    </>
  )
}
