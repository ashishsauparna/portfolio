import { Albert_Sans, IBM_Plex_Mono, Space_Mono } from 'next/font/google'
 
export const AlbertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
})
 
export const SpaceMono = Space_Mono({
    subsets: ['latin'],
    variable: '--font-space-mono',
    display: 'swap',
    weight: '700'
})