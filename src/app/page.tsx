'use client'

import NavBar from './ui/navbar';
import Footer from './ui/footer';
import { useState } from 'react';
import ProjectsData from './ui/projects';
import ArticlesData from './ui/articles';
import Head from 'next/head';
import Link from 'next/link';
import YourSVG from './ui/underline_svg';
import Image from 'next/image';
import AshishSharmaImg from '/public/ashish_sharma.png';

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


  return (
    <main className="flex min-h-screen flex-col items-center"> 
    <Head>
      <title>Ashish Sharma: UX Designer</title>
    </Head>
      <NavBar/>
      <div className='items-left mt-32'>
        <h1 className='md:w-5/6 mb-24'>Namaste! 
        Welcome to the <br/><span className={isProject ? "tab_active" : "tab_default"} onClick={()=> setProject(true)}>
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
        of <Link className='hover-link' style={{position:"relative"}} href={"/about-me"} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}> Ashish Sharma
        <Image
          src={AshishSharmaImg}
          alt="Black and white portait of Ashish Sharma"
          sizes="100vw"
          className='hover-image'
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}/>
        </Link> </h1>
        {/* <div className='flex flex-row gap-8 mt-24'>
          <h4 className={isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(true)}>My Projects</h4>
          <h4 className={!isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(false)}>Articles</h4>
        </div> */}

        {isProject ?
        <ProjectsData/>
        :
        <ArticlesData/>
        }
      </div>
      <Footer/>
    </main>
  )
}
