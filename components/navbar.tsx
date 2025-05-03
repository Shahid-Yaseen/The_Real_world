"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { WalletConnectButton } from "./wallet/wallet-connect-button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = ["hero", "about", "tokenomics", "roadmap", "presale", "howto", "faq"]

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    setActiveSection(sectionId)

    // Add a small delay to ensure smooth scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-[#f0b90b]/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex items-center justify-between h-16 md:h-20">
        <Link href="#hero" onClick={() => scrollToSection("hero")} className="flex items-center">
          <motion.span
            className="gold-gradient-text font-bold text-lg sm:text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            THE REAL WORLD
          </motion.span>
          <span className="text-gray-400 text-xs sm:text-sm ml-2">$TRW</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link
            href="#about"
            onClick={() => scrollToSection("about")}
            className={`transition-colors duration-300 relative text-sm lg:text-base ${
              activeSection === "about" ? "text-[#f7d060]" : "text-white hover:text-[#f7d060]"
            }`}
          >
            About
            {activeSection === "about" && (
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 gold-gradient-bg"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="#tokenomics"
            onClick={() => scrollToSection("tokenomics")}
            className={`transition-colors duration-300 relative text-sm lg:text-base ${
              activeSection === "tokenomics" ? "text-[#f7d060]" : "text-white hover:text-[#f7d060]"
            }`}
          >
            Tokenomics
            {activeSection === "tokenomics" && (
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 gold-gradient-bg"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="#roadmap"
            onClick={() => scrollToSection("roadmap")}
            className={`transition-colors duration-300 relative text-sm lg:text-base ${
              activeSection === "roadmap" ? "text-[#f7d060]" : "text-white hover:text-[#f7d060]"
            }`}
          >
            Roadmap
            {activeSection === "roadmap" && (
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 gold-gradient-bg"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="#presale"
            onClick={() => scrollToSection("presale")}
            className={`transition-colors duration-300 relative text-sm lg:text-base ${
              activeSection === "presale" ? "text-[#f7d060]" : "text-white hover:text-[#f7d060]"
            }`}
          >
            Presale
            {activeSection === "presale" && (
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 gold-gradient-bg"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="#howto"
            onClick={() => scrollToSection("howto")}
            className={`transition-colors duration-300 relative text-sm lg:text-base ${
              activeSection === "howto" ? "text-[#f7d060]" : "text-white hover:text-[#f7d060]"
            }`}
          >
            How to
            {activeSection === "howto" && (
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 gold-gradient-bg"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <motion.a
            href="https://t.me/therealworldtoken"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center px-4 py-2 rounded-md bg-[#111] border border-[#f0b90b]/30 hover:bg-[#f0b90b]/10 transition-colors text-[#f0b90b] gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Join our Telegram"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#f0b90b]"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M9.25 15.75L9.6 13.55L15.4 8.45C15.7 8.2 15.65 8.1 15.3 8.3L8.35 12.9L6.25 12.15C5.55 11.95 5.55 11.55 6.4 11.2L16.3 7.3C16.85 7.1 17.35 7.5 17.15 8.5L15.3 16.5C15.15 17.25 14.8 17.4 14.2 17.1L11.4 15L10.05 16.3C9.85 16.5 9.7 16.65 9.25 16.65V15.75Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-medium">Join</span>
          </motion.a>
          <div className="hidden md:block">
            <WalletConnectButton />
          </div>

          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black/90 backdrop-blur-md border-b border-[#f0b90b]/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-5">
            <Link
              href="#about"
              className={`block transition-colors duration-300 text-base ${
                activeSection === "about" ? "gold-gradient-text" : "text-white hover:text-[#f7d060]"
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
            <Link
              href="#tokenomics"
              className={`block transition-colors duration-300 text-base ${
                activeSection === "tokenomics" ? "gold-gradient-text" : "text-white hover:text-[#f7d060]"
              }`}
              onClick={() => scrollToSection("tokenomics")}
            >
              Tokenomics
            </Link>
            <Link
              href="#roadmap"
              className={`block transition-colors duration-300 text-base ${
                activeSection === "roadmap" ? "gold-gradient-text" : "text-white hover:text-[#f7d060]"
              }`}
              onClick={() => scrollToSection("roadmap")}
            >
              Roadmap
            </Link>
            <Link
              href="#presale"
              className={`block transition-colors duration-300 text-base ${
                activeSection === "presale" ? "gold-gradient-text" : "text-white hover:text-[#f7d060]"
              }`}
              onClick={() => scrollToSection("presale")}
            >
              Presale
            </Link>
            <Link
              href="#howto"
              className={`block transition-colors duration-300 text-base ${
                activeSection === "howto" ? "gold-gradient-text" : "text-white hover:text-[#f7d060]"
              }`}
              onClick={() => scrollToSection("howto")}
            >
              How to
            </Link>
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <a
                  href="https://t.me/therealworldtoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-1.5 rounded-md bg-[#111] border border-[#f0b90b]/30 text-[#f0b90b] gap-1.5"
                  aria-label="Join our Telegram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#f0b90b]"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M9.25 15.75L9.6 13.55L15.4 8.45C15.7 8.2 15.65 8.1 15.3 8.3L8.35 12.9L6.25 12.15C5.55 11.95 5.55 11.55 6.4 11.2L16.3 7.3C16.85 7.1 17.35 7.5 17.15 8.5L15.3 16.5C15.15 17.25 14.8 17.4 14.2 17.1L11.4 15L10.05 16.3C9.85 16.5 9.7 16.65 9.25 16.65V15.75Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium">Join</span>
                </a>
                <WalletConnectButton />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
