'use client'
import NavBar from '../ui/navbar'
import Image from 'next/image';
import AshishSharmaImg from '/public/ashish_sharma.png'
import Footer from '../ui/footer';
import { animate, motion } from 'framer-motion';


export default function Resume() {
    const experience = [
        {
          position: "UX Designer + Developer | July 2023 - Present",
          company: "Figma Plugin - Font Swap",
        },
        {
          position: "UX Consultant | March 2022 - Present",
          company: "EY GDS",
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
    
      const fadeInAnimation = {
        initial:{
          opacity:0,
          x:40
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
    
    
      return (  
        <main className="flex min-h-screen flex-col items-center justify-between"> 
          <NavBar/>
          <div className='intro_content mt-40'>
            <div>
            <h2>Pronounced:</h2>
            <h2>Aa - shee - sh</h2><br/>
            <p>As a UX designer, I&apos;m passionate about the human element in my work. 
              Uncovering intricate problems and crafting solutions through both qualitative and quantitative research fuels my drive. 
              I&apos;d describe myself as a curious and devoted design professional who values diversity, inclusion, and collaboration.</p>
            </div> 
            <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once:true
            }}
            >
            <Image
              src={AshishSharmaImg}
              alt="Black and white portait of Ashish Sharma"
              sizes="60vw"
              className='ashish_image'/>
            {/* <Button name="Connect on LinkedIn" href="https://www.linkedin.com/in/ashishsauparna/"/> */}
            </motion.div>      
          </div>
          <div className='intro_content mt-24'>
            <div>
              <h2 className='mb-4'>Skills & Interest</h2>
              <p className='leading-7'>User Research | Heuristic Analysis | Persona Development | Customer Journey Mapping | Interaction Design | Wire framing | Data Visualisation | Storytelling | Web Programming</p>
            </div>
            <div>
            Outside of my 9-to-5 grind, you&apos;ll often find me deep into podcasts. I&apos;m all about expanding my skillset, and recently, I&apos;ve taken up card tricks as a new challenge.
            <br/><br/>
            Currently, I&apos;m in a battle to stay faithful to my meditation routine and stepping up my social game – believe me, it&apos;s a real struggle!
            </div>
          </div>
    
          <motion.div className='intro_content mt-24 !items-start'
          variants={fadeInAnimationText}
          initial="initial"
          whileInView="animate"
          viewport={{
            once:true
          }}>
          <div>
            <h2 className='mb-8'>Education</h2>
              {education.map((data, index) => (
                <p key={index} className='leading-7 mb-4'>
                <span style={{fontWeight:"460"}}>{data.study}</span>
                <br/><span className='text-gray-500'>{data.school}</span>
                </p>
              ))}
            </div>
          <div>
            <h2 className='mb-8'>Experience</h2>
              {experience.map((data, index) => (
                <p key={index} className='leading-7 mb-4'>
                
                <span style={{fontWeight:"460"}}>{data.company}</span><br/>
                <span className='text-gray-500'>{data.position}</span>
                </p>
              ))}
            </div>
          </motion.div>
          <Footer/>
        </main>
      )
    
}