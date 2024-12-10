"use client"

import Image from "next/image";
import Script from 'next/script';
import Footer from '@/app/components/ui/footer';
import Link from "next/link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function FontSwapResearch() {

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
            <div className={`left-0 flex items-center ${activeSection === 'story' ? 'active' : ''}`}  onClick={() => router.back()}>
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
                A Figma Plugin addressing to replace all font styles with 3 clicks
            </h4>
            <h1 className="project_intro_heading">
              <Image
              src={"/star.svg"}
              alt="Star image"
              width={32}
              height={32}
              className="rotating-star"
              />
              Font Swap 
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
        <div className="flex justify-center items-center w-full relative -z-10">
        <Image
        src={"/projects/fontswap/banner.png"}
        sizes="100vw"
        width={100}
        height={100}
        alt="how might we questions"
        className="w-full"
        />
        </div>





        <div className="items-left body_width grid">

        {/* ---------- Objective ---------- */}


        <div id="story" className='content_grid_two w-full pt-24 gap-24' data-section>
          <div className="flex flex-col gap-24">
            <div>
                <ArrowHeading heading = "Story worth talking about"/>
                <div className="md:w-[80%] w-full">
                The idea sparked when <b style={{fontWeight:"500"}}>my team and I were struggling to test various fonts</b> while 
                crafting a pitch for a client. This challenge led to the realization that<b style={{fontWeight:"500"}}> we needed a 
                faster, more aesthetic solution</b> for testing and selecting fonts. From that, I created a 
                tool to simplify the process, allowing us to quickly experiment with multiple fonts and 
                pick the one that fits perfectly.
                </div>
            </div>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    June 2023 - Ongoing
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "4"/>
                      <div className="flex flex-wrap gap-8" style={{width:"80%"}}>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={"/ashish_sharma.png"} width={32} height={32} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Ashish Sharma</h3>
                            <p className='text-base -mt-2'>UX Designer + Developer</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Design Colleagues</h3>
                            <p className='text-base -mt-2'>Product Testing</p>
                          </div>
                        </div>
                      </div>

                </div>
            </div>
            
        </div>






        {/* ---------- Research Approach ---------- */}


        <div id="research" className='content_grid_two gap-24 w-full pt-24' data-section>
          <div className="md:w-[70%] w-full">
            <ArrowHeading heading = "Research Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-1 grid-rows-2 gap-x-1 justify-between gap-y-2'>
            <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Brainstorming Ideas
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Persona & User Journey
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Competitor Analysis
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Heuristics Analysis
                    </h4>
                </div>
            </div>
          </div>


          <div>
          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 1] </b>
            <div>
            We were initially using a plugin called Font Replacer, and Easy Font Swap 
              which didn&apos;t fully meet our needs. To better understand the landscape, 
            I <b style={{fontWeight:"500"}}>conducted a competitor analysis, focusing on features, interface designs, documentation, and 
            unique selling points.</b>
            </div>
          </div>

          <br/><br/>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 2] </b>
            <div>
              <b style={{fontWeight:"500"}}>I leveraged feedback from the comment sections</b> of these plugins to identify what users needed, 
              which informed the creation of a new solution. This data helped shape a well-defined 
              persona. Additionally, after conducting <b style={{fontWeight:"500"}}>3 user interviews </b> 
              with my team, the path forward became clearer, <b style={{fontWeight:"500"}}>leading to the development of a detailed user journey</b>.
            </div>
          </div>
          </div>


        </div>
        </div>







        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/fontswap/research.png"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />




        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/fontswap/heuristics.png"}
        sizes="100vw"
        width={100}
        height={100}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Design Approach ---------- */}


        <div id="design" className="content_grid_two gap-24 pt-24 body_width" data-section>

          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Design Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=656-195&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid md:grid-cols-2 grid-rows-2 mb-4 mt-8 gap-y-2 gap-x-0'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      MoSCoW Prioritization
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      UI WorkFlow & Release
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Usability Testing
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      UI Documentation
                    </h4>
                </div>
            </div>
          </div>

          <div>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"0.5rem"}}>
          <b>[Approach 1] </b>
            <div>
            Facing a creative block, I initially <b>mirrored the frame structure of Font Replacer to get started</b>. 
            Using MoSCoW prioritization and after 9 iterations, I was able to refine the process, 
            <b>ensuring that accessability and replace fonts in three simple steps.</b>
            </div>
          </div>

          <br/><br/>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"0.5rem"}}>
            <b>[Approach 2] </b>
            <div>
            Drawing from The Sprint Book, I learned the importance of testing early to avoid delays. 
            With that in mind, I <b>created a prototype and conducted usability testing with three of my 
            teammates to gather immediate feedback.</b>
            </div>
          </div>

          <br/>
          
          <div className="md:w-[80%] w-full" style={{display:"grid"}}>
            The feedback resulted in Release 4.1, which improved visual cues for font selection, 
            visual identification for missing fonts, and status updates on the progress bar when font 
            switching was delayed.
          </div>


          </div>

        </div>



        

        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/fontswap/moscow.png"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />


        {/* ---------- Solution and Challenges ---------- */}


        <div id="learnings" className='content_grid_two gap-24 body_width pt-24' data-section>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings (1)" arrow={true}/>
              <div className='grid mb-4 gap-4 md:w-[80%] w-full'>
                <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>What was the Problem? (hmw method)</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      How to get started with the design while also making sure that we don&apos;t 
                      start with scratch by saving initial time?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      What method can be used to make sure that we keep the steps minimal whole also 
                      user has to take care of one task at a time?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      It takes about 1-2 seconds for the plugin to load all font styles even on an average data speed. 
                      How can we optimize the user flow so that the user doesn&apos;t have to wait for the time being.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The 404 screen is usually a blank screen with font not found. How can we make it helpful to users?
                      </div>
                  </div>

                  <b style={{fontWeight:"500", marginBottom:"0.5rem", marginTop:"2rem"}}>How was I solving? 🧠</b>

                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Just like the Jacob&apos;s law of similarity by keeping the plugin design similar 
                      to popular plugin (Font Replacer) in the font replacement category.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The plugin presents one task at a time, reducing the information overload, 
                      starting by populating fonts from a selected node, allowing the user to choose which font to change.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      It pre-loads matching font styles to ensure the process remains intuitive and quick 
                      before the user makes their first decision.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Made sure the plugin provides solution at every stage of the process like offering a 
                      direct Google search link pre-filled with the font name in case the font is not in the search list.
                      </div>
                  </div>
          </div>
        </div>






        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/fontswap/uiframes.jpg"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={1000}
        height={1000}
        />



        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/fontswap/anatomy.png"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />
        



        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width pt-24'>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings (2)" arrow={true}/>
              <div className='grid mb-4 gap-4 md:w-[80%] w-full'>
                <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>What was the Problem? (hmw method)</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      How can we solve for the cases of the font&apos;s that don&apos;t have a matching 
                      style or offer a limited style variation? This should help in reduced number of cases 404 screens.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      As the plugin users are growing, how can we find out the geographical impact 
                      the plugin has made, even though figma doesn&apos;t directly allows to track usage.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      What placement is better for a sign-in method that it is visible since the plugin 
                      loads also how can we integrate it with pro suggestions and earn money in a future case?
                      </div>
                  </div>


                  <b style={{fontWeight:"500", marginBottom:"0.5rem", marginTop:"2rem"}}>How was I solving? 🧠</b>

                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      A font suggestion system was developed to recommend closest alternatives 
                      (e.g., Roman for Regular or Bold for Semibold), tagged as &quot;Pro Suggestions&quot; to 
                      differentiate from exact matches. This helped in expanding the search list items.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      To track plugin usage, a sign in link was introduced for pro suggestions 
                      which helped in knowing geographical location of users.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The sign in link is kept on the first fold of plugin making it visible throughout 
                      the process but separate from the main task, it is designed as tertiary button 
                      ensuring users user doesn&apos;t think of it as a primary button and it functions 
                      as a status if user signed in or not.
                      </div>
                  </div>
          </div>
        </div>






        {/* ---------- Images ---------- */}
        

        <Image
        src={"/projects/fontswap/userbase.png"}
        alt="how might we questions"
        className="w-full mt-12"
        sizes="100vw"
        width={100}
        height={100}
        />



        {/* ---------- Images ---------- */}


        <Image
        src={"/projects/fontswap/feedback.png"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />






        {/* ---------- Final thoughts & conclusion ---------- */}


        <div id="takeaways" className='content_grid_two gap-24 body_width pt-24 mb-24' data-section>
        
              <ArrowHeading heading = "Key Takeaways" arrow={true}/>
              <div className="grid">
              <b style={{fontWeight:"500", marginBottom:"2rem"}}>Reflection on the outcomes</b>
              New challenges continue to arise, but identifying them is key. For instance, the current issue is:
              <br/>
              Users are facing a problem with &quot;text-style&quot; becoming detached when changing the font.
              To understand the issue better, I&apos;ve sent a survey to actual users via email.
              Once I receive satisfactory feedback, I will start working on the solution.
              </div>
        </div>



        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
    )
}