'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.png'
import salahkarImg from '/public/salahkar_3.png';
import sanskritiImg from '/public/sanskriti_2.png';
import rozgarImg from '/public/case_study_rozgar.jpg';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';

export default function ProjectsData() {

  const imageInfo = [
    {
      src: delhiveryPoster,
      alt: "Vector image of 2 folders with the label of outside-in analysis",
      href: "https://miro.com/app/board/uXjVMrWRtKY=/?share_link_id=492406900633",
      new: "Work in Progress...",
      heading: "Outside-In Analysis: Delhivery",
      subHeading:"Conducting an outside-in analysis of one of the popular courier handeling brand in India."
    },
    {
      src: fontSwapImg,
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3",
      new: "Product Case Study",
      heading: "Font Swap: Switch mixed fonts",
      subHeading:"Font Swap is a Figma plugin specifically designed to address the font-changing challenge faced by UI designers."
    },
    {
      src: rozgarImg,
      alt: "Picture of an man wokring on construction site",
      href: "https://medium.com/@ashishsauparna/rozgar-ux-case-study-jan-2022-49dfe9f33ae3",
      new: "UX Case Study - January 2022",
      heading: "Rozgar: Helps you look for blue collar jobs",
      subHeading:"This Case study includes Research and understanding of \
      the online and offline market of Blue collar workers."
    },
    {
      src: salahkarImg,
      alt: "Picture of a laptop and mobile showing the salahkar app",
      href: "https://ashishsauparna.notion.site/Salahkar-Budgeting-Savings-app-UX-Case-Study-April-2021-e85f2cae642e4be39ed12907641786fd",
      new: "UX Case Study - April 2021",
      heading: "Salahkar: Budgeting & Savings app",
      subHeading:"The app teaches teens (ages 13-19) financial management and \
      accounting terms for a successful future."
    },
    {
      src: sanskritiImg,
      alt: "Picture of an girl using sanskriti app on her mobile phone. She is sitting inside her car",
      href: "https://ashishsauparna.notion.site/Sanskriti-UX-Case-Study-March-2021-5eeb58ff2e304a36a8a25f80cc630b94",
      new: "UX Case Study - March 2021",
      heading: "Sanskriti App: Discover artifacts and their museums",
      subHeading:"The app is designed to sync well with students and the people exploring specific timelines."
    },
    // Add more objects as needed
  ];
  

  const fadeInAnimation = {
    initial:{
      opacity:0,
      y:40
    },
    animate: (index: number) => ({
      opacity:1,
      y:0,
      transition:{
        delay:0.2 * index,
        duration:0.4,
        type:"swing"
      }
    }),
  }


  return (
    <div className='project_grid'>
    {imageInfo.map((image, index) => (
      <motion.div
      key={index}
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{
        once:true
      }}>
      <Link className='cell' href={image.href}>
        <Image
        src={image.src}
        alt={image.alt}
        sizes="100vw"
        className='project_image'/>
        <div>
        <h5>{image.new}</h5>
        <h3>{image.heading}</h3>
        </div>
        <p className='text-zinc-600 -mt-2.5'>{image.subHeading}</p>
      </Link>
      </motion.div>
    ))}
  </div>
  )
}
