'use client'
import { motion } from 'framer-motion'
import { Sun, Snowflake } from 'lucide-react'
import { useSeason } from '@/context/SeasonContext'

export default function SeasonToggle() {
  const { season, toggle } = useSeason()

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-colors duration-300"
      style={{
        background: 'var(--bg-glass)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: 'var(--text-secondary)',
      }}
    >
      {season === 'summer' ? (
        <>
          <Sun size={13} style={{ color: 'var(--neon-yellow)' }} />
          <span>Summer Menu</span>
        </>
      ) : (
        <>
          <Snowflake size={13} style={{ color: 'var(--neon-cyan)' }} />
          <span>Fall / Winter Menu</span>
        </>
      )}
    </motion.button>
  )
}
