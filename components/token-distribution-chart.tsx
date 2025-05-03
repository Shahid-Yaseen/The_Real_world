"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Presale", value: 40, color: "#F0B90B" },
  { name: "Liquidity", value: 40, color: "#F7D060" },
  { name: "For Matrix", value: 20, color: "#C9810B" },
]

export function TokenDistributionChart() {
  return (
    <motion.div
      className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] max-h-[70vh] px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="85%"
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent, cx, cy, midAngle, outerRadius, index }) => {
              const RADIAN = Math.PI / 180
              const radius = outerRadius * 0.65

              // Calculate label position inside the slice
              // Adjust position for Liquidity label specifically
              let labelX = cx + radius * Math.cos(-midAngle * RADIAN)
              let labelY = cy + radius * Math.sin(-midAngle * RADIAN)

              // Push the Liquidity label 2px inward
              if (name === "Liquidity") {
                // Calculate the direction vector (normalized)
                const dx = Math.cos(-midAngle * RADIAN)
                const dy = Math.sin(-midAngle * RADIAN)
                // Move 2px inward along this vector
                labelX = labelX - dx * 2
                labelY = labelY - dy * 2
              }

              // Split "For Matrix" label into two lines for better fit
              const displayName =
                name === "For Matrix"
                  ? ["For Matrix", `${(percent * 100).toFixed(0)}%`]
                  : [`${name}: ${(percent * 100).toFixed(0)}%`]

              return (
                <g>
                  <text
                    x={labelX}
                    y={labelY}
                    fill="#000" // Explicitly set to white as requested
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="clamp(12px, 1.4vw, 16px)"
                    fontWeight="bold"
                    stroke="#000" // Black stroke for contrast
                    strokeWidth={0.5}
                  >
                    {displayName.map((line, i) => (
                      <tspan x={labelX} dy={i === 0 ? "-0.5em" : "1em"} key={i}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                </g>
              )
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
            wrapperStyle={{ color: "white", paddingTop: "20px", fontSize: "clamp(10px, 1.5vw, 14px)" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
