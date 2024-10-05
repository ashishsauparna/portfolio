import ArrowHeading from "@/app/components/ui/arrowheading";
import Button from "@/app/components/ui/button";
import Footer from "@/app/components/ui/footer";
import NavBar from "@/app/components/ui/navbar";
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import ResearchImg from "@/../../public/projects/buttonsmith/research.png";
import Competitors from "@/../../public/projects/buttonsmith/competitor_research.png";
import Moscow from "@/../../public/projects/buttonsmith/moscow.png";
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
                <ArrowHeading heading = "Impact" arrow = {true}/>
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
            {/* <div className="relative z-10 pointer-events-none">
              <Image src={MacbookCover} 
              alt={"Mackbook background cover"}
            />
            </div> */}

            <iframe className="relative z-10 w-full bg-gray-100" style={{"border": "1px solid rgba(0, 0, 0, 0.1);"}} height={"450"} src="https://embed.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&embed-host=share" allowFullScreen></iframe>



            <div className="absolute top-[18.2%] left-[20%] z-0">
            {/* <YouTubeEmbed videoId={"FfLtALrdE0I"}/> */}
            </div>

          </div>
          

            </div>
        </div>








        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24'>
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "💭 Objective"/>
                <div>
                To enhance design efficiency by creating a customised and fully <b style={{fontWeight:"600"}}>documented</b> component set with a <b style={{fontWeight:"600"}}>least decision making efforts</b> which can be reused and updated as per user&apos;s needs.
                </div>
            </div>
            <div className='flex gap-24'>

                <div>
                    <ArrowHeading heading = "⏳ Duration"/>
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
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
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


        <div className='max-w-lg'>
            <ArrowHeading heading = "Research & Inspirations" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-2 grid-rows-2 gap-x-1 justify-between gap-y-4'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Competitor Analysis
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Heuristics Analysis
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      How might we questions
                    </h4>
                </div>
            </div>
        </div>
        </div>

        <div className='content_grid_two gap-24 mt-12 body_width'>

          <div style={{width:"70%"}}>
          During the research it was discovered that the other plugins were doing a good job 
          and they had very little feedback in case of both positive and negative aspects.
          <br/><br/>
          Even though their wider audience was happy it was identified that creating something 
          that involves pros of all three components could solve the objective that was initially developed.
          </div>

          <div style={{width:"70%"}}>
          Upon conducting heuristics it was discovered that there could be many things that 
          could be used for creating a plugin that can reduce human efforts like, a preview option in 
          Design system generator, styles to explore with a certain theme. and finally figuring out how to document it.
          <br/><br/>
          It was discovered that other plugins were just creating a component set but not generating 
          document in order to kick start a project.
          </div>

        </div>






        {/* ---------- Image ---------- */}


        <Image
        src={ResearchImg}
        alt="how might we questions"
        className="w-full mt-24"
        />



        {/* ---------- Image ---------- */}


        <Image
        src={Competitors}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- More Research ---------- */}


        <div className='content_grid_two mt-24 body_width'>


        {/* ---------- Design & Testing ---------- */}


        <div className="max-w-lg">
            <ArrowHeading heading = "Design & Testing" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=656-195&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-2 grid-rows-2 mb-4 gap-4'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      MoSCoW Prioritization
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      UI WorkFlow & Release
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Usability Testing
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      UI Documentation
                    </h4>
                </div>
            </div>
        </div>
        </div>

        <div className='content_grid_two gap-24 mt-12 body_width'>

        <div style={{width:"70%"}}>
        After understanding the how might we questions it became clear to distinguish the 
        features that might be most required vs least required when creating the plugin design. 
        <br/><br/>
        This also later helped in creating the visual hierarchy of the components displayed when creating the plugin.
        </div>

        <div style={{width:"70%"}}>
        The decision work as per trial and error method was taken as we did not have much data in terms 
        of how the users would feel when using the newly developed iteration.
        <br/><br/>
        Hence usability test was conducted with 3 participants in order to understand if the target was met. 
        This also needed the design to be developed asap.
        </div>


        </div>





        {/* ---------- Images ---------- */}


        <Image
        src={Moscow}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          {/* Challenges */}
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "🏋️‍♀️ Challenges"/>
              <div className='grid mb-4 gap-4'>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      The first challenge was as there was limited feedback available from the users for such kind of plugins. 
                      This was taken care if with user interviews and usability testings.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Initially there was an idea to put suggestions in order to avoid errors and improve efficiency 
                      of use which was later becoming like a redundant need and a difficult to implement in ase of development 
                      as I didn&apos;t have much knowledge on how to implement it.  and finally the decision was taken to remove it 
                      and update the design as such that the need for suggestions can be avoided.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      As the iterations  were being made the preview section was expanding with added states and a new button 
                      styles section. This was challenge initially on how to make amends in the UI such that the plugin still holds 
                      the preview section to be as the prominent space.
                      </h4>
                  </div>
              </div>
          </div>

          {/* Solutions */}
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "💡 Solution & Learnings"/>
              <div className='grid mb-4 gap-4'>

              The solution focused on the following:
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      The iterations were made to the plugin&apos;s component hierarchy to make sure that user have access to most used components 
                      first and then they can use the others if needed.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Finding the perfect sync in how the equation would work when deciding teh whole pallet based on just one primary color. 
                      This took ideation from Material design color tool. And then figuring out how to implement it by using combination of Hue, 
                      Saturation and brightness.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      After removing suggestions it was important to find a synergy to a first fold button design that appeals to a user in order 
                      to make least amount of changes and before generating document. This involved a basics like it should look aesthetically perfect 
                      with all input field numbers aligned in multiplication of 2&4.
                      </h4>
                  </div>
              </div>
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
              <ArrowHeading heading = "Final thoughts & conclusion"/>
              <div>
              New challenges do still arrive, but identifying them is a key. 
              For instance, right now bringing new button designs to the plugin is what I&apos;m trying to pull of in such a way that 
              I can also develop a code for it as well. Next is finding time to test the design one more time.
              </div>
          </div>
        </div>


        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
  )
}
