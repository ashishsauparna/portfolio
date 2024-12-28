"use client"

import Image from "next/image";
import Script from 'next/script';
import Footer from '@/app/components/ui/footer';
import Link from "next/link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function FontSwapResearch() {

  const [activeSection, setActiveSection] = useState('story');
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [api, setApi] = useState<CarouselApi>()
  const [currentImageForResearch, setCurrentImageForResearch] = useState(0);
  const [countImageForResearch, setcountImageForResearch] = useState(0);
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });

      // Adjust the scroll position slightly above the section
      setTimeout(() => {
        window.scrollBy({ top: 1, behavior: 'smooth' });
      }, 300);

      // Update URL without reloading the page
      router.replace(`#${id}`);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('div[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);

            // Show back arrow if we've scrolled past 'story'
            if (entry.target.id === 'story') {
              setShowBackArrow(false);
            } else {
              setShowBackArrow(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() =>{
    
    if (!api) {
      return
    }
 
    // setcountImageForResearch(api.scrollSnapList().length)
    setCurrentImageForResearch(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrentImageForResearch(api.selectedScrollSnap() + 1)
    })
  }, [api]);

const researchApproachImageList = [
  {
    src:"/projects/dxb-airport-research/service-map-1.jpg",
    alt: "",
    width:100,
    height:100,
    sizes: ""
  },
  {
    src:"/projects/dxb-airport-research/service-map-2.jpg",
    alt: "",
    width:100,
    height:100,
    sizes: ""
  }
]

const heuristicsImageList = [
  {
    src:"/projects/dxb-airport-research/heuristics-1.jpg",
    alt: "",
    width:100,
    height:100,
    sizes: ""
  },
  {
    src:"/projects/dxb-airport-research/heuristics-2.jpg",
    alt: "",
    width:100,
    height:100,
    sizes: ""
  },
  {
    src:"/projects/dxb-airport-research/heuristics-3.jpg",
    alt: "",
    width:100,
    height:100,
    sizes: ""
  },
  {
    src:"/projects/dxb-airport-research/heuristics-4.jpg",
    alt: "",
    width:100,
    height:100,
    sizes: ""
  }
]

  return (

    <main id="top" className="flex min-h-screen flex-col items-center">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2N9F9N8KHK');
            `}
        </Script>


        {/* ---------- Back button and Navigation Menu Here ---------- */}


        <div className="flex sticky top-4 body_width font-medium z-50 gap-4 justify-center">

          <div className={`left-0 flex items-center ${activeSection === 'story' ? 'active' : ''}`} onClick={() => router.back()}>
              <div className="goback_button">
                <Image
                  src="/arrow_back.svg"
                  alt="back arrow icon"
                  width={20}
                  height={20}
                  className="arrow-back-icon"
                />
              </div>
          </div>

          <div className="sticky_navigation flex gap-1 justify-center">
            <Link href="#story" passHref>
              <div onClick={(e) => handleScroll(e, 'story')} 
              className={`nav_link ${activeSection === 'story' ? 'active' : ''}`}>Story</div>
            </Link>
            <Link href="#research" passHref>
              <div onClick={(e) => handleScroll(e, 'research')} 
              className={`nav_link ${activeSection === 'research' ? 'active' : ''}`}>Research Approach</div>
            </Link>
            <Link href="#design" passHref>
              <div onClick={(e) => handleScroll(e, 'design')}
              className={`nav_link ${activeSection === 'design' ? 'active' : ''}`}>Design Approach</div>
            </Link>
            <Link href="#learnings" passHref>
              <div onClick={(e) => handleScroll(e, 'learnings')}
              className={`nav_link ${activeSection === 'learnings' ? 'active' : ''}`}>Learnings & Challenges</div>
            </Link>
            <Link href="#takeaways" passHref>
              <div onClick={(e) => handleScroll(e, 'takeaways')}
              className={`nav_link ${activeSection === 'takeaways' ? 'active' : ''}`}>Key Takeaways</div>
            </Link>
          </div>

        </div>




        <div className="items-left body_width grid gap-24 mt-48">




        {/* ---------- Title here ---------- */}


        <div className="flex flex-col justify-center items-center w-full">
            <h4 className="project_intro_text" style={{fontWeight:"300", textAlign:"center"}}>
              Analyzing the customer experience (CX) of Dubai International Airport, exploring its current standing, future possibilities, and emerging trends.
            </h4>
            <h1 className="project_intro_heading">
              <Image
              src={"/star.svg"}
              alt="Star image"
              width={32}
              height={32}
              className="rotating-star"
              />
              Dubai Airport Guest experience 
              <Image
              src={"/star.svg"}
              alt="Star image"
              width={32}
              height={32}
              className="rotating-star"
              />
            </h1>
        </div>
        </div>


        {/* ---------- Image ---------- */}
        <div className="flex justify-center items-center w-full relative -z-10">
        <Image
        src={"/projects/dxb-airport-research/banner.jpg"}
        sizes="100vw"
        width={100}
        height={100}
        alt="how might we questions"
        className="w-full"
        />
        </div>





        <div className="items-left body_width grid">

        {/* ---------- Objective ---------- */}


        <div id="story" className='content_grid_two w-full pt-24 gap-24' data-section>
        <div className="md:w-[70%] w-full"></div>
          <div className="flex flex-col gap-24">
            <div>
                <ArrowHeading heading = "Story worth talking about"/>
                <div className="md:w-[80%] w-full">
                Engaging in the Request for Proposal (RFP) process was exhilarating. Working with my exceptional team was an absolute pleasure. 
                &nbsp;<b>Challenges like creating a digital service map and contributing to the service blueprint fostered personal growth</b>. User interviews 
                provided invaluable insights despite the tight timeline.
                <br />
                <br />
                <b>I also contributed by conducting UX heuristics to evaluate online application and website direct services</b>. This analysis uncovered 
                usability issues that guided our recommendations.
                </div>
            </div>

                <div>
                    <ArrowHeading heading = "Timeline"/>
                    <div>
                    Started: 22 November 2023 
                    <br />
                    Duration: 4 weeks
                    </div>
                </div>
                <div>
                    <ArrowHeading heading = "Panel Size" number = "4"/>
                      <div className="flex flex-wrap gap-8" style={{width:"80%"}}>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12'>
                            <Image src={"/ashish_sharma.png"} width={32} height={32} alt={"Ashish Sharma Profile picture"} className='object-cover w-full h-full'/>
                          </div>
                          <div>
                            <h3>Ashish Sharma</h3>
                            <p className='text-base -mt-2'>CX and Heuristics</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Niharika</h3>
                            <p className='text-base -mt-2'>Research and CX</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Shweta</h3>
                            <p className='text-base -mt-2'>Trends & Use cases</p>
                          </div>
                        </div>

                        <div className='flex gap-4'>
                          <div className='w-12 h-12 bg-slate-200 text-white font-semibold text-xl content-center text-center'>
                            👥
                          </div>
                          <div>
                            <h3>Mahesh</h3>
                            <p className='text-base -mt-2'>Future of Airport</p>
                          </div>
                        </div>
                      </div>

                </div>
            </div>
            
        </div>






        {/* ---------- Research Approach ---------- */}


        <div id="research" className='content_grid_two gap-24 w-full pt-24' data-section>
          <div className="md:w-[70%] w-full">
            <ArrowHeading heading = "Research Approach" arrow={true} buttonName="View More" buttonHref="https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&t=SaIecvX0yD7wvp7I-1"/>
            <div className='grid grid-cols-1 grid-rows-2 gap-x-1 justify-between gap-y-2'>
            <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Exploring Guest Experience
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Digital Services Map
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      User Interviews
                    </h4>
                </div>
                <div className="description_tab">
                    <h4 style={{fontWeight: "350"}}>
                      Heuristics Analysis of Digital Services
                    </h4>
                </div>
            </div>
          </div>


          <div>
          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 1: Evolution of Digital Services Map] </b>
            <div>
            To start, <b>I focused on understanding the airport layout, its services, and the digital applications</b> aimed at enhancing user experience. 
            Once all of the available services were identified, I concentrated on <b>mapping only the digital services. </b>This helped pinpoint potential 
            gaps that could later be addressed once we identified key pain points.
            </div>
          </div>
          </div>


        </div>
        </div>



        <div className="w-full">
        <Carousel 
        className="w-full mt-24 justify-center items-center"
        setApi={setApi}>
        <CarouselContent className="flex">
          {
            researchApproachImageList.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                      <Image
                      src={image.src}
                      alt="how might we questions"
                      sizes="100vw"
                      width={1000}
                      height={1000}
                      className="w-full"
                      loading="eager"
                      />
              </CarouselItem>
            ))
          }

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        <div className=" mt-4 flex gap-4 justify-center items-center mx-auto">
          <div className="inline-flex gap-4 bg-[#1E1E1E] px-4 py-3">
          {
            researchApproachImageList.map((image, index) => (
              <div className={`w-[6px] h-[6px] ${index !== (currentImageForResearch-1) ? "bg-gray-500": "bg-white"}`} key={index}></div>
            ))
          }
          </div>
        </div>
        </div>




        <div id="research" className='content_grid_two gap-24 w-full pt-24'>
          <div className="md:w-[70%] w-full">
            {/* Blank */}
          </div>


          <div>
          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"1rem"}}>
            <b style={{fontWeight:"500"}}>[Approach 2: User Interviews]</b>
            <h5 className="italic text-gray-900">
            "Conducted User interview to get better understanding on services offered by DXB"
            </h5>
            <div>These interviews revealed:
              <br /><br />
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                      Many airport services require in-person interaction, emphasizing the need for a more comprehensive approach.
                    </h4>
                </div>
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                      The airport&apos;s layout, with its large structure, led to longer walks and unclear directions, making terminal 
                      changes challenging, especially for non-Emirates travelers.
                    </h4>
                </div>
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                      Enhancing the taxi booking service by making it accessible through the airport&apos;s website or app would improve user convenience.
                    </h4>
                </div>
            </div>
          </div>
          
          </div>

        </div>

        <div className="content_grid_two gap-24">

        <Image
        src={"/projects/dxb-airport-research/interview-1.jpg"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />

        <Image
        src={"/projects/dxb-airport-research/interview-2.jpg"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />

        </div>




        {/* ---------- Image ---------- */}


        <Image
        src={"/projects/dxb-airport-research/service-map-3.jpg"}
        alt="how might we questions"
        className="w-full mt-24"
        sizes="100vw"
        width={100}
        height={100}
        />






        {/* ---------- Design Approach ---------- */}


        <div id="design" className="content_grid_two gap-24 pt-24 body_width" data-section>

          <div style={{width:"70%"}}>
            {/* Blank */}
          </div>

          <div>

          <div className="md:w-[80%] w-full" style={{display:"grid", gap:"0.5rem"}}>
          <b>[Approach 3: Heuristics Analysis of Digital Services] </b>
            <div>
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                    The airport&apos;s website primarily focused on providing direct airport services but lacked integration with 
                    private service providers, resulting in an incomplete end-to-end user experience.
                    </h4>
                </div>
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                    Benchmarking against leading airports like Changi, Heathrow, and JFK revealed gaps in customer experience (CX) design.
                    </h4>
                </div>
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                    Heuristic analysis showed that while the website included promising features, it fell short in meeting key usability standards compared to competitors.
                    </h4>
                </div>
                <div className="description_tab2">
                    <h4 style={{fontWeight: "350"}}>
                    Critical tasks for users were often overly complex, indicating missed opportunities to simplify workflows and enhance efficiency.
                    </h4>
                </div>
            </div>
            {/* <div>
            The airport&apos;s website was the primary platform for accessing direct airport services, while services provided by private companies were 
            evaluated separately. This allowed us to compare the customer experience (CX) with leading airports worldwide, such as Changi, Heathrow, and JFK.
            <br /><br />
            Compared to these benchmarks, the website&apos;s experience fell short. While there were promising features, the platform often missed opportunities 
            to simplify critical tasks for users.
            </div> */}
          </div>

          </div>

        </div>



        
        <div className="w-full">
        <Carousel 
        className="w-full mt-24 justify-center items-center"
        setApi={setApi}>
        <CarouselContent className="flex">
          {
            heuristicsImageList.map((image, index) => (
              <CarouselItem key={index} className="w-full">
                      <Image
                      src={image.src}
                      alt="how might we questions"
                      sizes="100vw"
                      width={1000}
                      height={1000}
                      className="w-full"
                      loading="eager"
                      />
              </CarouselItem>
            ))
          }

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        <div className=" mt-4 flex gap-4 justify-center items-center mx-auto">
          <div className="inline-flex gap-4 bg-[#1E1E1E] px-4 py-3">
          {
            heuristicsImageList.map((image, index) => (
              <div className={`w-[6px] h-[6px] ${index !== (currentImageForResearch-1) ? "bg-gray-500": "bg-white"}`} key={index}></div>
            ))
          }
          </div>
        </div>
        </div>





        {/* ---------- Final thoughts & conclusion ---------- */}


        <div id="takeaways" className='content_grid_two gap-24 body_width pt-24 mb-24' data-section>
        
              <ArrowHeading heading = "Key Takeaways" arrow={true}/>
              <div className="grid w-[80%]">
                <h5 className="italic text-gray-900">
                "Evolving Through Digital Service Mapping"
                </h5>
                Creating a digital service map was a transformative experience. It taught me how to identify and represent both existing and potential 
                digital services comprehensively. Watching the map evolve during execution reinforced the importance of adaptability in designing dynamic solutions.

                <br /><br />

                <h5 className="italic text-gray-900">
                "Innovating as a UX Researcher"
                </h5>
                This project also enhanced my skills as a UX researcher, pushing me to innovate beyond familiar heuristic analysis by incorporating expressive techniques 
                like emojis and actionable recommendations. Competitor analysis deepened my understanding of benchmarking website experiences effectively.
              </div>
        </div>



        {/* ---------- Footer ---------- */}

        <Footer/>
    </main>
    )
}