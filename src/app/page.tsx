'use client'

import NavBar from './ui/navbar';
import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import salahkarImg from '/public/salahkar_3.png';
import sanskritiImg from '/public/sanskriti_2.png';
import fontSwapArticle from '/public/fontswap.jpg';
import documentArticle from '/public/documenting.jpg';
import wompArticle from '/public/womp_3d.png';
import dataTableArticle from '/public/data_table.png'
import Link from 'next/link';
import Footer from './ui/footer';
import { useState } from 'react';

export default function Home() {

  const [isProject, setProject] = useState(true);


  return (
    <main className="flex min-h-screen flex-col items-center"> 
      <NavBar/>
      <div className='items-left mt-16'>
        <h1 className='md:w-5/6'>Namaste! 
        Welcome to the design & articles library of Ashish Sharma</h1>

        <div className='flex flex-row gap-4 mt-16'>
          <h4 className={isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(true)}>Articles</h4>
          <h4 className={!isProject ? 'tab_active' : 'tab_default'} onClick={()=> setProject(false)}>Recent Projects</h4>
        </div>

        {!isProject ?
        <div className='project_grid'>
          <Link className='cell' href="/projects/font-swap-figma-plugin">
            <Image
            src={fontSwapImg}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='project_image'/>
            <h5 className='mt-4'>New Case Study</h5>
            <h3 className='mt-1'>Font Swap: Switch mixed fonts</h3>
            <p className='mt-1 text-gray-600'>Font Swap is a Figma plugin specifically designed to 
              address the font-changing challenge faced byUI designers.</p>
          </Link>
          <Link className='cell' href="https://ashishsauparna.notion.site/Salahkar-Budgeting-Savings-app-UX-Case-Study-April-2021-e85f2cae642e4be39ed12907641786fd">
            <Image
            src={salahkarImg}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='project_image'/>
            <h3 className='mt-4'>Salahkar - Budgeting & Savings app - UXCase Study (April 2021)</h3>
            <p className='mt-1 text-gray-600'>The app teaches teens (ages 13-19) financial management and 
            accounting terms for a successful future.</p>
          </Link>
          <Link className='cell' href="https://ashishsauparna.notion.site/Sanskriti-UX-Case-Study-March-2021-5eeb58ff2e304a36a8a25f80cc630b94">
            <Image
            src={sanskritiImg}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='project_image'/>
            <h3 className='mt-4'>Sanskriti - UX Case Study (March 2021)</h3>
            <p className='mt-1 text-gray-600'>Discover artifacts and their museums withSanskriti app. 
              The app is perfect for class projects or exploring specific timelines.</p>
          </Link>
        </div>
        :
        <div className='articles_grid'>
          <Link className='cell' href="https://uxplanet.org/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3">
            <Image
            src={fontSwapArticle}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5>New</h5>
              <h5 className='ml-2 text-gray-500'>3 mins read</h5>
            </div>
            <h3 className='mt-2'>UX Case Study: Font Swap -Building a Figma Plugin</h3>
          </Link>
          <Link className='cell' href="https://medium.com/design-bootcamp/more-reasons-for-using-womp-3d-design-software-31c404d9f61d">
            <Image
            src={wompArticle}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5>New</h5>
              <h5 className='ml-2 text-gray-500'>2 mins read</h5>
            </div>
            <h3 className='mt-2'>More reasons for using Womp 3D design software</h3>
          </Link>
          <Link className='cell' href="https://medium.com/@ashishsauparna/how-to-document-a-ux-project-6cb5ffdce90a">
            <Image
            src={documentArticle}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5 className='text-gray-500'>2 mins read</h5>
            </div>
            <h3 className='mt-2'>This is how I document my UX projects</h3>
          </Link>
          <Link className='cell' href="https://medium.com/ux-planet/designing-a-user-friendly-data-table-d0f9763d2a83">
            <Image
            src={dataTableArticle}
            alt="Picture of an man using font swap plugin on his macbook"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5 className='text-gray-500'>2 mins read</h5>
            </div>
            <h3 className='mt-2'>5 ways to design a user-friendly data table</h3>
          </Link>
        </div>
        }
      </div>
      <Footer/>
    </main>
  )
}
