"use client"

import { motion } from "framer-motion"

interface DistributionItemProps {
  label: string
  percentage: number
  delay: number
}

function DistributionItem({ label, percentage, delay }: DistributionItemProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex justify-between mb-1 sm:mb-2">
        <span className="text-sm sm:text-base text-gray-300">{label}</span>
        <span className="gold-gradient-text font-medium text-sm sm:text-base">{percentage}%</span>
      </div>
      <div className="h-2 sm:h-3 bg-[#1E293B] rounded-full overflow-hidden">
        <motion.div
          className="h-2 sm:h-3 animated-gradient-bg rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  )
}

export function TokenDistribution() {
  return (
    <div>
      <DistributionItem label="Presale" percentage={40} delay={0.2} />
      <DistributionItem label="Liquidity" percentage={30} delay={0.3} />
      <DistributionItem label="Development" percentage={15} delay={0.4} />
      <DistributionItem label="Marketing" percentage={10} delay={0.5} />
      <DistributionItem label="Team" percentage={5} delay={0.6} />
    </div>
  )
}
