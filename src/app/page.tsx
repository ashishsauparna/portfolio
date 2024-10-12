import NavBar from './components/ui/navbar';
import Footer from './components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import Script from 'next/script';
import OutwardArrowDown from '/public/arrow_outward.svg'
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
        <div className='mt-4 mb-24'>
          <div className='relative mb-40'>
            <div className='flex gap-4 items-start relative'>
                <div className='w-11 h-11 bg-zinc-900' style={{transform:"translateY(4px)"}}>
                </div>
                {/* <Image src={BlueSpectrum} alt={'a blue color spectrum'} width={45}
                className='absolute -z-10 top-1'/> */}
              <div>
                <h4>Ashish Sharma</h4>
                <h5 className='text-xl'>UX designer - since 2019</h5>
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
          <span className='font-recoleta text-slate-800'>Crafting solutions</span><br/>
          <span className='font-recoleta'>for a better experience</span>
            {/* <span className='inline-flex ml-4'>
            <svg width="42" height="42" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.93506 5.31982L10.6199 27.3269" stroke="#232122" strokeWidth="8"/>
            <path d="M22 1.83252L28.6848 23.8396" stroke="#232122" strokeWidth="8"/>
            <path d="M10.7021 55.606C19.5661 56.4923 45.4772 55.606 53.1212 13.3423" stroke="#232122" strokeWidth="8"/>
            </svg>
            </span> */}
          </h1>
          {/* <Image src={AshishSharmaImg} alt={''} height={700} className='ml-12 relative bottom-[35px]'/> */}
          </div>
        </div>
        <div className='grid justify-center place-items-center overflow-visible'>

        
        {/* <LottieAnimation width={35} height={35} /> */}
          <div className='flex items-center justify-center mt-4 gap-2'>
          <span>
          <b>Open to</b> <span className='font-recoleta'>new job offers</span></span>
          <div style={{backgroundColor:"mediumseagreen", width:"12px", height:"12px", borderRadius:"100%"}}></div>
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
