import { Albert_Sans, Alegreya, Nanum_Myeongjo, Playfair_Display, Space_Grotesk} from 'next/font/google'
import localFont from 'next/font/local'

 
export const AlbertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
})
 
export const LibreBaskerville = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap'
})

export const AlegreyaFont = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
})

export const LocalFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-butler',
  display: 'swap'
})