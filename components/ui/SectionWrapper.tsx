'use client'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  sectionId: string
  bg?: 'dark' | 'light'
  className?: string
  allowScroll?: boolean
}

export default function SectionWrapper({
  children,
  sectionId,
  bg = 'dark',
  className = '',
  allowScroll = false,
}: SectionWrapperProps) {
  return (
    <section
      data-section={sectionId}
      data-section-bg={bg}
      className={`
        relative w-full
        ${allowScroll ? 'min-h-[100dvh] overflow-y-auto custom-scrollbar' : 'h-[100dvh] overflow-hidden'}
        flex flex-col items-center justify-center
        px-5 py-12 md:px-8 md:py-16
        transition-theme
        ${className}
      `}
    >
      <div className={`w-full max-w-5xl mx-auto ${allowScroll ? '' : 'h-full flex flex-col justify-center'}`}>
        {children}
      </div>
    </section>
  )
}
