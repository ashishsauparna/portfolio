"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import ProgressBar from "@/app/components/ui/progressbar";

export default function ButtonSmithResearch() {

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
        <div className="mb-20 mt-20 content_grid_two">
          <div>
            <h2 className='mb-4'>Button Smith
            <sup className='text-base text-slate-600 ml-2'> May 2024</sup>
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>One Figma Plugin to <br/>generates and documents<br/> all your button states</h4>
            <div>
                    <h3 className='mt-12 mb-2'>
                        Complete ✅
                    </h3>
                    <div className="w-2/5 mt-2"><ProgressBar progress={100}/></div>
              <Button href="https://medium.com/ux-planet/ux-case-study-button-smith-effortless-button-creation-8b9c7b9f8f2a" name="View detailed research"/>
              <h3 className='mt-24 mb-2'>
                Key Solutions:
              </h3>
              <div className='grid grid-row-3'>
                <div className="description_tab">
                  <h4 style={{fontWeight: "350"}}>
                    Use your local/brand font <p className='inline text-slate-700'>[1]</p>
                  </h4>
                </div>
                <div className="description_tab">
                  <h4 style={{fontWeight: "350"}}>
                    Customize color, padding, radius, etc. <p className='inline text-slate-700'>[2]</p>
                  </h4>
                </div>
                <div className="description_tab">
                  <h4 style={{fontWeight: "350"}}>
                    Multiple button styles to choose <p className='inline text-slate-700'>[3]</p>
                  </h4>
                </div>
                <div className="description_tab">
                  <h4 style={{fontWeight: "350"}}>
                    Auto Document your new button component set <p className='inline text-slate-700'>[4]</p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <YouTubeEmbed videoId="FfLtALrdE0I" /> {/* Replace with your Button Smith YouTube video ID */}
          </div>
        </div>
        <div>
          <div className='flex w-full justify-center items-center mt-24'>
            <div className='score_grid'>
              <div className="score_tab">
                <h3 style={{color:"#A4A3A3"}}>
                  Stakeholders
                </h3>
                <h2 style={{fontSize:"3rem", lineHeight:"3rem", marginTop:"1rem", marginBottom:"2rem"}}>
                  UI/Visual Designers
                </h2>
              </div>
              <div className="score_tab">
                <h3 style={{color:"#A4A3A3"}}>
                  Users Earned
                </h3>
                <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                  216 <span className='text-4xl' style={{letterSpacing:"0"}}>users</span>
                </h2>
              </div>
              <div className="score_tab">
                <h3 style={{color:"#A4A3A3"}}>
                  # of People Involved
                </h3>
                <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                  👨🏻‍💻
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center items-center mt-24'>
          {/* <Image src={""} alt={"Kalki.design logo in white color"} className="w-9.12 mt-8"/> */}
        </div>
      </div>
      <Footer/>
    </main>
  )
}
