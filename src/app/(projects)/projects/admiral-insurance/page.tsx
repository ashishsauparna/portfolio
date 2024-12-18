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
            Design a mobile-friendly auto insurance registration site for Admiral Insurance, ensuring a seamless and user-friendly 
            experience for customers accessing it via mobile devices.
            </h4>
            <h1 className="project_intro_heading">
              <Image
              src={"/star.svg"}
              alt="Star image"
              width={32}
              height={32}
              className="rotating-star"
              />
              Admiral Insurance
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
        src={"/projects/admiralinsurance/banner.png"}
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
                With a goal to create a mobile-friendly auto insurance site for Admiral Insurance, we overcame location restrictions 
                by collaborating with UX teams in Spain, Italy, and France. Despite tight deadlines and holiday delays, we delivered a 
                high-fidelity wireframe prototype, demonstrating adaptability and teamwork.
                </div>
            </div>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    1 week and 3 days
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "4"/>
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
                            <h3>Ashish</h3>
                            <p className='text-base -mt-2'>UX Designer</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Mahesh</h3>
                            <p className='text-base -mt-2'>UX Designer</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Shweta</h3>
                            <p className='text-base -mt-2'>UX Designer</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Indranil</h3>
                            <p className='text-base -mt-2'>Project Manager</p>
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
                      Information Architecture
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Organizing syncing calls
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Opportunity mapping
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Taking feedbacks
                    </h4>
                </div>
            </div>
          </div>


          <div>
          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 1] </b>
            <div>
            We explored the existing questionnaire that is followed by the number of questions for all 
            three countries. We took 3 days to get them organize in such a way that all the questions are 
            in sequence and any cascading situations are minimized while also maintaining stakeholders/insurance 
            companies requirements.
            </div>
          </div>

          <br/><br/>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 2] </b>
            <div>
            Since the most of staff was going on summer vacation being all in France. We had to 
            conduct the verification check on call with all clients before weekend. which took a lot of 
            effort in organizing calls and making sure we get feedback on some which was later received 
            on Monday next week for france.
            </div>
          </div>
          </div>


        </div>
        </div>







        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/ia.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="Information Architecture"
        className="w-full mt-24"
        />




        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/teams_call.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/feedbacks.jpg"}
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
                      Exploring Artifacts
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
            Since we had an issue to access the insurance websites due to location. We did not have access to VPN a
            s well and aranging one could have taken time. Hence we took help from the support available from Europe 
            teams and they helped us arangind screenshots of the websites.
            </div>
          </div>

          <br/><br/>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"0.5rem"}}>
            <b>[Approach 2] </b>
            <div>
            We later on started looking at competitors and their website how they are handling the long form questions in 
            segments and hence created a mood board that included Number plates styles used in Italy, Spain and France. 
            We also explored with multiple stepper interface designs and hence started designing with the Wireframes UI.
            </div>
          </div>

          </div>

        </div>



        

        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/exploration.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/moodboard.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="Moodboard"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/design_language.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/ui_1.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/ui_2.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/admiralinsurance/ui_3.jpg"}
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
              <div className='grid mb-4 gap-8 md:w-[80%] w-full'>
                {/* <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>What was the Problem?</b> */}
                  <div className="w-full" style={{display:"grid", gap:"0.5rem"}}>
                      <b className="font-bold">[Problem 1] </b>
                      <h5 className="italic text-gray-900">
                      “Organize the questionnaires because we needed them to create IA for all three countries within 3 days 
                      so we could clear doubts and better understand the overall needs.”
                      </h5>
                      <div style={{fontWeight: "400"}}>
                      Restructured the questionnaires to ensure a logical flow, addressing multiple similar questions issues. 
                      We clarified doubts through Teams chat and presented our IA during the call, incorporating feedback. Afterward, 
                      we shared the Figma file, updated the IA flow with comments, and ensured we were ready to proceed with the UI 
                      design by Monday.
                      </div>
                  </div>
                  <div className="w-full" style={{display:"grid", gap:"0.5rem"}}>
                      <b className="font-bold">[Problem 2] </b>
                      <h5 className="italic text-gray-900">
                      “Overcome location-based restrictions and unable to get VPN access on time so we can access insurance 
                      websites screens for interface research ideas”
                      </h5>
                      <div style={{fontWeight: "400"}}>
                      Collaborated with all three European teams to source website screenshots, allowing us to continue the design 
                      process without direct access to the websites. This solution helped us gather necessary data and keep the project 
                      moving forward despite access limitations due to location restrictions.
                      </div>
                  </div>
                  <div className="w-full" style={{display:"grid", gap:"0.5rem"}}>
                      <b className="font-bold">[Problem 3] </b>
                      <h5 className="italic text-gray-900">
                      “Delivering the final wireframe prototype that also needs to be language tested”
                      </h5>
                      <div style={{fontWeight: "400"}}>
                      Managing urgent verification calls and gathering feedback under tight deadlines while ensuring accurate translations 
                      and adjusting phrases to commonly used terms for clarity.
                      </div>
                  </div>
                  <div className="w-full" style={{display:"grid", gap:"0.5rem"}}>
                      <b className="font-bold">[Problem 4] </b>
                      <h5 className="italic text-gray-900">
                      “Understanding industry standards so that we know what is the best possible UI solution in the current market”
                      </h5>
                      <div style={{fontWeight: "400"}}>
                      Analyzing UI interaction styles from competitors and newly introduced insurance companies in India as well as other 
                      platforms to inform design decisions in the absence of direct website access.
                      </div>
                  </div>
          </div>
        </div>






        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/admiralinsurance/wireframes.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/admiralinsurance/design_library.jpg"}
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
              Collaborative wireframe planning aligned the team, minimizing rework and boosting efficiency. We managed tight 
              deadlines across three scenarios, demonstrating strong time management and problem-solving skills. Simplifying complex 
              data into a clear IA, we built accessible, user-friendly wireframes and delivered an interactive hi-fidelity prototype 
              for early stakeholder feedback and validation.
              </div>
        </div>






        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/admiralinsurance/testimonial.jpg"}
        sizes="100vw"
        width={500}
        height={500}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
  )
}