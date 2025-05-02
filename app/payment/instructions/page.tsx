"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Send, CreditCard, QrCode } from "lucide-react"
import QRCode from "react-qr-code"
import Link from "next/link"
import { CopyButton } from "@/components/wallet/copy-button"

export default function PaymentInstructionsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"wallet" | "qr">("wallet")
  const [paymentDetails, setPaymentDetails] = useState<{ ethAmount: string; tokenAmount: string }>({
    ethAmount: "0.1",
    tokenAmount: "220000",
  })

  // Generate a random wallet address and order ID
  const walletAddress =
    "0x" + Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")

  const orderId = "#" + Math.floor(Math.random() * 10000000000).toString()

  useEffect(() => {
    // Retrieve payment details from sessionStorage
    const storedDetails = sessionStorage.getItem("paymentDetails")
    if (storedDetails) {
      setPaymentDetails(JSON.parse(storedDetails))
    }
  }, [])

  const handleSentPayment = () => {
    // Store payment details for the waiting page
    sessionStorage.setItem(
      "paymentConfirmation",
      JSON.stringify({
        ethAmount: paymentDetails.ethAmount,
        tokenAmount: paymentDetails.tokenAmount,
        walletAddress,
        orderId,
      }),
    )

    router.push("/payment/waiting")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-[#f0b90b]/20">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center">
          <Link href="/payment/checkout" className="flex items-center text-[#f0b90b] mr-4">
            <ArrowLeft size={18} className="mr-2" />
            <span className="text-sm sm:text-base">Back</span>
          </Link>
          <h1 className="text-lg sm:text-xl font-bold text-white">Payment Instructions</h1>
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
            <div className="h-1 w-6 sm:w-12 bg-gray-600"></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              3
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">Step 2 of 3</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto border-b border-[#f0b90b]/20">
        <div className="flex">
          <button
            className={`flex-1 py-3 sm:py-4 px-3 sm:px-6 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base ${
              activeTab === "wallet"
                ? "bg-[#f0b90b]/10 text-[#f0b90b] border-b-2 border-[#f0b90b]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("wallet")}
          >
            <CreditCard size={16} className="sm:w-5 sm:h-5" />
            <span>Crypto Wallet</span>
          </button>
          <button
            className={`flex-1 py-3 sm:py-4 px-3 sm:px-6 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base ${
              activeTab === "qr"
                ? "bg-[#f0b90b]/10 text-[#f0b90b] border-b-2 border-[#f0b90b]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("qr")}
          >
            <QrCode size={16} className="sm:w-5 sm:h-5" />
            <span>QR Code</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === "wallet" ? (
          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Send Payment</h3>
                <span className="bg-[#f0b90b]/20 text-[#f0b90b] text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  Awaiting
                </span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Order ID: {orderId}</p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <Send size={14} className="sm:w-4 sm:h-4 text-[#f0b90b] mr-2" />
                <p className="text-gray-300 text-sm sm:text-base">Send exactly this amount:</p>
              </div>
              <div className="relative">
                <div className="bg-[#0a0a0a] border border-[#f0b90b]/30 rounded-md p-3 sm:p-4 flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#111] rounded-full flex items-center justify-center mr-2 sm:mr-3 border border-[#f0b90b]/30">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-4 sm:h-4"
                    >
                      <path
                        d="M11.767 19.089c4.924.868 9.593-2.535 10.461-7.599.868-5.064-2.438-9.741-7.362-10.61-4.923-.868-9.593 2.535-10.46 7.599-.869 5.064 2.437 9.742 7.361 10.61z"
                        fill="#f0b90b"
                      />
                      <path
                        d="M9.89 8.703l1.901.335-.35 1.982-1.902-.335.35-1.982zm4.162.734l1.902.335-.35 1.982-1.901-.335.35-1.982zm-4.803 2.394l1.902.335-.35 1.982-1.902-.335.35-1.982zm3.233.57l1.902.335-.35 1.982-1.902-.335.35-1.982z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-base sm:text-xl font-mono text-white">{paymentDetails.ethAmount}</div>
                    <div className="text-xs text-gray-400">ETH</div>
                  </div>
                  <CopyButton text={paymentDetails.ethAmount} />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <CreditCard size={14} className="sm:w-4 sm:h-4 text-[#f0b90b] mr-2" />
                <p className="text-gray-300 text-sm sm:text-base">To this wallet address:</p>
              </div>
              <div className="relative">
                <div className="bg-[#0a0a0a] border border-[#f0b90b]/30 rounded-md p-3 sm:p-4">
                  <div className="font-mono text-xs sm:text-sm text-white break-all">{walletAddress}</div>
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <CopyButton text={walletAddress} />
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#f0b90b]/20 rounded-md p-4 sm:p-5">
              <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Payment Steps</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Copy the address and amount above</p>
                </div>
                <div className="flex">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f0b9কিন্তonb]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Send payment from your wallet or exchange</p>
                </div>
                <div className="flex">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Wait for blockchain confirmation</p>
                </div>
                <div className="flex">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Click 'I've Sent Payment' after sending</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 sm:py-8 space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            <div className="bg-white p-3 sm:p-4 rounded-lg">
              <QRCode
                value={`ethereum:${walletAddress}?amount=${paymentDetails.ethAmount}`}
                size={180}
                className="sm:w-[240px] sm:h-[240px]"
                level="H"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-300 mb-2 text-sm sm:text-base">Scan with your wallet app</p>
              <p className="text-xs sm:text-sm text-gray-400">
                Send exactly <span className="text-[#f0b90b] font-semibold">{paymentDetails.ethAmount} ETH</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 border-t border-[#f0b90b]/20 mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
          <Link
            href="/payment/checkout"
            className="py-2.5 sm:py-3 px-4 sm:px-6 text-center text-gray-400 hover:text-white transition-colors border border-gray-700 rounded-md text-sm sm:text-base"
          >
            Cancel Order
          </Link>
          <motion.button
            onClick={handleSentPayment}
            className="py-2.5 sm:py-3 px-4 sm:px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            I've Sent Payment
          </motion.button>
        </div>
      </div>
    </div>
  )
}
