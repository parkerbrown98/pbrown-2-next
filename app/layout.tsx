import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from './components/header'
import Container from './components/container'


export const metadata: Metadata = {
  title: 'root | pbrown.dev',
  description: 'Software engineer based in Dallas, TX. I like to build things and write about it.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Container>
          <Header />
        </Container>
        <main>{children}</main>
        {/* Footer */}
        <Analytics />
      </body>
    </html>
  )
}
