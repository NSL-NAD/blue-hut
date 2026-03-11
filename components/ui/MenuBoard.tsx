'use client'
import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

interface MenuItem {
  name: string
  tag?: string
}

interface MenuBoardProps {
  headline: string
  subhead: string
  items: MenuItem[]
  disclaimer: string
}

export default function MenuBoard({
  headline,
  subhead,
  items,
  disclaimer,
}: MenuBoardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: '3px solid var(--border-pop)',
          backgroundColor: 'var(--bg-card)',
          boxShadow: 'var(--shadow-hover)',
        }}
      >
        {/* Header */}
        <div
          className="px-8 pt-8 pb-5 text-center"
          style={{ borderBottom: '3px solid var(--border-pop)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Coffee size={28} style={{ color: 'var(--accent-1)' }} />
            <h3
              className="font-display text-headline"
              style={{ color: 'var(--accent-2)' }}
            >
              {headline}
            </h3>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
            {subhead}
          </p>
        </div>

        {/* Menu Items */}
        <div className="px-8 py-6">
          {items.map((item, i) => (
            <div key={i} className="menu-row">
              <span className="font-body text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </span>
              {item.tag && (
                <span
                  className="font-mono text-[0.65rem] ml-3 shrink-0 px-2 py-0.5 rounded-full"
                  style={{
                    color: 'var(--accent-1)',
                    backgroundColor: 'var(--bg-accent)',
                  }}
                >
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Geo stripe */}
        <div className="geo-stripe mx-8" />

        {/* Footer */}
        <div className="px-8 py-4">
          <p className="font-mono text-[0.65rem] italic text-center" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
            {disclaimer}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
