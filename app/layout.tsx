import type { Metadata } from 'next'
import { Syne, Outfit, Space_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/components/layout/Providers'

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
})

const body = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Blue Hut — A Community Beach Cafe Concept for McKinley Beach',
  description:
    'A community-driven beach cafe renovation and conversion concept for McKinley Beach, Milwaukee, WI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
