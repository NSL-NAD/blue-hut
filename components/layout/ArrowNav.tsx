'use client'
import { motion } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface ArrowNavProps {
  currentSection: number
  totalSections: number
  onNavigate: (index: number) => void
}

export default function ArrowNav({
  currentSection,
  totalSections,
  onNavigate,
}: ArrowNavProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex flex-col items-center gap-2">
      {/* Up Arrow */}
      <motion.button
        onClick={() => {
          if (currentSection > 0) onNavigate(currentSection - 1)
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-full border transition-all duration-200 ${
          currentSection === 0
            ? 'opacity-20 cursor-not-allowed'
            : 'opacity-60 hover:opacity-100 cursor-pointer'
        }`}
        style={{
          borderColor: 'var(--border-pop)',
          color: 'var(--text-primary)',
        }}
        disabled={currentSection === 0}
        aria-label="Previous section"
      >
        <ChevronUp size={20} />
      </motion.button>

      {/* Down Arrow */}
      <motion.button
        onClick={() => {
          if (currentSection < totalSections - 1)
            onNavigate(currentSection + 1)
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-full border transition-all duration-200 ${
          currentSection === totalSections - 1
            ? 'opacity-20 cursor-not-allowed'
            : 'opacity-60 hover:opacity-100 cursor-pointer'
        }`}
        style={{
          borderColor: 'var(--border-pop)',
          color: 'var(--text-primary)',
        }}
        disabled={currentSection === totalSections - 1}
        aria-label="Next section"
      >
        <ChevronDown size={20} />
      </motion.button>
    </div>
  )
}
