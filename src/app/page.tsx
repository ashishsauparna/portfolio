import Footer from './components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import Script from 'next/script';
import { Metadata } from 'next';
import Link from 'next/link';
import BouncingImage from './components/ui/motion_tag';

export const metadata: Metadata = {
  title: 'Ashish Sharma UX Designer',
  description: 'Step into my digital home. I am Ashish Sharma, inviting you to explore my design work, insightful articles, and the books that have shaped my journey.',
}

export default function Home() {


  const skills = [
    {
      heading: "User Research",
      color: "bg-[#212121]",
      placement: "-translate-y-40"
      // description:"Through structured research, I maximize session value by addressing biases, uncovering assumptions, and fostering a friendly, comfortable environment."
    },
    {
      heading: "Heuristics analysis",
      color: "bg-[#2C2C2C]",
      placement: "-translate-y-40"
      // description:"By analyzing heuristics, I identify usability issues, challenge assumptions, and ensure designs align with user expectations effectively and efficiently."
    },
    {
      heading: "Critical Thinking",
      color: "bg-[#212121]",
      placement: "-translate-y-40"
      // description:"Drawing from experience, I evaluate options critically, balancing user growth, engagement, brand impact, and product value to guide decisions."
    },
    {
      heading: "Creating wireframes",
      color: "bg-[#2C2C2C]",
      placement: "-translate-y-40"
      // description:"Over four years of experience, I’ve refined a process of identifying problems, sketching wireframes, and testing prototypes to deliver effective solutions."
    },
    {
      heading: "Prototyping",
      color: "bg-[#212121]",
      placement: "-translate-y-40"
    },
    {
      heading: "Usability Testing",
      color: "bg-[#2C2C2C]",
      placement: "-translate-y-40"
    },
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

      {/* <MoveImage path={Banner}/> */}
      <div className='items-left body_width z-10 relative'>
        
        <div>
          <div className='flex flex-col items-center justify-center text-center w-full large_intro'>

          <div className="relative flex flex-col gap-8 items-center justify-center h-screen w-full -mt-48 md:-mt-24">

          {/* <h4 className="inline font-normal z-50 items-center flex"
          style={{
            border: "1px solid #D0D0D0",
            padding:"2px 12px",
            borderRadius:"1000px"
          }}>
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
          </h4> */}

          <h1 className="text-slate-800 w-[65%] mb-0" 
            style={{ fontWeight: "500", position: "relative",}}>
          <span>
            Designing digital solutions <br className="conditional_break" />for enterprises since 2020
          </span>
        </h1>

          <h4 className='opacity-80 inline font-[350] z-50'>
            Sharing design insights on &nbsp;
            <Link className='link_button md:mr-2 mr-2' href={'https://medium.com/@ashishsauparna'}>
            <span className='relative mr-4'>
              Medium
              <Image src={"/medium_icon.svg"} width={12} height={12} alt={'Medium icon'} className='ml-1 inline absolute top-0'/>
            </span>
            </Link>
            &&nbsp;
            <Link className='link_button' href={'https://www.linkedin.com/in/ashishsauparna/'}>
            <span className='relative mr-4'>
              Linkedin
              <Image src={"/linkedin_icon.svg"} width={12} height={12} alt={'Linkedin icon'} className='ml-1 inline absolute top-0'/>
            </span>
            </Link>
          </h4>

         
          <BouncingImage />

          </div>

          </div>
        </div>
      </div>
      <div className="flex md:gap-36 gap-24 relative flex-col items-center justify-between bg-black -mt-12 text-center w-full py-16 md:pt-48 md:py-36">

        <div className='flex flex-col md:text-center text-left !w-[90%] relative'>

          <h2 className='font-recklessneue text-white mb-0' 
          style={{lineHeight:"3.2rem", fontWeight:"300"}}
          >
            <span className='inline'>
            Hi! I&apos;m Ashish &nbsp;
            <Link href={'/about-me'} className="inline">
              <Image 
              src={'/profile_cropped.png'} 
              alt={'cropped image of ashish sharma'}
              width={70}
              height={70}
              sizes='100'
              style={{borderRadius:"24px"}}
              className='transform duration-300 hover:scale-125 z-10 inline -translate-y-1'/>
            </Link>&nbsp;&nbsp;, UX Designer <br className="conditional_break"/>and Researcher from India with 4+ years<br className="conditional_break"/> of expereince in user-centric design.
            
            </span>
          </h2>

        </div>

      <div className="flex relative flex-col md:items-center items-left w-[90%] justify-between md:text-center w-full md:mb-0 mb-8">

        <h4 className='mb-8 text-gray-400 md:ml-0 ml-4'
          >
          <span>
          Frequently used tools in 2024
          </span>
        </h4>

        <div className='flex flex-wrap md:gap-12 gap-8 px-4 md:justify-center justify-left items-center'>

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
        <div className="flex flex-col items-center justify-center text-center w-full md:mt-48 mt-24">
        <h2 className='font-recklessneue text-black'>
          <span>
          Special Projects
          </span>
        </h2>
        </div>
          <ProjectsData/>
      </div>


      <div className="flex relative flex-col items-center justify-between bg-black mt-36 text-center w-full py-24">

        <h2 className='font-recklessneue text-white w-[65%] mb-56'
          >
          <span>
          Skills & Services
          </span>
        </h2>


        <div className='grid grid-cols-2 gap-y-4 md:gap-0 md:grid-cols-6 w-[90%] md:w-[85%] justify-items-center'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${skill.color} h-40 w-40 md:h-56 md:w-56 p-4 md:p-0 text-white md:rounded-full flex flex-col items-center justify-center text-center ${
              index % 2 === 0 ? '-translate-y-4' : `${skill.placement}` // Zigzag effect
            }`}
          >
            <h4 className='text-white'>{skill.heading}</h4>
          </div>
        ))}
       </div>

      </div>

      <Footer/>
    </main>
  )
}
