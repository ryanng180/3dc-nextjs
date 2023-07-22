import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Design and Development Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1>Hello</h1>
        <h1>Welcome to 3DC</h1>
        <p>Some content</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <h1>Events</h1>
        <h2>Upcoming</h2>
        <p>Show more</p>
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body className={inter.className}>{header}{children}{footer}</body>
    </html>
  )
}
