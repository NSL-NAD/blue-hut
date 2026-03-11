'use client'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  sectionId: string
  bg?: 'deep' | 'surface' | 'elevated'
  className?: string
}

const bgMap = {
  deep: 'var(--bg-deep)',
  surface: 'var(--bg-surface)',
  elevated: 'var(--bg-elevated)',
}

export default function SectionWrapper({
  children,
  sectionId,
  bg = 'deep',
  className = '',
}: SectionWrapperProps) {
  return (
    <div
      data-section={sectionId}
      className={`
        relative w-full min-h-[100dvh]
        flex flex-col justify-center
        px-6 py-10 md:px-12 md:py-14
        overflow-hidden
        ${className}
      `}
      style={{
        backgroundColor: bgMap[bg],
        color: 'var(--text-primary)',
      }}
    >
      <div className="w-full max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </div>
  )
}
