import { Albert_Sans, Alegreya, Nanum_Myeongjo, Playfair_Display} from 'next/font/google'
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

export const LocalFont = localFont({
  src:'../../fonts/Butler-Light.woff',
  variable: '--font-butler',
})