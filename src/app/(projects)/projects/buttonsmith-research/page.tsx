import ArrowHeading from "@/app/components/ui/arrowheading";
import Button from "@/app/components/ui/button";
import Footer from "@/app/components/ui/footer";
import NavBar from "@/app/components/ui/navbar";
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import HMWImage from "@/../../public/projects/buttonsmith/hmw.png";
import HewAnalysis from "@/../../public/projects/buttonsmith/heuristic_analysis.png";
import UIFrames from "@/../../public/projects/buttonsmith/uiframes.png";
import UICollective from "@/../../public/projects/buttonsmith/uicollective.png";
import MacbookCover from "@/../../public/mackbook_silver_blackbg.png";
import ArrowBack from "@/../../public/arrow_back.svg";
import DP from "@/../../public/ashish_sharma.png";
import LakshyaDP from "@/../../public/lakshya_raj.png";
import FigmaLogo from "@/../../public/Figma_logo.svg";
import Logo from "@/../../public/projects/buttonsmith/logo.svg"

export default function ButtonSmithResearch() {

  const descriptionItems = [
    { text: 'Reduced human effort with one click'},
    { text: 'Has raised over 255+ users in 2 months'}
  ]

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
            <h2>
              {/* <Image width={72} src={Logo} alt="Figma Logo"/> */}
              Button Smith
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>
              One Figma Plugin to generates and documents all your button states
            </h4>
        </div>







        {/* ---------- Impact ---------- */}


        <div className="mb-20 content_grid_two">
          <div>
            <div>
                <ArrowHeading heading = "💪 Impact"/>
                <div className='grid grid-row-3 mb-4 gap-2'>
                    {descriptionItems.map((item, index) => (
                        <div className="description_tab" key={index}>
                            <h4 style={{fontWeight: "350"}}>
                                {item.text}
                            </h4>
                        </div>
                    ))}
                </div>
                <Button href={"https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=529-7&t=hcDzdTGFhRkszfsj-1"} name={"View detailed research"}/>
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
            <YouTubeEmbed videoId={"FfLtALrdE0I"}/>
            </div>

          </div>
          

            </div>
        </div>








        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24'>
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "📌 Objective"/>
                <div>
                    To enhance design efficiency by utilizing the plugin, which simplifies the creation of 
                    reusable button components from design variations.
                </div>
            </div>
            <div className='flex gap-24'>

                <div>
                    <ArrowHeading heading = "Duration"/>
                    <div>
                    1.5 months for first release
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "6"/>
                      <div className="grid gap-2">

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={DP} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Ashish Sharma</h3>
                            <p className='text-base -mt-2'>UX Designer</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={LakshyaDP} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Lakshya Raj</h3>
                            <p className='text-base -mt-2'>Ideation</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-500 text-white font-semibold text-xl content-center text-center'>
                            4
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






        {/* ---------- Reseach & Inspirations ---------- */}


        <div>
            <ArrowHeading heading = "📝 Research & Inspirations"/>
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
        </div>
        </div>






        {/* ---------- Image ---------- */}


        <Image
        src={HMWImage}
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
        src={HewAnalysis}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "💡 Solution"/>
                <div>
                The solution allowed users to preview designs, change colors and fonts, and adjust secondary controls like border radius and padding.                </div>
            </div>

            <div style={{width:"70%"}}>
                <ArrowHeading heading = "🏋️ Challenges & learnings"/>
                <div>
                The need for a clear user experience started by analyzing the view-to-use ratio and applying trial and error, we improved user experience with time.                </div>
            </div>
            
        </div>






        {/* ---------- Images ---------- */}
        

        <Image
        src={UIFrames}
        alt="how might we questions"
        className="w-full mt-24"
        />
        <Image
        src={UICollective}
        alt="how might we questions"
        className="w-full mt-12"
        />






        {/* ---------- Final thoughts & conclusion ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "🧘 Final thoughts & conclusion"/>
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
