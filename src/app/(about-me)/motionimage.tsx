'use client'

import { motion } from "motion/react";
// import AshishSharmaImg from '/public/ashish_sharma.png';
import Image from 'next/image';

export default function MotionImage(){

    const fadeInAnimation = {
        initial:{
          opacity:0,
          x:-40
        },
        animate: (index: number) => ({
          opacity:1,
          x:0,
          transition:{
            delay:0.2,
            duration:0.4,
            type:"swing"
          }
        }),
      }
    
    return(
    <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true
        }}
        >
        <Image
          src={"/ashish_sharma.png"}
          alt="Black and white portait of Ashish Sharma"
          sizes="100vh"
          width={100}
          height={100}
          className='ashish_image'/>
        {/* <Button name="Connect on LinkedIn" href="https://www.linkedin.com/in/ashishsauparna/"/> */}
        </motion.div>
      )
}