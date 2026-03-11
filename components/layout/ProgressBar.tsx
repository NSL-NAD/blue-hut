"use client"
import { useEffect, useState } from "react"

export default function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        background: "var(--gradient-sunset-h)",
        boxShadow: "0 0 10px rgba(255,45,123,0.5), 0 0 20px rgba(255,107,45,0.3)",
        zIndex: 100,
        transition: "width 0.1s ease-out",
        borderRadius: "0 2px 2px 0",
      }}
    />
  )
}
