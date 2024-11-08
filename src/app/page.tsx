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

      <Image
      src={"/banner.png"}
      width={100}
      height={100}
      alt='background banner'
      className='-z-10 absolute top-0 w-full'
      />

      {/* <MoveImage path={Banner}/> */}
      <div className='items-left body_width'>
        <div className='mt-48'>

          <div className='flex flex-col gap-4 items-center justify-center text-center w-full large_intro'>

          <h1 className='font-noto-serif text-slate-800 w-[65%] mb-0' 
          style={{ letterSpacing: '-0.02em' }}
          >
            <span>
              Designing digital solutions for <br/> enterprises and startups since 2020.
            </span>
          </h1>

          <h4 className='w-[50%] opacity-80 inline font-[350]'>
            Sharing design insights on &nbsp;
            <Link className='link_button' href={'https://medium.com/@ashishsauparna'}>
            <span className='relative mr-4'>
              Medium
              <Image src={"/medium_icon.svg"} width={12} height={12} alt={'Medium icon'} className='ml-1 inline absolute top-0'/>
            </span>
            </Link>
            &nbsp;&nbsp;&&nbsp;&nbsp;
            <Link className='link_button' href={'https://www.linkedin.com/in/ashishsauparna/'}>
            <span className='relative mr-4'>
              Linkedin
              <Image src={"/linkedin_icon.svg"} width={12} height={12} alt={'Linkedin icon'} className='ml-1 inline absolute top-0'/>
            </span>
            </Link>
          </h4>

          <h3 className='flex gap-1 text-gray-500 text-sm mt-48'>
            Scroll Down
            <Image
            src={'/arrow_downward.svg'}
            alt='arrow'
            width={16}
            height={16}
            className='opacity-50'
            />
          </h3>


          <h4 className='skills_list flex flex-wrap gap-12 items-center justify-center w-[100%] font-[350] text-gray-700 text-sm mt-4'>
            <span className='flex gap-2'>
              <span>💬</span>
              <span>User research</span>
            </span>
            <span className='flex gap-2'>
              <span>📝</span>
              <span>Heuristics analysis</span>
            </span>
            <span className='flex gap-2'>
              <span>🧠</span>
              <span>Critical thinking</span>
            </span>
            <span className='flex gap-2'>
              <span>👩🏻‍💻</span>
              <span>Prototyping</span>
            </span>
            <span className='flex gap-2'>
              <span>👩🏻‍💻</span>
              <span>Usability testing</span>
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
