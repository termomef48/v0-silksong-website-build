"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const screenshots = [
  {
    id: 1,
    title: "Moss Grotto",
    description: "Ancient caverns covered in luminescent moss",
  },
  {
    id: 2,
    title: "Coral Forest",
    description: "A mystical underwater realm of glowing corals",
  },
  {
    id: 3,
    title: "Deep Docks",
    description: "Abandoned harbor filled with forgotten vessels",
  },
  {
    id: 4,
    title: "Citadel",
    description: "The towering fortress of the Silk Church",
  },
]

const stats = [
  { label: "New Areas", value: "150+" },
  { label: "Quests", value: "50+" },
  { label: "Boss Battles", value: "40+" },
]

export function WorldSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="world" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 ink-wash opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4">
            World of <span className="text-primary">Pharloom</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore a vast, haunted kingdom ruled by silk and song. Journey through 
            breathtaking landscapes filled with new friends, foes, and secrets waiting to be discovered.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500"
            >
              {/* Placeholder Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal to-charcoal-light">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id={`pattern-${screenshot.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-gold/30" />
                    </pattern>
                    <rect width="100" height="100" fill={`url(#pattern-${screenshot.id})`} />
                  </svg>
                </div>
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-amber-glow/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-primary font-semibold tracking-wide">{screenshot.title}</h3>
                  <p className="text-foreground/70 text-sm">{screenshot.description}</p>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full transition-colors ${
                dot === 0 ? "bg-primary" : "bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`Page ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
