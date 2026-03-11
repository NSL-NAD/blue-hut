'use client'
import SectionCarousel from '@/components/layout/SectionCarousel'
import DotNav from '@/components/layout/DotNav'
import ProgressBar from '@/components/layout/ProgressBar'
import ThemeToggle from '@/components/layout/ThemeToggle'

export default function Home() {
  return (
    <>
      <ProgressBar />
      <DotNav />
      <ThemeToggle />
      <SectionCarousel />
    </>
  )
}
