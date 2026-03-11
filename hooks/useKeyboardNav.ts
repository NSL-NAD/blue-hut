'use client'
import { useEffect, useCallback } from 'react'

interface UseKeyboardNavProps {
  currentSection: number
  totalSections: number
  onNavigate: (index: number) => void
  isLocked: boolean
}

export function useKeyboardNav({
  currentSection,
  totalSections,
  onNavigate,
  isLocked,
}: UseKeyboardNavProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isLocked) return

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        if (currentSection < totalSections - 1) {
          onNavigate(currentSection + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        if (currentSection > 0) {
          onNavigate(currentSection - 1)
        }
      }
    },
    [currentSection, totalSections, onNavigate, isLocked]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}
