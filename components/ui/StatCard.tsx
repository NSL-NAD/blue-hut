'use client'

interface StatCardProps {
  label: string
  value: string
  sublabel?: string
}

export default function StatCard({ label, value, sublabel }: StatCardProps) {
  return (
    <div className="card-base text-center">
      <p className="label-mono mb-2 opacity-60">{label}</p>
      <p
        className="font-mono text-2xl md:text-3xl font-medium"
        style={{ color: 'var(--neon-teal)' }}
      >
        {value}
      </p>
      {sublabel && (
        <p className="font-mono text-xs mt-1 opacity-50">{sublabel}</p>
      )}
    </div>
  )
}
