import { Albert_Sans, Alegreya, Nanum_Myeongjo, Roboto_Slab} from 'next/font/google'
 
export const AlbertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
})
 
export const LibreBaskerville = Nanum_Myeongjo({
  subsets: ['latin'],
  variable: '--font-libre-baskerville',
  display: 'swap',
  weight:'800'
})

export const AlegreyaFont = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap',
})