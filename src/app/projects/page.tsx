'use client'

import NavBar from '../ui/navbar';
import Footer from '../ui/footer';
import Head from 'next/head';
import ProjectsData from '../ui/projects';

export default function Projects() {

    return (
        <main className="flex min-h-screen flex-col items-center"> 
        <Head>
          <title>
            Projects: Ashish Sharma
          </title>
        </Head>
          <NavBar/>
          <div className='items-left mt-16'>
            <h1 className='md:w-5/6'>My Projects</h1>
            <ProjectsData/>
          </div>
          <Footer/>
        </main>
      )
}