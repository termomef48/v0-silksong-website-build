import type { Metadata } from 'next'
import { Cinzel, Cinzel_Decorative } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700']
})

const cinzelDecorative = Cinzel_Decorative({ 
  subsets: ["latin"],
  variable: '--font-cinzel-decorative',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Hollow Knight: Silksong | Official Fan Site',
  description: 'Explore the haunted kingdom of Pharloom. Discover Hornet\'s new abilities, tools, and the mysterious world of Silksong.',
  keywords: ['Hollow Knight', 'Silksong', 'Team Cherry', 'Hornet', 'Pharloom', 'Metroidvania'],
  openGraph: {
    title: 'Hollow Knight: Silksong',
    description: 'Explore the haunted kingdom of Pharloom',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cinzel.variable} ${cinzelDecorative.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
