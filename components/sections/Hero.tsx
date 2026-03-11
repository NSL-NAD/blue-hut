'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()

  const overlayGradient = theme === 'dark'
    ? 'linear-gradient(180deg, rgba(11,11,26,0.3) 0%, rgba(11,11,26,0.7) 60%, #0B0B1A 100%)'
    : 'linear-gradient(180deg, rgba(255,245,228,0.15) 0%, rgba(255,245,228,0.55) 60%, #FFF5E4 100%)'

  return (
    <div
      data-section="hero"
      className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/blue-hut.jpg"
        alt="The Blue Hut at McKinley Beach"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient overlay — theme-aware */}
      <div
        className="absolute inset-0"
        style={{ background: overlayGradient }}
      />

      {/* Pink glow behind title */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,45,123,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Neon stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] neon-stripe z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="label-mono text-sm mb-5 tracking-[0.25em]"
          style={{ color: 'var(--neon-cyan)', opacity: 0.7 }}
        >
          McKinley Beach, Milwaukee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-hero mb-6"
          style={{
            color: 'var(--text-primary)',
            textShadow: '0 0 40px rgba(255,45,123,0.3), 0 0 80px rgba(255,45,123,0.1)',
          }}
        >
          Blue Hut
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="font-body text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--text-primary)', opacity: 0.9 }}
        >
          A community-driven concession concept for the lakefront
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-[0.75rem] uppercase tracking-[0.15em]"
          style={{ color: 'var(--neon-cyan)' }}
        >
          N-Squared + The Bartolotta Restaurants + MKE County Parks
        </motion.p>
      </div>

      {/* Animated Chevron */}
      <motion.div
        className="absolute bottom-10 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown size={28} style={{ color: 'var(--neon-cyan)', opacity: 0.4 }} />
      </motion.div>
    </div>
  )
}
