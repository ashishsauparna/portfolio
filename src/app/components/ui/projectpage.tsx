"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import ProgressBar from "@/app/components/ui/progressbar";
import Link from "next/link";

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
        <div className="flex flex-col items-start mt-8" style={{color: "#0069E5"}}>
            <Link href={"/"}>
                &lt; Go Back
            </Link>
        </div>
        <div className="mb-20 mt-16 content_grid_two">
            <div>
                {useiframe ? (
                    <iframe width="768" height="432" 
                    style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
                    src={youtubeVideoIdOrMiroLink} 
                    allow="fullscreen; clipboard-read; clipboard-write" 
                    allowFullScreen></iframe>
                ) : (<YouTubeEmbed videoId={youtubeVideoIdOrMiroLink}/>)}
            </div>
          <div className="pl-8 pr-24">
            <h2 className='mb-4'>{title}
            <sup className='text-base text-slate-600 ml-2'>{year}</sup>
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>{subtitle}</h4>
            <div className="pt-4">
                <Button href={buttonHref} name={buttonText}/>
                <h3 className='mt-12 mb-2'>
                    Project progress {progress}%
                </h3>
                <div className="w-full mt-4 mb-4"><ProgressBar progress={progress}/></div>
                <div className='grid grid-row-3'>
                    {descriptionItems.map((item, index) => (
                        <div className="description_tab" key={index}>
                            <h4 style={{fontWeight: "350"}}>
                                {item.text} <p className='inline text-slate-700'>{item.note}</p>
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center items-center mt-24'>
            <div className='score_grid'>
                <div className="score_tab">
                    <h3 style={{color:"#A4A3A3"}}>
                        {stakeholdersTitle}
                    </h3>
                    <h2 style={{fontSize:"3rem", lineHeight:"3rem", marginTop:"1rem", marginBottom:"2rem"}}>
                        {stakeholdersSubtitle}
                    </h2>
                </div>
                <div className="score_tab">
                    <h3 style={{color:"#A4A3A3"}}>
                        {scoreTitle2}
                    </h3>
                    <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                        {usersEarned} <span className='text-4xl' style={{letterSpacing:"0"}}>{usersText}</span>
                    </h2>
                </div>
                <div className="score_tab">
                    <h3 style={{color:"#A4A3A3"}}>
                        # of people involved
                    </h3>
                    <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                        {peopleInvolved}
                    </h2>
                </div>
            </div>
        </div>
        <div className='flex w-full justify-center items-center mt-24'>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default ProjectPage;
