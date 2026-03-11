'use client'
import { useState, useCallback, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DotNav from './DotNav'
import ArrowNav from './ArrowNav'
import SeasonToggle from './SeasonToggle'
import { useKeyboardNav } from '@/hooks/useKeyboardNav'
import { useDashboardFocus } from '@/hooks/useDashboardFocus'

import Hero from '@/components/sections/Hero'
import Overview from '@/components/sections/Overview'
import MenuConcept from '@/components/sections/MenuConcept'
import MenuItems from '@/components/sections/MenuItems'
import CommunityBuilding from '@/components/sections/CommunityBuilding'
import Marketing from '@/components/sections/Marketing'
import RevenueModel from '@/components/sections/RevenueModel'
import SubleaseMechanics from '@/components/sections/SubleaseMechanics'
import AboutNSquared from '@/components/sections/AboutNSquared'
import Close from '@/components/sections/Close'

const SECTIONS = [
  Hero,
  Overview,
  MenuConcept,
  MenuItems,
  CommunityBuilding,
  Marketing,
  RevenueModel,
  SubleaseMechanics,
  AboutNSquared,
  Close,
]

const REVENUE_MODEL_INDEX = 6

export default function SectionCarousel() {
  const [currentSection, setCurrentSection] = useState(0)
  const [direction, setDirection] = useState(0)
  const isTransitioning = useRef(false)
  const touchStartY = useRef(0)
  const { isDashboardFocused, dashboardHandlers } = useDashboardFocus()

  const navigateTo = useCallback(
    (index: number) => {
      if (isTransitioning.current) return
      if (index < 0 || index >= SECTIONS.length) return
      if (index === currentSection) return

      isTransitioning.current = true
      setDirection(index > currentSection ? 1 : -1)
      setCurrentSection(index)

      setTimeout(() => {
        isTransitioning.current = false
      }, 600)
    },
    [currentSection]
  )

  useKeyboardNav({
    currentSection,
    totalSections: SECTIONS.length,
    onNavigate: navigateTo,
    isLocked: isDashboardFocused,
  })

  // Touch/swipe for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isDashboardFocused) return
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < SECTIONS.length - 1) {
          navigateTo(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          navigateTo(currentSection - 1)
        }
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, navigateTo, isDashboardFocused])

  const CurrentComponent = SECTIONS[currentSection]

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 20 : -20,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -20 : 20,
    }),
  }

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      <SeasonToggle />
      <DotNav currentSection={currentSection} onNavigate={navigateTo} />
      <ArrowNav
        currentSection={currentSection}
        totalSections={SECTIONS.length}
        onNavigate={navigateTo}
      />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`absolute inset-0 ${currentSection === REVENUE_MODEL_INDEX ? 'overflow-y-auto custom-scrollbar' : ''}`}
          {...(currentSection === REVENUE_MODEL_INDEX ? dashboardHandlers : {})}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
