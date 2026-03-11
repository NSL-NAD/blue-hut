'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  title: string
  description: string
  icon?: LucideIcon
  index?: number
  badge?: string
  variant?: 'default' | 'alt'
}

export default function Card({
  title,
  description,
  icon: Icon,
  index = 0,
  badge,
  variant = 'default',
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className={variant === 'alt' ? 'card-base-alt' : 'card-base'}
    >
      <div className="flex items-start gap-3">
        {badge && (
          <span
            className="font-mono text-xs font-medium shrink-0 mt-0.5"
            style={{ color: 'var(--neon-teal)' }}
          >
            {badge}
          </span>
        )}
        {Icon && (
          <Icon
            size={20}
            className="shrink-0 mt-0.5"
            style={{ color: 'var(--neon-teal)' }}
          />
        )}
        <div>
          <h3 className="font-body text-lg font-bold mb-1.5">{title}</h3>
          <p className="font-body text-sm leading-relaxed opacity-80">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
