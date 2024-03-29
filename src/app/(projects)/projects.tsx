'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.png'
import rozgarImg from '/public/case_study_rozgar.jpg';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import ArrowForwardIcon from '/public/arrow_icon.svg';

export default function ProjectsData() {

  const imageInfo = [
    {
      src: delhiveryPoster,
      alt: "Vector image of 2 folders with the label of outside-in analysis",
      href: "https://medium.com/@ashishsauparna/strategic-ux-insights-the-what-and-how-of-outside-in-analysis-d33bc0ba2905",
      new: "December 2023",
      heading: "The What and How of Outside-In Analysis",
      subHeading:"Outside-in analysis can deepen the understanding of product and customer experiences. Here's my insight after being part of 5 sessions so far."
    },
    {
      src: fontSwapImg,
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3",
      new: "June 2023 - Case Study",
      heading: "Font Swap — Building a Figma Plugin",
      subHeading:"A Figma plugin specifically designed to address the font-replacing challenge faced by UI designers."
    },
    {
      src: rozgarImg,
      alt: "Picture of an man wokring on construction site",
      href: "https://medium.com/@ashishsauparna/rozgar-ux-case-study-jan-2022-49dfe9f33ae3",
      new: "January 2022 - Case Study",
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
      <Link href={image.href} target='_blank'>
        <div className='cell'>
          <Image
          src={image.src}
          alt={image.alt}
          sizes="100vw"
          className='project_image'/>
          <div className='pr-8'>
            <h5>{image.new}</h5>
            <h1 style={{margin:"24px 0px"}}>{image.heading}</h1>
            <p className='text-zinc-600 mt-2.5 mb-4'>{image.subHeading}</p>
            <div className="button">
            View
            <Image
              src={ArrowForwardIcon}
              alt="white arrow pointing to right"
              sizes="100vw"
              className='arrow_icon'/>
            </div>
          </div>
        </div>
      </Link>
      </motion.div>
    ))}
  </div>
  )
}
