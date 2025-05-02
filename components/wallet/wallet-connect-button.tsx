"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Wallet } from "lucide-react"

interface WalletConnectButtonProps {
  className?: string
}

export function WalletConnectButton({ className = "" }: WalletConnectButtonProps) {
  const router = useRouter()

  const handleConnect = () => {
    router.push("/payment/checkout")
  }

  return (
    <motion.button
      className={`gold-gradient-bg text-black font-semibold px-4 py-2 lg:px-6 lg:py-2 rounded-md hover:shadow-lg hover:shadow-[#f0b90b]/20 transition-all duration-300 text-sm lg:text-base flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleConnect}
    >
      <Wallet size={16} />
      <span>Connect Wallet</span>
    </motion.button>
  )
}
