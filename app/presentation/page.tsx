"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-[#e8e4d9]">
      {/* Header */}
      <header className="border-b border-[#c9a227]/20 bg-[#0a0a0c]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-serif text-xl text-[#c9a227]">Website Presentation</h1>
          <Link 
            href="/"
            className="px-4 py-2 border border-[#c9a227]/30 text-sm hover:border-[#c9a227]/60 transition-colors"
          >
            View Live Site
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Title Section */}
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#c9a227] mb-4">
            Hollow Knight: Silksong
          </h1>
          <p className="text-xl text-[#e8e4d9]/60 max-w-2xl mx-auto">
            Fan Website Presentation
          </p>
          <div className="mt-6 w-32 h-px bg-gradient-to-r from-transparent via-[#c9a227]/60 to-transparent mx-auto" />
        </motion.section>

        {/* Concept Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="border border-[#c9a227]/20 bg-[#12121a] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#c9a227]/40 flex items-center justify-center">
                <span className="text-[#c9a227] font-serif text-lg">1</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#c9a227]">Concept</h2>
            </div>
            
            <div className="space-y-6 text-[#e8e4d9]/80 leading-relaxed">
              <p>
                <strong className="text-[#e8e4d9]">Project Goal:</strong> Create an immersive fan website for 
                Hollow Knight: Silksong - the highly anticipated sequel to the acclaimed indie game Hollow Knight 
                by Team Cherry.
              </p>
              
              <p>
                <strong className="text-[#e8e4d9]">Design Philosophy:</strong> The website captures the dark, 
                atmospheric aesthetic of the game through a carefully crafted visual language featuring deep 
                charcoal backgrounds, pale gold accents reminiscent of ancient silk, and crimson highlights 
                that echo the protagonist Hornet and her silk abilities.
              </p>

              <p>
                <strong className="text-[#e8e4d9]">Target Audience:</strong> Existing Hollow Knight fans eagerly 
                awaiting Silksong, potential new players interested in the game, and the broader indie gaming 
                community seeking information about the upcoming release.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border border-[#c9a227]/10 bg-[#0a0a0c]">
                  <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-[#0a0a0c] border border-[#c9a227]/40" />
                  <span className="text-xs uppercase tracking-wider text-[#e8e4d9]/50">Charcoal</span>
                  <p className="text-[#c9a227] text-sm mt-1">#0a0a0c</p>
                </div>
                <div className="text-center p-4 border border-[#c9a227]/10 bg-[#0a0a0c]">
                  <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-[#c9a227]" />
                  <span className="text-xs uppercase tracking-wider text-[#e8e4d9]/50">Gold</span>
                  <p className="text-[#c9a227] text-sm mt-1">#c9a227</p>
                </div>
                <div className="text-center p-4 border border-[#c9a227]/10 bg-[#0a0a0c]">
                  <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-[#8b1538]" />
                  <span className="text-xs uppercase tracking-wider text-[#e8e4d9]/50">Silk Red</span>
                  <p className="text-[#c9a227] text-sm mt-1">#8b1538</p>
                </div>
                <div className="text-center p-4 border border-[#c9a227]/10 bg-[#0a0a0c]">
                  <div className="w-6 h-6 mx-auto mb-2 rounded-full bg-[#e8e4d9]" />
                  <span className="text-xs uppercase tracking-wider text-[#e8e4d9]/50">Parchment</span>
                  <p className="text-[#c9a227] text-sm mt-1">#e8e4d9</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Functionality Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="border border-[#c9a227]/20 bg-[#12121a] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#c9a227]/40 flex items-center justify-center">
                <span className="text-[#c9a227] font-serif text-lg">2</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#c9a227]">Functionality</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                <h3 className="font-serif text-lg text-[#c9a227] mb-3">Interactive Navigation</h3>
                <ul className="space-y-2 text-[#e8e4d9]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Sticky header with glassmorphism effect
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Smooth scroll navigation to page sections
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Mobile-responsive hamburger menu with animations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Active section highlighting
                  </li>
                </ul>
              </div>

              <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                <h3 className="font-serif text-lg text-[#c9a227] mb-3">Hero Section</h3>
                <ul className="space-y-2 text-[#e8e4d9]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Parallax scrolling background effect
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Animated Hornet silhouette with ambient glow
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Flowing silk thread SVG animations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Call-to-action buttons with hover effects
                  </li>
                </ul>
              </div>

              <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                <h3 className="font-serif text-lg text-[#c9a227] mb-3">Video Trailer Modal</h3>
                <ul className="space-y-2 text-[#e8e4d9]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Fullscreen video modal overlay
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Smooth open/close animations with Framer Motion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Auto-play on open with native controls
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Click outside to close functionality
                  </li>
                </ul>
              </div>

              <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                <h3 className="font-serif text-lg text-[#c9a227] mb-3">Background Music Player</h3>
                <ul className="space-y-2 text-[#e8e4d9]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Floating play/pause button (bottom-right)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Animated sound wave visualization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Looping audio with controlled volume
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Gothic decorative styling
                  </li>
                </ul>
              </div>

              <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                <h3 className="font-serif text-lg text-[#c9a227] mb-3">World of Pharloom Section</h3>
                <ul className="space-y-2 text-[#e8e4d9]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Location cards with hover reveal descriptions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Game statistics display (bosses, locations, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Pagination indicator dots
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Scroll-triggered animations
                  </li>
                </ul>
              </div>

              <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                <h3 className="font-serif text-lg text-[#c9a227] mb-3">Tools & Abilities Section</h3>
                <ul className="space-y-2 text-[#e8e4d9]/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Interactive ability cards with glow effects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Custom SVG weapon/tool icons
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Expand on hover with detailed descriptions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c9a227] mt-1">-</span>
                    Staggered entrance animations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Structure Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="border border-[#c9a227]/20 bg-[#12121a] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#c9a227]/40 flex items-center justify-center">
                <span className="text-[#c9a227] font-serif text-lg">3</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#c9a227]">Structure</h2>
            </div>

            <div className="space-y-8">
              {/* Tech Stack */}
              <div>
                <h3 className="font-serif text-lg text-[#e8e4d9] mb-4">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-4 text-center">
                    <p className="text-[#c9a227] font-medium">Next.js 15</p>
                    <p className="text-xs text-[#e8e4d9]/50 mt-1">React Framework</p>
                  </div>
                  <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-4 text-center">
                    <p className="text-[#c9a227] font-medium">TypeScript</p>
                    <p className="text-xs text-[#e8e4d9]/50 mt-1">Type Safety</p>
                  </div>
                  <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-4 text-center">
                    <p className="text-[#c9a227] font-medium">Tailwind CSS</p>
                    <p className="text-xs text-[#e8e4d9]/50 mt-1">Styling</p>
                  </div>
                  <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-4 text-center">
                    <p className="text-[#c9a227] font-medium">Framer Motion</p>
                    <p className="text-xs text-[#e8e4d9]/50 mt-1">Animations</p>
                  </div>
                </div>
              </div>

              {/* File Structure */}
              <div>
                <h3 className="font-serif text-lg text-[#e8e4d9] mb-4">Project File Structure</h3>
                <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6 font-mono text-sm">
                  <pre className="text-[#e8e4d9]/70 overflow-x-auto">
{`v0-silksong-website/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Main homepage
│   └── presentation/
│       └── page.tsx         # This presentation page
│
├── components/
│   ├── navigation.tsx       # Sticky header & mobile menu
│   ├── hero.tsx             # Hero section with video modal
│   ├── world-section.tsx    # World of Pharloom cards
│   ├── abilities-section.tsx # Tools & abilities grid
│   ├── footer.tsx           # Footer with newsletter
│   └── music-player.tsx     # Floating audio player
│
├── tailwind.config.ts       # Tailwind configuration
└── package.json             # Dependencies`}
                  </pre>
                </div>
              </div>

              {/* Component Architecture */}
              <div>
                <h3 className="font-serif text-lg text-[#e8e4d9] mb-4">Component Architecture</h3>
                <div className="border border-[#c9a227]/10 bg-[#0a0a0c] p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">page.tsx</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Main entry point, imports all sections</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">Navigation</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Fixed header, scroll-based styling</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">Hero</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Parallax effects, video modal state</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">WorldSection</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Location cards with data mapping</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">AbilitiesSection</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Interactive ability grid display</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">Footer</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Newsletter form, social links</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-right text-[#c9a227] text-sm">MusicPlayer</div>
                      <div className="flex-1 h-px bg-[#c9a227]/20" />
                      <div className="text-[#e8e4d9]/70 text-sm">Fixed position audio controller</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page Sections Breakdown */}
              <div>
                <h3 className="font-serif text-lg text-[#e8e4d9] mb-4">Page Sections Overview</h3>
                <div className="space-y-3">
                  <div className="flex gap-4 items-start border border-[#c9a227]/10 bg-[#0a0a0c] p-4">
                    <span className="text-[#c9a227] font-mono text-sm w-8">01</span>
                    <div>
                      <p className="text-[#e8e4d9] font-medium">Navigation Bar</p>
                      <p className="text-[#e8e4d9]/60 text-sm mt-1">
                        Fixed position header with logo, navigation links (Home, World, Abilities, News), 
                        and primary CTA button. Includes mobile hamburger menu.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start border border-[#c9a227]/10 bg-[#0a0a0c] p-4">
                    <span className="text-[#c9a227] font-mono text-sm w-8">02</span>
                    <div>
                      <p className="text-[#e8e4d9] font-medium">Hero Section</p>
                      <p className="text-[#e8e4d9]/60 text-sm mt-1">
                        Full-viewport hero with game title, Hornet character illustration, 
                        animated silk threads, and dual CTAs for purchase and trailer viewing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start border border-[#c9a227]/10 bg-[#0a0a0c] p-4">
                    <span className="text-[#c9a227] font-mono text-sm w-8">03</span>
                    <div>
                      <p className="text-[#e8e4d9] font-medium">World of Pharloom</p>
                      <p className="text-[#e8e4d9]/60 text-sm mt-1">
                        Showcase of in-game locations with image cards, descriptions, 
                        and game statistics (boss count, location count, etc.).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start border border-[#c9a227]/10 bg-[#0a0a0c] p-4">
                    <span className="text-[#c9a227] font-mono text-sm w-8">04</span>
                    <div>
                      <p className="text-[#e8e4d9] font-medium">New Tools & Abilities</p>
                      <p className="text-[#e8e4d9]/60 text-sm mt-1">
                        Grid of ability cards showcasing Hornet&apos;s arsenal - weapons, 
                        tools, and special moves with icons and descriptions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start border border-[#c9a227]/10 bg-[#0a0a0c] p-4">
                    <span className="text-[#c9a227] font-mono text-sm w-8">05</span>
                    <div>
                      <p className="text-[#e8e4d9] font-medium">Footer</p>
                      <p className="text-[#e8e4d9]/60 text-sm mt-1">
                        Newsletter subscription, quick navigation links, social media icons 
                        (Discord, YouTube, Twitter), and copyright information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="border border-[#c9a227]/20 bg-[#12121a] p-8 md:p-10">
            <h2 className="font-serif text-2xl text-[#c9a227] mb-4">Summary</h2>
            <p className="text-[#e8e4d9]/70 max-w-3xl mx-auto leading-relaxed">
              This Hollow Knight: Silksong fan website demonstrates modern web development practices 
              with Next.js 15, combining atmospheric visual design with smooth animations and interactive 
              elements. The modular component architecture ensures maintainability, while Framer Motion 
              provides fluid user experiences. The design stays true to the game&apos;s gothic aesthetic 
              while delivering a responsive, accessible experience across all devices.
            </p>
            <div className="mt-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a227] text-[#0a0a0c] font-medium hover:bg-[#d4af37] transition-colors"
              >
                View Live Website
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#c9a227]/10 text-center text-[#e8e4d9]/40 text-sm">
          <p>Hollow Knight: Silksong Website Presentation</p>
          <p className="mt-1">Fan Project - Not affiliated with Team Cherry</p>
        </footer>
      </div>
    </main>
  )
}
