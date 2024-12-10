'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion, animate } from "motion/react";

export default function ProjectsData() {

  const imageInfo = [

    {
      src: "/fontswap_2.jpg",
      srcBlur:"",
      alt: "Picture of a man using font swap plugin on his MacBook",
      href: "/projects/fontswap-research",
      blank:"_self",
      readTime: '5 mins read',
      new: "Jun 23",
      headingP1: "Font Swap: ",
      headingP2: "Font Swap Case Study • June 2023",
      subHeading:"A Figma plugin to help switch multiple fonts in three steps",
      large: false,
      shortImage: true,
      css: 'readtime_marqee',
      impact: true,
      impactHeader: 'Over 26,000 users',
      impactcss: 'bg-[rgba(104,104,104,0.7)] bottom-6 left-6',
    }, 
     
    {
      src: "/button_smith_banner.jpg",
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/buttonsmith-research",
      blank:"_self",
      readTime: '6 mins read',
      new: "May 24",
      headingP1: "Button Smith: ",
      headingP2: "Button Smith Case Study • May 2024",
      subHeading:"A Figma plugin to create button components set",
      large: false,
      shortImage: true,
      css: 'readtime_marqee',
      impact: true,
      impactHeader: 'Over 700 users in 8 months of launch',
      impactcss: 'bg-[rgba(65,65,65,0.7)] bottom-6 left-6',
    },
    {
      src: "/case_study_rozgar.jpg",
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "/projects/rozgar-research",
      blank:"_self",
      readTime: '4 mins read',
      new: "Jan 22",
      headingP1: "Rozgar App: ",
      headingP2: "Rozgar App Short Study • Mar 2022",
      subHeading:"Finding digital solution for blue collar workers",
      large: false,
      shortImage: true,
      css: 'readtime_marqee',
      impact: false,
    },
    {
      src: "/sanskriti_2.jpg",
      srcBlur:"",
      alt: "Picture of an man wokring on construction site",
      href: "https://ashishsauparna.notion.site/Sanskriti-UX-Case-Study-March-2021-5eeb58ff2e304a36a8a25f80cc630b94",
      blank:"_blank",
      readTime: '8 mins read',
      new: "Mar 21",
      headingP1: "Sanskriti App: ",
      headingP2: "Sanskriti App Case Study • Mar 2021",
      subHeading:"Learning about artifacts and the museums they belong to",
      large: false,
      shortImage: true,
      css: 'readtime_marqee',
      impact: false,
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
      >
      <div className={image.large ? 'cell large' : 'cell'} // Conditionally apply 'large' class
        >
      <Link href={image.href} target={image.blank}>
        <div className='cell'>
          <div className={`flex justify-between ${image.css}`}>

          {/* <div className='marqee_content'>
            
          <p>
          &nbsp;&nbsp;&nbsp;{image.readTime} 
          &nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{
          image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;
          {image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}&nbsp;&nbsp;&nbsp;{image.readTime}
          &nbsp;&nbsp;&nbsp;{image.readTime}
          </p>

          </div> */}
          
          </div>
        {
          image.src ? 
          <div className="image-container">
            <Image
            src={image.src}
            alt={image.alt}
            sizes="100vw"
            width={500}
            height={500}
            className={image.shortImage ? 'project_image small' : 'project_image'}/>
            {
              image.impact ?
              <div style={{color:"#E9E9E9"}} className={`impact_on_image ${image.impactcss}`}>
                <b className={`font-space-gothic`}>{image.impactHeader}</b>
                
              </div>
                : null
            }
          </div>
          : ""
        }
          <div className={`grid gap-1 justify-between project_details`}>
            <div className='flex'>
                <h4 className='text-sm font-albert-sans uppercase text-blue-700 font-medium'>{image.headingP2}</h4>
            </div>
            <div className='mr-16 font-recklessneue font-normal whitespace-pre-line text-2xl text-gray-900'>
              {/* <span className='font-space-gothic font-normal'>
              {image.headingP1}
              </span> */}
              {image.subHeading}
            </div>
          </div>
        </div>
      </Link>
      </div>
      </motion.div>
    ))}
  </div>
  )
}
