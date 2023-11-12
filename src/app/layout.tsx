import './globals.css'
import type { Metadata } from 'next'
import { AlbertSans, AlegreyaFont, LocalFont } from './fonts'
import Script from 'next/script'


export const metadata: Metadata = {
  title:{
    default:'Ashish Sharma UX Designer',
    template:'%s'
  },
  description: 'Step into my digital home. I am Ashish Sharma, inviting you to explore my design work, insightful articles, and the books that have shaped my journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${AlbertSans.variable} ${LocalFont.variable} ${AlegreyaFont.variable}`}>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2N9F9N8KHK');
        `}
      </Script>

      <body>
        {children}
      </body>
    </html>
  )
}
