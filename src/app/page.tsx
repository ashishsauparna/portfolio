import NavBar from './components/ui/navbar';
import Footer from './components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import Script from 'next/script';
import OutwardArrow from '/public/outward_arrow.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ashish Sharma UX Designer',
  description: 'Step into my digital home. I am Ashish Sharma, inviting you to explore my design work, insightful articles, and the books that have shaped my journey.',
}

export default function Home() {

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
      <div className='items-left body_width'>
        <div className='mt-8 mb-32'>
          <div className='relative mb-32'>
            <div className='flex gap-4 items-start'>
                <div className='w-10 h-10 bg-zinc-900'>
                </div>
              <div>
                <h4>Ashish Sharma</h4>
                <h5 className='text-slate-900'>Based in Gurgaon, India</h5>
              </div>
            </div>
            <div className='absolute right-0 top-0'>
              <div>
                <h4 className='mb-2'>Welcome to my</h4>
                <h4>Portfolio 2024</h4>
              </div>
            </div>
          </div>
          <h1 className='text-slate-400'>
            Not Just a UX designer, <br/>I build stuff <span className='inline-flex ml-4'>
            <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.93506 5.31982L10.6199 27.3269" stroke="#94a3b8" strokeWidth="7"/>
            <path d="M22 1.83252L28.6848 23.8396" stroke="#94a3b8" strokeWidth="7"/>
            <path d="M10.7021 55.606C19.5661 56.4923 45.4772 55.606 53.1212 13.3423" stroke="#94a3b8" strokeWidth="7"/>
            </svg>
            </span>
          </h1>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex gap-4'>
            <Image
            src={OutwardArrow}
            alt='Outward arrow icon'
            className='rotate-90'
            />
          (Scroll to view projects)
          </div>
        </div>
        <div>
          <ProjectsData/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
