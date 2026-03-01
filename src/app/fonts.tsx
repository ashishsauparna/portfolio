import { Noto_Serif, Space_Grotesk, Alegreya_Sans } from 'next/font/google';
import localFont from 'next/font/local';

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

export const AlegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  variable: '--font-alegreya-sans',
  display: 'swap',
  weight: ['400', '500', '700']
})

export const RecklessNeue = localFont({
  src: [
    {
      path: './fonts/RecklessNeue-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/RecklessNeue-Book.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/RecklessNeue-BookItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/RecklessNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RecklessNeue-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path:'./fonts/RecklessNeue-RegularItalic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/RecklessNeue-ThinItalic.ttf',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-recklessneue',
});
