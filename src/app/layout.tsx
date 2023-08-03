import './globals.css'
import type { Metadata } from 'next'
import { AlbertSans, SpaceMono } from './fonts'


export const metadata: Metadata = {
  title: 'Ashish Sharma UX Designer',
  description: 'Step into my digital home. I am Ashish Sharma, inviting you to explore my design work, insightful articles, and the books that have shaped my journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${AlbertSans.variable} ${SpaceMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
