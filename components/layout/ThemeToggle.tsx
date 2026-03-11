'use client'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
      style={{
        background: 'var(--bg-glass)',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: 'var(--text-secondary)',
        boxShadow: theme === 'dark' ? 'var(--shadow-cyan)' : 'var(--shadow-pink)',
      }}
    >
      {theme === 'dark'
        ? <Sun size={17} style={{ color: 'var(--neon-yellow)' }} />
        : <Moon size={17} style={{ color: 'var(--neon-purple)' }} />
      }
    </motion.button>
  )
}
