import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stock Vibe',
  description: 'Minimal Dark Stock Screener',
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'Stock Vibe',
  },
  icons: {
    apple: '/icon-192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}