'use client'

import NavBar from './ui/navbar';
import Footer from './ui/footer';
import { useState } from 'react';
import ProjectsData from './ui/projects';
import ArticlesData from './ui/articles';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import AshishSharmaImg from '/public/ashish_sharma.png';
import FontSwapBanner from '/public/font_swap_banner.svg';
import HeroBackground from '/public/hero_background.svg';
import Script from 'next/script';
import Button from './ui/button';
import { motion } from 'framer-motion';

export default function Home() {

  const [isProject, setProject] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e:any) => {
    const linkRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - linkRect.left;
    const y = e.clientY - linkRect.top;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const fadeInAnimation = {
    initial:{
      opacity:0,
      y:20
    },
    animate: () => ({
      opacity:1,
      y:0,
      transition:{
        delay:0,
        duration:0.4,
        type:"swing"
      }
    }),
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
    <Head>
      <title>Ashish Sharma: UX Designer</title>
    </Head>
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
            <Link className='hover-link' style={{position:"relative"}} href={"/about-me"} 
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}> Ashish
            <Image
              src={AshishSharmaImg}
              alt="Black and white portait of Ashish Sharma"
              sizes="100vw"
              className='hover-image'
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}/>
            </Link>
            <div style={{marginTop:"-8px"}}>
            UX consultant by day, <br/>
            building stuff by night
            </div>
            </h1>

            {/* <p className='md:text-lg'>
            By day, I work as a <span style={{fontWeight:"500"}}>UX Consultant at EY</span>, using design to bring accessiblity to digital life. <br/><br/>
            By the weekend, I&apos;m helping the community. I&apos;m developing a Figma plugin that lets users switch 
            fonts without compromising on font styles.
            </p> */}
            <br/> 
            <Button href={'https://www.figma.com/community/plugin/1246737736127570810/font-swap'}
            name="Try Font Swap on Figma"/>
          </div>
          <motion.div 
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once:true
          }}
          className='project_banner_1'>
          {/* <Link href={'https://www.figma.com/community/plugin/1246737736127570810/font-swap'} target='_blank'> */}
          <Image
              src={FontSwapBanner}
              alt="Black and white portait of Ashish Sharma"
              sizes="100vw"/>
          {/* </Link> */}
          </motion.div>
        </div>
        {/* <div className='flex flex-row gap-8 mt-24'>
          <h4 className={isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(true)}>My Projects</h4>
          <h4 className={!isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(false)}>Articles</h4>
        </div> */}
        <div>
          <p style={{fontWeight:"500", marginBottom:"-18px"}}>Special Projects ✨</p>
          {isProject ?
          <ProjectsData/>
          :
          <ArticlesData/>
          }
        </div>
      </div>
      <Footer/>
    </main>
  )
}
