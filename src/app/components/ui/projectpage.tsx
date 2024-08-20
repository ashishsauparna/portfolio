"use client"

import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import Link from "next/link";
import ArrowHeading from './arrowheading';

const ProjectPage = ({
  title = 'Font Swap',
  year = '2023',
  subtitle = 'A Figma Plugin addressing multitasks',
  buttonHref = 'https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3',
  buttonText = 'View detailed research',
  progress = 100,
  descriptionItems = [
    { text: 'Switch fonts in one selection', note: '[1]' },
    { text: 'Replace mixed text', note: '[2]' },
    { text: 'Find and replace missing fonts', note: '[3]' },
    { text: 'Suggestions fonts with different weight styles', note: '[4]' },
  ],
  youtubeVideoIdOrMiroLink = 'uJtddv6lGhY',
  stakeholdersTitle = 'Stakeholders',
  scoreTitle2 = '',
  stakeholdersSubtitle = 'UI/Visual Designers',
  usersEarned = '+17K',
  usersText = 'users',
  peopleInvolved = '👨🏻‍💻',
  useiframe = false
}) => {

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

        <div className="items-left body_width">



        {/* ---------- Back button here ---------- */}


        <div className="flex flex-col items-start mt-8 font-medium" style={{color: "#0069E5"}}>
            <Link href={"/"}>
                &lt; Back
            </Link>
        </div>



        {/* ---------- Title here ---------- */}



        <div className="pt-12">
            <h2>{title}
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>{subtitle}</h4>
        </div>







        {/* ---------- First Fold Grid - Includes Impact and an Image ---------- */}


        <div className="mb-20 mt-16 content_grid_two">
          <div>
            <div>
                <ArrowHeading heading = "Impact"/>
                <div className='grid grid-row-3 mb-4 gap-2'>
                    {descriptionItems.map((item, index) => (
                        <div className="description_tab" key={index}>
                            <h4 style={{fontWeight: "350"}}>
                                {item.text} <p className='inline text-slate-700'>{item.note}</p>
                            </h4>
                        </div>
                    ))}
                </div>
                <Button href={buttonHref} name={buttonText}/>
            </div>
          </div>
          <div>
                {useiframe ? (
                    <iframe width="100%" height="502" 
                    style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
                    src={youtubeVideoIdOrMiroLink} 
                    allow="fullscreen; clipboard-read; clipboard-write" 
                    allowFullScreen></iframe>
                ) : (<YouTubeEmbed videoId={youtubeVideoIdOrMiroLink}/>)}
            </div>
        </div>








        {/* ---------- Second Fold Grid - Includes Objective, Timeline and Pannel Size ---------- */}


        <div className='content_grid_two w-full mt-28 gap-24'>
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "Objective"/>
                <div>
                    To enhance design efficiency by utilizing the plugin, which simplifies the creation of reusable button components from design variations.
                </div>
            </div>
            <div className='flex gap-24'>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    1.5 months for first release
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "4"/>
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


        {/* ---------- Third Fold - Includes Research & Inspirations ---------- */}


        <div className='mt-28'>
            <ArrowHeading heading = "Research & Inspirations"/>
            <div className='grid grid-row-3 mb-4 gap-2'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                        Creating How might we statements
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                        Heuristics competitor analysis
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                        How the users reacting as per their needs?
                    </h4>
                </div>
            </div>
            <div className='content_grid_two mt-12'>
                <div style={{width:"50%"}}>
                Research showed popular plugins excelled in minimal effort but failed to deliver as promised and lacked updates.
                </div>

                <div style={{width:"70%"}}>
                Derived inspiration from plugins highlighted admired features and potential improvements, guiding the creation of a new, superior plugin.
                </div>
            </div>
        </div>

        </div>
        <Footer/>
    </main>
  )
}

export default ProjectPage;
