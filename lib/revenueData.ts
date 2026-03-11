export interface MenuItem {
  name: string
  price: number
  cogs: number
  margin: number
  mix: number
}

export const MENU_ITEMS: MenuItem[] = [
  { name: 'Coffee / Cold Brew', price: 6.0, cogs: 1.5, margin: 0.75, mix: 0.22 },
  { name: 'Electrolyte Drink', price: 5.0, cogs: 1.2, margin: 0.76, mix: 0.12 },
  { name: 'Popcorn', price: 7.0, cogs: 1.0, margin: 0.86, mix: 0.2 },
  { name: 'Watermelon Cup', price: 6.0, cogs: 1.5, margin: 0.75, mix: 0.14 },
  { name: 'Protein Cookie', price: 4.5, cogs: 1.2, margin: 0.73, mix: 0.1 },
  { name: 'Avocado Toast', price: 12.0, cogs: 3.5, margin: 0.71, mix: 0.12 },
  { name: 'Bartolotta Lobster Roll', price: 22.0, cogs: 9.0, margin: 0.59, mix: 0.1 },
]

// Computed from menu mix
export const AVG_ORDER_VALUE = MENU_ITEMS.reduce(
  (sum, item) => sum + item.price * item.mix,
  0
)
export const AVG_COGS = MENU_ITEMS.reduce(
  (sum, item) => sum + item.cogs * item.mix,
  0
)
export const BLENDED_MARGIN = 1 - AVG_COGS / AVG_ORDER_VALUE

export type SeasonType = 'summer' | 'spring' | 'fall' | 'winter'

export interface MonthData {
  month: string
  shortMonth: string
  dailyTraffic: number
  season: SeasonType
  opDays: number
}

export const SEASON_OP_DAYS: Record<SeasonType, number> = {
  summer: 30,
  spring: 25,
  fall: 25,
  winter: 15,
}

export const MONTHS: MonthData[] = [
  { month: 'January', shortMonth: 'Jan', dailyTraffic: 300, season: 'winter', opDays: 15 },
  { month: 'February', shortMonth: 'Feb', dailyTraffic: 350, season: 'winter', opDays: 15 },
  { month: 'March', shortMonth: 'Mar', dailyTraffic: 500, season: 'winter', opDays: 15 },
  { month: 'April', shortMonth: 'Apr', dailyTraffic: 800, season: 'spring', opDays: 25 },
  { month: 'May', shortMonth: 'May', dailyTraffic: 1200, season: 'spring', opDays: 25 },
  { month: 'June', shortMonth: 'Jun', dailyTraffic: 1800, season: 'summer', opDays: 30 },
  { month: 'July', shortMonth: 'Jul', dailyTraffic: 2000, season: 'summer', opDays: 30 },
  { month: 'August', shortMonth: 'Aug', dailyTraffic: 1900, season: 'summer', opDays: 30 },
  { month: 'September', shortMonth: 'Sep', dailyTraffic: 1100, season: 'fall', opDays: 25 },
  { month: 'October', shortMonth: 'Oct', dailyTraffic: 700, season: 'fall', opDays: 25 },
  { month: 'November', shortMonth: 'Nov', dailyTraffic: 400, season: 'winter', opDays: 15 },
  { month: 'December', shortMonth: 'Dec', dailyTraffic: 350, season: 'winter', opDays: 15 },
]

export const KEY_EVENTS = [
  {
    name: 'MKE Air & Water Show',
    impact: '1.2M+ lakefront visitors over 2 days, centered McKinley-Bradford',
  },
  {
    name: 'Bradford Beach Volleyball',
    impact: '35 courts, leagues 6 days/week May-Aug (Volley Life)',
  },
  {
    name: 'Summerfest Overflow',
    impact: '800K+ nearby attendance in July',
  },
  {
    name: 'Morning Lakefront Wellness',
    impact: 'Growing year-round traffic base',
  },
]

export const FOOT_TRAFFIC_STATS = [
  { label: 'Air & Water Show', stat: '1.2M+', basis: 'over 2 days' },
  { label: 'Bradford Beach Peak', stat: '5-8K/day', basis: 'peak season' },
  { label: 'McKinley Beach (est.)', stat: '500-2K/day', basis: 're-opened 2024' },
  { label: 'Year-Round Path', stat: 'Daily', basis: 'cyclists, runners, walkers' },
]

export function calculateMonthlyData(
  conversionRate: number,
  revSharePct: number,
  dailyOpsCost: number
) {
  return MONTHS.map((m) => {
    const dailyCustomers = Math.round(m.dailyTraffic * (conversionRate / 100))
    const dailyRevenue = dailyCustomers * AVG_ORDER_VALUE
    const dailyCogs = dailyCustomers * AVG_COGS

    const monthlyRevenue = dailyRevenue * m.opDays
    const monthlyCogs = dailyCogs * m.opDays
    const monthlyOpsCost = dailyOpsCost * m.opDays
    const monthlyNetProfit = monthlyRevenue - monthlyCogs - monthlyOpsCost
    const monthlyRevShare = monthlyRevenue * (revSharePct / 100)

    return {
      ...m,
      dailyCustomers,
      monthlyRevenue: Math.round(monthlyRevenue),
      monthlyCogs: Math.round(monthlyCogs),
      monthlyOpsCost: Math.round(monthlyOpsCost),
      monthlyNetProfit: Math.round(monthlyNetProfit),
      monthlyRevShare: Math.round(monthlyRevShare),
    }
  })
}

export function getSeasonColor(season: SeasonType): string {
  switch (season) {
    case 'summer':
      return 'var(--chart-1)'
    case 'spring':
      return 'var(--chart-4)'
    case 'fall':
      return 'var(--chart-2)'
    case 'winter':
      return 'var(--chart-3)'
  }
}
