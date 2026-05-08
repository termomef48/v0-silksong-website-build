"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const abilities = [
  {
    id: 1,
    name: "Needle Strike",
    description: "Swift, precise attacks with Hornet's deadly needle",
    category: "Combat",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path d="M10,54 L54,10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M50,6 L58,14 L52,16 L48,12 Z" fill="currentColor" />
        <path d="M14,58 L6,50 L12,48 L16,52 Z" fill="currentColor" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Silk Binding",
    description: "Trap and immobilize enemies with ethereal silk threads",
    category: "Ability",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path d="M32,8 C20,20 44,28 32,40 C20,52 44,60 32,56" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20,16 Q32,24 44,16" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16,32 Q32,40 48,32" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20,48 Q32,56 44,48" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Dash Master",
    description: "Lightning-fast evasive maneuvers through any danger",
    category: "Movement",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path d="M8,32 L24,24 L24,28 L48,28 L48,24 L56,32 L48,40 L48,36 L24,36 L24,40 Z" fill="currentColor" />
        <line x1="8" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="44" x2="20" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Bell of Awakening",
    description: "Reveal hidden secrets and stun nearby enemies",
    category: "Tool",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path d="M32,8 L32,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20,24 C20,16 44,16 44,24 L46,44 L18,44 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="32" cy="44" rx="16" ry="4" fill="currentColor" opacity="0.5" />
        <circle cx="32" cy="50" r="4" fill="currentColor" />
        <path d="M12,28 Q8,28 8,32" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M52,28 Q56,28 56,32" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Bone Saw",
    description: "Devastating spinning attack that cuts through defenses",
    category: "Combat",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="8" fill="currentColor" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <path
            key={i}
            d={`M${32 + Math.cos((angle * Math.PI) / 180) * 18},${32 + Math.sin((angle * Math.PI) / 180) * 18} L${32 + Math.cos((angle * Math.PI) / 180) * 26},${32 + Math.sin((angle * Math.PI) / 180) * 26}`}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </svg>
    ),
  },
  {
    id: 6,
    name: "Gossamer Storm",
    description: "Unleash a whirlwind of silk threads around you",
    category: "Ability",
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="6" fill="currentColor" />
        <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 32 32)" />
        <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 32 32)" />
      </svg>
    ),
  },
]

const additionalFeatures = [
  {
    title: "New Quest System",
    description: "Deep narrative with branching storylines",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <rect x="8" y="6" width="32" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="30" x2="26" y2="30" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Developer Diary",
    description: "Behind-the-scenes creation process",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="20,16 20,32 34,24" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "OST Preview",
    description: "Original soundtrack by Christopher Larkin",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M18,12 L18,32 C18,36 12,38 12,34 C12,30 18,28 18,32" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M36,8 L36,28 C36,32 30,34 30,30 C30,26 36,24 36,28" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="18" y1="12" x2="36" y2="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export function AbilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredAbility, setHoveredAbility] = useState<number | null>(null)

  return (
    <section id="abilities" ref={ref} className="relative py-24 md:py-32 bg-charcoal-light/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10,0 L0,0 L0,10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              New Tools & <span className="text-primary">Abilities</span>
            </h2>
            <p className="text-muted-foreground mt-2">Master Hornet&apos;s expanded arsenal</p>
          </div>
          
          {/* Navigation Dots */}
          <div className="hidden md:flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-gold/30"}`} />
            ))}
          </div>
        </motion.div>

        {/* Abilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {abilities.map((ability, index) => (
            <motion.div
              key={ability.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredAbility(ability.id)}
              onMouseLeave={() => setHoveredAbility(null)}
              className={`group relative p-6 bg-charcoal/80 border transition-all duration-500 cursor-pointer ${
                hoveredAbility === ability.id
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-gold/20 hover:border-gold/40"
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mb-4 text-gold/70 transition-all duration-300 ${
                hoveredAbility === ability.id ? "text-primary scale-110" : ""
              }`}>
                {ability.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {ability.category}
                </span>
                <h3 className={`text-lg font-semibold tracking-wide transition-colors ${
                  hoveredAbility === ability.id ? "text-primary" : "text-foreground"
                }`}>
                  {ability.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ability.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-500 ${
                hoveredAbility === ability.id ? "opacity-100" : "opacity-0"
              }`} />

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-8 h-8 transition-all duration-300 ${
                hoveredAbility === ability.id ? "opacity-100" : "opacity-0"
              }`}>
                <svg viewBox="0 0 32 32" className="w-full h-full text-primary">
                  <path d="M32,0 L32,32 L0,32" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 border border-gold/10 hover:border-gold/30 transition-colors group"
            >
              <div className="text-gold/60 group-hover:text-primary transition-colors">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
