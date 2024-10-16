'use client'

import Image from 'next/image';
import fontSwapImg from '/public/fontswap_2.jpg';
import delhiveryPoster from '/public/Outside_in_poster.jpg'
import rozgarImg from '/public/case_study_rozgar.jpg';
import buttonSmithImg from '/public/button_smith_banner.jpg'
import Sanskriti from '/public/sanskriti_2.jpg'
import Salhakar from '/public/salahkar_3.png'
import Link from 'next/link';
import { animate, motion } from 'framer-motion';

export default function ProjectsData() {

  const imageInfo = [

    {
      src: fontSwapImg,
      srcBlur:"",
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "/projects/fontswap-research",
      blank:"_self",
      readTime: '👀 5 mins read',
      new: "Jun 23",
      headingP1: "Font Swap: ",
      headingP2: "Case Study - June 2023",
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
      blank:"_self",
      readTime: '👀 6 mins read',
      new: "May 24",
      headingP1: "Button Smith: ",
      headingP2: "Case Study - May 2024",
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
      blank:"_self",
      readTime: '🎨 Work in Progress',
      new: "Dec 23",
      headingP1: "Outside In Analysis: ",
      headingP2: "UX Research - Dec 2023",
      subHeading:"Understanding the logistics trend and innovations",
      large: false,
      shortImage: true,
      css: 'readtime_marqee'
    },
    {
      src: rozgarImg,
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/rozgar-research",
      blank:"_self",
      readTime: '👀 4 mins read',
      new: "Jan 22",
      headingP1: "Rozgar App: ",
      headingP2: "Short Study - Mar 2022",
      subHeading:"Finding digital solution for blue collar workers.",
      large: false,
      shortImage: true,
      css: 'readtime_marqee'
    },
    {
      src: Sanskriti,
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "https://ashishsauparna.notion.site/Sanskriti-UX-Case-Study-March-2021-5eeb58ff2e304a36a8a25f80cc630b94",
      blank:"_blank",
      readTime: '👀 5 mins read',
      new: "Mar 21",
      headingP1: "Sanskriti App: ",
      headingP2: "Case Study - Mar 2021",
      subHeading:"Learning about artifacts and the museums they belong to",
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
      <Link href={image.href} target={image.blank}>
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
            <div className='mr-16 font-noto-serif font-light whitespace-pre-line text-xl text-gray-900'>
              <span className='font-space-gothic font-normal'>
              {image.headingP1}
              </span>
              {image.subHeading}
            </div>
          </div>
        </div>
      </Link>
      </motion.div>
    ))}
  </div>
  )
}
