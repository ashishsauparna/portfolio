"use client"

import Script from 'next/script';
import Image from 'next/image';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import ProgressBar from "@/app/components/ui/progressbar";
import ArrowIcon from '/public/outward_arrow.svg';
import Image1 from '/public/delhivery/image_1.jpg';
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
        <div className="pt-12">
            <h2>{title}
            <sup className='text-base text-slate-600 ml-2'>{year}</sup>
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>{subtitle}</h4>
        </div>
        <div className="mb-20 mt-16 content_grid_two">
            <div>
                {useiframe ? (
                    <iframe width="100%" height="502" 
                    style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
                    src={youtubeVideoIdOrMiroLink} 
                    allow="fullscreen; clipboard-read; clipboard-write" 
                    allowFullScreen></iframe>
                ) : (<YouTubeEmbed videoId={youtubeVideoIdOrMiroLink}/>)}
            </div>
          <div className="pl-8">
            <div>
                <h3 className='mb-2'>
                    Project progress {progress}%
                </h3>
                <div className="w-full mt-4 mb-4"><ProgressBar progress={progress}/></div>
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
        </div>
        <div className='flex w-full justify-center items-center mt-24'>
            <div className='score_grid'>
                <div className="score_tab">
                    <h3 style={{color:"#232122"}}>
                        {stakeholdersTitle}
                    </h3>
                    <h5 style={{fontSize:"3rem", color:"#232122"}}>
                        {stakeholdersSubtitle}
                    </h5>
                </div>
                <div className="score_tab">
                    <h3 style={{color:"#232122"}}>
                        {scoreTitle2}
                    </h3>
                    <h5 style={{fontSize:"3rem", color:"#232122"}}>
                        {usersEarned} 
                        {/* <span className='text-4xl' style={{letterSpacing:"0"}}>{usersText}</span> */}
                    </h5>
                </div>
                <div className="score_tab">
                    <h3 style={{color:"#232122"}}>
                        # of people involved
                    </h3>
                    <h5 style={{fontSize:"3rem", color:"#232122"}}>
                        {peopleInvolved}
                    </h5>
                </div>
            </div>
        </div>
        {/* <div className='flex w-full justify-start items-center mt-24 gap-8'>
        <div className='w-full'>
            <Image src={ArrowIcon} alt={"an arrow icon"} width={72} className="rotate-90 -ms-4"/>
        </div>
        <div className='w-full'>
            During our secondary research, we found that the company was founded in 2011 and is headquartered in Gurgaon.
        </div>
        <div className='w-full'>
            The brand is active on all major social media platforms, provides tracking, and has a support page.
        </div>
        </div>
        <Image src={Image1} alt='' className='w-full mt-24'/> */}
      </div>
    <Footer/>
    </main>
  )
}

export default ProjectPage;
