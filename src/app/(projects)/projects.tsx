'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.png'
import rozgarImg from '/public/case_study_rozgar.jpg';
import fontSwapImgBlur from '/public/fontswap_2_blur.png';
import delhiveryPosterBlur from '/public/Outside_in_poster_blur.png'
import rozgarImgBlur from '/public/case_study_rozgar_blur.png';
import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import OutwardArrow from '/public/outward_arrow.svg';
import { useState } from 'react';

export default function ProjectsData() {

  const [blurImage, setBlurImage] = useState(true);

  const imageInfo = [
    {
      src: "",
      srcBlur:"",
      alt: "",
      href: "",
      new: "",
      heading: "Special Projects ✨",
      subHeading:""
    },
    {
      src: delhiveryPoster,
      srcBlur:delhiveryPosterBlur,
      alt: "Vector image of 2 folders with the label of outside-in analysis",
      href: "https://medium.com/@ashishsauparna/strategic-ux-insights-the-what-and-how-of-outside-in-analysis-d33bc0ba2905",
      new: "Dec 23",
      heading: "Outside-In Analysis",
      subHeading:"Understanding trends and innovations in a logistic industry"
    },
    {
      src: fontSwapImg,
      srcBlur:fontSwapImgBlur,
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3",
      new: "Jun 23",
      heading: "Font Swap — Building a Figma Plugin",
      subHeading:"A Figma plugin addressing multitask"
    },
    {
      src: rozgarImg,
      srcBlur:rozgarImgBlur,
      alt: "Picture of an man wokring on construction site",
      href: "https://medium.com/@ashishsauparna/rozgar-ux-case-study-jan-2022-49dfe9f33ae3",
      new: "Jan 22",
      heading: "Rozgar: Helps you look for blue collar jobs",
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
          <div className='mb-4 flex justify-between'>
            <h2>{image.heading}</h2>
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
            <Image
            src={image.srcBlur}
            alt={image.alt}
            sizes="100vw"
            className='project_image_blur'/>
            <Image
            src={image.src}
            alt={image.alt}
            sizes="100vw"
            className='project_image'/>
          </div>
          : ""
        }
          <div className='mt-4 flex justify-between'>
            <h5 className='mr-20'>{image.subHeading}</h5>
            <h5 className='text-right whitespace-nowrap'>{image.new}</h5>
          </div>
        </div>
      </Link>
      </motion.div>
    ))}
  </div>
  )
}
