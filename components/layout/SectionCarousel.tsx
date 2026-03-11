'use client'

import Hero from '@/components/sections/Hero'
import Overview from '@/components/sections/Overview'
import MenuConcept from '@/components/sections/MenuConcept'
import MenuItems from '@/components/sections/MenuItems'
import CommunityBuilding from '@/components/sections/CommunityBuilding'
import Marketing from '@/components/sections/Marketing'
import RevenueModel from '@/components/sections/RevenueModel'
import SubleaseMechanics from '@/components/sections/SubleaseMechanics'
import NextSteps from '@/components/sections/NextSteps'
import AboutNSquared from '@/components/sections/AboutNSquared'
import Close from '@/components/sections/Close'

export default function SectionCarousel() {
  return (
    <main>
      <section id="section-0" className="snap-section"><Hero /></section>
      <section id="section-1" className="snap-section"><Overview /></section>
      <section id="section-2" className="snap-section"><MenuConcept /></section>
      <section id="section-3" className="snap-section"><MenuItems /></section>
      <section id="section-4" className="snap-section"><CommunityBuilding /></section>
      <section id="section-5" className="snap-section"><Marketing /></section>
      <section id="section-6" className="snap-section"><RevenueModel /></section>
      <section id="section-7" className="snap-section"><SubleaseMechanics /></section>
      <section id="section-8" className="snap-section"><NextSteps /></section>
      <section id="section-9" className="snap-section"><AboutNSquared /></section>
      <section id="section-10" className="snap-section"><Close /></section>
    </main>
  )
}
