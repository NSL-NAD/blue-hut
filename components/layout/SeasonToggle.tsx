'use client'
import { Sun, Snowflake } from 'lucide-react'
import { useSeason } from '@/context/SeasonContext'

export default function SeasonToggle() {
  const { season, toggle } = useSeason()
  const isSummer = season === 'summer'

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 flex items-center rounded-full border-2 p-0.5 transition-all duration-300"
      style={{ borderColor: 'var(--border-pop)', background: 'var(--toggle-bg)', boxShadow: 'var(--shadow)' }}
      aria-label={`Switch to ${isSummer ? 'Fall + Winter' : 'Summer'} mode`}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[0.6rem] font-medium uppercase tracking-wider transition-all duration-300"
        style={{ background: isSummer ? 'var(--toggle-active)' : 'transparent', color: isSummer ? '#FFF' : 'var(--text-secondary)' }}
      >
        <Sun size={13} strokeWidth={2.5} />
        <span className="hidden sm:inline">Summer</span>
      </div>
      <div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[0.6rem] font-medium uppercase tracking-wider transition-all duration-300"
        style={{ background: !isSummer ? 'var(--toggle-active)' : 'transparent', color: !isSummer ? '#FFF' : 'var(--text-secondary)' }}
      >
        <Snowflake size={13} strokeWidth={2.5} />
        <span className="hidden sm:inline">Fall + Winter</span>
      </div>
    </button>
  )
}
