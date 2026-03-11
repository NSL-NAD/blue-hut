'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
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

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--bg-hero-overlay)' }}
      />

      {/* Geo stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 geo-stripe z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="label-mono text-sm mb-4 tracking-[0.2em] text-white/70"
        >
          McKinley Beach, Milwaukee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-hero text-white mb-5"
        >
          Blue Hut
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="font-body text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
        >
          A community-driven concession concept for the lakefront
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white/60"
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
        <ChevronDown size={28} className="text-white/60" />
      </motion.div>
    </div>
  )
}
