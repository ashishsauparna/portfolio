import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import ArrowHeading from "@/app/components/ui/arrowheading";
import Link from "next/link";
import UserInterview from "@/../../public/projects/rozgar/user_interview.png";
import CompAnalysis from "@/../../public/projects/rozgar/competitor_analysis.png";
import CustomerJourney from "@/../../public/projects/rozgar/customer_journey.png";
import Prototype from "@/../../public/projects/rozgar/prototype.png";
import Sketch from "@/../../public/projects/rozgar/sketch.png";
import FinalUI from "@/../../public/projects/rozgar/finalui.png";
import UsabilityTesting from "@/../../public/projects/rozgar/usabilitytesting.png";
import MacbookCover from "@/../../public/mackbook_silver_blackbg.png";
import ArrowBack from "@/../../public/arrow_back.svg"
import DP from "@/../../public/ashish_sharma.png";
import StarSVG from "@/../../public/star.svg";
import Banner from "@/../../public/projects/rozgar/banner.png";


export default function RozgarResearch() {

  

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
            <h4 className="flex" style={{fontWeight:"500", width:"40%", textAlign:"center"}}>
              This small case study includes research and understanding of the online and offline market of Blue collar workers
            </h4>
            <h1 className="flex mt-48 gap-8 font-light font-noto-serif justify-center overflow-hidden whitespace-nowrap text-clip text-gray-800">
              {/* <Image width={72} src={Logo} alt="Figma Logo"/> */}
              Rozgar
              <Image
              src={StarSVG}
              alt="Star image"
              width={32}
              className="rotating-star"
              />
              Rozgar
              <Image
              src={StarSVG}
              alt="Star image"
              width={32}
              className="rotating-star"
              />
              Rozgar
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
                            <Image src={DP} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
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


        <div className='content_grid_two gap-24 w-full'>
          <div style={{width:"70%"}}>
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
          <div style={{width:"80%", display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 1] </b>
            <div>
            I Interviewed three participants working in different backgrounds. It was an in-person interviews that 
            I recorded for later reference. In order to understand the pain-points I tried to derivate their context 
            what they <b style={{fontWeight:"500"}}>Say — think — do — hear</b>
            </div>
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid", gap:"1rem"}}>
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
        src={UserInterview}
        alt="how might we questions"
        className="w-full mt-24"
        />




        {/* ---------- Image ---------- */}


        <Image
        src={CompAnalysis}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Image ---------- */}


        <Image
        src={CustomerJourney}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Design Approach ---------- */}


        <div className="content_grid_two gap-24 mt-24 body_width">

          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Design Approach" arrow={true}/>
            <div className='grid grid-cols-2 grid-rows-2 mb-4 mt-8 gap-y-2 gap-x-0'>
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

          <div style={{width:"80%", display:"grid", gap:"0.5rem"}}>
          <b>[Approach 1] </b>
            <div>
            To overcome initial design challenges, I sketched wireframes using the Crazy 8 technique, 
            allowing me to rapidly explore multiple ideas. These sketches helped me prioritize key features 
            based on user needs identified during research.
            </div>
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid", gap:"0.5rem"}}>
            <b>[Approach 2] </b>
            <div>
            Following early feedback, I created a clickable prototype in Figma and tested it with participants. 
            This informed iterative adjustments, improving the app&apos;s clarity for non-tech-savvy users.
            </div>
          </div>

          <br/>
          
          <div style={{width:"80%", display:"grid"}}>
            Feedback led to enhancements in UI, reducing button intensity and providing more upfront information for 
            smoother job applications.
          </div>


          </div>

        </div>



        

        {/* ---------- Image ---------- */}


        <Image
        src={Prototype}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={Sketch}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={UsabilityTesting}
        alt="how might we questions"
        className="w-full mt-24"
        />




        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings" arrow={true}/>
              <div className='grid mb-4 gap-4 w-[80%]'>
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
        src={FinalUI}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Final thoughts & conclusion ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24 mb-24'>
        
              <ArrowHeading heading = "Key Takeaways" arrow={true}/>
              <div className="grid w-[80%]">
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