"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function WaitingForPaymentPage() {
  const router = useRouter()
  const [timeRemaining, setTimeRemaining] = useState(3600) // 1 hour in seconds
  const [isProcessing, setIsProcessing] = useState(true)
  const [paymentDetails, setPaymentDetails] = useState<{
    ethAmount: string
    tokenAmount: string
    walletAddress: string
    orderId: string
  }>({
    ethAmount: "0.1",
    tokenAmount: "220000",
    walletAddress: "0x0000000000000000000000000000000000000000",
    orderId: "#0000000",
  })

  useEffect(() => {
    // Retrieve payment details from sessionStorage
    const storedDetails = sessionStorage.getItem("paymentConfirmation")
    if (storedDetails) {
      setPaymentDetails(JSON.parse(storedDetails))
    }

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
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-[#f0b90b]/20">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center">
          <Link href="/payment/instructions" className="flex items-center text-[#f0b90b] mr-4">
            <ArrowLeft size={18} className="mr-2" />
            <span className="text-sm sm:text-base">Back</span>
          </Link>
          <h1 className="text-lg sm:text-xl font-bold text-white">
            {isProcessing ? "Waiting for Payment" : "Payment Confirmation"}
          </h1>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f0b90b] flex items-center justify-center text-black font-bold text-xs sm:text-sm">
              1
            </div>
            <div className="h-1 w-6 sm:w-12 bg-[#f0b90b]"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f0b90b] flex items-center justify-center text-black font-bold text-xs sm:text-sm">
              2
            </div>
            <div className="h-1 w-6 sm:w-12 bg-[#f0b90b]"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f0b90b] flex items-center justify-center text-black font-bold text-xs sm:text-sm">
              3
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">Step 3 of 3</div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
        {/* Loading spinner */}
        <div className="mb-4 sm:mb-6">
          {isProcessing ? (
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-3 sm:border-4 border-[#f0b90b]/20 border-t-[#f0b90b] rounded-full animate-spin"></div>
          ) : (
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f0b90b]/20 rounded-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#f0b90b] sm:w-8 sm:h-8"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          )}
        </div>

        {/* Time remaining */}
        {isProcessing && (
          <div className="flex items-center mb-3 sm:mb-4 text-[#f0b90b]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-5 sm:h-5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="ml-2 text-sm sm:text-base">Time remaining: {formatTime(timeRemaining)}</span>
          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {isProcessing ? "Waiting for Payment" : "Payment Received"}
        </h2>

        <p className="text-gray-400 text-center mb-4 sm:mb-6 text-sm sm:text-base">
          Order {paymentDetails.orderId} {isProcessing ? "is being processed.." : "has been confirmed!"}
        </p>

        {isProcessing ? (
          <div className="text-center text-gray-300 mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm">
              If payment has not been completed, please do so at your earliest convenience.
            </p>
            <p className="mt-2 text-xs sm:text-sm">
              If you have already made the payment, please wait while we process your transaction.
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-300 mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm">
              Your transaction has been confirmed and your tokens have been allocated to your wallet.
            </p>
            <p className="mt-2 text-[#f0b90b] text-xs sm:text-sm">Thank you for participating in the TRW presale!</p>
          </div>
        )}

        <div className="w-full bg-[#0a0a0a] border border-[#f0b90b]/20 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="text-gray-400">Amount:</div>
            <div className="text-right text-white font-mono">{paymentDetails.ethAmount} ETH</div>

            <div className="text-gray-400">Address:</div>
            <div className="text-right text-[#f0b90b] font-mono text-xs truncate">{paymentDetails.walletAddress}</div>

            <div className="text-gray-400">Coins:</div>
            <div className="text-right text-white">{paymentDetails.tokenAmount.split(".")[0]} $TRW</div>

            <div className="text-gray-400">Bonus Coins:</div>
            <div className="text-right text-[#f0b90b]">
              +{Math.floor(Number.parseInt(paymentDetails.tokenAmount.replace(/,/g, "")) * 0.1).toLocaleString()} $TRW
            </div>

            <div className="text-gray-400">Total Coins:</div>
            <div className="text-right text-white">{paymentDetails.tokenAmount} $TRW</div>
          </div>
        </div>

        <div className="text-center mb-4 sm:mb-6">
          <p className="text-gray-400 text-xs sm:text-sm">
            If you're new to cryptocurrency, check out our{" "}
            <Link href="#" className="text-[#f0b90b] hover:underline">
              How to Buy
            </Link>{" "}
            guide to get started.
          </p>
        </div>

        <motion.button
          onClick={() => router.push("/")}
          className="gold-gradient-bg text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:shadow-lg hover:shadow-[#f0b90b]/20 transition-all duration-300 text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Dashboard
        </motion.button>
      </div>
    </div>
  )
}
