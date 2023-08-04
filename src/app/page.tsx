'use client'

import NavBar from './ui/navbar';
import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import salahkarImg from '/public/salahkar_3.png';
import sanskritiImg from '/public/sanskriti_2.png';
import rozgarImg from '/public/case_study_rozgar.jpg';
import fontSwapArticle from '/public/fontswap.jpg';
import documentArticle from '/public/documenting.jpg';
import wompArticle from '/public/womp_3d.png';
import dataTableArticle from '/public/data_table.png';
import Link from 'next/link';
import Footer from './ui/footer';
import { useState } from 'react';
import ProjectsData from './ui/projects';
import ArticlesData from './ui/articles';

export default function Home() {

  const [isProject, setProject] = useState(true);


  return (
    <main className="flex min-h-screen flex-col items-center"> 
      <NavBar/>
      <div className='items-left mt-16'>
        <h1 className='md:w-5/6'>Namaste! 
        Welcome to the design & articles library of Ashish Sharma</h1>

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
