'use client'

import NavBar from './ui/navbar';
import Footer from './ui/footer';
import { useState } from 'react';
import ProjectsData from './ui/projects';
import ArticlesData from './ui/articles';
import Head from 'next/head';
import Image from 'next/image';
import PencilMark from '/public/circle_image.svg'
import Link from 'next/link';

export default function Home() {

  const [isProject, setProject] = useState(true);


  return (
    <main className="flex min-h-screen flex-col items-center"> 
    <Head>
      <title>Ashish Sharma: UX Designer</title>
    </Head>
      <NavBar/>
      <div className='items-left mt-16'>
        <h1 className='md:w-5/6'>Namaste! 
        Welcome to the <br/><span style={isProject ? {position:"relative"} : {position:"relative"}} onClick={()=> setProject(true)}>
        {isProject ?
        <Image
        src={PencilMark}
        className='pencile_mark'
        alt='pencile mark in circle used to highlight the text'
        />: "" }
           design</span> & 
        <span style={!isProject ? {position:"relative"} : {position:"relative"}} onClick={()=> setProject(false)}>
        {!isProject ?
        <Image
        src={PencilMark}
        className='pencile_mark'
        style={{left:"0"}}
        alt='pencile mark in circle used to highlight the text'
        />: "" }
        &nbsp;articles</span> library 
        of <Link style={{position:"relative"}} href={"/about-me"}> Ashish Sharma</Link> </h1>
        <div className='flex flex-row gap-4 mt-16'>
          <h4 className={isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(true)}>My Projects</h4>
          <h4 className={!isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(false)}>Articles</h4>
        </div>

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
