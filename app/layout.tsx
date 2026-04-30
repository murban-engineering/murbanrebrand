import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MURBAN ENGINEERING',
  description: 'Murban Engineering.',
  applicationName: 'Murban Engineering',
  creator: 'Murban Engineering',
  publisher: 'Murban Engineering',
  authors: [{ name: 'Murban Engineering' }],
  generator: 'v0.app',
  icons: {
    icon: '/murbanlogo.ico',
    shortcut: '/murbanlogo.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='font-sans antialiased'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
