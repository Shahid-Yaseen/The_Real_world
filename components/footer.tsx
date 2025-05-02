"use client"

import Link from "next/link"
import { MessageCircle, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black border-t border-[#f0b90b]/10 py-8 sm:py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="gold-gradient-text font-bold text-xl sm:text-2xl mb-1 sm:mb-2">THE REAL WORLD</div>
            <p className="text-xs sm:text-sm text-gray-400">$TRW - Escape the Matrix</p>
          </motion.div>

          <div className="flex space-x-4 sm:space-x-8">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#111] p-2 sm:p-3 rounded-full"
            >
              <Link href="#" className="text-[#f0b90b] hover:text-[#f7d060] transition-colors">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#111] p-2 sm:p-3 rounded-full"
            >
              <Link href="#" className="text-[#f0b90b] hover:text-[#f7d060] transition-colors">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#111] p-2 sm:p-3 rounded-full"
            >
              <Link href="#" className="text-[#f0b90b] hover:text-[#f7d060] transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-[#f0b90b]/10 mt-6 sm:mt-10 pt-6 sm:pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm text-gray-400">© 2023 THE REAL WORLD. All rights reserved.</div>

          <div className="flex space-x-4 sm:space-x-8 mt-4 sm:mt-6 md:mt-0">
            <Link href="#" className="text-xs sm:text-sm text-gray-400 hover:text-[#f7d060] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-gray-400 hover:text-[#f7d060] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-gray-400 hover:text-[#f7d060] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
