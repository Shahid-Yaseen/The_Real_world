"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Presale", value: 40, color: "#F0B90B" }, // Main gold color
  { name: "Liquidity", value: 40, color: "#F7D060" }, // Lighter gold
  { name: "For Matrix", value: 20, color: "#C9810B" }, // Darker gold
]

export function TokenDistributionChart() {
  return (
    <motion.div
      className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] max-h-[80vh] px-2 sm:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => {
              return `${name}: ${(percent * 100).toFixed(0)}%`
            }}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${value}%`}
            contentStyle={{
              backgroundColor: "#111111",
              borderColor: "#f0b90b",
              borderRadius: "0.5rem",
              color: "white",
              boxShadow: "0 4px 12px rgba(240, 185, 11, 0.2)",
              padding: "8px 12px",
            }}
            labelStyle={{ color: "#f0b90b", fontWeight: "bold" }}
            itemStyle={{ color: "white" }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            formatter={(value) => <span className="text-gray-300">{value}</span>}
            wrapperStyle={{ color: "white" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
