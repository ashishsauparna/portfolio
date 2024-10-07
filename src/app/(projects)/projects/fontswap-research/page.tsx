import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Link from "next/link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import HeuristicsImg from "@/../../public/projects/fontswap/heuristics.png";
import MoscowImg from "@/../../public/projects/fontswap/moscow.png";
import UIFrames from "@/../../public/projects/fontswap/uiframes.png";
import UserbaseImg from "@/../../public/projects/fontswap/userbase.png";
import ResearchImg from "@/../../public/projects/fontswap/research.png";
import ArrowBack from "@/../../public/arrow_back.svg";
import DP from "@/../../public/ashish_sharma.png";
import StarSVG from "@/../../public/star.svg";
import Banner from "@/../../public/projects/fontswap/banner.png";


export default function FontSwapResearch() {

  const descriptionItems = [
    { text: 'Saved a chunk of time spent in testing/replacing font on a website or an application project.'},
    { text: 'Has raised over 21K+ users in span of year'},
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


        {/* ---------- Back button here ---------- */}


        <div className="sticky top-10 items-left body_width grid gap-24 mt-8 font-medium" style={{color: "#0069E5"}}>
            <Link href={"/"}>
                <div className="inline-flex items-center justify-start hover:underline gap-2 button_small cursor-pointer">
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
            <h1 className="flex mt-48 gap-8 font-recoleta justify-center overflow-hidden whitespace-nowrap text-clip text-gray-800">
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

        <Image
        src={Banner}
        alt="how might we questions"
        className="w-full"
        />





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
                            <p className='text-base -mt-2'>UX Designer</p>
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
            We initially used a tool called Font Replacer, but I searched for alternatives to find a 
            better fit. Although Easy Font Swap had some potential, it didn&apos;t fully meet our needs. To 
            better understand the landscape, I conducted a competitor analysis, focusing on 
            features, interface designs, documentation, unique selling points.
            </div>
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 2] </b>
            <div>
              <b style={{fontWeight:"500"}}>I leveraged feedback from the comment sections</b> of these plugins to identify what users needed, 
              which informed the creation of a new solution. This data helped shape a well-defined 
              persona. Additionally, after conducting <b style={{fontWeight:"500"}}>3 interviews </b> 
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

          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 1] </b>
            Facing a creative block, I initially mirrored the frame structure of Font Replacer to get started. 
            Using MoSCoW prioritization and after 9 iterations, I was able to refine the process, 
            ensuring that accessability and replace fonts in three simple steps.
          </div>

          <br/><br/>

          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 2] </b>
            Drawing from The Sprint Book, I learned the importance of testing early to avoid delays. 
            With that in mind, I created a prototype and conducted usability testing with three of my 
            teammates to gather immediate feedback.
          </div>

          <div style={{width:"80%", display:"grid"}}>
          <b style={{fontWeight:"500", marginBottom:"0.5rem"}}>[Approach 3] </b>
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

              <ArrowHeading heading = "Challenges & learnings" arrow={true}/>
              <div className='grid mb-4 gap-4'>
                <b style={{fontWeight:"500", marginBottom:"2rem"}}>What was the Problem?</b>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Continuous iterations to optimize for mixed fonts and address login access, while ensuring the 
                      login link is evident but not disruptive to the overall UI.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Addressing users&apos; need for fonts not appearing in the search list, 
                      even when they didn&apos;t offer the same weights, but needed to be tested.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Placing the GIF tutorial to help users get started, which Figma&apos;s API didn&apos;t allow directly.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Creating an equation for the plugin to understand different font styles/weights with various 
                      naming conventions like Roman vs. Regular or Medium vs. Medium Italic.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Developing a system where the plugin suggests alternative fonts when certain weights are 
                      missing, e.g., suggesting Medium weight when Regular is unavailable.
                      </h4>
                  </div>

                  <b style={{fontWeight:"500", marginBottom:"2rem", marginTop:"2rem"}}>What were we solving? 🧠</b>

                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Refining font replacement through multiple iterations, with the final UI effectively 
                      matching and replacing all font styles seamlessly.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Improving heuristics to ensure users don&apos;t make mistakes while using the plugin.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Applying Jacob&apos;s Law of Similarity by keeping the plugin design similar to popular 
                      plugins like Font Replacer in the font replacement category.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Reducing information overload by maintaining a minimal, condensed design.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Ensuring the plugin offers solutions at every stage, including offering a Google search 
                      option when fonts are not in the search list.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                      Making the sign-in/sign-out option visible but not intrusive to the main font change process.
                      </h4>
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