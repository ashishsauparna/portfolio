import { Albert_Sans, Alegreya, Space_Grotesk} from 'next/font/google';

 
export const AlbertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
})

export const AlegreyaFont = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
})

export const SpaceGothic = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-gothic',
  display: 'swap'
})