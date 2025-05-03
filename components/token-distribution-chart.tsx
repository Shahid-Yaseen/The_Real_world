"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { motion } from "framer-motion"

const data = [
  { name: "Presale", value: 40, color: "#F0B90B" },
  { name: "Liquidity", value: 40, color: "#F7D060" },
  { name: "For Matrix", value: 20, color: "#C9810B" },
]

export function TokenDistributionChart() {
  // Determine outerRadius based on screen size
  const getOuterRadius = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? 50 : 80
    }
    return 80
  }

  // Label for larger screens (no wrapping)
  const largeScreenLabel = ({ name, percent }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

  // Custom label for small screens (with wrapping)
  const renderSmallScreenLabel = ({ name, percent, cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 30; // Increased distance for better positioning
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Adjust "Presale" label position to avoid overlap
    const adjustedY = name === "Presale" ? y - 10 : y; // Shift Presale label up slightly

    return (
      <text
        x={x}
        y={adjustedY}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12px" // Matches legend text-xs
        fontWeight="500"
      >
        <tspan x={x} dy="0">{name}</tspan>
        <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan>
      </text>
    );
  };

  // Determine which label to use based on screen size
  const getLabel = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return renderSmallScreenLabel;
    }
    return largeScreenLabel;
  };

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
            labelLineLength={typeof window !== "undefined" && window.innerWidth < 640 ? 20 : 15}
            outerRadius={getOuterRadius()}
            fill="#8884d8"
            dataKey="value"
            label={getLabel()}
            labelStyle={
              typeof window !== "undefined" && window.innerWidth >= 640
                ? { fontSize: "14px", fill: "#fff", fontWeight: "500" }
                : undefined
            }
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
            formatter={(value) => <span className="text-gray-300 text-xs sm:text-sm">{value}</span>}
            wrapperStyle={{ color: "white", paddingTop: "10px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
