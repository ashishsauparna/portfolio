import NavBar from '../ui/navbar';
import Footer from '../ui/footer';
import { Metadata } from 'next';
import Script from 'next/script';
import ArticlesData from '../ui/articles';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects | Ashish Sharma',
  openGraph: {
      title: 'Projects | Ashish Sharma',
    },
  description: 'Explore captivating UX case studies, and innovative Figma plugins in the portfolio of Ashish Sharma. Discover thought processes, design methodologies, and user-centric solutions that exemplify expertise in creating intuitive digital experiences.',
}

export default function Articles() {

    return (
        <main className="flex min-h-screen flex-col items-center"> 
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2N9F9N8KHK');
          `}
        </Script>
          <NavBar/>
          <div className='items-left mt-32'>
            <p style={{fontWeight:"500"}}>Check out my Articles on <Link href="https://ashishsauparna.medium.com">Medium</Link> 🔥 </p>
            <ArticlesData/>
          </div>
          <Footer/>
        </main>
      )
}