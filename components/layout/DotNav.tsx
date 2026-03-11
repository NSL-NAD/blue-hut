'use client'
import { useState, useEffect } from 'react'

const LABELS = [
  'Hero', 'Overview', 'Menu Concept', 'Menu Items', 'Community',
  'Marketing', 'Revenue', 'Sublease', 'About', 'Close',
]

export default function DotNav() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.id.replace('section-', ''), 10)
            if (!isNaN(idx)) setActive(idx)
          }
        })
      },
      { threshold: 0.4 }
    )
    for (let i = 0; i < 10; i++) {
      const el = document.getElementById(`section-${i}`)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-2.5"
      aria-label="Section navigation"
    >
      {LABELS.map((label, i) => (
        <div
          key={label}
          className="relative flex items-center"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === i && (
            <span
              className="absolute right-7 whitespace-nowrap font-mono text-[0.6rem] font-medium tracking-wider px-2 py-0.5 rounded-md"
              style={{ color: 'var(--text-primary)', background: 'var(--bg-card)', boxShadow: 'var(--shadow)' }}
            >
              {label}
            </span>
          )}
          <button
            onClick={() => document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' })}
            aria-label={`Go to ${label}`}
            className="flex items-center justify-center w-4 h-4"
          >
            <span
              className="rounded-full transition-all duration-200"
              style={{
                width: i === active ? 10 : 6,
                height: i === active ? 10 : 6,
                background: i === active ? 'var(--accent-1)' : 'transparent',
                border: i === active ? 'none' : '1.5px solid var(--text-secondary)',
                opacity: i === active ? 1 : 0.3,
              }}
            />
          </button>
        </div>
      ))}
    </nav>
  )
}
