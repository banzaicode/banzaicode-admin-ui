import { LucideIcon } from 'lucide-react'

export interface ChartData {
  name: string
  total: number
}

export interface CustomChartProps {
  data: ChartData[]
  lightModeColor?: string
  darkModeColor?: string
  icon?: LucideIcon
  title?: string
}