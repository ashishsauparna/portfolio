import ArrowHeading from "@/app/components/ui/arrowheading";
import Button from "@/app/components/ui/button";
import Footer from "@/app/components/ui/footer";
import NavBar from "@/app/components/ui/navbar";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import ResearchImg from "@/../../public/projects/buttonsmith/research.png";
import Banner from "@/../../public/projects/buttonsmith/banner.png";
import Competitors from "@/../../public/projects/buttonsmith/competitor_research.png";
import Moscow from "@/../../public/projects/buttonsmith/moscow.png";
import UIFrames from "@/../../public/projects/buttonsmith/uiframes.png";
import ColorGuide from "@/../../public/projects/buttonsmith/colorequation.png";
import UIAnatomy from "@/../../public/projects/buttonsmith/anatomy.png";
import UICollective from "@/../../public/projects/buttonsmith/uicollective.png";
import ArrowBack from "@/../../public/arrow_back.svg";
import DP from "@/../../public/ashish_sharma.png";
import LakshyaDP from "@/../../public/lakshya_raj.png";
import StarSVG from "@/../../public/star.svg";

export default function ButtonSmithResearch() {

  const descriptionItems = [
    { text: 'Reduced human effort with one click'},
    { text: 'Has raised over 255+ users in 2 months'}
  ]

  return (

    <main className="flex min-h-screen flex-col items-center">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2N9F9N8KHK');
            `}
        </Script>
        <NavBar/>




        {/* ---------- Back button here ---------- */}


        <div className="sticky top-10 items-left body_width grid gap-24 mt-8 font-medium" style={{color: "#0069E5"}}>
            <Link href={"/"}>
                <div className="goback_button button_small">
                  <Image
                  src={ArrowBack}
                  alt="back arrow icon"
                  width={20}
                  className="arrow-back-icon"
                  /> Go Back
                </div>
            </Link>
        </div>




        <div className="items-left body_width grid gap-24 mt-24">



        {/* ---------- Title here ---------- */}


        <div className="flex flex-col justify-center items-center w-full mt-24">
            <h4 className="flex" style={{fontWeight:"500", width:"25%", textAlign:"center"}}>
              One Figma Plugin to generates and documents all your button states
            </h4>
            <h1 className="flex text-6xl mt-48 gap-8 font-light font-noto-serif justify-center overflow-hidden whitespace-nowrap text-clip text-gray-800">
              {/* <Image width={72} src={Logo} alt="Figma Logo"/> */}
              -
              <Image
              src={StarSVG}
              alt="Star image"
              width={32}
              className="rotating-star"
              />
              Button Smith 
              <Image
              src={StarSVG}
              alt="Star image"
              width={32}
              className="rotating-star"
              />
              -
            </h1>
        </div>
        
        </div>





        {/* ---------- Image ---------- */}

        <Image
        src={Banner}
        alt="how might we questions"
        className="w-full"
        />





        <div className="items-left body_width grid gap-24 mt-24">


        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24'>
          <div style={{width:"70%"}}></div>
          <div className="flex flex-col gap-24">
            <div>
                <ArrowHeading heading = "Story worth talking about"/>
                <div style={{width:"80%"}}>
                To enhance design efficiency by creating a customised and fully <b style={{fontWeight:"500"}}>documented</b> component set with a <b style={{fontWeight:"500"}}>least decision making efforts</b> which can be reused and updated as per user&apos;s needs.
                </div>
            </div>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    May 2024 - Ongoing
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "6"/>
                      <div className="flex flex-wrap gap-8" style={{width:"80%"}}>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={DP} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Ashish Sharma</h3>
                            <p className='text-base -mt-2'>UX Designer + Developer</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={LakshyaDP} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Lakshya Raj</h3>
                            <p className='text-base -mt-2'>Ideation</p>
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


        <div className='content_grid_two gap-24 w-full'>
          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Research Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-1 grid-rows-2 gap-x-1 justify-between gap-y-2'>
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
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      How might we questions
                    </h4>
                </div>
            </div>
          </div>


          <div>
          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 1] </b>
          My research approach placed a strong emphasis in understanding the existing platforms and 
          how they are solving for creating a component set. it was discovered that they had very little 
          feedback in case of both positive and negative aspects.
          <br/><br/>
          Even though their wider audience was happy it was identified that creating something that involves 
          the best functionality of all three components could solve the objective that was initially developed.
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 2] </b>
          Upon conducting heuristics it was discovered that there could be many things that 
          could be used for creating a plugin that can reduce human efforts like, a preview option in 
          Design system generator, styles to explore with a certain theme. and finally figuring out how to document it.
          <br/><br/>
          It was discovered that other plugins were just creating a component set but not generating 
          document in order to kick start a project.
          </div>
          </div>


        </div>
        </div>






        {/* ---------- Image ---------- */}


        <Image
        src={ResearchImg}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={Competitors}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Design Approach ---------- */}


        <div className="content_grid_two gap-24 mt-24 body_width">

          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Design Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=656-195&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-2 grid-rows-2 mb-4 mt-8 gap-y-2 gap-x-0'>
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

          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 1] </b>
          After understanding the how might we questions it became clear to distinguish the features that might be most required vs least required when creating the plugin design. 
          <br/><br/>
          This also later helped in creating the visual hierarchy of the components displayed when creating the plugin.
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 2] </b>
          The decision work as per trial and error method was taken as we did not have much data in terms 
          of how the users would feel when using the newly developed iteration.
          <br/><br/>
          Hence usability test was conducted with 3 participants in order to understand if the target was met. 
          This also needed the design to be developed asap.
          </div>


          </div>

        </div>

        





        {/* ---------- Images ---------- */}


        <Image
        src={Moscow}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings (1)" arrow={true}/>
              <div className='grid mb-4 gap-4 w-[80%]'>
                <b style={{fontWeight:"500", marginBottom:"2rem"}}>What was the Problem?</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      With a limited feedback available for competitive plugins what could be an other way to figure 
                      out our user needs?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      How can we make sure the user doesn&apos;t get overwhelmed in the process of creating a component 
                      set? What solutions can help?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Should the preview section be the prominent part of the plugin? if so how can we implement it 
                      in such a way that user benefits from it the most?
                      </div>
                  </div>

                  <b style={{fontWeight:"500", marginBottom:"2rem", marginTop:"2rem"}}>How was I solving? 🧠</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The main challenge was limited user feedback, which was addressed through interviews and 
                      usability testing.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      User interviews revealed the need for basic features like font search, border radius, and padding, 
                      as seen in competitor heuristics. A preview section was also confirmed to be beneficial before 
                      generating the button set.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The preview section evolved from showing just 3 button states to including secondary and 
                      tertiary variations. It became integral to the plugin, addressing both user needs and marketing by 
                      showcasing the generated output in the first fold.
                      </div>
                  </div>
          </div>
        </div>






        {/* ---------- Images ---------- */}
        

        <Image
        src={UIFrames}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Images ---------- */}
        

        <Image
        src={ColorGuide}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Images ---------- */}
        

        <Image
        src={UIAnatomy}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
                  {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings (2)" arrow={true}/>
              <div className='grid mb-4 gap-4 w-[80%]'>
                <b style={{fontWeight:"500", marginBottom:"2rem"}}>What was the Problem?</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Can we use only the primary button to create a set of button states? If so, how can we 
                      implement an algorithm making sure the it helps during development as well?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Is there a need for editing the plugin? What components can be the most useful for a user when edits are made within the 
                      plugin? What hierarchy could be the best heuristically?
                      </div>
                  </div>

                  <b style={{fontWeight:"500", marginBottom:"2rem", marginTop:"2rem"}}>How was I solving? 🧠</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The decision to pick just primary button was initiated to keep the minimal design, reducing 
                      decision making efforts, and designing an algorithm based on color hierarchy and altering saturation 
                      & brightness of primary hue.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      By Usability testing and trial and error method the components hierarchy was tested.
                      </div>
                  </div>
          </div>
        </div>



        <Image
        src={UICollective}
        alt="how might we questions"
        className="w-full mt-12"
        />






        {/* ---------- Final thoughts & conclusion ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24 mb-24'>
        
              <ArrowHeading heading = "Key Takeaways" arrow={true}/>
              <div className="grid">
              <b style={{fontWeight:"500", marginBottom:"2rem"}}>Reflection on the outcomes</b>
              New challenges do still arrive, but identifying them is a key. 
              For instance, right now bringing new button designs to the plugin is what I&apos;m trying to pull of in such a way that 
              I can also develop a code for it as well. Next is finding time to test the design one more time.
              </div>
        </div>


        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
  )
}
