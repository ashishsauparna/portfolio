'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import salahkarImg from '/public/salahkar_3.png';
import sanskritiImg from '/public/sanskriti_2.png';
import rozgarImg from '/public/case_study_rozgar.jpg';
import Link from 'next/link';

export default function ProjectsData() {


  return (
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
    <Link className='cell' href="https://medium.com/@ashishsauparna/rozgar-ux-case-study-jan-2022-49dfe9f33ae3">
      <Image
      src={rozgarImg}
      alt="Picture of an man wokring on construction site"
      sizes="100vw"
      className='project_image'/>
      <h3 className='mt-4'>Rozgar - Helps you look for blue collar jobs - UX Case Study (January 2022)</h3>
      <p className='mt-1 text-gray-600'>This Case study includes Research and understanding of 
      the online and offline market of Blue collar workers.</p>
    </Link>
    <Link className='cell' href="https://ashishsauparna.notion.site/Salahkar-Budgeting-Savings-app-UX-Case-Study-April-2021-e85f2cae642e4be39ed12907641786fd">
      <Image
      src={salahkarImg}
      alt="Picture of a laptop and mobile showing the salahkar app"
      sizes="100vw"
      className='project_image'/>
      <h3 className='mt-4'>Salahkar - Budgeting & Savings app - UXCase Study (April 2021)</h3>
      <p className='mt-1 text-gray-600'>The app teaches teens (ages 13-19) financial management and 
      accounting terms for a successful future.</p>
    </Link>
    <Link className='cell' href="https://ashishsauparna.notion.site/Sanskriti-UX-Case-Study-March-2021-5eeb58ff2e304a36a8a25f80cc630b94">
      <Image
      src={sanskritiImg}
      alt="Picture of an girl using sanskriti app on her mobile phone. She is sitting inside her car"
      sizes="100vw"
      className='project_image'/>
      <h3 className='mt-4'>Sanskriti - UX Case Study (March 2021)</h3>
      <p className='mt-1 text-gray-600'>Discover artifacts and their museums withSanskriti app. 
        The app is perfect for class projects or exploring specific timelines.</p>
    </Link>
  </div>
  )
}
