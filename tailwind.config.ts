import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cinzel)", "Cinzel", "serif"],
        display: ["var(--font-cinzel-decorative)", "Cinzel Decorative", "serif"],
      },
      colors: {
        // Silksong Theme Colors
        gold: "var(--gold)",
        "gold-dark": "var(--gold-dark)",
        "silk-red": "var(--silk-red)",
        "silk-red-dark": "var(--silk-red-dark)",
        charcoal: "var(--charcoal)",
        "charcoal-light": "var(--charcoal-light)",
        "amber-glow": "var(--amber-glow)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "silk-flow": "silk-flow 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

export default config
