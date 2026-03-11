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
  { name: 'Bartolotta Lobster Roll', price: 39.0, cogs: 14.0, margin: 0.64, mix: 0.1 }, // price from Harbor House; COGS estimated ~36% food cost — update when actual known
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

// Merch items — $3 stickers / $12 tote / $35 tee, all 30% margin
export interface MerchItem {
  name: string
  price: number
  margin: number
  mix: number // share of merch transactions
}
export const MERCH_ITEMS: MerchItem[] = [
  { name: 'Sticker', price: 3, margin: 0.30, mix: 0.60 },
  { name: 'Tote', price: 12, margin: 0.30, mix: 0.25 },
  { name: 'Tee', price: 35, margin: 0.30, mix: 0.15 },
]
export const MERCH_AVG_ORDER = MERCH_ITEMS.reduce(
  (sum, item) => sum + item.price * item.mix,
  0
) // ≈ $10.05 blended
export const MERCH_MARGIN = 0.30

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
  dailyOpsCost: number,
  merchConvRate: number = 0
) {
  return MONTHS.map((m) => {
    // Food & beverage
    const dailyFoodCustomers = Math.round(m.dailyTraffic * (conversionRate / 100))
    const dailyFoodRevenue = dailyFoodCustomers * AVG_ORDER_VALUE
    const dailyFoodCogs = dailyFoodCustomers * AVG_COGS

    // Merch
    const dailyMerchCustomers = Math.round(m.dailyTraffic * (merchConvRate / 100))
    const dailyMerchRevenue = dailyMerchCustomers * MERCH_AVG_ORDER
    const dailyMerchProfit = dailyMerchRevenue * MERCH_MARGIN

    const monthlyFoodRevenue = dailyFoodRevenue * m.opDays
    const monthlyFoodCogs = dailyFoodCogs * m.opDays
    const monthlyMerchRevenue = dailyMerchRevenue * m.opDays
    const monthlyMerchProfit = dailyMerchProfit * m.opDays
    const monthlyOpsCost = dailyOpsCost * m.opDays

    const monthlyRevenue = monthlyFoodRevenue + monthlyMerchRevenue
    const monthlyNetProfit =
      (monthlyFoodRevenue - monthlyFoodCogs) + monthlyMerchProfit - monthlyOpsCost
    const monthlyRevShare = monthlyRevenue * (revSharePct / 100)

    return {
      ...m,
      dailyCustomers: dailyFoodCustomers,
      monthlyRevenue: Math.round(monthlyFoodRevenue),
      monthlyMerchRevenue: Math.round(monthlyMerchRevenue),
      monthlyCogs: Math.round(monthlyFoodCogs),
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
