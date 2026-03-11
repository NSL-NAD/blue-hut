'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'

const mechanics = [
  {
    number: '01',
    title: 'Time & Materials',
    description:
      'N-Squared covers all time, materials, and labor to renovate the concession stand — at no cost to existing partners.',
    color: 'var(--neon-pink)',
  },
  {
    number: '02',
    title: 'Storage Replacement',
    description:
      'Any storage displaced by renovation is replaced in-kind. A seamless transition with zero disruption to existing operations.',
    color: 'var(--neon-cyan)',
  },
  {
    number: '03',
    title: 'Lease Reduction',
    description:
      "Milwaukee County Parks reduces Bartolotta's existing lease proportional to the renovation value delivered — a direct, ongoing cost reduction with no strings attached.",
    color: 'var(--neon-yellow)',
  },
  {
    number: '04',
    title: 'Revenue Share',
    description:
      'Bartolotta earns a passive revenue share from Blue Hut sales. Zero operational involvement required — just meaningful upside from a space that was previously idle.',
    color: 'var(--neon-purple)',
  },
  {
    number: '05',
    title: 'Sublease',
    description:
      'Alternatively, N-Squared subleases the Blue Hut directly from Bartolotta based on proportional square footage. Predictable income, no day-to-day responsibilities.',
    color: 'var(--neon-orange)',
  },
]

export default function SubleaseMechanics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstCircleRef = useRef<HTMLDivElement>(null)
  const lastCircleRef = useRef<HTMLDivElement>(null)
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number } | null>(null)

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !firstCircleRef.current || !lastCircleRef.current) return
      const container = containerRef.current.getBoundingClientRect()
      const first = firstCircleRef.current.getBoundingClientRect()
      const last = lastCircleRef.current.getBoundingClientRect()
      const top = first.top + first.height / 2 - container.top
      const height = (last.top + last.height / 2 - container.top) - top
      setLineStyle({ top, height })
    }

    // Initial measurement + slight delay to let framer-motion settle
    measure()
    const t = setTimeout(measure, 300)
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(t)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <SectionWrapper sectionId="sublease-mechanics" bg="surface">
      {/* Dot grid accents */}
      <div className="dot-grid" style={{ top: '5%', right: '3%', width: '96px', height: '72px' }} />
      <div className="dot-grid-pink" style={{ bottom: '8%', left: '2%', width: '120px', height: '72px' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-display text-headline mb-2">
          The Deal Structure
        </h2>
        <p
          className="font-body text-sm md:text-base leading-relaxed max-w-2xl mb-1"
          style={{ color: 'var(--text-secondary)' }}
        >
          A hands-off, trusted partnership. N-Squared handles everything — Bartolotta
          and the County benefit from a renovated asset and a new income stream, with
          zero operational lift.
        </p>
        <p
          className="font-mono text-[0.7rem] italic"
          style={{ color: 'var(--text-dim)' }}
        >
          For discussion purposes only.
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* Timeline layout */}
      <div className="relative max-w-3xl mx-auto" ref={containerRef}>
        {/* Dynamically measured line — runs exactly from center of 01 to center of 05 */}
        {lineStyle && lineStyle.height > 0 && (
          <div
            className="absolute left-6 md:left-8 w-[3px] rounded-full hidden md:block"
            style={{
              top: `${lineStyle.top}px`,
              height: `${lineStyle.height}px`,
              background: 'var(--gradient-sunset)',
              boxShadow: '0 0 12px rgba(255,45,123,0.2)',
              transform: 'translateX(-50%)',
            }}
          />
        )}

        <div className="flex flex-col gap-6">
          {mechanics.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex items-center gap-5 md:gap-8"
            >
              {/* Numbered circle — center-aligned with card, measured for line endpoints */}
              <div
                ref={i === 0 ? firstCircleRef : i === mechanics.length - 1 ? lastCircleRef : undefined}
                className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-display text-lg md:text-xl font-bold relative z-10"
                style={{
                  backgroundColor: item.color,
                  color: '#0B0B1A',
                  boxShadow: `0 0 20px ${item.color}40, 0 0 40px ${item.color}15`,
                }}
              >
                {item.number}
              </div>

              {/* Content card */}
              <div className="card-glass flex-1">
                <h3 className="font-display text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
