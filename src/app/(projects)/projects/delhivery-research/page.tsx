"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import DelhiveryBanner from '/public/Outside_in_poster.png';
import ProgressBar from "@/app/components/ui/progressbar";


export default function DelhiveryResearch() {

  

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
            <h2 className='mb-4'>UX Research - Delhivery
            <sup className='text-base text-slate-600 ml-2'> (WIP)</sup>
            </h2>
                <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>Understanding Trends and <br/>innovations in a logistic industry</h4>
                <div>
                    <h3 className='mt-12 mb-2'>
                        Progress so far..
                    </h3>
                    <div className="w-2/5 mt-2"><ProgressBar progress={40}/></div>

                    <Button href="https://miro.com/welcomeonboard/WEhBbWxIQTVITFNUZUF1Tm1ZWHdTMXZkVjJCTmNNd3pTbWJVMTZiTzRLQk9XdWgzSWhiTlhYbWVvRDM2SEtWYnwzNDU4NzY0NTYyMzY0Mjg3NTkwfDI=?share_link_id=242834876031" name="Open Miro in new tab"/>
                    
                    <h3 className='mt-12 mb-2'>
                        What does this research Include?
                    </h3>
                    <div className='grid grid-row-3'>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Secondary Research <p className='inline text-slate-700'>[1]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Competitor Analysis <p className='inline text-slate-700'>[2]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Proto Personas <p className='inline text-slate-700'>[3]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Website&apos;s Heuristics Analysis <p className='inline text-slate-700'>[4]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Insights and Possible Future <p className='inline text-slate-700'>[5]</p>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>

              {/* <Image
              src={DelhiveryBanner}
              alt="Font Swap Banner"
              /> */}
              <iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVMrWRtKY=/?moveToViewport=-3409,-7877,58890,28610&embedId=393622349668" frameBorder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowFullScreen></iframe>

            </div>
        </div>
        <div>
            <div className='flex w-full justify-center items-center mt-24'>
                <div className='score_grid'>
                    <div className="score_tab">
                        <h3 style={{color:"#A4A3A3"}}>
                            Research Company
                        </h3>
                        <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                            Delhivery
                        </h2>
                    </div>
                    <div className="score_tab">
                        <h3 style={{color:"#A4A3A3"}}>
                            Overall Time
                        </h3>
                        <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                            30 <span className='text-4xl' style={{letterSpacing:"0"}}>days...</span>
                        </h2>
                    </div>
                    <div className="score_tab">
                        <h3 style={{color:"#A4A3A3"}}>
                            # of people involved
                        </h3>
                        <h2 style={{fontSize:"4rem", letterSpacing:"-3px", marginTop:"1rem"}}>
                            👨🏻‍💻 👨🏻‍💻
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