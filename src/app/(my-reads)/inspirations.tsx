"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion, animate } from "motion/react";


export default function Inspirations() {

    const people = [
        {
          img: "/inspiration/chris_do.jpeg",
          alt:"",
          name:"Cris Do",
          social: "Instagram",
          href:"https://instagram.com/thechrisdo?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: "/inspiration/mat_kal.jpeg",
          alt:"",
          name:"Maitreyee Kalaskar",
          social: "Instagram",
          href:"https://instagram.com/maitreyee_kal?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: "/inspiration/femke.jpeg",
          alt:"",
          name:"Femke",
          social: "Instagram",
          href:"https://instagram.com/femkedotdesign?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: "/inspiration/kimya.jpeg",
          alt:"",
          name:"Kimya Gandhi",
          social: "Instagram",
          href:"https://instagram.com/kimyagandhi?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: "/inspiration/sapta.jpeg",
          alt:"",
          name:"Saptarshi Prakash",
          social: "Instagram",
          href:"https://instagram.com/saptarshiux?igshid=MzRlODBiNWFlZA=="
        },
        // {
        //   img: Jim,
        //   alt:"",
        //   name:"Jim Raptis",
        //   href:"https://instagram.com/jim.ux?igshid=MzRlODBiNWFlZA=="
        // },
        {
          img: "/inspiration/ashwini.jpeg",
          alt:"",
          name:"Ashwini Deshpande",
          social: "Instagram",
          href:"https://instagram.com/ashwinielephant?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: "/inspiration/Phoebe_Yu.jpg",
          alt:"",
          name:"Phoebe Yu",
          social: "Youtube",
          href:"https://www.youtube.com/@phoebeyutbt"
        },
      ]

    const fadeInAnimation = {
        initial:{
          opacity:0,
          y:40
        },
        animate: (index: number) => ({
          opacity: 1,
          y: 0,
          transition:{
            delay:0.2 * index,
            duration:0.3,
            type:"swing"
          },
        })
      }
  
    return (
      <div className='items-left w-full'>
          <div className='avatar_grid'>
            {people.map((data, index) => (
              <motion.div
              key={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{
                once:true
              }}>
              <Link key={index} href={data.href} target='_blank'>

              <div className='flex gap-4 mb-6'>
                <div className='w-12 h-12'>
                  <Image src={data.img}
                  width={40}
                  height={40} 
                  alt={data.alt} 
                  className='object-cover w-full h-full'
                  />
                </div>
                <div>
                  <h3>{data.name}</h3>
                  <p className='text-base -mt-2 link_button'>{data.social}</p>
                </div>
              </div>
              </Link>
              </motion.div>
            ))}
          </div>
        </div>
    )
  }
  