import { Albert_Sans, Alegreya, Noto_Serif, Space_Grotesk} from 'next/font/google';
import localFont from 'next/font/local';

 
export const AlbertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
})

export const NotoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
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

export const ABCFont = localFont({
  src: './fonts/ABCWhyteInktrap.woff2',
  variable: '--font-abc-whyte',
})

export const OffBit = localFont({
  src: './fonts/OffBit.woff2',
  variable: '--font-offbit',
})

export const Recoleta = localFont({
  src: './fonts/Recoleta-Regular.ttf',
  variable: '--font-recoleta',
})