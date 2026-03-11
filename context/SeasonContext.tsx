'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Season = 'summer' | 'winter'

interface SeasonContextType {
  season: Season
  toggle: () => void
}

const SeasonContext = createContext<SeasonContextType | null>(null)

export function SeasonProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>('summer')
  const toggle = () => setSeason(s => (s === 'summer' ? 'winter' : 'summer'))

  return (
    <SeasonContext.Provider value={{ season, toggle }}>
      {children}
    </SeasonContext.Provider>
  )
}

export const useSeason = () => {
  const ctx = useContext(SeasonContext)
  if (!ctx) throw new Error('useSeason must be used within SeasonProvider')
  return ctx
}
