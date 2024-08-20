"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import ArrowHeading from "@/app/components/ui/arrowheading";
import ArrowBack from "@/../../public/arrow_back.svg";
import MacbookCover from "@/../../public/mackbook_silver_blackbg.png";
import Link from "next/link";


export default function DelhiveryResearch() {

  const descriptionItems = [
    { text: 'Secondary Research [1]'},
    { text: 'Competitor Analysis [2]'},
    { text: 'Proto Personas [3]'},
    { text: 'Website’s Heuristics Analysis [4]'},
    { text: 'Insights and Possible Future [5]'}
  ]
  

  return (
    // <ProjectPage
    //   title="UX Research - Delhivery"
    //   year="Dec 23"
    //   subtitle="Understanding Trends and innovations in a logistic industry"
    //   buttonHref="https://miro.com/welcomeonboard/WEhBbWxIQTVITFNUZUF1Tm1ZWHdTMXZkVjJCTmNNd3pTbWJVMTZiTzRLQk9XdWgzSWhiTlhYbWVvRDM2SEtWYnwzNDU4NzY0NTYyMzY0Mjg3NTkwfDI=?share_link_id=242834876031"
    //   buttonText="Open Miro in new tab"
    //   progress={40}
    //   descriptionItems={[
    //     { text: 'Secondary Research', note: '[1]' },
    //     { text: 'Competitor Analysis', note: '[2]' },
    //     { text: 'Proto Personas', note: '[3]' },
    //     { text: 'Website\'s Heuristics Analysis', note: '[4]' },
    //     { text: 'Insights and Possible Future', note: '[5]' },
    //   ]}
    //   youtubeVideoIdOrMiroLink="https://miro.com/app/live-embed/uXjVMrWRtKY=/?moveToViewport=-3409,-7877,58890,28610&embedId=393622349668"
    //   stakeholdersTitle="Research Company"
    //   stakeholdersSubtitle="Delhivery"
    //   scoreTitle2 = "Overall Time Spent"
    //   usersEarned="16 hours"
    //   peopleInvolved="🙋🏻"
    //   useiframe = {true}
    // />

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
            <h2>Font Swap
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>
              A Figma Plugin addressing to replace all font styles with 3 clicks
            </h4>
        </div>







        {/* ---------- Impact ---------- */}


        <div className="content_grid_two">
          <div>
            <div>
                <ArrowHeading heading = "Project Progress 40%"/>
                <div className='grid grid-row-3 mb-4 gap-2'>
                    {descriptionItems.map((item, index) => (
                        <div className="description_tab" key={index}>
                            <h4 style={{fontWeight: "350"}}>
                                {item.text}
                            </h4>
                        </div>
                    ))}
                </div>
                <Button href={"https://medium.com/@ashishsauparna/the-journey-of-building-button-smith-from-idea-to-launch-274b2252d3ed"} name={"View detailed research"}/>
            </div>
          </div>

          {/* ---------- Image Macbook ---------- */}

          <div className="relative">
            <div className="relative z-10 pointer-events-none">
              <Image src={MacbookCover} 
              alt={"Mackbook background cover"}
            />
            </div>
            <iframe width="450" height="292" 
            style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
            src={"https://miro.com/app/live-embed/uXjVMrWRtKY=/?moveToViewport=-3409,-7877,58890,28610&embedId=393622349668"} 
            allow="fullscreen; clipboard-read; clipboard-write" 
            className="absolute top-[18.2%] left-[20%] z-0"
            allowFullScreen>
            </iframe>
          </div>
        </div>








        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24 mb-24'>
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "Objective"/>
                <div>
                To make sure the use is able to test fonts on Figma as it was becoming a big problem when 
                within my design team when working on a short deadline projects.
                </div>
            </div>
            <div className='flex gap-24'>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    3 months for first release
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


        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
  )
}