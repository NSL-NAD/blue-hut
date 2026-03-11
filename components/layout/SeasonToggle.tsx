'use client'
import { motion } from 'framer-motion'
import { Sun, Snowflake } from 'lucide-react'
import { useSeason } from '@/context/SeasonContext'

export default function SeasonToggle() {
  const { season, toggle } = useSeason()
  const isSummer = season === 'summer'

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-center rounded-full border p-1 transition-all duration-300"
      style={{
        borderColor: 'var(--border-pop)',
        backgroundColor: 'var(--toggle-bg)',
      }}
      aria-label={`Switch to ${isSummer ? 'Fall + Winter' : 'Summer'} mode`}
    >
      <div className="relative flex items-center">
        {/* Sliding indicator */}
        <motion.div
          className="absolute h-8 rounded-full"
          style={{
            backgroundColor: isSummer ? 'var(--neon-teal)' : 'var(--highlight)',
            width: isSummer ? '90px' : '120px',
          }}
          animate={{
            x: isSummer ? 0 : 90,
            width: isSummer ? 90 : 120,
          }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        />

        {/* Summer option */}
        <div
          className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider transition-colors duration-250 ${
            isSummer ? 'text-[#0D0D0D]' : 'text-[var(--text-primary)] opacity-50'
          }`}
        >
          <Sun size={14} />
          <span className="hidden sm:inline">Summer</span>
        </div>

        {/* Winter option */}
        <div
          className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider transition-colors duration-250 ${
            !isSummer ? 'text-[#0D0D0D]' : 'text-[var(--text-primary)] opacity-50'
          }`}
        >
          <Snowflake size={14} />
          <span className="hidden sm:inline">Fall + Winter</span>
        </div>
      </div>
    </button>
  )
}
