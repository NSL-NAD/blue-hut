'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useSeason } from '@/context/SeasonContext'

export default function Hero() {
  const { season } = useSeason()
  const isSummer = season === 'summer'

  return (
    <section
      data-section="hero"
      data-section-bg="dark"
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

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          backgroundColor: isSummer
            ? 'rgba(0,0,0,0.5)'
            : 'rgba(15,24,16,0.7)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-hero glow-teal mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          &ldquo;Blue Hut&rdquo; Concept
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="font-body text-lg md:text-xl mb-8 opacity-90"
          style={{ color: 'var(--text-primary)' }}
        >
          A community-driven concession concept for McKinley Beach, Milwaukee
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-[0.7rem] uppercase tracking-[0.15em]"
          style={{ color: 'var(--text-primary)' }}
        >
          N-Squared + The Bartolotta Restaurants + MKE County Parks + Community
        </motion.p>
      </div>

      {/* Animated Chevron */}
      <motion.div
        className="absolute bottom-12 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown
          size={28}
          style={{ color: 'var(--neon-teal)' }}
          className="opacity-70"
        />
      </motion.div>
    </section>
  )
}
