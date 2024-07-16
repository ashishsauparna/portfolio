'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.png'
import rozgarImg from '/public/case_study_rozgar.jpg';
import fontSwapImgBlur from '/public/fontswap_2_blur.png';
import delhiveryPosterBlur from '/public/Outside_in_poster_blur.png'
import buttonSmithImg from '/public/button_smith_banner.jpg'
import buttonSmithImgBlur from '/public/button_smith_banner_blur.jpg'
import rozgarImgBlur from '/public/case_study_rozgar_blur.png';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import OutwardArrow from '/public/outward_arrow.svg';
import { useState } from 'react';

export default function ProjectsData() {

  const imageInfo = [
    {
      src: buttonSmithImg,
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/buttonsmith-research",
      new: "May 24",
      heading: "Button Smith | Figma Plugin",
      subHeading:"A Figma Plugin making esigner life easy."
    },
    {
      src: "",
      srcBlur:"",
      alt: "",
      href: "",
      new: "",
      heading: "",
      subHeading:""
    },
    {
      src: delhiveryPoster,
      srcBlur:"",
      alt: "Vector image of 2 folders with the label of outside-in analysis",
      href: "/projects/delhivery-research",
      new: "Dec 23",
      heading: "Delhivery | CX Research",
      subHeading:"Understanding trends and innovations in a logistic industry"
    },
    {
      src: fontSwapImg,
      srcBlur:"",
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "/projects/fontswap-research",
      new: "Jun 23",
      heading: "Font Swap | Figma Plugin",
      subHeading:"A Figma plugin addressing multitask"
    },
    {
      src: "",
      srcBlur:"",
      alt: "",
      href: "",
      new: "",
      heading: "",
      subHeading:""
    },
    {
      src: rozgarImg,
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/rozgar-research",
      new: "Jan 22",
      heading: "Rozgar | Mobile Application",
      subHeading:"Understanding the online/offline market of Blue collar workers."
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
      }}>
      <Link href={image.href}>
        <div className='cell'>
          <div className='mb-4 flex justify-between'>
            <h4>{image.heading}</h4>
            {
          image.src ? 
          <div>
            <Image
            src={OutwardArrow}
            alt='outward arrow icon'
            />
          </div>
          : ""
          }
          </div>
        {
          image.src ? 
          <div>
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
            className='project_image'/>
          </div>
          : ""
        }
          <div className='mt-4 flex justify-between'>
            <h5 className='mr-20 whitespace-pre-line'>{image.subHeading}</h5>
            <h5 className='text-right whitespace-nowrap'>{image.new}</h5>
          </div>
        </div>
      </Link>
      </motion.div>
    ))}
  </div>
  )
}
