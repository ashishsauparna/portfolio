import NavBar from './components/ui/navbar';
import Footer from './components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';
import Link from 'next/link';
// import Banner from '/banner.png';
// import MediumIcon from '/medium_icon.svg';
// import LinkedinIcon from '/linkedin_icon.svg';

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
      src={"/banner.png"}
      width={100}
      height={100}
      alt='background banner'
      className='-z-10 absolute top-0 w-full'
      />

      {/* <MoveImage path={Banner}/> */}
      <div className='items-left body_width'>
        <div className='mt-8'>
          <div className='relative mb-24 short_intro'>
            <div className='flex gap-4 items-start relative'>
                <div className='w-10 h-10 overflow-hidden bg-gray-900' style={{transform:"translateY(4px)"}}>
                </div>
              <div>
                {/* <h4 className='opacity-80'>Ashish Sharma</h4> */}
                <Link className='link_button' href={'/about-me'}>
                <h4 className='relative mr-2'>
                  Ashish Sharma
                </h4>
                </Link>
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
          Designing digital solutions for <br/> enterprises and startups since 2020.
          </span>
          </h1>

          <h4 className='w-[50%] opacity-80 inline font-[350]'>
            Sharing design insights on &nbsp;
            <Link className='link_button' href={'https://medium.com/@ashishsauparna'}>
            <span className='relative mr-2'>
              Medium
              <Image src={"/medium_icon.svg"} width={12} height={12} alt={'Medium icon'} className='inline absolute top-0'/>
            </span>
            </Link>
            &nbsp;&nbsp;&&nbsp;
            <Link className='link_button' href={'https://www.linkedin.com/in/ashishsauparna/'}>
            <span className='relative mr-2'>
              Linkedin
              <Image src={"/linkedin_icon.svg"} width={12} height={12} alt={'Linkedin icon'} className='inline absolute top-0'/>
            </span>
            </Link>
          </h4>

          <h3 className='mt-16 flex gap-2 font-light text-base opacity-60'>
            {/* <Image
            src={ArrowDownward}
            alt='Arrow Downward'
            width={20}
            /> */}
            ✦ &nbsp;&nbsp;My Core Skills&nbsp;&nbsp; ✦
            {/* <Image
            src={ArrowDownward}
            alt='Arrow Downward'
            width={20}
            /> */}
          </h3>


          <h4 className='flex flex-wrap gap-8 items-center justify-center w-[55%] mt-2 font-[350]'>
            <span className='flex flex-col gap-2 w-[150px]'>
              <span className='text-xl'>🎙️</span>
              <span>User research</span>
            </span>
            <div className='h-12 w-[1px] bg-gray-300'>
            </div>
            <span className='flex flex-col gap-2 w-[150px]'>
              <span className='text-xl'>👩🏻‍💻</span>
              <span>Usability testing</span>
            </span>
            <div className='h-12 w-[1px] bg-gray-300'>
            </div>
            <span className='flex flex-col gap-2 w-[150px]'>
              <span className='text-xl'>📝</span>
              <span>Heuristics analysis</span>
            </span>
          </h4>

          {/* <div className="flex items-center my-6 w-full mt-36 gap-12">
            <div className="flex-grow border-t border-black bg-gray-900 w-full"></div>
            <h3 className="mx-4 font-noto-serif font-normal font-extralight whitespace-nowrap">Featured Projects</h3>
            <div className="flex-grow border-t border-black bg-gray-900 w-full"></div>
          </div> */}

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
