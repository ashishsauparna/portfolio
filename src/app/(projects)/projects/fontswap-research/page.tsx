import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Link from "next/link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import HeuristicsImg from "@/../../public/projects/fontswap/heuristics.png";
import MoscowImg from "@/../../public/projects/fontswap/moscow.png";
import UIFrames from "@/../../public/projects/fontswap/uiframes.png";
import UsabilityTesting from "@/../../public/projects/fontswap/usability_testing.png";
import UIAnatomy from "@/../../public/projects/fontswap/anatomy.png";
import UserbaseImg from "@/../../public/projects/fontswap/userbase.png";
import ResearchImg from "@/../../public/projects/fontswap/research.png";
import ArrowBack from "@/../../public/arrow_back.svg";
import DP from "@/../../public/ashish_sharma.png";
import StarSVG from "@/../../public/star.svg";
import Banner from "@/../../public/projects/fontswap/banner.png";
import SelectLayerGif from "@/../../public/projects/fontswap/select_layer.gif";


export default function FontSwapResearch() {

  const descriptionItems = [
    { text: 'Saved a chunk of time spent in testing/replacing font on a website or an application project.'},
    { text: 'Has raised over 21K+ users in span of year'},
    { text: 'Received a great feedback leading to plugin improvement.'},
    { text: 'The success has let to finally making money'}
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


        {/* ---------- Back button here ---------- */}


        <div className="sticky top-10 items-left body_width grid gap-24 mt-8 font-medium" style={{color: "#0069E5"}}>
            <Link href={"/"}>
                <div className="goback_button button_small">
                  <Image
                  src={ArrowBack}
                  alt="back arrow icon"
                  width={20}
                  className="arrow-back-icon"
                  /> Go Back
                </div>
            </Link>
        </div>




        <div className="items-left body_width grid gap-24 mt-24">




        {/* ---------- Title here ---------- */}


        <div className="flex flex-col justify-center items-center w-full mt-24">
            <h4 className="flex" style={{fontWeight:"500", width:"25%", textAlign:"center"}}>
                A Figma Plugin addressing to replace all font styles with 3 clicks
            </h4>
            <h1 className="flex text-6xl mt-48 gap-8 font-light font-noto-serif justify-center overflow-hidden whitespace-nowrap text-clip text-gray-800">
              {/* <Image width={72} src={Logo} alt="Figma Logo"/> */}
              Font Swap
              <Image
              src={StarSVG}
              alt="Star image"
              width={32}
              className="rotating-star"
              />
              Font Swap 
              <Image
              src={StarSVG}
              alt="Star image"
              width={32}
              className="rotating-star"
              />
              Font Swap
            </h1>
        </div>
        </div>


        {/* ---------- Image ---------- */}
        <div className="flex justify-center items-center w-full relative -z-10">
        <Image
        src={Banner}
        alt="how might we questions"
        className="w-full"
        />
        <Image
        src={SelectLayerGif}
        alt="how might we questions"
        className="w-[14.2%] absolute left-[9.1rem] top-[16rem]"
        />
        </div>





        <div className="items-left body_width grid gap-24 mt-24">

        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24'>
          <div style={{width:"70%"}}></div>
          <div className="flex flex-col gap-24">
            <div>
                <ArrowHeading heading = "Story worth talking about"/>
                <div style={{width:"80%"}}>
                The idea sparked when <b style={{fontWeight:"500"}}>my team and I were struggling to test various fonts</b> while 
                crafting a pitch for a client. This challenge led to the realization that<b style={{fontWeight:"500"}}> we needed a 
                faster, more aesthetic solution</b> for testing and selecting fonts. From that, I created a 
                tool to simplify the process, allowing us to quickly experiment with multiple fonts and 
                pick the one that fits perfectly.
                </div>
            </div>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    June 2023 - Ongoing
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "6"/>
                      <div className="flex flex-wrap gap-8" style={{width:"80%"}}>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={DP} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Ashish Sharma</h3>
                            <p className='text-base -mt-2'>UX Designer + Developer</p>
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






        {/* ---------- Research Approach ---------- */}


        <div className='content_grid_two gap-24 w-full'>
          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Research Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-1 grid-rows-2 gap-x-1 justify-between gap-y-2'>
            <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Brainstorming Ideas
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Persona & User Journey
                    </h4>
                </div>
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
            </div>
          </div>


          <div>
          <div style={{width:"80%", display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 1] </b>
            <div>
            We were initially using a plugin called Font Replacer, and Easy Font Swap 
              which didn&apos;t fully meet our needs. To better understand the landscape, 
            I <b style={{fontWeight:"500"}}>conducted a competitor analysis, focusing on features, interface designs, documentation, and 
            unique selling points.</b>
            </div>
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 2] </b>
            <div>
              <b style={{fontWeight:"500"}}>I leveraged feedback from the comment sections</b> of these plugins to identify what users needed, 
              which informed the creation of a new solution. This data helped shape a well-defined 
              persona. Additionally, after conducting <b style={{fontWeight:"500"}}>3 user interviews </b> 
              with my team, the path forward became clearer, <b style={{fontWeight:"500"}}>leading to the development of a detailed user journey</b>.
            </div>
          </div>
          </div>


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
        src={HeuristicsImg}
        alt="how might we questions"
        className="w-full mt-24"
        />





        {/* ---------- Design Approach ---------- */}


        <div className="content_grid_two gap-24 mt-24 body_width">

          <div style={{width:"70%"}}>
            <ArrowHeading heading = "Design Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=656-195&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-2 grid-rows-2 mb-4 mt-8 gap-y-2 gap-x-0'>
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

          <div>

          <div style={{width:"80%", display:"grid", gap:"0.5rem"}}>
          <b>[Approach 1] </b>
            <div>
            Facing a creative block, I initially <b>mirrored the frame structure of Font Replacer to get started</b>. 
            Using MoSCoW prioritization and after 9 iterations, I was able to refine the process, 
            <b>ensuring that accessability and replace fonts in three simple steps.</b>
            </div>
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid", gap:"0.5rem"}}>
            <b>[Approach 2] </b>
            <div>
            Drawing from The Sprint Book, I learned the importance of testing early to avoid delays. 
            With that in mind, I <b>created a prototype and conducted usability testing with three of my 
            teammates to gather immediate feedback.</b>
            </div>
          </div>

          <br/>
          
          <div style={{width:"80%", display:"grid"}}>
            The feedback resulted in Release 4.1, which improved visual cues for font selection, 
            visual identification for missing fonts, and status updates on the progress bar when font 
            switching was delayed.
          </div>


          </div>

        </div>



        

        {/* ---------- Image ---------- */}


        <Image
        src={MoscowImg}
        alt="how might we questions"
        className="w-full mt-24"
        />


        {/* ---------- Solution and Challenges ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24'>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings (1)" arrow={true}/>
              <div className='grid mb-4 gap-4 w-[80%]'>
                <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>What was the Problem? (hmw method)</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      How to get started with the design while also making sure that we don&apos;t 
                      start with scratch by saving initial time?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      What method can be used to make sure that we keep the steps minimal whole also 
                      user has to take care of one task at a time?
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      It takes about 1-2 seconds for the plugin to load all font styles even on an average data speed. 
                      How can we optimize the user flow so that the user doesn&apos;t have to wait for the time being.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The 404 screen is usually a blank screen with font not found. How can we make it helpful to users?
                      </div>
                  </div>

                  <b style={{fontWeight:"500", marginBottom:"0.5rem", marginTop:"2rem"}}>How was I solving? 🧠</b>

                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Used the Jacob&apos;s law of similarity by keeping the plugin design similar 
                      to popular plugin (Font Replacer) in the font replacement category.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The plugin presents one task at a time, reducing the information overload, 
                      starting by populating fonts from a selected node, allowing the user to choose which font to change.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      It pre-loads matching font styles to ensure the process remains intuitive and quick 
                      before the user makes their first decision.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      Made sure the plugin provides solution at every stage of the process like offering a 
                      direct Google search link pre-filled with the font name in case the font is not in the search list.
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



        {/* ---------- Images ---------- */}


        <Image
        src={UIAnatomy}
        alt="how might we questions"
        className="w-full mt-24"
        />
        



{/* ---------- Solution and Challenges ---------- */}


<div className='content_grid_two gap-24 body_width mt-24'>
          {/* Challenges & learnings */}

              <ArrowHeading heading = "Challenges & learnings (2)" arrow={true}/>
              <div className='grid mb-4 gap-4 w-[80%]'>
                <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>What was the Problem? (hmw method)</b>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      How can we solve for the cases of the font&apos;s that don&apos;t have a matching 
                      style or offer a limited style variation? This should help in reduced number of cases 404 screens.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      As the plugin users are growing, how can we find out the geographical impact 
                      the plugin has made, even though figma doesn&apos;t directly allows to track usage.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      What placement is better for a sign-in method that it is visible since the plugin 
                      loads also how can we integrate it with pro suggestions and earn money in a future case?
                      </div>
                  </div>


                  <b style={{fontWeight:"500", marginBottom:"0.5rem", marginTop:"2rem"}}>How was I solving? 🧠</b>

                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      A font suggestion system was developed to recommend closest alternatives 
                      (e.g., Roman for Regular or Bold for Semibold), tagged as &quot;Pro Suggestions&quot; to 
                      differentiate from exact matches. This helped in expanding the search list items.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      To track plugin usage, a sign in link was introduced for pro suggestions 
                      which helped in knowing geographical location of users.
                      </div>
                  </div>
                  <div className="description_tab2">
                      <div style={{fontWeight: "350"}}>
                      The sign in link is kept on the first fold of plugin making it visible throughout 
                      the process but separate from the main task, it is designed as tertiary button 
                      ensuring users user doesn&apos;t think of it as a primary button and it functions 
                      as a status if user signed in or not.
                      </div>
                  </div>
          </div>
        </div>






        {/* ---------- Images ---------- */}
        

        <Image
        src={UserbaseImg}
        alt="how might we questions"
        className="w-full mt-12"
        />






        {/* ---------- Final thoughts & conclusion ---------- */}


        <div className='content_grid_two gap-24 body_width mt-24 mb-24'>
        
              <ArrowHeading heading = "Key Takeaways" arrow={true}/>
              <div className="grid">
              <b style={{fontWeight:"500", marginBottom:"2rem"}}>Reflection on the outcomes</b>
              New challenges do still arrive, but identifying them is a key. Once they are identified, 
              I know that I&apos;ll eventually find better solutions.
              </div>
        </div>



        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
    )
}