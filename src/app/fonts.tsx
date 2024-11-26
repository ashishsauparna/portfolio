import { Albert_Sans, Noto_Serif, Space_Grotesk} from 'next/font/google';
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

export const SpaceGothic = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-gothic',
  display: 'swap'
})


export const RecklessNeue = localFont({
  src: [
    {
      path: './fonts/RecklessNeue-Book.ttf',
      weight: '300', // Book weight is typically light
      style: 'normal',
    },
    {
      path: './fonts/RecklessNeue-Regular.ttf',
      weight: '400', // Regular weight
      style: 'normal',
    },
    {
      path: './fonts/RecklessNeue-SemiBold.ttf',
      weight: '600', // SemiBold weight
      style: 'normal',
    },
  ],
  variable: '--font-recklessneue',
});