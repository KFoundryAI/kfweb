import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KFoundry - Your Chief AI Officer.',
  description: 'KFoundry helps you navigate the AI landscape and implement solutions that drive real business value.',
  icons: [
    { rel: 'icon', url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/favicon.png', sizes: '16x16', type: 'image/png' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
