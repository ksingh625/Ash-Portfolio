import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '500', '600', '700'], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Ashish Kumar Singh - Developer & Designer',
  description: 'Creative developer building scalable web applications, modern interfaces, and AI-powered systems',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_ibmPlexMono.variable} font-mono antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
