'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.jpg'
import rozgarImg from '/public/case_study_rozgar.jpg';
import buttonSmithImg from '/public/button_smith_banner.jpg'
import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import OutwardArrow from '/public/outward_arrow.svg';
import Marquee from 'react-fast-marquee';

export default function ProjectsData() {

  const imageInfo = [
    
    {
      src: fontSwapImg,
      srcBlur:"",
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "/projects/fontswap-research",
      readTime: '👀 5 mins read',
      new: "Jun 23",
      headingP1: "Font Swap: ",
      headingP2: "Case Study - June 23",
      subHeading:"A plugin to help switch multiple fonts in three steps.",
      large: false,
      shortImage: true,
      css: 'readtime_marqee'
    },    
    {
      src: buttonSmithImg,
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/buttonsmith-research",
      readTime: '👀 6 mins read',
      new: "May 24",
      headingP1: "Button Smith: ",
      headingP2: "Case Study - May 24",
      subHeading:"A plugin to create button components set",
      large: false,
      shortImage: true,
      css: 'readtime_marqee'
    },
    {
      src: delhiveryPoster,
      srcBlur:"", 
      alt: "Vector image of 2 folders with the label of outside-in analysis",
      href: "/projects/delhivery-research",
      readTime: '🎨 Work in Progress',
      new: "Dec 23",
      headingP1: "Outside In Analysis: ",
      headingP2: "UX Research - Dec 23",
      subHeading:"Understanding the logistics trend and innovations",
      large: false,
      shortImage: true,
      css: 'readtime_marqee'
    },
    // {
    //   src: "",
    //   srcBlur:"",
    //   alt: "",
    //   href: "",
    //   new: "",
    //   headingP1: "",
    //   subHeading:"",
    //   large: false,
    //   shortImage: false,
    //   css: ''
    // },
    {
      src: rozgarImg,
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/rozgar-research",
      readTime: '👀 4 mins read',
      new: "Jan 22",
      headingP1: "Rozgar App: ",
      headingP2: "Short Study - Mar 22",
      subHeading:"Finding digital solution for blue collar workers.",
      large: false,
      shortImage: true,
      css: 'readtime_marqee'
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
        delay:0.1 * index,
        duration:0.2,
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
      }}
      className={image.large ? 'cell large' : 'cell'} // Conditionally apply 'large' class
      >
      <Link href={image.href}>
        <div className='cell'>
          <div className={`flex justify-between ${image.css}`}>
            {/* <div className='flex gap-2'>
              <h4 className='text-xl'>{image.headingP1}</h4>
              <h4 className='text-xl'>{image.headingP2}</h4>
            </div>
            {
          image.src ? 
          <div>
            <Image
            src={OutwardArrow}
            width={28}
            alt='outward arrow icon'
            className='arrowrotate'
            />
          </div>
          : ""
          } */}
          <div className='marqee_content'>
            
          <p>
          &nbsp;&nbsp;&nbsp;{image.readTime} &nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{
          image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}
          &nbsp;&nbsp;&nbsp;{image.readTime} &nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{
          image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}
          </p>

          </div>
          {/* <Marquee autoFill pauseOnHover speed={20}>
          &nbsp;&nbsp;&nbsp;{image.readTime}
          </Marquee> */}
          
          </div>
        {
          image.src ? 
          <div className="image-container">
            <motion.div
            whileHover={{
              opacity:0,
            }}
            transition={{
              type:"keyframes",
              ease: "easeInOut"
            }}>
            {/* <Image
            src={image.srcBlur}
            alt={image.alt}
            sizes="100vw"
            className='project_image_blur'/> */}
            </motion.div>
            <Image
            src={image.src}
            alt={image.alt}
            sizes="100vw"
            className={image.shortImage ? 'project_image small' : 'project_image'}/>
          </div>
          : ""
        }
          <div className={`grid gap-2 justify-between project_details`}>
          <div className='flex gap-2'>
              <h4 className='text-base font-normal'>{image.headingP2}</h4>
            </div>
            <div className='mr-16 font-noto-serif font-light whitespace-pre-line text-2xl'>
              <span className='font-space-gothic font-normal'>
              {image.headingP1}
              </span>
              {image.subHeading}</div>
          </div>
        </div>
      </Link>
      </motion.div>
    ))}
  </div>
  )
}
