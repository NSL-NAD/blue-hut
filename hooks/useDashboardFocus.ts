'use client'
import { useState, useCallback, useRef } from 'react'

export function useDashboardFocus() {
  const [isDashboardFocused, setIsDashboardFocused] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onFocus = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsDashboardFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    // Small delay to prevent flicker when moving between inputs
    timeoutRef.current = setTimeout(() => {
      setIsDashboardFocused(false)
    }, 200)
  }, [])

  return {
    isDashboardFocused,
    dashboardHandlers: { onFocus, onBlur },
  }
}
