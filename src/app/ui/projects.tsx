'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.png'
import rozgarImg from '/public/case_study_rozgar.jpg';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';

export default function ProjectsData() {

  const imageInfo = [
    {
      src: delhiveryPoster,
      alt: "Vector image of 2 folders with the label of outside-in analysis",
      href: "https://medium.com/@ashishsauparna/strategic-ux-insights-the-what-and-how-of-outside-in-analysis-d33bc0ba2905",
      new: "WIP: December 2023",
      heading: "Conducting an Outside-In Analysis",
      subHeading:"Outside-in analysis can deepen the understanding of product and customer experiences. Here's my insight from five sessions so far."
    },
    {
      src: fontSwapImg,
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3",
      new: "Product Case Study - June 2023",
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
    }
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
