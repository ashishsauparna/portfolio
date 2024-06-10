"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import RozgarBanner from '/public/case_study_rozgar.jpg';


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
      <div className="items-left body_width">
        <div className="mb-20 mt-20 content_grid_two">
          <div>
            <h2 className='mb-4'>Rozgar
            <sup className='text-base text-slate-600 ml-2'>2022</sup>
            </h2>
                <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>Understanding the <br/>online/offline market for Blue collar workers </h4>
                <div>
                    <Button href="https://medium.com/@ashishsauparna/rozgar-ux-case-study-jan-2022-49dfe9f33ae3" name="View detailed research"/>
                    <h3 className='mt-24 mb-2'>
                        Key Solutions:
                    </h3>
                    <div className='grid grid-row-3'>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            In-person Interviews <p className='inline text-slate-700'>[1]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Pain points <p className='inline text-slate-700'>[2]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Over Persona <p className='inline text-slate-700'>[3]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            User Journey Map <p className='inline text-slate-700'>[4]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Competitor Analysis <p className='inline text-slate-700'>[5]</p>
                            </h4>
                        </div>
                        <div className="description_tab">
                            <h4 style={{fontWeight: "350"}}>
                            Experimenting with Digital Experience <p className='inline text-slate-700'>[6]</p>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>

              <Image
              src={RozgarBanner}
              alt="Font Swap Banner"
              />

            </div>
        </div>
        <div>
            <div className='flex w-full justify-center items-center mt-24'>
                <div className='score_grid'>
                    <div className="score_tab">
                        <h3 style={{color:"#A4A3A3"}}>
                            Stakeholders
                        </h3>
                        <h2 style={{fontSize:"1.4rem", marginTop:"1rem", marginBottom:"1rem"}} className="flex gap-2 flex-col">
                            <span>👷🏼‍♂️ Construction worker;</span>
                            <span>👨🏻‍🏭 Welder;</span>
                            <span>📦 Warehousing;</span>
                            <span>🔩 maintenance; etc.</span>
                        </h2>
                    </div>
                    <div className="score_tab">
                        <h3 style={{color:"#A4A3A3"}}>
                            Research Participants
                        </h3>
                        <h2 style={{fontSize:"1.4rem", marginTop:"1rem", marginBottom:"1rem"}} className="flex gap-2 flex-col">
                            <span>⚡️ Electrician;</span>
                            <span>🚛 Construction driver;</span>
                            <span>📦 Warehouse worker</span>
                        </h2>
                    </div>
                    <div className="score_tab">
                        <h3 style={{color:"#A4A3A3"}}>
                            # of people involved
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