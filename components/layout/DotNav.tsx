'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const SECTION_LABELS = [
  'Hero',
  'Overview',
  'Menu Concept',
  'Menu Items',
  'Community',
  'Marketing',
  'Revenue Model',
  'Sublease',
  'About',
  'Close',
]

interface DotNavProps {
  currentSection: number
  onNavigate: (index: number) => void
}

export default function DotNav({ currentSection, onNavigate }: DotNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3"
      aria-label="Section navigation"
    >
      {SECTION_LABELS.map((label, i) => (
        <div
          key={label}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip */}
          {hoveredIndex === i && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="absolute right-8 whitespace-nowrap font-mono text-[0.7rem] font-light tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              {label}
            </motion.span>
          )}

          {/* Dot */}
          <button
            onClick={() => onNavigate(i)}
            aria-label={`Go to ${label}`}
            aria-current={i === currentSection ? 'true' : undefined}
            className="relative flex items-center justify-center w-5 h-5 group"
          >
            <motion.span
              animate={{
                width: i === currentSection ? 10 : 6,
                height: i === currentSection ? 10 : 6,
                backgroundColor:
                  i === currentSection
                    ? 'var(--neon-teal)'
                    : 'transparent',
                borderColor:
                  i === currentSection
                    ? 'var(--neon-teal)'
                    : 'var(--text-primary)',
                opacity: i === currentSection ? 1 : 0.4,
              }}
              transition={{ duration: 0.2 }}
              className="rounded-full border"
              style={{
                borderWidth: i === currentSection ? 0 : 1,
              }}
            />
          </button>
        </div>
      ))}
    </nav>
  )
}
