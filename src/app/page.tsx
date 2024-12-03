import Footer from './components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ashish Sharma UX Designer',
  description: 'Step into my digital home. I am Ashish Sharma, inviting you to explore my design work, insightful articles, and the books that have shaped my journey.',
}

export default function Home() {


  const skills = [
    {
      heading: "User Research",
      description:"Through structured research, I maximize session value by addressing biases, uncovering assumptions, and fostering a friendly, comfortable environment."
    },
    {
      heading: "Heuristics analysis",
      description:"By analyzing heuristics, I identify usability issues, challenge assumptions, and ensure designs align with user expectations effectively and efficiently."
    },
    {
      heading: "Critical Thinking",
      description:"Drawing from experience, I evaluate options critically, balancing user growth, engagement, brand impact, and product value to guide decisions."
    },
    {
      heading: "Creating wireframes & Prototyping",
      description:"Over four years of experience, I’ve refined a process of identifying problems, sketching wireframes, and testing prototypes to deliver effective solutions."
    }
  ]

  const company_logos = [
    {
      src:"/company_logos/reddit.svg",
      size:80
    },
    {
      src:"/company_logos/miro.svg",
      size:75
    },
    {
      src:"/company_logos/loom.svg",
      size:80
    },
    {
      src:"/company_logos/google.svg",
      size:80
    },
    {
      src:"/company_logos/figma.svg",
      size:80
    },
    {
      src:"/company_logos/chatgpt.svg",
      size:100
    },
    {
      src:"/company_logos/adobe.svg",
      size:90
    },
  ]

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

      <div className='absolute h-screen w-screen'>

      <Image
          src={"/banner.png"}
          width={100}
          height={100}
          sizes='100'
          alt='background banner'
          className='-z-10 absolute bottom-0 md:bottom-10 w-full'
          />

      </div>

      {/* <MoveImage path={Banner}/> */}
      <div className='items-left body_width z-10 relative'>
        
        <div>
          <div className='flex flex-col items-center justify-center text-center w-full large_intro'>

          <div className="relative flex flex-col gap-8 items-center justify-center h-screen w-full -mt-24">

          <h4 className="inline font-normal z-50 items-center flex">
          <span
            style={{
              backgroundColor: "#289562",
              width: "8px",
              height: "8px",
              display: "inline-block",
              marginRight: "8px",
            }}
          ></span>
            Available for work
          </h4>

          <h1 className="font-recklessneue text-slate-800 w-[65%] mb-0" 
            style={{ letterSpacing: '-0.02em', fontWeight: "500" }}>
          <span>
            Designing digital solutions for <br className="conditional_break" />enterprises
            and startups since 2020.
          </span>
        </h1>

          <h4 className='opacity-80 inline font-[350] z-50'>
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

          </div>

          </div>
        </div>
      </div>
      <div className="flex gap-36 relative flex-col items-center justify-between bg-black mt-24 text-center w-full py-36 md:pt-48 md:py-36">

        <div className='flex flex-col text-center !w-[90%] relative'>

          <Link href={'/about-me'}>
          <Image 
          src={'/profile_cropped.png'} 
          alt={'cropped image of ashish sharma'}
          width={90}
          height={90}
          sizes='100'
          className='absolute mt-[0rem] ml-[47%] transform transition-transform duration-300 hover:scale-125'/>
          </Link>

          {/* <h4 className='mb-8 text-gray-400'
          >
          <span>
          Hi, welcome to my portfolio!
          </span>
          </h4> */}


          <h1 className='font-recklessneue text-white mb-0 text-3xl md:text-3xl lg:text-4xl !leading-relaxed' 
          style={{ letterSpacing: '0.02rem'}}
          >
            <span>
            Hi! I&apos;m Ashish  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, UX Designer <br className="conditional_break"/> from India. I craft intuitive designs <br className="conditional_break"/>for websites and mobile apps.
            </span>
          </h1>

        </div>

      <div className="flex relative flex-col items-center justify-between text-center w-full">

        <h4 className='mb-8 text-gray-400'
          >
          <span>
          Frequently used tools in 2024
          </span>
        </h4>

        <div className='flex flex-wrap gap-12 px-4 justify-center items-center'>

          {company_logos.map((logo, index) => (
            <Image 
            src={logo.src} 
            alt={'Company Logo'}
            key={index}
            width={logo.size}
            height={150}
            sizes='100'
            />
          ))}

        </div>

      </div>

      </div>
      <div>
        <div className="flex flex-col items-center justify-center text-center w-full mt-48">
        <h1 className='font-recklessneue mb-0 texxt-black' 
          style={{ letterSpacing: '-0.02em', fontSize:"2.2rem", lineHeight:"3rem" }}
          >
          <span>
          Special Projects
          </span>
        </h1>
        </div>
          <ProjectsData/>
      </div>


      <div className="flex relative flex-col items-center justify-between bg-black mt-36 text-center w-full py-24 md:py-48">

        <h1 className='font-recklessneue text-white w-[65%] mb-12' 
          style={{ letterSpacing: '-0.02em', fontSize:"2.2rem", lineHeight:"3rem", fontWeight:"300" }}
          >
          <span>
          Skills & Services
          </span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-16 w-[90%] md:w-[85%] mt-12'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-[#212121] py-8 px-6 md:p-12 text-white shadow-md grid gap-4 text-left'
          >
            <h5 className='text-white text-[24px]'>{skill.heading}</h5>
            <p className='opacity-60'>{skill.description}</p>
          </div>
        ))}
       </div>

      </div>

      <Footer/>
    </main>
  )
}
