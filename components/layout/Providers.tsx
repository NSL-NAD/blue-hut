'use client'
import { useEffect, ReactNode } from 'react'
import { SeasonProvider } from '@/context/SeasonContext'
import { ThemeProvider, useTheme } from '@/context/ThemeContext'

// Applies data-theme to <html> whenever theme changes
function ThemeApplier({ children }: { children: ReactNode }) {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SeasonProvider>
      <ThemeProvider>
        <ThemeApplier>
          {children}
        </ThemeApplier>
      </ThemeProvider>
    </SeasonProvider>
  )
}
