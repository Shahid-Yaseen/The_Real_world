"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Rocket, Star, ShoppingCart, Clock } from "lucide-react"
import { PaymentModal } from "./payment-modal"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [amount, setAmount] = useState("0.1")
  const [tokenAmount, setTokenAmount] = useState("5000")

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
    // Store payment details for the payment modal
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

    setShowPaymentModal(true)
  }

  if (!isOpen) return null

  return (
    <>
      <AnimatePresence>
        {isOpen && !showPaymentModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full sm:h-auto sm:max-w-4xl bg-gradient-to-b from-[#0a0a0a] to-[#111] overflow-hidden border-0 sm:border sm:border-[#f0b90b]/20 sm:rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-[#f0b90b]/20">
                <h2 className="text-2xl font-bold text-white">Checkout</h2>
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold gold-gradient-text mr-4">Why Buy $TRW?</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-120px)] sm:max-h-none">
                {/* Left Column - Purchase Details */}
                <div className="space-y-6">
                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#f0b90b]/10">
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">YOUR PURCHASE</h3>

                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center mr-4 border border-[#f0b90b]/30">
                        <span className="gold-gradient-text text-xl font-bold">TRW</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">$TRW Coins</p>
                        <p className="text-gray-400 text-sm">Presale Stage Price</p>
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-[#f0b90b]/10 pt-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base Coins</span>
                        <span className="text-white">{tokenAmount} $TRW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bonus</span>
                        <span className="text-[#f0b90b]">
                          +{Math.floor(Number(tokenAmount.replace(/,/g, "")) * 0.1).toLocaleString()} $TRW
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-[#f0b90b]/10 pt-3">
                        <span className="text-white font-semibold">Total Coins</span>
                        <span className="text-white font-semibold">
                          {Math.floor(Number(tokenAmount.replace(/,/g, "")) * 1.1).toLocaleString()} $TRW
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#f0b90b]/10">
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">PAYMENT DETAILS</h3>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="sol-amount" className="block text-sm text-gray-400 mb-2">
                          Amount in SOL
                        </label>
                        <div className="relative">
                          <input
                            id="sol-amount"
                            type="text"
                            value={amount}
                            onChange={handleAmountChange}
                            className="w-full bg-[#111] border border-[#f0b90b]/30 rounded-md p-3 pr-16 text-right text-white focus:outline-none focus:ring-1 focus:ring-[#f0b90b] focus:border-[#f0b90b]"
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f0b90b]">SOL</div>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400">Rate: 1 SOL = 50,000 $TRW</div>

                      <div className="bg-[#111] p-4 rounded-md border border-[#f0b90b]/20 flex items-start">
                        <div className="text-[#f0b90b] mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Coins will be credited to your wallet after payment confirmation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Benefits */}
                <div className="space-y-6">
                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#f0b90b]/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mr-3 border border-[#f0b90b]/30">
                        <Rocket size={20} className="text-[#f0b90b]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Early Investor Advantage</h3>
                    </div>
                    <p className="text-gray-400">Get in early with pre-launch pricing before exchange listing</p>
                  </div>

                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#f0b90b]/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mr-3 border border-[#f0b90b]/30">
                        <Star size={20} className="text-[#f0b90b]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Presale Bonuses</h3>
                    </div>
                    <p className="text-gray-400">Current stage offers 10% bonus coins on all purchases</p>
                  </div>

                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#f0b90b]/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mr-3 border border-[#f0b90b]/30">
                        <ShoppingCart size={20} className="text-[#f0b90b]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Limited Supply</h3>
                    </div>
                    <p className="text-gray-400">Only 40% of total supply available during presale</p>
                  </div>

                  <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#f0b90b]/10">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mr-3 border border-[#f0b90b]/30">
                        <Clock size={20} className="text-[#f0b90b]" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">Limited Time Offer</h3>
                    </div>
                    <p className="text-gray-400">Price increases in next stage</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#f0b90b]/20">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="text-[#f0b90b] hover:underline">
                      Terms & Conditions
                    </a>
                  </p>
                  <button
                    onClick={handleProceedToPayment}
                    className="gold-gradient-bg text-black font-semibold px-8 py-3 rounded-md hover:shadow-lg hover:shadow-[#f0b90b]/20 transition-all duration-300"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false)
            onClose()
          }}
          ethAmount={amount}
          tokenAmount={tokenAmount}
        />
      )}
    </>
  )
}
