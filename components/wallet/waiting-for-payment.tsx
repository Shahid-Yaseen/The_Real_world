"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface WaitingForPaymentProps {
  isOpen: boolean
  onClose: () => void
  ethAmount?: string
  tokenAmount?: string
  solAmount?: string
  baseTokenAmount?: string
  bonusTokenAmount?: string
  totalTokenAmount?: string
  walletAddress: string
  orderId: string
}

export function WaitingForPayment({
  isOpen,
  onClose,
  ethAmount,
  tokenAmount,
  solAmount,
  baseTokenAmount,
  bonusTokenAmount,
  totalTokenAmount,
  walletAddress,
  orderId,
}: WaitingForPaymentProps) {
  const [timeRemaining, setTimeRemaining] = useState(3600) // 1 hour in seconds
  const [isProcessing, setIsProcessing] = useState(true)
  const [paymentData, setPaymentData] = useState({
    solAmount: solAmount || ethAmount || "0.1",
    baseTokenAmount: baseTokenAmount || "0",
    bonusTokenAmount: bonusTokenAmount || "0",
    totalTokenAmount: totalTokenAmount || tokenAmount || "0",
    walletAddress,
    orderId,
  })

  useEffect(() => {
    // If we don't have all the token amounts but have tokenAmount, calculate them
    if (tokenAmount && (!baseTokenAmount || !bonusTokenAmount || !totalTokenAmount)) {
      try {
        const baseAmount = Number(tokenAmount.replace(/,/g, ""))
        const bonusAmount = Math.floor(baseAmount * 0.1)
        const totalAmount = baseAmount + bonusAmount

        setPaymentData({
          solAmount: solAmount || ethAmount || "0.1",
          baseTokenAmount: baseAmount.toLocaleString(),
          bonusTokenAmount: bonusAmount.toLocaleString(),
          totalTokenAmount: totalAmount.toLocaleString(),
          walletAddress,
          orderId,
        })
      } catch (e) {
        console.error("Error calculating token amounts:", e)
      }
    }

    // Store payment details in sessionStorage for persistence
    sessionStorage.setItem("paymentConfirmation", JSON.stringify(paymentData))

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Simulate payment processing
    const processingTimer = setTimeout(() => {
      setIsProcessing(false)
    }, 10000) // 10 seconds for demo purposes

    return () => {
      clearInterval(timer)
      clearTimeout(processingTimer)
    }
  }, [tokenAmount, baseTokenAmount, bonusTokenAmount, totalTokenAmount, solAmount, ethAmount, walletAddress, orderId])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full h-full sm:h-auto sm:max-w-lg bg-gradient-to-b from-[#0a0a0a] to-[#111] overflow-hidden border-0 sm:border sm:border-[#f0b90b]/20 sm:rounded-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="p-4 sm:p-8 flex flex-col items-center overflow-y-auto max-h-[100vh] sm:max-h-none">
          {/* Loading spinner */}
          <div className="mb-6">
            {isProcessing ? (
              <div className="w-16 h-16 border-4 border-[#f0b90b]/20 border-t-[#f0b90b] rounded-full animate-spin"></div>
            ) : (
              <div className="w-16 h-16 bg-[#f0b90b]/20 rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#f0b90b]"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            )}
          </div>

          {/* Time remaining */}
          <div className="flex items-center mb-4 text-[#f0b90b]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="ml-2">Time remaining: {formatTime(timeRemaining)}</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            {isProcessing ? "Waiting for Payment" : "Payment Received"}
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Order {paymentData.orderId} {isProcessing ? "is being processed.." : "has been confirmed!"}
          </p>

          {isProcessing ? (
            <div className="text-center text-gray-300 mb-6">
              <p>If payment has not been completed, please do so at your earliest convenience.</p>
              <p className="mt-2">
                If you have already made the payment, please wait while we process your transaction.
              </p>
            </div>
          ) : (
            <div className="text-center text-gray-300 mb-6">
              <p>Your transaction has been confirmed and your tokens have been allocated to your wallet.</p>
              <p className="mt-2 text-[#f0b90b]">Thank you for participating in the TRW presale!</p>
            </div>
          )}

          <div className="w-full bg-[#0a0a0a] border border-[#f0b90b]/20 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-400">Amount:</div>
              <div className="text-right text-white font-mono">{paymentData.solAmount} SOL</div>

              <div className="text-gray-400">Address:</div>
              <div className="text-right text-[#f0b90b] font-mono text-xs truncate">{paymentData.walletAddress}</div>

              <div className="text-gray-400">Coins:</div>
              <div className="text-right text-white">{paymentData.baseTokenAmount} $TRW</div>

              <div className="text-gray-400">Bonus Coins:</div>
              <div className="text-right text-[#f0b90b]">+{paymentData.bonusTokenAmount} $TRW</div>

              <div className="text-gray-400">Total Coins:</div>
              <div className="text-right text-white">{paymentData.totalTokenAmount} $TRW</div>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">
              If you're new to cryptocurrency, check out our{" "}
              <Link href="#" className="text-[#f0b90b] hover:underline">
                How to Buy
              </Link>{" "}
              guide to get started.
            </p>
          </div>

          <button
            onClick={onClose}
            className="gold-gradient-bg text-black font-semibold px-8 py-3 rounded-md hover:shadow-lg hover:shadow-[#f0b90b]/20 transition-all duration-300"
          >
            Back to Dashboard
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
