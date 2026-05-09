"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4
      setIsLoaded(true)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Needlefall-FesE5B3F9NTIqfzsHwsRIuaLRV0iOL.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={togglePlay}
              className="group relative flex items-center gap-3 px-4 py-3 bg-charcoal/90 backdrop-blur-sm border border-gold/30 hover:border-gold/60 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {/* Decorative corners */}
              <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-gold/60" />
              <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-gold/60" />
              <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-gold/60" />
              <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-gold/60" />

              {/* Music icon with animation */}
              <div className="relative w-5 h-5">
                {isPlaying ? (
                  <motion.svg
                    key="playing"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="paused"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                  </motion.svg>
                )}
              </div>

              {/* Sound wave animation */}
              <div className="flex items-center gap-0.5 h-4">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-gold/80 rounded-full"
                    animate={
                      isPlaying
                        ? {
                            height: ["4px", "16px", "8px", "12px", "4px"],
                          }
                        : { height: "4px" }
                    }
                    transition={
                      isPlaying
                        ? {
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut",
                          }
                        : { duration: 0.3 }
                    }
                  />
                ))}
              </div>

              {/* Label */}
              <span className="text-xs uppercase tracking-[0.15em] text-foreground/70 group-hover:text-foreground transition-colors">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
