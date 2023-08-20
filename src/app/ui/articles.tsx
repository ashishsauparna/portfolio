'use client'

import Image from 'next/image';
import fontSwapArticle from '/public/fontswap.jpg';
import documentArticle from '/public/documenting.jpg';
import wompArticle from '/public/womp_3d.png';
import dataTableArticle from '/public/data_table.png'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticlesData() {

  const imageInfo = [
    {
      src: fontSwapArticle,
      alt: "Picture of an girl using font swap a figma plugin on her macbook",
      href: "https://uxplanet.org/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3",
      new: "New Article",
      readingTime: "3 mins read",
      heading:"UX Case Study: Font Swap -Building a Figma Plugin"
    },
    {
      src: wompArticle,
      alt: "Picture of an girl using font swap a figma plugin on her macbook",
      href: "https://medium.com/design-bootcamp/more-reasons-for-using-womp-3d-design-software-31c404d9f61d",
      new: "New Article",
      readingTime: "2 mins read",
      heading:"More reasons for using Womp 3D design software"
    },
    {
      src: documentArticle,
      alt: "Picture of an girl using font swap a figma plugin on her macbook",
      href: "https://medium.com/@ashishsauparna/how-to-document-a-ux-project-6cb5ffdce90a",
      new: "",
      readingTime: "2 mins read",
      heading:"This is how I document my UX projects"
    },
    {
      src: dataTableArticle,
      alt: "Picture of an girl using font swap a figma plugin on her macbook",
      href: "https://medium.com/ux-planet/designing-a-user-friendly-data-table-d0f9763d2a83",
      new: "",
      readingTime: "2 mins read",
      heading:"5 ways to design a user-friendly data table"
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
        delay:0.3 * index,
        duration:0.4,
        type:"swing"
      }
    }),
  }

  return (
        <div className='articles_grid'>
          {imageInfo.map((image, index) => (
            <motion.div
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
                className='article_image'/>
                <div className='flex flex-row mt-4'>
                  <h5>{image.new}</h5>
                  <h5 className='ml-2 text-zinc-500 font-medium'>{image.readingTime}</h5>
                </div>
                <h3 className='mt-2'>{image.heading}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
  )
}
