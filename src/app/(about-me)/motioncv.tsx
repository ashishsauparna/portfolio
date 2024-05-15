'use client'

import { motion } from "framer-motion"

export default function MotionCV(){

    const experience = [
      {
        position: "UX Consultant | March 2022 - Present",
        company: "EY (Ernst & Young)",
      },
      {
        position: "UX Designer + Developer | July 2023 - Present",
        company: "Figma Plugin - Font Swap (13K+ users)",
      },
      {
        position: "UX/UI Designer | August 2021 - March 2022",
        company: "Tekie",
      },
      {
        position: "UX Design Intern | July 2021 - August 2021",
        company: "Assetmonk",
      }
      ]
    
    const education = [
      {
        study:"Design thinking - Bronze Badge",
        school: "EY Innovation"
      },
      {
        study:"Google UX Design Certificate",
        school: "Google, Coursera"
      },
      {
        study:"B. Com. with Honours",
        school: "Delhi University (DU)"
      },
      {
        study:"Introduction to typography",
        school: "CalArts, Coursera"
      }
    
      ]
      
    const fadeInAnimationText = {
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
      
    return(
        <motion.div className='intro_content_three mt-48 !items-start'
            variants={fadeInAnimationText}
            initial="initial"
            whileInView="animate"
            viewport={{
                once:true
            }}>
              <div></div>
            <div>
                <h1 className='mb-8'>Education</h1>
                {education.map((data, index) => (
                    <p key={index} className='leading-7 mb-4'>
                    <span style={{fontWeight:"460"}}>{data.study}</span>
                    <br/><h5 className='text-gray-500'>{data.school}</h5>
                    </p>
                ))}
            </div>
            <div>
                <h1 className='mb-8'>Experience</h1>
                {experience.map((data, index) => (
                    <p key={index} className='leading-7 mb-4'>
                    
                    <span style={{fontWeight:"460"}}>{data.company}</span><br/>
                    <h5 className='text-gray-500'>{data.position}</h5>
                    </p>
                ))}
                </div>
      </motion.div>
    )
}