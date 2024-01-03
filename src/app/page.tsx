import NavBar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import ProjectsData from './(projects)/projects';
import Image from 'next/image';
import HeroBackground from '/public/hero_background.svg';
import Script from 'next/script';
import Button from '../../components/ui/button';
import HeroImage from '../../components/ui/heroimage';
import HeroAshishImg from '../../components/ui/heroashishimg';
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
      <div className='items-left mt-32 home_content'>
        <Image
          src={HeroBackground}
          alt="Black and white portait of Ashish Sharma"
          sizes="100vw"
          className='project_banner_2'/>
        <div className='mb-56 hero_grid'>
          <div className='md:w-11/12 2xl:w-5/6'>
            <h1>Hi,
            I&apos;m&nbsp;
            {/* <span className={isProject ? "tab_active" : "tab_default"} onClick={()=> setProject(true)}>
            {isProject ?
            <div className='underline_css'>
              <YourSVG />
              </div>
            : "" }
              design</span> &&nbsp;
            <span className={!isProject ? "tab_active" : "tab_default"} onClick={()=> setProject(false)}>
            {!isProject ?
            <div className='underline_css'>
            <YourSVG />
            </div>
            : "" }
            articles</span> library 
            of  */}
            <HeroAshishImg/>
            <div style={{marginTop:"-8px"}}>
            UX consultant by day, <br/>
            building stuff by night
            </div>
            </h1>
            <br/> 
            <Button href={'https://www.figma.com/community/plugin/1246737736127570810/font-swap'}
            name="Try Font Swap on Figma"/>
          </div>
          <HeroImage/>
        </div>
        <div>
          <p style={{fontWeight:"500", marginBottom:"-18px"}}>Special Projects ✨</p>
          <ProjectsData/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
