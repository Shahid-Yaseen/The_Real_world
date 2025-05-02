"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <motion.div
      className="gradient-border mb-4 sm:mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 10px 30px -15px rgba(247, 208, 96, 0.3)" }}
    >
      <div className="gradient-border-content">
        <motion.button
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
          onClick={onClick}
          whileTap={{ scale: 0.99 }}
        >
          <span className="font-semibold text-white text-sm sm:text-base">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${isOpen ? "animated-gradient-bg" : "bg-[#1a1a1a]"}`}
          >
            <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ${isOpen ? "text-black" : "text-[#f0b90b]"}`} />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="px-4 sm:px-5 pb-4 sm:pb-5"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm sm:text-base text-gray-400">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What is THE REAL WORLD token?",
      answer:
        "THE REAL WORLD token ($TRW) is a cryptocurrency designed to provide holders with access to exclusive financial education, community resources, and wealth-building opportunities. It serves as the utility token for The Real World ecosystem.",
    },
    {
      question: "How do I participate in the presale?",
      answer:
        "To participate in the presale, connect your wallet on our website, enter the amount of ETH you wish to contribute, and complete the transaction. You will receive your $TRW tokens immediately after the transaction is confirmed.",
    },
    {
      question: "When will $TRW be listed on exchanges?",
      answer:
        "We plan to list $TRW on decentralized exchanges immediately after the presale ends. Centralized exchange listings will follow in Phase 3 of our roadmap, approximately Q3-Q4 2023.",
    },
    {
      question: "Is the smart contract audited?",
      answer:
        "Yes, our smart contract has been thoroughly audited by a reputable third-party security firm to ensure the safety of all participants. The audit report is available on our website.",
    },
    {
      question: "What utility does $TRW have?",
      answer:
        "TRW provides holders with access to exclusive educational content, community events, wealth-building resources, and governance rights within The Real World ecosystem. It also offers staking rewards and other financial benefits.",
    },
  ]

  return (
    <div>
      {faqItems.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
