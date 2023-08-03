'use client'

import NavBar from '../ui/navbar'
import Image from 'next/image';
import Footer from '../ui/footer';
import Link from 'next/link';
import fontSwapImg from '/public/fontswap_2.jpg';
import salahkarImg from '/public/salahkar_3.png';
import sanskritiImg from '/public/sanskriti_2.png';
import Head from 'next/head';

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
          </div>
          <Footer/>
        </main>
      )
}