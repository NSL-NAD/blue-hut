'use client'
import { motion } from 'framer-motion'

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
      className="w-full max-w-lg mx-auto"
    >
      <div
        className="rounded-xl border-2 overflow-hidden"
        style={{
          borderColor: 'var(--border-pop)',
          backgroundColor: 'var(--bg-card)',
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 text-center">
          <h3
            className="font-display text-section-headline mb-2"
            style={{ color: 'var(--neon-teal)' }}
          >
            {headline}
          </h3>
          <p className="font-mono text-xs uppercase tracking-wider opacity-60">
            {subhead}
          </p>
        </div>

        <div className="checkerboard-divider mx-6" />

        {/* Menu Items */}
        <div className="px-6 py-5 space-y-3">
          {items.map((item, i) => (
            <div key={i} className="dot-leader font-mono text-sm">
              <span className="shrink-0">{item.name}</span>
              {item.tag && (
                <span
                  className="text-[0.65rem] ml-1.5 shrink-0 italic opacity-70"
                  style={{ color: 'var(--highlight)' }}
                >
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="checkerboard-divider mx-6" />

        {/* Footer */}
        <div className="px-6 py-4">
          <p className="font-mono text-[0.65rem] italic opacity-50 text-center">
            {disclaimer}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
