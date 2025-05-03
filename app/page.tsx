"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Globe, Zap, ArrowRight, Wallet, DollarSign, BarChart3, HelpCircle } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Faq } from "@/components/faq"
import { Roadmap } from "@/components/roadmap"
import { TokenDistribution } from "@/components/token-distribution"
import { TokenDistributionChart } from "@/components/token-distribution-chart"
import { FadeIn } from "@/components/animations/fade-in"
import { WalletConnectButton } from "@/components/wallet/wallet-connect-button"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <Navbar />

      {/* Hero Section with enhanced gradients */}
      <section
        id="hero"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative overflow-hidden"
      >
        {/* Background gradient elements */}
        <div className="absolute top-20 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-[#f0b90b]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 sm:w-80 h-40 sm:h-80 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="gold-gradient-text">THE REAL WORLD</span>
              <br />
              <span className="text-white">CRYPTOCURRENCY</span>
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-200">
              Escape the Matrix. Build Real Wealth. Join the Revolution.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shadow-lg shadow-[#f0b90b]/10 h-[46px] sm:h-[56px] flex"
              >
                <WalletConnectButton className="h-full" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-[46px] sm:h-[56px] flex">
                <Link
                  href="https://t.me/therealworldtoken"
                  //onClick={() => scrollToSection("tokenomics")}
                  className="bg-transparent border border-[#f7d060] text-[#f7d060] font-semibold px-5 sm:px-8 flex items-center justify-center rounded-md hover:bg-[#f7d060]/10 transition-all duration-300 text-sm sm:text-base h-full"
                >
                  JOIN
                </Link>
              </motion.div>
            </div>

            <div>
              <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-gray-300">Presale Ending In:</p>
              <motion.div
                className="flex gap-2 sm:gap-3 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="gradient-border glow" variants={itemVariants}>
                  <div className="gradient-border-content p-2 sm:p-3 md:p-4 text-center min-w-12 sm:min-w-16">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold gold-gradient-text">14</div>
                    <div className="text-[10px] sm:text-xs uppercase text-gray-400">Days</div>
                  </div>
                </motion.div>

                <motion.div className="gradient-border glow" variants={itemVariants}>
                  <div className="gradient-border-content p-2 sm:p-3 md:p-4 text-center min-w-12 sm:min-w-16">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold gold-gradient-text">00</div>
                    <div className="text-[10px] sm:text-xs uppercase text-gray-400">Hours</div>
                  </div>
                </motion.div>

                <motion.div className="gradient-border glow" variants={itemVariants}>
                  <div className="gradient-border-content p-2 sm:p-3 md:p-4 text-center min-w-12 sm:min-w-16">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold gold-gradient-text">00</div>
                    <div className="text-[10px] sm:text-xs uppercase text-gray-400">Minutes</div>
                  </div>
                </motion.div>

                <motion.div className="gradient-border glow" variants={itemVariants}>
                  <div className="gradient-border-content p-2 sm:p-3 md:p-4 text-center min-w-12 sm:min-w-16">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold gold-gradient-text">00</div>
                    <div className="text-[10px] sm:text-xs uppercase text-gray-400">Seconds</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="left">
            <motion.div
              className="flex justify-center mt-8 md:mt-0"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: "radial-gradient(circle, rgba(247,208,96,0.6) 0%, rgba(247,208,96,0) 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                {/* Rotating border effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid rgba(247,208,96,0.3)",
                    boxShadow: "0 0 15px rgba(247,208,96,0.5)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                ></motion.div>

                {/* Logo image with animation */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/trw-logo.png"
                      alt="THE REAL WORLD"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Particle effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    background: "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.3) 100%)",
                  }}
                  animate={{
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* About Section with consistent heights and gradients */}
      <section
        id="about"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative"
      >
        {/* Background gradient element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <FadeIn>
          <div className="text-center mb-10 sm:mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              ABOUT <span className="gold-gradient-text">THE REAL WORLD</span>
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300">
              The Real World Token ($TRW) is the official cryptocurrency of The Real World community. Built on
              principles of financial freedom, education, and breaking free from conventional systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
          <FadeIn delay={0.2}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col h-full min-h-[340px]"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 gold-gradient-text">Financial Freedom</h3>
              <p className="text-sm sm:text-base text-gray-300">
                $TRW provides holders with access to exclusive financial education and wealth-building strategies that
                can transform your financial future.
              </p>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col h-full min-h-[340px]"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 gold-gradient-text">Global Community</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Join a worldwide network of like-minded individuals committed to breaking free from conventional systems
                and building a new financial paradigm.
              </p>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col h-full min-h-[340px]"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 gold-gradient-text">Real Utility</h3>
              <p className="text-sm sm:text-base text-gray-300">
                $TRW offers exclusive access to premium content, events, and educational resources within The Real World
                ecosystem designed to accelerate your success.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Tokenomics Section with enhanced gradients */}
      <section
        id="tokenomics"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative"
      >
        {/* Background gradient elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <FadeIn>
          <div className="text-center mb-10 sm:mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gold-gradient-text">TOKENOMICS</h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300">
              $TRW is designed with a sustainable tokenomic model to ensure long-term growth and stability for all
              holders.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
          <FadeIn delay={0.2} direction="right">
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] overflow-auto"
              whileHover={{ boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gold-gradient-text">Token Distribution</h3>
              <TokenDistribution />

              <div className="mt-8">
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Distribution Chart</h4>
                <TokenDistributionChart />
              </div>
            </motion.div>
          </FadeIn>

          <div className="space-y-6 sm:space-y-8">
            <FadeIn delay={0.3} direction="left">
              <motion.div
                className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10"
                whileHover={{ boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gold-gradient-text">Token Details</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md">
                    <span className="text-sm sm:text-base">Token Name:</span>
                    <span className="font-semibold gold-gradient-text text-sm sm:text-base">THE REAL WORLD</span>
                  </div>
                  <div className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md">
                    <span className="text-sm sm:text-base">Token Symbol:</span>
                    <span className="font-semibold gold-gradient-text text-sm sm:text-base">$TRW</span>
                  </div>
                  <div className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md">
                    <span className="text-sm sm:text-base">Total Supply:</span>
                    <span className="font-semibold gold-gradient-text text-sm sm:text-base">1,000,000,000 TRW</span>
                  </div>
                  <div className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md">
                    <span className="text-sm sm:text-base">Network:</span>
                    <span className="font-semibold gold-gradient-text text-sm sm:text-base">Solana (SPL)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md">
                    <span className="text-sm sm:text-base mb-1 sm:mb-0">Token Address:</span>
                    <div className="flex items-center">
                      <span className="font-semibold gold-gradient-text text-xs sm:text-sm font-mono truncate max-w-[180px] sm:max-w-[220px]">
                        8TwMkSAAnt2z5ry89JnNqYSQyrTK5YYtDBePDiutoZdc
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("8TwMkSAAnt2z5ry89JnNqYSQyrTK5YYtDBePDiutoZdc")
                          // You could add a toast notification here
                        }}
                        className="ml-2 p-1 bg-[#111] rounded-md hover:bg-[#222] transition-colors"
                        aria-label="Copy address"
                      >
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
                          className="text-[#f0b90b]"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.4} direction="left">
              <motion.div
                className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10"
                whileHover={{ boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gold-gradient-text">Tokenomics Features</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <motion.li
                    className="flex items-center p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 rounded-full animated-gradient-bg flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base">Liquidity locked for 2 years</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 rounded-full animated-gradient-bg flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base">Team tokens vested over 12 months</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 rounded-full animated-gradient-bg flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base">Anti-whale mechanisms</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 rounded-full animated-gradient-bg flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base">Smart contract audited</span>
                  </motion.li>
                </ul>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Roadmap Section with enhanced styling */}
      <section
        id="roadmap"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative"
      >
        {/* Background gradient element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <FadeIn>
          <div className="text-center mb-10 sm:mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gold-gradient-text">ROADMAP</h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300">
              Our strategic plan to build and grow The Real World ecosystem.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="relative z-10">
            <Roadmap />
          </div>
        </FadeIn>
      </section>

      {/* Presale Section with enhanced gradients */}
      <section
        id="presale"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative"
      >
        {/* Background gradient elements */}
        <div className="absolute top-20 right-20 w-48 sm:w-96 h-48 sm:h-96 bg-[#f0b90b]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 sm:w-96 h-48 sm:h-96 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <FadeIn>
          <div className="text-center mb-10 sm:mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gold-gradient-text">
              JOIN THE PRESALE
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300">
              Be among the first to own $TRW tokens and join The Real World revolution.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              className="gradient-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="gradient-border-content p-5 sm:p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Left Side - Presale Details */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-8 gold-gradient-text">Presale Details</h3>

                    <div className="mb-6 sm:mb-8">
                      <p className="mb-2 sm:mb-3 text-sm sm:text-base text-gray-300">Presale Ends In:</p>
                      <div className="flex gap-2 sm:gap-3 md:gap-4">
                        <motion.div
                          className="dark-gradient-bg p-2 sm:p-3 md:p-4 rounded-md text-center min-w-[60px] sm:min-w-16 border border-[#f0b90b]/20"
                          whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(247, 208, 96, 0.4)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg sm:text-2xl md:text-4xl font-bold gold-gradient-text">14</div>
                          <div className="text-[10px] sm:text-xs uppercase text-gray-400">Days</div>
                        </motion.div>

                        <motion.div
                          className="dark-gradient-bg p-2 sm:p-3 md:p-4 rounded-md text-center min-w-[60px] sm:min-w-16 border border-[#f0b90b]/20"
                          whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(247, 208, 96, 0.4)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg sm:text-2xl md:text-4xl font-bold gold-gradient-text">00</div>
                          <div className="text-[10px] sm:text-xs uppercase text-gray-400">Hours</div>
                        </motion.div>

                        <motion.div
                          className="dark-gradient-bg p-2 sm:p-3 md:p-4 rounded-md text-center min-w-[60px] sm:min-w-16 border border-[#f0b90b]/20"
                          whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(247, 208, 96, 0.4)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg sm:text-2xl md:text-4xl font-bold gold-gradient-text">00</div>
                          <div className="text-[10px] sm:text-xs uppercase text-gray-400">Minutes</div>
                        </motion.div>

                        <motion.div
                          className="dark-gradient-bg p-2 sm:p-3 md:p-4 rounded-md text-center min-w-[60px] sm:min-w-16 border border-[#f0b90b]/20"
                          whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(247, 208, 96, 0.4)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-lg sm:text-2xl md:text-4xl font-bold gold-gradient-text">00</div>
                          <div className="text-[10px] sm:text-xs uppercase text-gray-400">Seconds</div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="mb-6 sm:mb-8">
                      <p className="mb-2 sm:mb-3 text-sm sm:text-base text-gray-300">Presale Progress:</p>
                      <motion.div
                        className="space-y-2"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <div className="h-3 sm:h-4 rounded-full bg-[#1E293B]">
                          <motion.div
                            className="h-3 sm:h-4 rounded-full animated-gradient-bg"
                            initial={{ width: 0 }}
                            animate={{ width: "65%" }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                          ></motion.div>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <div className="text-gray-400">0 TRW</div>
                          <div className="gold-gradient-text font-medium">65% Filled</div>
                          <div className="text-gray-400">400,000,000 TRW</div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <motion.div
                        className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        <span className="text-sm sm:text-base text-gray-300">Presale Price:</span>
                        <span className="font-semibold gold-gradient-text text-sm sm:text-base">
                          1 SOL = 2,000,000 TRW
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                      >
                        <span className="text-sm sm:text-base text-gray-300">Listing Price:</span>
                        <span className="font-semibold gold-gradient-text text-sm sm:text-base">
                          1 SOL = 1,500,000 TRW
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.0 }}
                      >
                        <span className="text-sm sm:text-base text-gray-300">Min Purchase:</span>
                        <span className="font-semibold gold-gradient-text text-sm sm:text-base">0.1 SOL</span>
                      </motion.div>
                      <motion.div
                        className="flex justify-between p-2 sm:p-3 bg-[#0a0a0a]/50 rounded-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      >
                        <span className="text-sm sm:text-base text-gray-300">Max Purchase:</span>
                        <span className="font-semibold gold-gradient-text text-sm sm:text-base">10 SOL</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Side - Buy Tokens */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-8 gold-gradient-text">Buy Tokens</h3>

                    <div className="space-y-5 sm:space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <p className="mb-2 sm:mb-3 text-sm sm:text-base text-gray-300">Amount in SOL</p>
                        <div className="relative">
                          <motion.input
                            type="text"
                            placeholder="0.0"
                            className="w-full bg-[#0A0A0A] border border-gray-800 rounded-md p-3 sm:p-4 pr-12 sm:pr-16 text-right focus:border-[#f0b90b] focus:outline-none focus:ring-1 focus:ring-[#f0b90b] transition-all duration-300 text-sm sm:text-base"
                            whileFocus={{ borderColor: "#f0b90b" }}
                            transition={{ duration: 0.2 }}
                          />
                          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#f0b90b] text-sm sm:text-base">
                            SOL
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <p className="mb-2 sm:mb-3 text-sm sm:text-base text-gray-300">You will receive</p>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="0"
                            className="w-full bg-[#0A0A0A] border border-gray-800 rounded-md p-3 sm:p-4 pr-12 sm:pr-16 text-right text-sm sm:text-base"
                            readOnly
                          />
                          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#f0b90b] text-sm sm:text-base">
                            TRW
                          </div>
                        </div>
                      </motion.div>

                      <WalletConnectButton className="w-full py-3 sm:py-4 text-center" />

                      <motion.p
                        className="text-xs sm:text-sm text-center text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      >
                        By purchasing $TRW tokens, you agree to our Terms & Conditions
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      {/* How to Section */}
      <section
        id="howto"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative"
      >
        {/* Background gradient element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <FadeIn>
          <div className="text-center mb-10 sm:mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gold-gradient-text">HOW TO BUY</h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300">
              Follow these simple steps to purchase $TRW tokens during our presale.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
          <FadeIn delay={0.2}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col justify-between h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-full"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                  <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold gold-gradient-text">Create a Wallet</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Download and set up a Solana-compatible wallet like Phantom, Solflare, or Sollet to store your $TRW
                  tokens.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0b90b] text-sm flex items-center hover:underline"
                >
                  Learn more <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col justify-between h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-full"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                  <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold gold-gradient-text">Buy SOL</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Purchase SOL from an exchange like Binance, Coinbase, or Kraken and transfer it to your wallet.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  href="https://www.coinbase.com/how-to-buy/solana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0b90b] text-sm flex items-center hover:underline"
                >
                  Learn more <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col justify-between h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-full"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold gold-gradient-text">Connect Wallet to Buy</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Visit our website and connect your Solana wallet by clicking the "Buy" button.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <button
                  onClick={() => scrollToSection("presale")}
                  className="text-[#f0b90b] text-sm flex items-center hover:underline"
                >
                  Go to presale <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <motion.div
              className="dark-gradient-bg p-5 sm:p-6 md:p-8 rounded-lg border border-[#f0b90b]/10 flex flex-col justify-between h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-full"
              whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(247, 208, 96, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="animated-gradient-bg w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#f0b90b]/20">
                  <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#f0b90b]/20 text-[#f0b90b] flex items-center justify-center text-xs mr-2 flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold gold-gradient-text">Purchase TRW</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Enter the amount of SOL you want to spend, confirm the transaction in your wallet, and receive your
                  $TRW tokens.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  href="#faq"
                  onClick={() => scrollToSection("faq")}
                  className="text-[#f0b90b] text-sm flex items-center hover:underline"
                >
                  View FAQs <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section with enhanced styling */}
      <section
        id="faq"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto w-full relative"
      >
        {/* Background gradient element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-96 bg-[#f0b90b]/5 rounded-full filter blur-3xl"></div>

        <FadeIn>
          <div className="text-center mb-10 sm:mb-16 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gold-gradient-text">FAQ</h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300">
              Common questions about The Real World token.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto relative z-10">
            <Faq />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  )
}
