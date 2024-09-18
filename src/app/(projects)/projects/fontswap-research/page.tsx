import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import Link from "next/link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import HeuristicsImg from "@/../../public/projects/fontswap/heuristics.png";
import MoscowImg from "@/../../public/projects/fontswap/moscow.png";
import UIFrames from "@/../../public/projects/fontswap/uiframes.png";
import UserbaseImg from "@/../../public/projects/fontswap/userbase.png";
import ResearchImg from "@/../../public/projects/fontswap/research.png";
import ArrowBack from "@/../../public/arrow_back.svg";
import DP from "@/../../public/ashish_sharma.png";


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
            <h2>Font Swap
            </h2>
            <h4 style={{marginTop:"0.3rem", fontWeight:"300"}}>
              A Figma Plugin addressing to replace all font styles with 3 clicks
            </h4>
        </div>







        {/* ---------- Impact ---------- */}


        <div className="content_grid_two">
          <div className="mr-4">
            <div>
                <ArrowHeading heading = "Impact" arrow={true}/>
                <div className='grid grid-row-3 mb-4 gap-2'>
                    {descriptionItems.map((item, index) => (
                        <div className="description_tab" key={index}>
                            <h4 style={{fontWeight: "350"}}>
                                {item.text}
                            </h4>
                        </div>
                    ))}
                </div>
                <Button href={"https://www.figma.com/design/VspD6hZZcvYiE2QM3dwHJD/Font-Swap-Plugin?node-id=1-7019&t=iPooSAi8QYkKt0Td-1"} name={"View detailed research"}/>
            </div>
          </div>


          <div>
          
          <div className="relative">
            {/* <div className="relative z-10 pointer-events-none">
              <Image src={MacbookCover} 
              alt={"Mackbook background cover"}
              />
            </div> */}

            <iframe className="relative z-10 w-full" style={{"border": "1px solid rgba(0, 0, 0, 0.1);"}} height={"450"} src="https://embed.figma.com/design/VspD6hZZcvYiE2QM3dwHJD/Font-Swap-Plugin?node-id=1-7019&embed-host=share" allowFullScreen></iframe>



            <div className="absolute top-[18.2%] left-[20%] z-0">
            {/* <YouTubeEmbed videoId={"uJtddv6lGhY"}/> */}
            </div>

          </div>


          </div>
        </div>








        {/* ---------- Objective ---------- */}


        <div className='content_grid_two w-full gap-24'>
            <div style={{width:"70%"}}>
                <ArrowHeading heading = "💭 Objective"/>
                <div>
                To make sure the use is able to test fonts on Figma as it was becoming a big problem when 
                within my design team when working on a short deadline projects.
                </div>
            </div>
            <div className='flex gap-24'>

                <div>
                    <ArrowHeading heading = "⏳ Duration"/>
                    <div>
                    3 months for first release
                    </div>
                </div>
                <div className="items-start">
                    <ArrowHeading heading = "Panel Size" number = "5"/>

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






        {/* ---------- Research ---------- */}


        <div className='max-w-lg'>
            <ArrowHeading heading = "Research & Inspirations" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/VspD6hZZcvYiE2QM3dwHJD/Font-Swap-Plugin?node-id=59-283&t=EE8NCwJ3QkssAU1o-1"/>
            <div className='grid grid-cols-2 grid-rows-2 gap-x-1 justify-between gap-y-4'>
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

        </div>

        <div className='content_grid_two gap-24 mt-12 body_width'>

          <div style={{width:"70%"}}>
          Competitor analysis helped gather data regarding features offered, 
          interface designs, documentation, and unique selling points. 
          This later contributed to developing a well-defined persona. 
          After conducting user interviews, a user journey was developed.
          </div>

          <div style={{width:"70%"}}>
          This process revealed opportunities, such as enabling the plugin to switch mixed 
          font styles and addressing style detachment. Heuristic analysis, with input from two colleagues, 
          helped identify improvements for a more user-friendly plugin experience.
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





        {/* ---------- More Research ---------- */}


        <div className='content_grid_two mt-24 body_width'>


        {/* ---------- Design & Testing ---------- */}


        <div className="max-w-lg">
            <ArrowHeading heading = "Design & Testing" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/VspD6hZZcvYiE2QM3dwHJD/Font-Swap-Plugin?node-id=116-502&t=EE8NCwJ3QkssAU1o-1"/>
            <div className='grid grid-cols-2 grid-rows-2 mb-4 gap-4'>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      MoSCoW Prioritization
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      UI WorkFlow
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
        After identifying user motivations and needs, I gained a clear understanding of the 
        features and accessibility improvements that would elevate the design. The final version went 
        through 16 iterations to achieve the most adaptable user experience.
        </div>

        <div style={{width:"70%"}}>
        Usability testing revealed the users&apos; need for an improved visual experience, 
        such as clearer guidance on selecting layers, handling cases where no font is found due to 
        incorrect selection, and addressing situations where the searched font doesn&apos;t exist.
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

          {/* Challenges */}
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "🏋️‍♀️ Challenges"/>
              <div className='grid mb-4 gap-4'>
              The major design challenge involved 
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Continuous iterations to optimize for mixed fonts and address login access, while ensuring the login link is evident but not disruptive to the overall UI.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Addressing users&apos; need for fonts not appearing in the search list, even when they didn&apos;t offer the same weights, but needed to be tested.
                      </h4>
                  </div>

                  Development challenges included issue like:
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Placing the GIF tutorial to help users get started, which Figma&apos;s API didn&apos;t allow directly.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Creating an equation for the plugin to understand different font styles/weights with various naming conventions like Roman vs. Regular or Medium vs. Medium Italic.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Developing a system where the plugin suggests alternative fonts when certain weights are missing, e.g., suggesting Medium weight when Regular is unavailable.
                      </h4>
                  </div>
              </div>
          </div>

          {/* Solutions */}
          <div style={{width:"70%"}}>
              <ArrowHeading heading = "💡 Solution & Learnings"/>
              <div className='grid mb-4 gap-4'>

              The solution focused on the following 
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Refining font replacement through multiple iterations, with the final UI effectively matching and replacing all font styles seamlessly.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Improving heuristics to ensure users don&apos;t make mistakes while using the plugin.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Applying Jacob&apos;s Law of Similarity by keeping the plugin design similar to popular plugins like Font Replacer in the font replacement category.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Reducing information overload by maintaining a minimal, condensed design.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Ensuring the plugin offers solutions at every stage, including offering a Google search option when fonts are not in the search list.
                      </h4>
                  </div>
                  <div className="description_tab2">
                      <h4 style={{fontWeight: "350"}}>
                          Making the sign-in/sign-out option visible but not intrusive to the main font change process.
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







        {/* ---------- Images ---------- */}
        

        <Image
        src={UserbaseImg}
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