"use client"

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
import MacbookCover from "@/../../public/mackbook_silver_blackbg.png";
import ArrowBack from "@/../../public/arrow_back.svg"


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

        <div className="items-left body_width grid gap-24">



        {/* ---------- Back button here ---------- */}


        <div className="flex flex-col items-start mt-8 font-medium" style={{color: "#0069E5"}}>
            <Link href={"/"}>
                <div className="flex item-center justify-center hover:underline gap-2">
                  <Image
                  src={ArrowBack}
                  alt="back arrow icon"
                  /> Back
                </div>
            </Link>
        </div>



        {/* ---------- Title here ---------- */}


        <div>
            <h2>Rozgar
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>
              This case study includes research and understanding of the online and offline market of Blue collar workers
            </h4>
        </div>







        {/* ---------- Impact ---------- */}


        <div className="mb-20 content_grid_two">
          <div>
            <div>
                <ArrowHeading heading = "Defining a Blue collar worker?"/>
                <div className='grid grid-row-3 mb-4 gap-8 w-[60%]'>

                  <p>
                  Blue-collar work involves manual labor with lower educational requirements and 
                  is often paid hourly or as a lump sum, with skills learned on the job.
                  </p>

                  <p>
                  Job title are, Construction, Welder, Warehousing, maintenance, 
                  Electricity generation, Pest control, Farm labours, waste collection.
                  </p>

                </div>
                <Button href={"https://medium.com/@ashishsauparna/the-journey-of-building-button-smith-from-idea-to-launch-274b2252d3ed"} name={"View detailed research"}/>
            </div>
          </div>
          <div>
          <div className="relative">
            <div className="relative z-10 pointer-events-none">
              <Image src={MacbookCover} 
              alt={"Mackbook background cover"}
            />
            </div>
            <iframe width="450" height="292" 
            style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
            src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FI42lCRSFRSsTKKh3sR5Wvf%2FRojgar%3Fnode-id%3D12-9356%26t%3DhcgTNwmc8EimWJ07-1"} 
            allow="fullscreen; clipboard-read; clipboard-write" 
            className="absolute top-[18.2%] left-[20%] z-0"
            allowFullScreen>
            </iframe>
          </div>
            </div>
        </div>








        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24 -mt-24'>
            <div style={{width:"60%"}}>
                <ArrowHeading heading = "Conducting User Research"/>
                <div>
                  I Interviewed three participants working in different backgrounds. 
                  It was an in-person interviews that I recorded for later reference. 
                  In order to understand the pain-points I tried to derivate their context what they
                  <span className="font-medium"> Say — think — do — hear</span>
                </div>
            </div>
            <div className='flex gap-24'>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                      3 days challenge
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "1"/>
                    <div className='items-center justify-center flex gap-4'>
                    <div className='w-12 h-12 bg-slate-400'>
                        
                    </div>
                    <div className='-mt-2'>
                        <h3>Ashish Sharma</h3>
                        <p className='text-base -mt-2'>UX Designer</p>
                    </div>
                    
                  </div>
                </div>

            </div>
        </div>

        </div>





        {/* ---------- Image ---------- */}


        <Image
        src={CompAnalysis}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Image ---------- */}


        <Image
        src={UserInterview}
        alt="how might we questions"
        className="w-full mt-12"
        />





        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "Solution"/>
                <div>
                The Solution to connect blue-collar workers with job opportunities through a user-friendly app, 
                addressing the challenges of finding work and utilizing smartphones effectively.
                </div>
            </div>

            <div style={{width:"70%"}}>
                <ArrowHeading heading = "Challenges & learnings"/>
                <div>
                Key challenges included low smartphone literacy among workers, reliance on word-of-mouth for 
                job searches, and difficulties with payment negotiations and job security.
                </div>
            </div>
            
        </div>







        {/* ---------- Images ---------- */}
        

        <Image
        src={CustomerJourney}
        alt="how might we questions"
        className="w-full mt-24"
        />






        {/* ---------- Final thoughts & conclusion ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "Final thoughts & conclusion"/>
              <div>
              New challenges do still arrive, but identifying them is a key. Once they are identified, 
              I know that I&apos;ll eventually find better solutions.
              </div>
          </div>
        </div>


        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
  )
}