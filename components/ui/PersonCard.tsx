'use client'
import { ExternalLink } from 'lucide-react'

interface PersonCardProps {
  name: string
  bio: string
  links: { label: string; href: string }[]
  imagePlaceholder?: string
}

export default function PersonCard({
  name,
  bio,
  links,
  imagePlaceholder,
}: PersonCardProps) {
  return (
    <div className="card-base flex flex-col items-center text-center">
      {/* Photo placeholder */}
      <div
        className="w-28 h-28 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-card-alt)',
          border: '2px solid var(--border-pop)',
        }}
      >
        {imagePlaceholder ? (
          <span className="font-display text-3xl opacity-30">
            {imagePlaceholder}
          </span>
        ) : (
          <span className="font-display text-3xl opacity-30">?</span>
        )}
      </div>

      <h3 className="font-body text-lg font-bold mb-2">{name}</h3>
      <p className="font-body text-sm leading-relaxed opacity-80 mb-4">
        {bio}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={`https://${link.label}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-xs hover:opacity-100 opacity-60 transition-opacity"
            style={{ color: 'var(--neon-teal)' }}
          >
            <ExternalLink size={10} />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
