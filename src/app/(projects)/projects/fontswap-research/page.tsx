import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import Link from "next/link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import HeuristicsImg from "@/../../public/projects/fontswap/heuristics.png";
import UIFrames from "@/../../public/projects/fontswap/uiframes.png";
import UserbaseImg from "@/../../public/projects/fontswap/userbase.png";
import MacbookCover from "@/../../public/mackbook_silver_blackbg.png";
import ArrowBack from "@/../../public/arrow_back.svg";


export default function FontSwapResearch() {

  const descriptionItems = [
    { text: 'Saved a chunk of time spent in testing/replacing font on a website or an application project.'},
    { text: 'Has raised over 19K+ users in span of year'},
    { text: 'Received a great feedback leading to plugin improvement.'},
    { text: 'The success has let to finally making money'}
  ]

  return (
    // <ProjectPage
    //   title="Font Swap"
    //   year="May 23"
    //   subtitle="A Figma Plugin addressing multitasks"
    //   buttonHref="https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3"
    //   buttonText="View detailed research"
    //   progress={100}
    //   descriptionItems={[
    //     { text: 'Switch fonts in one selection', note: '[1]' },
    //     { text: 'Replace mixed text', note: '[2]' },
    //     { text: 'Find and replace missing fonts', note: '[3]' },
    //     { text: 'Suggestions fonts with different weight styles', note: '[4]' },
    //   ]}
    //   youtubeVideoIdOrMiroLink="uJtddv6lGhY"
    //   stakeholdersTitle="Stakeholders"
    //   stakeholdersSubtitle="UI Designers"
    //   scoreTitle2 = "Overall Users"
    //   usersEarned="+18k"
    //   usersText="users"
    //   peopleInvolved="🙋🏻"
    //   useiframe = {false}
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
                <ArrowHeading heading = "Impact"/>
                <div className='grid grid-row-3 mb-4 gap-2'>
                    {descriptionItems.map((item, index) => (
                        <div className="description_tab" key={index}>
                            <h4 style={{fontWeight: "350"}}>
                                {item.text}
                            </h4>
                        </div>
                    ))}
                </div>
                <Button href={"https://www.figma.com/design/VspD6hZZcvYiE2QM3dwHJD/Font-Swap-Plugin?node-id=1-7019&t=iPooSAi8QYkKt0Td-1"} name={"View detailed research"}/>
            </div>
          </div>
          <div>

          
          <div className="relative">
            <div className="relative z-10 pointer-events-none">
              <Image src={MacbookCover} 
              alt={"Mackbook background cover"}
            />
            </div>


            <div className="absolute top-[18.2%] left-[20%] z-0">
            <YouTubeEmbed videoId={"uJtddv6lGhY"}/>
            </div>

          </div>


          </div>
        </div>








        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24'>
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
                <div className="items-start">
                    <ArrowHeading heading = "Panel Size" number = "5"/>

                    <div className="grid gap-2">
                      <div className='flex gap-4'>
                        <div className='w-12 h-12 bg-slate-400'>
                        </div>
                        <div>
                          <h3>Ashish Sharma</h3>
                          <p className='text-base -mt-2'>UX Designer</p>
                        </div>
                      </div>

                      <div className='flex gap-4'>
                        <div className='w-12 h-12 bg-slate-400'>
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






        {/* ---------- Research ---------- */}


        <div>
            <ArrowHeading heading = "Research & Inspirations"/>
            <div className='grid grid-row-3 mb-4 gap-2'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Conducting user interviews
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Heuristic along with Competitor Analysis
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Usability testing and design iterations
                    </h4>
                </div>
            </div>
        </div>
        </div>






        {/* ---------- Image ---------- */}


        <Image
        src={HeuristicsImg}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- More Research ---------- */}


        <div className='content_grid_two mt-24 body_width'>
            <div style={{width:"70%"}}>
            Research showed popular plugins excelled in minimal effort but failed to deliver as promised and lacked updates.
            </div>

            <div style={{width:"70%"}}>
            Derived inspiration from plugins highlighted admired features and potential improvements, guiding the creation of a new, superior plugin.
            </div>
        </div>





        {/* ---------- Images ---------- */}


        <Image
        src={UIFrames}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "Solution"/>
                <div>
                The solution allowed users to preview designs, change colors and fonts, and adjust secondary controls like border radius and padding.                </div>
            </div>

            <div style={{width:"70%"}}>
                <ArrowHeading heading = "Challenges & learnings"/>
                <div>
                The need for a clear user experience started by analyzing the view-to-use ratio and applying trial and error, we improved user experience with time.                </div>
            </div>
            
        </div>







        {/* ---------- Images ---------- */}
        

        <Image
        src={UserbaseImg}
        alt="how might we questions"
        className="w-full mt-12"
        />






        {/* ---------- Final thoughts & conclusion ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "Final thoughts & conclusion"/>
              <div>
              New challenges do still arrive, but identifying them is a key. Once they are identified, I know that I&apos;ll eventually find better solutions.
              </div>
          </div>
        </div>


        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
    )
}