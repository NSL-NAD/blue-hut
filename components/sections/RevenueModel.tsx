'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, TrendingUp } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  calculateMonthlyData,
  FOOT_TRAFFIC_STATS,
  AVG_ORDER_VALUE,
  BLENDED_MARGIN,
} from '@/lib/revenueData'

function formatCurrency(val: number): string {
  if (Math.abs(val) >= 1000000) return `$${(val / 1000000).toFixed(1)}M`
  if (Math.abs(val) >= 1000) return `$${(val / 1000).toFixed(0)}K`
  return `$${val.toLocaleString()}`
}

export default function RevenueModel() {
  const [convRate, setConvRate] = useState(8)
  const [revSharePct, setRevSharePct] = useState(20)
  const [opsCost, setOpsCost] = useState(1200)

  const monthlyData = useMemo(
    () => calculateMonthlyData(convRate, revSharePct, opsCost),
    [convRate, revSharePct, opsCost]
  )

  const annualGross = monthlyData.reduce((s, m) => s + m.monthlyRevenue, 0)
  const annualNet = monthlyData.reduce((s, m) => s + m.monthlyNetProfit, 0)
  const annualRevShare = monthlyData.reduce((s, m) => s + m.monthlyRevShare, 0)

  return (
    <div
      data-section="revenue-model"
      className="min-h-[100dvh] w-full px-5 py-10 md:px-8 md:py-14"
      style={{ backgroundColor: 'var(--bg-accent)', color: 'var(--text-primary)' }}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp size={28} style={{ color: 'var(--accent-1)' }} />
            <h2 className="font-display text-headline">
              The Opportunity
            </h2>
          </div>
          <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            McKinley and Bradford Beach corridor — foot traffic data and revenue modeling
          </p>
          <div className="geo-stripe w-20 mt-4" />
        </motion.div>

        {/* Foot Traffic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {FOOT_TRAFFIC_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card-soft text-center py-4 px-3"
            >
              <p className="label-mono mb-1 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </p>
              <p
                className="font-display text-xl font-bold"
                style={{ color: 'var(--accent-2)' }}
              >
                {stat.stat}
              </p>
              <p className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>{stat.basis}</p>
            </motion.div>
          ))}
        </div>

        {/* Sliders */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-pop mb-8"
        >
          <div className="flex items-center gap-2 mb-5">
            <SlidersHorizontal size={20} style={{ color: 'var(--accent-1)' }} />
            <p className="label-mono text-xs" style={{ color: 'var(--accent-1)' }}>Model Controls</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conversion Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Conversion Rate
                </span>
                <span className="font-mono text-sm font-bold" style={{ color: 'var(--accent-2)' }}>
                  {convRate}%
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={25}
                step={1}
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>2%</span>
                <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>25%</span>
              </div>
            </div>

            {/* Rev Share */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                  N-Squared Rev Share
                </span>
                <span className="font-mono text-sm font-bold" style={{ color: 'var(--accent-2)' }}>
                  {revSharePct}%
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={5}
                value={revSharePct}
                onChange={(e) => setRevSharePct(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>5%</span>
                <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>40%</span>
              </div>
            </div>

            {/* Daily Ops Cost */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Daily Fixed Ops
                </span>
                <span className="font-mono text-sm font-bold" style={{ color: 'var(--accent-2)' }}>
                  ${opsCost.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={400}
                max={3000}
                step={100}
                value={opsCost}
                onChange={(e) => setOpsCost(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-1">
                <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>$400</span>
                <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>$3,000</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Annual Summary — big cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="card-pop text-center py-4">
            <p className="label-mono mb-1 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
              Annual Gross
            </p>
            <p className="font-display text-2xl font-bold" style={{ color: 'var(--accent-2)' }}>
              {formatCurrency(annualGross)}
            </p>
          </div>
          <div className="card-pop text-center py-4">
            <p className="label-mono mb-1 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
              Annual Net
            </p>
            <p
              className="font-display text-2xl font-bold"
              style={{ color: annualNet >= 0 ? 'var(--accent-2)' : 'var(--accent-1)' }}
            >
              {formatCurrency(annualNet)}
            </p>
          </div>
          <div className="card-pop text-center py-4">
            <p className="label-mono mb-1 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
              N-Squared Share
            </p>
            <p className="font-display text-2xl font-bold" style={{ color: 'var(--accent-1)' }}>
              {formatCurrency(annualRevShare)}
            </p>
          </div>
          <div className="card-pop text-center py-4">
            <p className="label-mono mb-1 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
              Blended Margin
            </p>
            <p className="font-display text-2xl font-bold" style={{ color: 'var(--accent-4)' }}>
              {(BLENDED_MARGIN * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Single Chart */}
        <div className="card-pop mb-8">
          <p className="label-mono mb-4 text-xs" style={{ color: 'var(--accent-2)' }}>
            Monthly Revenue
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis
                dataKey="shortMonth"
                tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }}
                axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
              />
              <YAxis
                tickFormatter={(v) => formatCurrency(v)}
                tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'var(--font-mono)' }}
                axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
              />
              <Tooltip
                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                contentStyle={{
                  backgroundColor: 'var(--bg-card)',
                  border: '2px solid var(--border-pop)',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                }}
              />
              <Bar dataKey="monthlyRevenue" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key assumptions row */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow)' }}>
            <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Avg Order</span>
            <span className="font-mono text-sm font-bold" style={{ color: 'var(--accent-2)' }}>${AVG_ORDER_VALUE.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow)' }}>
            <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>Margin</span>
            <span className="font-mono text-sm font-bold" style={{ color: 'var(--accent-2)' }}>{(BLENDED_MARGIN * 100).toFixed(1)}%</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-mono text-[0.65rem] italic text-center" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
          For discussion purposes only. All projections are estimates based on
          publicly available data and assumptions.
        </p>
      </div>
    </div>
  )
}
