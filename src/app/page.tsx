import NavBar from './components/ui/navbar';
import Footer from './components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import Script from 'next/script';
import OutwardArrowDown from '/public/arrow_outward.svg'
import { Metadata } from 'next';
import Link from 'next/link';
import AshishSharmaImg from '/public/ashish_sharma.png';
import Banner from '/public/banner.png';
import MoveImage from './components/ui/movebanner';

export const metadata: Metadata = {
  title: 'Ashish Sharma UX Designer',
  description: 'Step into my digital home. I am Ashish Sharma, inviting you to explore my design work, insightful articles, and the books that have shaped my journey.',
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center relative">
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

      <Image
      src={Banner}
      alt='background banner'
      className='-z-10 absolute top-0 w-full'
      />

      {/* <MoveImage path={Banner}/> */}
      <div className='items-left body_width'>
        <div className='mt-8 mb-64'>
          <div className='relative mb-40 short_intro'>
            <div className='flex gap-4 items-start relative'>
                <div className='w-10 h-10 overflow-hidden bg-gray-900' style={{transform:"translateY(4px)"}}>
                </div>
              <div>
                <h4 className='opacity-80'>Ashish Sharma</h4>
                <h4 className='text-blue-700 -mt-[1.5px]'>UX designer at EY</h4>
              </div>
            </div>
            <div className='absolute right-0 top-0'>
              <div>
                <h4>Welcome to my <br/>portfolio 2024</h4>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 items-center justify-center text-center w-full large_intro'>

          <h1 className='font-noto-serif text-slate-800 w-[65%] mb-0'>
          <span>
          Crafting digital solutions for <br/> startups and enterprises since 2020.
          </span>
          </h1>

          <h4 className='w-[50%] opacity-80 inline'>
            Sharing design insights on &nbsp;
            <Link className='link_button' href={'https://medium.com/@ashishsauparna'}>
              Medium
            </Link>
            &nbsp;&&nbsp;
            <Link className='link_button' href={'https://www.linkedin.com/in/ashishsauparna/'}>
              Linkedin
            </Link>
            .
          </h4>

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
