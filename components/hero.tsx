"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Deep Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal" />
        
        {/* Amber Glow Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-glow/30 via-silk-red/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Silk Flow Elements */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 silk-animate"
          style={{ opacity: 0.3 }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M20,100 Q60,20 100,100 T180,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-silk-red/40"
            />
            <path
              d="M30,120 Q70,40 110,120 T190,120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-silk-red/30"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-10 right-10 w-80 h-80 silk-animate"
          style={{ opacity: 0.25, animationDelay: "2s" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full rotate-180">
            <path
              d="M20,100 Q60,20 100,100 T180,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-silk-red/40"
            />
          </svg>
        </motion.div>

        {/* Gothic Frame Corners */}
        <div className="absolute inset-8 md:inset-16 pointer-events-none">
          {/* Top Left */}
          <svg className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 text-gold/40" viewBox="0 0 100 100">
            <path d="M0,40 L0,0 L40,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0,30 L0,10 L10,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/60" />
            <circle cx="5" cy="5" r="2" fill="currentColor" className="text-gold/60" />
          </svg>
          
          {/* Top Right */}
          <svg className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 text-gold/40 rotate-90" viewBox="0 0 100 100">
            <path d="M0,40 L0,0 L40,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0,30 L0,10 L10,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/60" />
            <circle cx="5" cy="5" r="2" fill="currentColor" className="text-gold/60" />
          </svg>
          
          {/* Bottom Left */}
          <svg className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 text-gold/40 -rotate-90" viewBox="0 0 100 100">
            <path d="M0,40 L0,0 L40,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0,30 L0,10 L10,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/60" />
            <circle cx="5" cy="5" r="2" fill="currentColor" className="text-gold/60" />
          </svg>
          
          {/* Bottom Right */}
          <svg className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 text-gold/40 rotate-180" viewBox="0 0 100 100">
            <path d="M0,40 L0,0 L40,0" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0,30 L0,10 L10,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold/60" />
            <circle cx="5" cy="5" r="2" fill="currentColor" className="text-gold/60" />
          </svg>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Hornet Silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg
            viewBox="0 0 200 280"
            className="w-32 h-44 md:w-48 md:h-64 mx-auto"
          >
            {/* Glow Effect */}
            <defs>
              <radialGradient id="hornetGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--amber-glow)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Background Glow */}
            <ellipse cx="100" cy="150" rx="80" ry="100" fill="url(#hornetGlow)" />
            
            {/* Hornet Body Silhouette */}
            <g filter="url(#glow)" className="fill-charcoal">
              {/* Head */}
              <ellipse cx="100" cy="80" rx="25" ry="30" />
              {/* Horns */}
              <path d="M75,60 Q60,30 70,10 Q75,25 85,50 Z" />
              <path d="M125,60 Q140,30 130,10 Q125,25 115,50 Z" />
              {/* Eyes */}
              <ellipse cx="88" cy="85" rx="8" ry="12" className="fill-foreground" />
              <ellipse cx="112" cy="85" rx="8" ry="12" className="fill-foreground" />
              {/* Body */}
              <ellipse cx="100" cy="130" rx="20" ry="25" />
              {/* Cape/Cloak */}
              <path d="M80,120 Q60,160 50,220 Q100,200 150,220 Q140,160 120,120 Z" />
              {/* Needle */}
              <path d="M145,180 L180,220 L175,225 L140,185 Z" />
              {/* Legs */}
              <path d="M85,150 L70,200 L75,202 L90,155 Z" />
              <path d="M115,150 L130,200 L125,202 L110,155 Z" />
            </g>
          </svg>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-2">
            <span className="block text-foreground">Hollow Knight</span>
            <span className="block text-primary text-5xl md:text-7xl lg:text-8xl italic tracking-wider mt-2">
              Silksong
            </span>
          </h1>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/60" />
          <svg className="w-6 h-6 text-gold/60" viewBox="0 0 24 24">
            <path d="M12,2 L14,10 L22,12 L14,14 L12,22 L10,14 L2,12 L10,10 Z" fill="currentColor" />
          </svg>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#preorder"
            className="group relative px-8 py-3 bg-primary/10 border-2 border-primary text-primary hover:bg-primary hover:text-charcoal transition-all duration-300 uppercase tracking-[0.2em] text-sm font-medium"
          >
            <span className="relative z-10">Buy Now</span>
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-charcoal uppercase tracking-[0.2em] text-sm font-medium">
              Buy Now
            </span>
          </Link>
          
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative px-8 py-3 border border-gold/30 text-foreground/80 hover:border-gold/60 hover:text-foreground transition-all duration-300 uppercase tracking-[0.2em] text-sm cursor-pointer"
          >
            Watch Trailer
            <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
          <svg className="w-6 h-6 text-gold/60" viewBox="0 0 24 24">
            <path d="M12,4 L12,16 M6,12 L12,18 L18,12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl mx-4 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Video Player */}
              <div className="relative w-full h-full border-2 border-gold/30 bg-charcoal overflow-hidden">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5285755d-19e6-4a1a-9af8-7f3004030924-1080p-1778283832318-DBE02gcjGfbg0azh3ON8U0IeDvkOI9.mp4"
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              {/* Decorative Corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
