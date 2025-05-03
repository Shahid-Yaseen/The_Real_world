"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Rocket, Star, ShoppingCart, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("0.1")
  const [tokenAmount, setTokenAmount] = useState("5000")

  useEffect(() => {
    // Load payment details from sessionStorage if available
    const storedDetails = sessionStorage.getItem("paymentDetails")
    if (storedDetails) {
      try {
        const details = JSON.parse(storedDetails)
        if (details.solAmount) setAmount(details.solAmount)
        if (details.baseTokenAmount) setTokenAmount(details.baseTokenAmount)
      } catch (e) {
        console.error("Error parsing payment details:", e)
      }
    }
  }, [])

  // Calculate token amount based on SOL input (1 SOL = 50,000 TRW)
  const calculateTokens = (solAmount: string) => {
    if (!solAmount || isNaN(Number(solAmount))) return "0"
    const tokens = Number(solAmount) * 50000
    return tokens.toLocaleString("en-US", { maximumFractionDigits: 0 })
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(value)
    setTokenAmount(calculateTokens(value))
  }

  const handleProceedToPayment = () => {
    // Parse the token amount without commas for consistent calculations
    const baseTokens = Number(tokenAmount.replace(/,/g, ""))
    const bonusTokens = Math.floor(baseTokens * 0.1)
    const totalTokens = baseTokens + bonusTokens

    // Store payment details in sessionStorage to pass to the next page
    sessionStorage.setItem(
      "paymentDetails",
      JSON.stringify({
        solAmount: amount,
        baseTokenAmount: baseTokens.toLocaleString(),
        bonusTokenAmount: bonusTokens.toLocaleString(),
        totalTokenAmount: totalTokens.toLocaleString(),
        rate: "50,000",
      }),
    )

    router.push("/payment/instructions")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-[#f0b90b]/20">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-2 sm:mb-0">
            <Link href="/" className="flex items-center text-[#f0b90b] mr-4">
              <ArrowLeft size={18} className="mr-2" />
              <span className="text-sm sm:text-base">Back</span>
            </Link>
            <h1 className="text-lg sm:text-xl font-bold text-white">Checkout</h1>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold gold-gradient-text">Why Buy $TRW?</h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column - Purchase Details */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 border border-[#f0b90b]/10">
              <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">YOUR PURCHASE</h3>

              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#111] rounded-full flex items-center justify-center mr-3 sm:mr-4 border border-[#f0b90b]/30">
                  <span className="gold-gradient-text text-lg sm:text-xl font-bold">TRW</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-base sm:text-lg">$TRW Coins</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Presale Stage Price</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 border-t border-[#f0b90b]/10 pt-3 sm:pt-4">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-400">Base Coins</span>
                  <span className="text-white">{tokenAmount} $TRW</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-400">Bonus</span>
                  <span className="text-[#f0b90b]">
                    +{Math.floor(Number(tokenAmount.replace(/,/g, "")) * 0.1).toLocaleString()} $TRW
                  </span>
                </div>
                <div className="flex justify-between border-t border-[#f0b90b]/10 pt-2 sm:pt-3 text-sm sm:text-base">
                  <span className="text-white font-semibold">Total Coins</span>
                  <span className="text-white font-semibold">
                    {Math.floor(Number(tokenAmount.replace(/,/g, "")) * 1.1).toLocaleString()} $TRW
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 border border-[#f0b90b]/10">
              <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">PAYMENT DETAILS</h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="sol-amount" className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                    Amount in SOL
                  </label>
                  <div className="relative">
                    <input
                      id="sol-amount"
                      type="text"
                      value={amount}
                      onChange={handleAmountChange}
                      className="w-full bg-[#111] border border-[#f0b90b]/30 rounded-md p-2 sm:p-3 pr-12 sm:pr-16 text-right text-white focus:outline-none focus:ring-1 focus:ring-[#f0b90b] focus:border-[#f0b90b] text-sm sm:text-base"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f0b90b] text-sm sm:text-base">
                      SOL
                    </div>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-gray-400">Rate: 1 SOL = 50,000 $TRW</div>

                <div className="bg-[#111] p-3 sm:p-4 rounded-md border border-[#f0b90b]/20 flex items-start">
                  <div className="text-[#f0b90b] mr-2 sm:mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-4 sm:h-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Coins will be credited to your wallet after payment confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 border border-[#f0b90b]/10">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#111] rounded-full flex items-center justify-center mr-2 sm:mr-3 border border-[#f0b90b]/30">
                  <Rocket size={16} className="sm:w-5 sm:h-5 text-[#f0b90b]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">Early Investor Advantage</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Get in early with pre-launch pricing before exchange listing
              </p>
            </div>

            <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 border border-[#f0b90b]/10">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#111] rounded-full flex items-center justify-center mr-2 sm:mr-3 border border-[#f0b90b]/30">
                  <Star size={16} className="sm:w-5 sm:h-5 text-[#f0b90b]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">Presale Bonuses</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Current stage offers 10% bonus coins on all purchases</p>
            </div>

            <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 border border-[#f0b90b]/10">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#111] rounded-full flex items-center justify-center mr-2 sm:mr-3 border border-[#f0b90b]/30">
                  <ShoppingCart size={16} className="sm:w-5 sm:h-5 text-[#f0b90b]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">Limited Supply</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Only 40% of total supply available during presale</p>
            </div>

            <div className="bg-[#0a0a0a] rounded-lg p-4 sm:p-6 border border-[#f0b90b]/10">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#111] rounded-full flex items-center justify-center mr-2 sm:mr-3 border border-[#f0b90b]/30">
                  <Clock size={16} className="sm:w-5 sm:h-5 text-[#f0b90b]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">Limited Time Offer</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Price increases in next stage</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#f0b90b]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
              By proceeding, you agree to our{" "}
              <a href="#" className="text-[#f0b90b] hover:underline">
                Terms & Conditions
              </a>
            </p>
            <motion.button
              onClick={handleProceedToPayment}
              className="gold-gradient-bg text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:shadow-lg hover:shadow-[#f0b90b]/20 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Proceed to Payment
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
