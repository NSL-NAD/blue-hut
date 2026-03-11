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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          backgroundColor: '#13132D',
          boxShadow: '0 0 40px rgba(255,45,123,0.08), 0 8px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 4px rgba(255,255,255,0.02)',
        }}
      >
        {/* Top gradient bar */}
        <div className="h-1 w-full" style={{ background: 'var(--gradient-sunset-h)' }} />

        {/* Header */}
        <div className="px-10 pt-10 pb-6 text-center">
          <h3 className="font-display text-headline neon-text-pink mb-3">
            {headline}
          </h3>
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-secondary)' }}>
            {subhead}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-10 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        {/* Menu Items */}
        <div className="px-10 py-8">
          {items.map((item, i) => (
            <div key={i} className="menu-row">
              <span className="font-body text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </span>
              {item.tag && (
                <span
                  className="font-mono text-[0.65rem] font-bold ml-4 shrink-0 uppercase tracking-wider"
                  style={{ color: 'var(--neon-cyan)' }}
                >
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom gradient bar */}
        <div className="h-1 w-full" style={{ background: 'var(--gradient-sunset-h)' }} />

        {/* Footer */}
        <div className="px-10 py-4">
          <p className="font-mono text-[0.65rem] italic text-center" style={{ color: 'var(--text-dim)' }}>
            {disclaimer}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
