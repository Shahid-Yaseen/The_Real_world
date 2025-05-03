"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface RoadmapPhaseProps {
  title: string
  period: string
  items: string[]
  delay: number
}

function RoadmapPhase({ title, period, items, delay }: RoadmapPhaseProps) {
  return (
    <motion.div
      className="relative pl-6 sm:pl-8 pb-8 sm:pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full animated-gradient-bg shadow-lg shadow-[#f0b90b]/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      ></motion.div>

      {/* Timeline line */}
      <motion.div
        className="absolute left-2 sm:left-2.5 top-4 sm:top-5 bottom-0 w-0.5 bg-gradient-to-b from-[#f7d060] to-[#0a0a0a]"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1, delay: delay + 0.3 }}
      ></motion.div>

      <div>
        <h3 className="text-lg sm:text-xl font-bold gold-gradient-text">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{period}</p>

        <motion.div className="gradient-border" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
          <div className="gradient-border-content p-3 sm:p-5">
            <ul className="space-y-3 sm:space-y-4">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: delay + 0.4 + index * 0.1 }}
                  whileHover={{ x: 3 }}
                >
                  <span className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 mr-2 sm:mr-3 rounded-full animated-gradient-bg flex-shrink-0 flex items-center justify-center">
                    <Check className="w-2 h-2 sm:w-3 sm:h-3 text-black" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Roadmap() {
  return (
    <div className="max-w-3xl mx-auto">
      <RoadmapPhase
        title="Phase 1: Launch"
        period="Q1 2025"
        items={[
          "Website launch and social media presence",
          "Smart contract development and audit",
          "Presale launch",
          "Initial marketing campaign",
        ]}
        delay={0.2}
      />

      <RoadmapPhase
        title="Phase 2: Growth"
        period="Q2 2025"
        items={[
          "DEX listing and liquidity provision",
          "Community expansion initiatives",
          "Launch of exclusive content platform",
          "Partnership announcements",
        ]}
        delay={0.4}
      />

      <RoadmapPhase
        title="Phase 3: Expansion"
        period="Q3-Q4 2025"
        items={["CEX listings", "Mobile app development", "Global marketing expansion", "Real World exclusive events"]}
        delay={0.6}
      />

      <RoadmapPhase
        title="Phase 4: Ecosystem"
        period="2026"
        items={[
          "Launch of The Real World DeFi platform",
          "NFT collection release",
          "Cross-chain integration",
          "Real-world business integrations",
        ]}
        delay={0.8}
      />
    </div>
  )
}
