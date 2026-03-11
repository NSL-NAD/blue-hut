import type { Metadata } from 'next'
import { Bebas_Neue, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import { SeasonProvider } from '@/context/SeasonContext'

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const mono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Blue Hut — A Community Concession Concept for McKinley Beach',
  description:
    'A community-driven concession stand renovation and conversion concept for McKinley Beach, Milwaukee, WI. A collaboration between N-Squared, The Bartolotta Restaurants, and MKE County Parks.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${mono.variable} ${body.variable} antialiased`}
      >
        <SeasonProvider>{children}</SeasonProvider>
      </body>
    </html>
  )
}
