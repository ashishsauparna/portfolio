'use client'

import { motion } from "framer-motion";
import Image from 'next/image';

export default function HeroImage(){
    const fadeInAnimation = {
        initial:{
          opacity:0,
          y:20
        },
        animate: () => ({
          opacity:1,
          y:0,
          transition:{
            delay:0,
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
        }}>
        <div
        className='project_banner_1 inset-0 flex justify-center items-center'>
        <Image
            src={"/font_swap_banner.png"}
            alt="Black and white portait of Ashish Sharma"
            sizes="100vw"
            className="w-2/4"/>
        </div>
        </motion.div>
    )
}