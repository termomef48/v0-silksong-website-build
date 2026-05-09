import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WorldSection } from "@/components/world-section"
import { AbilitiesSection } from "@/components/abilities-section"
import { Footer } from "@/components/footer"
import { MusicPlayer } from "@/components/music-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WorldSection />
      <AbilitiesSection />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
