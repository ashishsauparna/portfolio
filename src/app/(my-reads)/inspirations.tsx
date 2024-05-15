"use client"

import Image from 'next/image';
import Link from 'next/link';
import ChrisDo from '/public/inspiration/chris_do.jpeg';
import MatKal from '/public/inspiration/mat_kal.jpeg';
import Femke from '/public/inspiration/femke.jpeg';
import Kimya from '/public/inspiration/kimya.jpeg';
import Sapta from '/public/inspiration/sapta.jpeg';
import Jim from '/public/inspiration/jim.jpeg';
import Ashwini from '/public/inspiration/ashwini.jpeg';
import { animate, motion } from 'framer-motion';
import OutwardArrow from '/public/outward_arrow.svg';

export default function Inspirations() {

    const people = [
        {
          img: ChrisDo,
          alt:"",
          name:"Cris Do",
          href:"https://instagram.com/thechrisdo?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: MatKal,
          alt:"",
          name:"Maitreyee Kalaskar",
          href:"https://instagram.com/maitreyee_kal?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: Femke,
          alt:"",
          name:"Femke",
          href:"https://instagram.com/femkedotdesign?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: Kimya,
          alt:"",
          name:"Kimya Gandhi",
          href:"https://instagram.com/kimyagandhi?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: Sapta,
          alt:"",
          name:"Saptarshi Prakash",
          href:"https://instagram.com/saptarshiux?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: Jim,
          alt:"",
          name:"Jim Raptis",
          href:"https://instagram.com/jim.ux?igshid=MzRlODBiNWFlZA=="
        },
        {
          img: Ashwini,
          alt:"",
          name:"Ashwini Deshpande",
          href:"https://instagram.com/ashwinielephant?igshid=MzRlODBiNWFlZA=="
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
                  <div className='cell_two'>
                    <Image src={data.img} alt={data.alt} className='avatar_images'/>
                    <div>
                      <span className='flex'><h3>{data.name}</h3>
                      <Image
                        src={OutwardArrow}
                        alt='outward arrow icon'
                        width={20}
                      /></span>
                      <h5>Instagram</h5>
                    </div>
                    
                  </div>
              </Link>
              </motion.div>
            ))}
          </div>
        </div>
    )
  }
  