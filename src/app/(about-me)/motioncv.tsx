'use client'

import { motion } from "framer-motion"

export default function MotionCV(){

    const experience = [
      {
        position: "UX Consultant | March 2022 - Present",
        company: "EY (Ernst & Young)",
      },
      {
        position: "UX/UI Designer | August 2021 - March 2022",
        company: "Tekie",
      },
      {
        position: "UX Design Intern | July 2021 - August 2021",
        company: "Assetmonk",
      },
      {
        position: "Social Media Manager & Graphic Designer | March 2020 - Jan 2021",
        company: "Internships & Freelance",
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
            <div>
                <h5 className='mb-4 text-2xl text-slate-900'>Education</h5>
                {education.map((data, index) => (
                    <p key={index} className='leading-7 mb-4'>
                    <span style={{fontWeight:"460"}}>{data.study}</span>
                    <br/><p className='text-gray-500 text-lg font-medium'>{data.school}</p>
                    </p>
                ))}
            </div>
            <div>
              <h5 className='mb-4 text-2xl text-slate-900'>Projects &  Contribution</h5>
                    <p className='leading-7 mb-4'>
                    <span style={{fontWeight:"460"}}>Figma - Font Swap Plugin (+20K users)</span><br/>
                    <p className='text-gray-500 text-lg font-medium'>UX Designer + Developer | July 2023 - Present</p>
                    </p>

                    <p className='leading-7 mb-4'>
                    <span style={{fontWeight:"460"}}>Figma - Button Smith Plugin (+600 users)</span><br/>
                    <p className='text-gray-500 text-lg font-medium'>UX Designer + Developer | May 2024 - Present</p>
                    </p>
              </div>
            <div>
                <h5 className='mb-4  text-2xl text-slate-900'>Experience</h5>
                {experience.map((data, index) => (
                    <p key={index} className='leading-7 mb-4'>
                    
                    <span style={{fontWeight:"460"}}>{data.company}</span><br/>
                    <p className='text-gray-500 text-lg font-medium'>{data.position}</p>
                    </p>
                ))}
            </div>
      </motion.div>
    )
}