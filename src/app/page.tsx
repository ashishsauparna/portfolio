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
        <div className='mt-8 mb-4'>
          <div className='relative mb-48'>
            <div className='flex gap-4 items-start relative'>
                <div className='w-10 h-10 overflow-hidden bg-gray-900' style={{transform:"translateY(4px)"}}>
                  {/* <Image src={AshishSharmaImg} alt="Arrow Down"
                  /> */}
                </div>
              <div>
                <h4>Ashish Sharma</h4>
                <h4 className='text-blue-700 -mt-[1.5px]'>UX designer - since 2020</h4>
              </div>
            </div>
            <div className='absolute right-0 top-0'>
              <div>
                <h4>Welcome to my <br/>portfolio 2024</h4>
              </div>
            </div>
          </div>
          <div className='flex items-start justify-center text-center w-full'>

          <h1 className='text-slate-800 tracking-tight leading-none text-6xl'>
          <span className='font-noto-serif font-light text-slate-800'>Crafting solutions</span><br/>
          <span className='font-noto-serif font-light'>for a better experience</span>
          </h1>

          </div>
        </div>
        <div className='grid mb-64 justify-center place-items-center overflow-visible'>

        
        {/* <LottieAnimation width={35} height={35} /> */}
        <Link href={'mailto:ashishsauparna@gmail.com'}>
        
          <div className='flex items-center justify-center gap-2'>
          <div style={{backgroundColor:"mediumseagreen", width:"12px", height:"12px", borderRadius:"100%"}}></div>
          <span>Open to <span>new job offers</span></span>
          
          </div>
        </Link>
        </div>
        <div>
          <ProjectsData/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
