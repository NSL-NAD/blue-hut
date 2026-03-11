'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, TrendingUp } from 'lucide-react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import {
  calculateMonthlyData,
  FOOT_TRAFFIC_STATS,
  KEY_EVENTS,
  AVG_ORDER_VALUE,
  AVG_COGS,
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
    <section
      data-section="revenue-model"
      data-section-bg="dark"
      className="min-h-[100dvh] w-full px-5 py-12 md:px-8 md:py-16 transition-theme"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={20} style={{ color: 'var(--neon-teal)' }} />
            <h2 className="font-display text-section-headline">
              The Opportunity
            </h2>
          </div>
          <p className="font-body text-base md:text-lg leading-relaxed opacity-80 mb-2">
            McKinley and Bradford Beach corridor — foot traffic data and revenue
            modeling
          </p>
          <p className="font-mono text-[0.65rem] italic opacity-50">
            For discussion purposes only. All projections are estimates based on
            publicly available data and assumptions detailed below.
          </p>
        </motion.div>

        {/* Foot Traffic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {FOOT_TRAFFIC_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="card-base text-center py-3 px-2"
            >
              <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
                {stat.label}
              </p>
              <p
                className="font-mono text-lg font-medium"
                style={{ color: 'var(--neon-teal)' }}
              >
                {stat.stat}
              </p>
              <p className="font-mono text-[0.6rem] opacity-40">{stat.basis}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Events */}
        <div className="card-base mb-6 py-3 px-4">
          <p className="label-mono mb-2 text-[0.6rem]" style={{ color: 'var(--highlight)' }}>
            Key Events
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
            {KEY_EVENTS.map((evt) => (
              <p key={evt.name} className="font-mono text-xs opacity-70">
                <span style={{ color: 'var(--neon-teal)' }}>{evt.name}</span>
                {' — '}
                {evt.impact}
              </p>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="card-base-alt mb-6">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal
              size={16}
              style={{ color: 'var(--neon-teal)' }}
            />
            <p className="label-mono text-[0.65rem]">Model Controls</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conversion Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs opacity-60">
                  Conversion Rate
                </span>
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: 'var(--neon-teal)' }}
                >
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
                <span className="font-mono text-[0.6rem] opacity-40">2%</span>
                <span className="font-mono text-[0.6rem] opacity-40">25%</span>
              </div>
            </div>

            {/* Rev Share */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs opacity-60">
                  N-Squared Rev Share
                </span>
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: 'var(--neon-teal)' }}
                >
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
                <span className="font-mono text-[0.6rem] opacity-40">5%</span>
                <span className="font-mono text-[0.6rem] opacity-40">40%</span>
              </div>
            </div>

            {/* Daily Ops Cost */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-xs opacity-60">
                  Daily Fixed Ops
                </span>
                <span
                  className="font-mono text-sm font-medium"
                  style={{ color: 'var(--neon-teal)' }}
                >
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
                <span className="font-mono text-[0.6rem] opacity-40">$400</span>
                <span className="font-mono text-[0.6rem] opacity-40">
                  $3,000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Assumptions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              Avg Order Value
            </p>
            <p
              className="font-mono text-lg font-medium"
              style={{ color: 'var(--neon-teal)' }}
            >
              ${AVG_ORDER_VALUE.toFixed(2)}
            </p>
          </div>
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              Avg COGS/Order
            </p>
            <p
              className="font-mono text-lg font-medium"
              style={{ color: 'var(--highlight)' }}
            >
              ${AVG_COGS.toFixed(2)}
            </p>
          </div>
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              Blended Margin
            </p>
            <p
              className="font-mono text-lg font-medium"
              style={{ color: 'var(--neon-teal)' }}
            >
              {(BLENDED_MARGIN * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Annual Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              Annual Gross Revenue
            </p>
            <p
              className="font-mono text-xl font-medium"
              style={{ color: 'var(--neon-teal)' }}
            >
              {formatCurrency(annualGross)}
            </p>
          </div>
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              Annual Net Profit
            </p>
            <p
              className="font-mono text-xl font-medium"
              style={{ color: annualNet >= 0 ? 'var(--neon-teal)' : 'var(--highlight)' }}
            >
              {formatCurrency(annualNet)}
            </p>
          </div>
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              N-Squared Rev Share
            </p>
            <p
              className="font-mono text-xl font-medium"
              style={{ color: 'var(--neon-teal)' }}
            >
              {formatCurrency(annualRevShare)}
            </p>
          </div>
          <div className="card-base text-center py-3">
            <p className="label-mono opacity-60 mb-1 text-[0.6rem]">
              Blended Margin
            </p>
            <p
              className="font-mono text-xl font-medium"
              style={{ color: 'var(--neon-teal)' }}
            >
              {(BLENDED_MARGIN * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Gross Revenue Bar Chart */}
          <div className="card-base">
            <p className="label-mono mb-3 text-[0.6rem]" style={{ color: 'var(--neon-teal)' }}>
              Monthly Gross Revenue
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="shortMonth"
                  tick={{ fill: 'var(--text-primary)', fontSize: 10, fontFamily: 'var(--font-mono)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <YAxis
                  tickFormatter={(v) => formatCurrency(v)}
                  tick={{ fill: 'var(--text-primary)', fontSize: 10, fontFamily: 'var(--font-mono)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <Tooltip
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                  contentStyle={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-pop)',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                  }}
                />
                <Bar dataKey="monthlyRevenue" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Net Profit + Rev Share Line Chart */}
          <div className="card-base">
            <p className="label-mono mb-3 text-[0.6rem]" style={{ color: 'var(--neon-teal)' }}>
              Monthly Net Profit & N-Squared Share
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={monthlyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.06)"
                />
                <XAxis
                  dataKey="shortMonth"
                  tick={{ fill: 'var(--text-primary)', fontSize: 10, fontFamily: 'var(--font-mono)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <YAxis
                  tickFormatter={(v) => formatCurrency(v)}
                  tick={{ fill: 'var(--text-primary)', fontSize: 10, fontFamily: 'var(--font-mono)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <Tooltip
                  formatter={(value, name) => [
                    `$${Number(value).toLocaleString()}`,
                    name === 'monthlyNetProfit' ? 'Net Profit' : 'N-Squared Share',
                  ]}
                  contentStyle={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-pop)',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                  }}
                />
                <Legend
                  formatter={(value) =>
                    value === 'monthlyNetProfit' ? 'Net Profit' : 'N-Squared Share'
                  }
                  wrapperStyle={{ fontSize: '10px', fontFamily: 'var(--font-mono)' }}
                />
                <Line
                  type="monotone"
                  dataKey="monthlyNetProfit"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={{ r: 3, fill: 'var(--chart-2)' }}
                />
                <Line
                  type="monotone"
                  dataKey="monthlyRevShare"
                  stroke="var(--chart-3)"
                  strokeWidth={2}
                  dot={{ r: 3, fill: 'var(--chart-3)' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Breakdown Table */}
        <div className="card-base overflow-x-auto mb-6">
          <p className="label-mono mb-3 text-[0.6rem]" style={{ color: 'var(--neon-teal)' }}>
            Full Monthly Breakdown
          </p>
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr
                className="border-b"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <th className="py-2 pr-3 opacity-60">Month</th>
                <th className="py-2 pr-3 opacity-60 text-right">Traffic</th>
                <th className="py-2 pr-3 opacity-60 text-right">Customers</th>
                <th className="py-2 pr-3 opacity-60 text-right">Revenue</th>
                <th className="py-2 pr-3 opacity-60 text-right">COGS</th>
                <th className="py-2 pr-3 opacity-60 text-right">Ops Cost</th>
                <th className="py-2 pr-3 opacity-60 text-right">Net Profit</th>
                <th className="py-2 opacity-60 text-right">N2 Share</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((m) => (
                <tr
                  key={m.month}
                  className="border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                >
                  <td className="py-2 pr-3">{m.shortMonth}</td>
                  <td className="py-2 pr-3 text-right opacity-70">
                    {m.dailyTraffic.toLocaleString()}/d
                  </td>
                  <td className="py-2 pr-3 text-right opacity-70">
                    {(m.dailyCustomers * m.opDays).toLocaleString()}
                  </td>
                  <td className="py-2 pr-3 text-right" style={{ color: 'var(--neon-teal)' }}>
                    ${m.monthlyRevenue.toLocaleString()}
                  </td>
                  <td className="py-2 pr-3 text-right opacity-70">
                    ${m.monthlyCogs.toLocaleString()}
                  </td>
                  <td className="py-2 pr-3 text-right opacity-70">
                    ${m.monthlyOpsCost.toLocaleString()}
                  </td>
                  <td
                    className="py-2 pr-3 text-right"
                    style={{
                      color: m.monthlyNetProfit >= 0 ? 'var(--neon-teal)' : 'var(--highlight)',
                    }}
                  >
                    ${m.monthlyNetProfit.toLocaleString()}
                  </td>
                  <td className="py-2 text-right" style={{ color: 'var(--neon-teal)' }}>
                    ${m.monthlyRevShare.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr
                className="border-t-2 font-medium"
                style={{ borderColor: 'var(--border-pop)' }}
              >
                <td className="py-2 pr-3">Annual</td>
                <td className="py-2 pr-3 text-right" />
                <td className="py-2 pr-3 text-right" />
                <td className="py-2 pr-3 text-right" style={{ color: 'var(--neon-teal)' }}>
                  ${annualGross.toLocaleString()}
                </td>
                <td className="py-2 pr-3 text-right" />
                <td className="py-2 pr-3 text-right" />
                <td
                  className="py-2 pr-3 text-right"
                  style={{
                    color: annualNet >= 0 ? 'var(--neon-teal)' : 'var(--highlight)',
                  }}
                >
                  ${annualNet.toLocaleString()}
                </td>
                <td className="py-2 text-right" style={{ color: 'var(--neon-teal)' }}>
                  ${annualRevShare.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Bottom Disclaimer */}
        <p className="font-mono text-[0.65rem] italic opacity-50 text-center">
          For discussion purposes only. All projections are estimates based on
          publicly available data and assumptions detailed above.
        </p>
      </div>
    </section>
  )
}
