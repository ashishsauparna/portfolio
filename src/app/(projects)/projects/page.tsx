import NavBar from '../../../../components/ui/navbar';
import Footer from '../../../../components/ui/footer';
import ProjectsData from '../projects';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Projects | Ashish Sharma',
  openGraph: {
      title: 'Projects | Ashish Sharma',
    },
  description: 'Explore captivating UX case studies, and innovative Figma plugins in the portfolio of Ashish Sharma. Discover thought processes, design methodologies, and user-centric solutions that exemplify expertise in creating intuitive digital experiences.',
}

export default function Projects() {

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
          <div className='items-left mt-16'>
            <h1 className='md:w-5/6'>My Projects</h1>
            <ProjectsData/>
          </div>
          <Footer/>
        </main>
      )
}