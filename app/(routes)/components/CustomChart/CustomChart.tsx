"use client"

import React from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { useTheme } from "next-themes"
import { CustomChartProps } from "./CustomChart.types"

export default function CustomChart({ 
  data, 
  lightModeColor = "#3b82f6", 
  darkModeColor = "#adfa1d" 
}: CustomChartProps) {
  const { theme } = useTheme()

  const barColor = theme === "dark" ? darkModeColor : lightModeColor

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "rgba(30, 41, 59, 0.8)" : "#ffffff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          labelStyle={{ color: theme === "dark" ? "#ffffff" : "#1f2937" }}
          cursor={{ fill: theme === "dark" ? "rgba(55, 65, 81, 0.3)" : "rgba(243, 244, 246, 0.3)" }}
        />
        <Bar 
          dataKey="total" 
          fill={barColor} 
          radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  )
}