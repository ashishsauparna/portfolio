"use client"

import Image from "next/image";
import Script from 'next/script';
import Footer from '@/app/components/ui/footer';
import ArrowHeading from "@/app/components/ui/arrowheading";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";


export default function RozgarResearch() {
  

  const [activeSection, setActiveSection] = useState('story');
  const [showBackArrow, setShowBackArrow] = useState(false);
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });

      // Adjust the scroll position slightly above the section
      setTimeout(() => {
        window.scrollBy({ top: 1, behavior: 'smooth' });
      }, 300);

      // Update URL without reloading the page
      router.replace(`#${id}`);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('div[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);

            // Show back arrow if we've scrolled past 'story'
            if (entry.target.id === 'story') {
              setShowBackArrow(false);
            } else {
              setShowBackArrow(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  return (
  <main id="top" className="flex min-h-screen flex-col items-center">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2N9F9N8KHK');
            `}
        </Script>


        {/* ---------- Back button and Navigation Menu Here ---------- */}


        <div className="flex sticky top-4 body_width font-medium z-50 gap-2 justify-center">

        <AnimatePresence>
          {showBackArrow && (
            <div className={`left-0 flex items-center ${activeSection === 'story' ? 'active' : ''}`} onClick={() => router.back()}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="goback_button">
                  <Image
                    src="/arrow_back.svg"
                    alt="back arrow icon"
                    width={20}
                    height={20}
                    className="arrow-back-icon"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

          <div className="sticky_navigation flex gap-1 justify-center">
            <Link href="#story" passHref>
              <div onClick={(e) => handleScroll(e, 'story')} 
              className={`nav_link ${activeSection === 'story' ? 'active' : ''}`}>Story</div>
            </Link>
            <Link href="#research" passHref>
              <div onClick={(e) => handleScroll(e, 'research')} 
              className={`nav_link ${activeSection === 'research' ? 'active' : ''}`}>Research Approach</div>
            </Link>
            <Link href="#design" passHref>
              <div onClick={(e) => handleScroll(e, 'design')}
              className={`nav_link ${activeSection === 'design' ? 'active' : ''}`}>Design Approach</div>
            </Link>
            <Link href="#learnings" passHref>
              <div onClick={(e) => handleScroll(e, 'learnings')}
              className={`nav_link ${activeSection === 'learnings' ? 'active' : ''}`}>Learnings & Challenges</div>
            </Link>
            <Link href="#takeaways" passHref>
              <div onClick={(e) => handleScroll(e, 'takeaways')}
              className={`nav_link ${activeSection === 'takeaways' ? 'active' : ''}`}>Key Takeaways</div>
            </Link>
          </div>

        </div>




        <div className="items-left body_width grid gap-24 mt-48">




        {/* ---------- Title here ---------- */}


        <div className="flex flex-col justify-center items-center w-full">
            <h4 className="project_intro_text" style={{fontWeight:"300", textAlign:"center"}}>
              This small case study includes research and understanding of the online and offline market of Blue collar workers
            </h4>
            <h1 className="project_intro_heading">
              <Image
              src={"/star.svg"}
              alt="Star image"
              width={32}
              height={32}
              className="rotating-star"
              />
              Rozgar
              <Image
              src={"/star.svg"}
              alt="Star image"
              width={32}
              height={32}
              className="rotating-star"
              />
            </h1>
        </div>
        </div>


        {/* ---------- Image ---------- */}

        <Image
        src={"/projects/rozgar/banner.png"}
        alt="Rozgar Banner"
        width={1920}
        height={1080}
        className="w-full"
        />





        <div className="items-left body_width grid">

        {/* ---------- Objective ---------- */}


        <div id="story" className='content_grid_two w-full gap-24 pt-24' data-section>
        <div className="md:w-[70%] w-full"></div>
          <div className="flex flex-col gap-24">
            <div>
                <ArrowHeading heading = "Story worth talking about"/>
                <div className="md:w-[70%] w-full">
                It was a test done for a company interview which involved 3 days and I had to 
                come up a first iteration of how blue collar workers could benefit from an application 
                to find daily gigs or any job if possible.
                </div>
            </div>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    3 days
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "6"/>
                      <div className="flex flex-wrap gap-8" style={{width:"80%"}}>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={"/ashish_sharma.png"} 
                            width={42}
                            height={42}
                            alt={"Ashish Sharma Profile picture"} 
                            className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Ashish Sharma</h3>
                            <p className='text-base -mt-2'>UX Designer</p>
                          </div>
                        </div>

                      </div>

                </div>
            </div>
            
        </div>






        {/* ---------- Research Approach ---------- */}


        <div id="research" className='content_grid_two gap-24 w-full pt-24' data-section>
          <div className="md:w-[70%] w-full">
            <ArrowHeading heading = "Research Approach" arrow={true}/>
            <div className='grid grid-cols-1 grid-rows-2 gap-x-1 justify-between gap-y-2'>
            <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      User Interviews
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Secondary Research
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Understanding Pain points
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Persona & User Journey Map
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Problem Statements
                    </h4>
                </div>
            </div>
          </div>


          <div>
          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 1] </b>
            <div>
            I Interviewed three participants working in different backgrounds. It was an in-person interviews that 
            I recorded for later reference. In order to understand the pain-points I tried to derivate their context 
            what they <b style={{fontWeight:"500"}}>Say — think — do — hear</b>
            </div>
          </div>

          <br/><br/>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 2] </b>
            <div>
            Next, I conducted a competitor analysis of existing blue-collar job platforms, focusing on feature gaps 
            and user feedback. Combining this data, I developed personas and a user journey map to guide the design of 
            a more tailored job-finding app.
            </div>
          </div>
          </div>


        </div>
        </div>







        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/rozgar/user_interview.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="User Interview"
        className="w-full mt-24"
        />




        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/rozgar/competitor_analysis.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/rozgar/customer_journey.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Design Approach ---------- */}


        <div id="design" className="content_grid_two gap-24 pt-24 body_width" data-section>

          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Design Approach" arrow={true}/>
            <div className='grid md:grid-cols-2 grid-rows-2 mb-4 mt-8 gap-y-2 gap-x-0'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Low-fi Wireframes
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Hi-fi Wireframes
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Prototyping
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Usability testing
                    </h4>
                </div>
            </div>
          </div>

          <div>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"0.5rem"}}>
          <b>[Approach 1] </b>
            <div>
            To overcome initial design challenges, I sketched wireframes using the Crazy 8 technique, 
            allowing me to rapidly explore multiple ideas. These sketches helped me prioritize key features 
            based on user needs identified during research.
            </div>
          </div>

          <br/><br/>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"0.5rem"}}>
            <b>[Approach 2] </b>
            <div>
            Following early feedback, I created a clickable prototype in Figma and tested it with participants. 
            This informed iterative adjustments, improving the app&apos;s clarity for non-tech-savvy users.
            </div>
          </div>

          <br/>
          
          <div className="md:w-[80%] w-full" style={{display:"grid"}}>
            Feedback led to enhancements in UI, reducing button intensity and providing more upfront information for 
            smoother job applications.
          </div>


          </div>

        </div>



        

        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/rozgar/prototype.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/rozgar/sketch.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/rozgar/usabilitytesting.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />




        {/* ---------- Solution and Challenges ---------- */}


        <div id="learnings" className='content_grid_two gap-24 body_width pt-24' data-section>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings" arrow={true}/>
              <div className='grid mb-4 gap-4 md:w-[80%] w-full'>
                <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>What was the Problem? (hmw method)</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Difficulty in familiarizing blue-collar workers with online job platforms, 
                      as most participants were only familiar with offline methods like word of mouth.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Many workers were uncomfortable using smartphones beyond basic functions, 
                      creating a barrier for digital solutions.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Trust issues with clients and job offers, particularly in terms of payments and job authenticity.
                      </div>
                  </div>

                  <b style={{fontWeight:"500", marginBottom:"0.5rem", marginTop:"2rem"}}>How was I solving? 🧠</b>

                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Simplifying the app interface was critical, as most users were not tech-savvy.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Incorporating trust-building features (e.g., verified employers) would be essential to gaining user confidence.
                      </div>
                  </div>
          </div>
        </div>






        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/rozgar/finalui.png"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Final thoughts & conclusion ---------- */}


        <div id="takeaways" className='content_grid_two gap-24 body_width pt-24 mb-24' data-section>
        
              <ArrowHeading heading = "Key Takeaways" arrow={true}/>
              <div className="grid md:w-[80%] w-full">
              <b style={{fontWeight:"500", marginBottom:"2rem"}}>Reflection on the outcomes</b>
              The project emphasized the importance of building trust and simplifying the interface to meet 
              the needs of users unfamiliar with technology. While initial challenges are significant, the 
              solution would be successfully addressing the pain points, suggesting potential for broader adoption.
              </div>
        </div>



        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
  )
}