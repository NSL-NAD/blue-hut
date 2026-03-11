'use client'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  sectionId: string
  bg?: 'cream' | 'white' | 'accent' | 'dark'
  className?: string
}

const bgMap = {
  cream: 'var(--bg-primary)',
  white: 'var(--bg-secondary)',
  accent: 'var(--bg-accent)',
  dark: 'var(--accent-5)',
}

export default function SectionWrapper({
  children,
  sectionId,
  bg = 'cream',
  className = '',
}: SectionWrapperProps) {
  const isDark = bg === 'dark'

  return (
    <div
      data-section={sectionId}
      className={`
        relative w-full min-h-[100dvh]
        flex flex-col justify-center
        px-5 py-10 md:px-8 md:py-14
        ${className}
      `}
      style={{
        backgroundColor: bgMap[bg],
        color: isDark ? 'var(--text-on-dark)' : 'var(--text-primary)',
      }}
    >
      <div className="w-full max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  )
}
