"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CreditCard, QrCode } from "lucide-react"
import QRCode from "react-qr-code"
import { WaitingForPayment } from "./waiting-for-payment"
import { CopyButton } from "./copy-button"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  ethAmount: string
  tokenAmount: string
}

export function PaymentModal({ isOpen, onClose, ethAmount, tokenAmount }: PaymentModalProps) {
  const [activeTab, setActiveTab] = useState<"wallet" | "qr">("wallet")
  const [showWaitingScreen, setShowWaitingScreen] = useState(false)

  // Generate a random wallet address and order ID
  const walletAddress =
    "0x" + Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")

  const orderId = "#" + Math.floor(Math.random() * 10000000000).toString()

  // Calculate token values consistently
  const baseTokens = Number(tokenAmount.replace(/,/g, ""))
  const bonusTokens = Math.floor(baseTokens * 0.1)
  const totalTokens = baseTokens

  const handleSentPayment = () => {
    // Store payment details for the waiting page
    sessionStorage.setItem(
      "paymentConfirmation",
      JSON.stringify({
        solAmount: ethAmount,
        baseTokenAmount: baseTokens.toLocaleString(),
        bonusTokenAmount: bonusTokens.toLocaleString(),
        totalTokenAmount: totalTokens.toLocaleString(),
        walletAddress,
        orderId,
      }),
    )

    setShowWaitingScreen(true)
  }

  if (!isOpen) return null

  if (showWaitingScreen) {
    return (
      <WaitingForPayment
        isOpen={showWaitingScreen}
        onClose={onClose}
        solAmount={ethAmount}
        baseTokenAmount={baseTokens.toLocaleString()}
        bonusTokenAmount={bonusTokens.toLocaleString()}
        totalTokenAmount={totalTokens.toLocaleString()}
        walletAddress={walletAddress}
        orderId={orderId}
      />
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
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
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#f0b90b]/20">
              <h2 className="text-2xl font-bold text-white">Payment Instructions</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close">
                <X size={24} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#f0b90b]/20">
              <button
                className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 ${
                  activeTab === "wallet"
                    ? "bg-[#f0b90b]/10 text-[#f0b90b] border-b-2 border-[#f0b90b]"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("wallet")}
              >
                <CreditCard size={18} />
                <span>Crypto Wallet</span>
              </button>
              <button
                className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 ${
                  activeTab === "qr"
                    ? "bg-[#f0b90b]/10 text-[#f0b90b] border-b-2 border-[#f0b90b]"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("qr")}
              >
                <QrCode size={18} />
                <span>QR Code</span>
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-160px)] sm:max-h-none">
              {activeTab === "wallet" ? (
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-white">Send Payment</h3>
                      <span className="bg-[#f0b90b]/20 text-[#f0b90b] text-xs font-medium px-3 py-1 rounded-full">
                        Awaiting
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Order ID: {orderId}</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Send size={16} className="text-[#f0b90b] mr-2" />
                      <p className="text-gray-300">Send exactly this amount:</p>
                    </div>
                    <div className="relative">
                      <div className="bg-[#0a0a0a] border border-[#f0b90b]/30 rounded-md p-4 flex items-center">
                        <div className="w-8 h-8 bg-[#111] rounded-full flex items-center justify-center mr-3 border border-[#f0b90b]/30">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <div className="text-xl font-mono text-white">{ethAmount}</div>
                          <div className="text-xs text-gray-400">SOL</div>
                        </div>
                        <CopyButton text={ethAmount} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <CreditCard size={16} className="text-[#f0b90b] mr-2" />
                      <p className="text-gray-300">To this wallet address:</p>
                    </div>
                    <div className="relative">
                      <div className="bg-[#0a0a0a] border border-[#f0b90b]/30 rounded-md p-4">
                        <div className="font-mono text-sm text-white break-all">{walletAddress}</div>
                      </div>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <CopyButton text={walletAddress} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0a0a0a] border border-[#f0b90b]/20 rounded-md p-5">
                    <h4 className="text-white font-medium mb-3">Payment Summary</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base Coins:</span>
                        <span className="text-white">{baseTokens.toLocaleString()} $TRW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bonus Coins:</span>
                        <span className="text-[#f0b90b]">+{bonusTokens.toLocaleString()} $TRW</span>
                      </div>
                      <div className="flex justify-between border-t border-[#f0b90b]/10 pt-2">
                        <span className="text-white font-semibold">Total Coins:</span>
                        <span className="text-white font-semibold">{totalTokens.toLocaleString()} $TRW</span>
                      </div>
                    </div>

                    <h4 className="text-white font-medium mb-3">Payment Steps</h4>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-3 flex-shrink-0">
                          1
                        </div>
                        <p className="text-gray-300 text-sm">Copy the address and amount above</p>
                      </div>
                      <div className="flex">
                        <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-3 flex-shrink-0">
                          2
                        </div>
                        <p className="text-gray-300 text-sm">Send payment from your wallet or exchange</p>
                      </div>
                      <div className="flex">
                        <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-3 flex-shrink-0">
                          3
                        </div>
                        <p className="text-gray-300 text-sm">Wait for blockchain confirmation</p>
                      </div>
                      <div className="flex">
                        <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-3 flex-shrink-0">
                          4
                        </div>
                        <p className="text-gray-300 text-sm">Click 'I've Sent Payment' after sending</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-4 space-y-6">
                  <div className="bg-white p-4 rounded-lg">
                    <QRCode value={`solana:${walletAddress}?amount=${ethAmount}`} size={200} level="H" />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 mb-2">Scan with your wallet app</p>
                    <p className="text-sm text-gray-400">
                      Send exactly <span className="text-[#f0b90b] font-semibold">{ethAmount} SOL</span>
                    </p>
                  </div>

                  <div className="bg-[#0a0a0a] border border-[#f0b90b]/20 rounded-md p-4 w-full">
                    <h4 className="text-white font-medium mb-3 text-center">Payment Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Base Coins:</span>
                        <span className="text-white">{baseTokens.toLocaleString()} $TRW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Bonus Coins:</span>
                        <span className="text-[#f0b90b]">+{bonusTokens.toLocaleString()} $TRW</span>
                      </div>
                      <div className="flex justify-between border-t border-[#f0b90b]/10 pt-2">
                        <span className="text-white font-semibold">Total Coins:</span>
                        <span className="text-white font-semibold">{totalTokens.toLocaleString()} $TRW</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex border-t border-[#f0b90b]/20 p-4">
              <button onClick={onClose} className="flex-1 py-2 text-gray-400 hover:text-white transition-colors">
                Cancel Order
              </button>
              <button
                onClick={handleSentPayment}
                className="flex-1 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                I've Sent Payment
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
