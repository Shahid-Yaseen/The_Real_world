"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clipboard, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <motion.button
      className="w-6 h-6 sm:w-8 sm:h-8 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#222] transition-colors border border-[#f0b90b]/20"
      onClick={handleCopy}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isCopied ? "Copied" : "Copy to clipboard"}
    >
      {isCopied ? (
        <Check size={14} className="sm:w-4 sm:h-4 text-green-500" />
      ) : (
        <Clipboard size={14} className="sm:w-4 sm:h-4 text-[#f0b90b]" />
      )}
    </motion.button>
  )
}
