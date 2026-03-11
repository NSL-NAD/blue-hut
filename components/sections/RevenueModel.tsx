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
import SectionWrapper from '@/components/ui/SectionWrapper'

function formatCurrency(val: number): string {
  if (Math.abs(val) >= 1000000) return `$${(val / 1000000).toFixed(1)}M`
  if (Math.abs(val) >= 1000) return `$${(val / 1000).toFixed(0)}K`
  return `$${val.toLocaleString()}`
}

// Rev share fixed internally — not exposed as a user control
const FIXED_REV_SHARE_PCT = 20

export default function RevenueModel() {
  const [convRate, setConvRate] = useState(25)
  const [opsCost, setOpsCost] = useState(500)

  const monthlyData = useMemo(
    () => calculateMonthlyData(convRate, FIXED_REV_SHARE_PCT, opsCost),
    [convRate, opsCost]
  )

  const annualGross = monthlyData.reduce((s, m) => s + m.monthlyRevenue, 0)
  const annualNet = monthlyData.reduce((s, m) => s + m.monthlyNetProfit, 0)

  return (
    <SectionWrapper sectionId="revenue-model" bg="deep">
      {/* Star field */}
      <div className="star-field" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 60px)',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp size={28} style={{ color: 'var(--neon-cyan)' }} />
          <h2 className="font-display text-headline">
            The Opportunity
          </h2>
        </div>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          McKinley and Bradford Beach corridor — foot traffic data and revenue modeling
        </p>
        <div className="neon-stripe w-20 mt-5" />
      </motion.div>

      {/* Foot Traffic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {FOOT_TRAFFIC_STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.07 }}
            className="card-stat"
          >
            <p
              className="label-mono mb-2 text-[0.6rem]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {stat.label}
            </p>
            <p
              className="font-display text-2xl font-bold"
              style={{ color: 'var(--neon-cyan)' }}
            >
              {stat.stat}
            </p>
            <p
              className="font-mono text-[0.6rem] mt-1"
              style={{ color: 'var(--text-dim)' }}
            >
              {stat.basis}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Model Controls — 2 sliders */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.25 }}
        className="card-glass mb-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal size={20} style={{ color: 'var(--neon-pink)' }} />
          <p className="label-mono text-xs" style={{ color: 'var(--neon-pink)' }}>
            Model Controls
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Conversion Rate */}
          <div>
            <div className="flex justify-between mb-3">
              <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                Conversion Rate
              </span>
              <span className="font-mono text-sm font-bold" style={{ color: 'var(--neon-cyan)' }}>
                {convRate}%
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              step={1}
              value={convRate}
              onChange={(e) => setConvRate(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-dim)' }}>0%</span>
              <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-dim)' }}>50%</span>
            </div>
          </div>

          {/* Daily Ops Cost */}
          <div>
            <div className="flex justify-between mb-3">
              <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                Daily Fixed Ops
              </span>
              <span className="font-mono text-sm font-bold" style={{ color: 'var(--neon-cyan)' }}>
                ${opsCost.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1500}
              step={100}
              value={opsCost}
              onChange={(e) => setOpsCost(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-dim)' }}>$0</span>
              <span className="font-mono text-[0.6rem]" style={{ color: 'var(--text-dim)' }}>$1,500</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Annual Summary — 3 cards, no rev share */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card-stat">
          <p className="label-mono mb-2 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
            Annual Gross
          </p>
          <p className="font-display text-2xl font-bold" style={{ color: 'var(--neon-cyan)' }}>
            {formatCurrency(annualGross)}
          </p>
        </div>
        <div className="card-stat">
          <p className="label-mono mb-2 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
            Annual Net
          </p>
          <p
            className="font-display text-2xl font-bold"
            style={{ color: annualNet >= 0 ? 'var(--neon-cyan)' : 'var(--neon-pink)' }}
          >
            {formatCurrency(annualNet)}
          </p>
        </div>
        <div className="card-stat">
          <p className="label-mono mb-2 text-[0.6rem]" style={{ color: 'var(--text-secondary)' }}>
            Blended Margin
          </p>
          <p className="font-display text-2xl font-bold" style={{ color: 'var(--neon-yellow)' }}>
            {(BLENDED_MARGIN * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      {/* Chart — bar changes color on hover, no background hover state */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3 }}
        className="card-glass mb-8"
      >
        <p className="label-mono mb-5 text-xs" style={{ color: 'var(--neon-cyan)' }}>
          Monthly Revenue
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={monthlyData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.04)"
            />
            <XAxis
              dataKey="shortMonth"
              tick={{
                fill: 'var(--text-secondary)',
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
              }}
              axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
            />
            <YAxis
              tickFormatter={(v) => formatCurrency(v)}
              tick={{
                fill: 'var(--text-secondary)',
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
              }}
              axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
            />
            <Tooltip
              cursor={false}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                'Revenue',
              ]}
              contentStyle={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid rgba(0,240,255,0.2)',
                borderRadius: '12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-cyan)',
              }}
            />
            <Bar
              dataKey="monthlyRevenue"
              fill="#00F0FF"
              radius={[6, 6, 0, 0]}
              opacity={0.85}
              activeBar={{ fill: '#FF2D7B', opacity: 1 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Key assumptions */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full"
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
            Avg Order
          </span>
          <span className="font-mono text-sm font-bold" style={{ color: 'var(--neon-cyan)' }}>
            ${AVG_ORDER_VALUE.toFixed(2)}
          </span>
        </div>
        <div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full"
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
            Margin
          </span>
          <span className="font-mono text-sm font-bold" style={{ color: 'var(--neon-cyan)' }}>
            {(BLENDED_MARGIN * 100).toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <p
        className="font-mono text-[0.65rem] italic text-center"
        style={{ color: 'var(--text-dim)' }}
      >
        For discussion purposes only. All projections are estimates based on
        publicly available data and assumptions.
      </p>
    </SectionWrapper>
  )
}
