"use client";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import Footer from "@/app/components/ui/footer";
import ArrowHeading from "@/app/components/ui/arrowheading";
import SectionContainer from "@/app/components/ui/section-container";
import {
  CaseStudyHeroImage,
  CaseStudyLightbox,
  CaseStudyOverviewCard,
  CaseStudySectionFrame,
  CaseStudyStickyNav,
  ZoomableCaseImage,
  useCaseStudyActiveSection,
  type LightboxImage,
} from "@/app/components/ui/case-study-primitives";

const NAV_ITEMS = [
  { id: "story", label: "Story" },
  { id: "research", label: "Research Approach" },
  { id: "design", label: "Design Findings" },
  { id: "takeaways", label: "Key Takeaways" },
];

const OVERVIEW = [
  { label: "Started", value: "22 November 2023" },
  { label: "Duration", value: "4 weeks" },
  { label: "Panel Size", value: "4 people" },
  { label: "Focus", value: "Airport CX and digital services" },
];

const TEAM = [
  { name: "Ashish Sharma", role: "CX and Heuristics", badge: "AS" },
  { name: "Niharika", role: "Research and CX", badge: "NH" },
  { name: "Shweta", role: "Trends & Use cases", badge: "SW" },
  { name: "Mahesh", role: "Future of Airport", badge: "MH" },
];

const RESEARCH_HIGHLIGHTS = [
  "Exploring Guest Experience",
  "Digital Services Map",
  "User Interviews",
  "Heuristics Analysis of Digital Services",
];

const HEURISTIC_FINDINGS = [
  "The airport's website primarily focused on providing direct airport services but lacked integration with private service providers, resulting in an incomplete end-to-end user experience.",
  "Benchmarking against leading airports like Changi, Heathrow, and JFK revealed gaps in customer experience (CX) design.",
  "Heuristic analysis showed that while the website included promising features, it fell short in meeting key usability standards compared to competitors.",
  "Critical tasks for users were often overly complex, indicating missed opportunities to simplify workflows and enhance efficiency.",
];

export default function DxbAirportResearch() {
  const { activeSection } = useCaseStudyActiveSection("story");
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);

  return (
    <main id="top" className="flex min-h-screen flex-col items-center bg-white">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2N9F9N8KHK');
        `}
      </Script>

      <CaseStudyStickyNav items={NAV_ITEMS} activeSection={activeSection} />

      <SectionContainer
        className="pt-16 md:pt-24"
        innerClassName="items-center gap-12 md:gap-16"
      >
        <section className="w-full flex flex-col items-center gap-10">
          <div className="w-full max-w-[760px] flex flex-col items-center gap-5">
            <p className="token-label text-[#0069E5] uppercase tracking-[0.18em] text-center">
              CX research case study
            </p>
            <p className="project_intro_text token-body text-black !w-full max-w-[620px]">
              Analyzing the customer experience (CX) of Dubai International
              Airport, exploring its current standing, future possibilities, and
              emerging trends.
            </p>
            <h1 className="project_intro_heading token-project-title !mt-0 !mb-0 !gap-4 text-black text-center whitespace-normal">
              <Image
                src="/star.svg"
                alt="Star image"
                width={28}
                height={28}
                className="rotating-star"
              />
              Dubai Airport Guest Experience
              <Image
                src="/star.svg"
                alt="Star image"
                width={28}
                height={28}
                className="rotating-star"
              />
            </h1>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
            {OVERVIEW.map((item) => (
              <CaseStudyOverviewCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          <CaseStudyHeroImage
            src="/projects/dxb-airport-research/banner.jpg"
            sizes="(max-width: 1280px) 92vw, 75vw"
            width={100}
            height={100}
            alt="Dubai Airport guest experience banner"
            className="object-cover"
            priority
          />
        </section>
      </SectionContainer>

      <SectionContainer
        className="pt-10 md:pt-16"
        innerClassName="items-start gap-20 md:gap-28"
      >
        <CaseStudySectionFrame id="story" number="01" title="Story worth talking about">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <p className="token-body text-[#1A1A1A]">
                Engaging in the Request for Proposal (RFP) process was
                exhilarating. Working with my exceptional team was an absolute
                pleasure. Challenges like creating a digital service map and
                contributing to the service blueprint fostered personal growth.
                User interviews provided invaluable insights despite the tight
                timeline.
              </p>
              <p className="token-body mt-4 text-[#1A1A1A]">
                I also contributed by conducting UX heuristics to evaluate
                online application and website direct services. This analysis
                uncovered usability issues that guided our recommendations.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-6">
              <ArrowHeading
                heading="Panel Size"
                number="4"
                headingClassName="token-heading-md"
              />
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {TEAM.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-3 border-b border-[#E7E7E7] pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EDEDED]">
                      <span className="token-label text-[#232122]">{member.badge}</span>
                    </div>
                    <div>
                      <p className="token-body-emphasis text-black">{member.name}</p>
                      <p className="token-caption-md text-[#5E5E5E]">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="research" number="02" title="Research Approach">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <div className="grid gap-2 md:grid-cols-2">
                {RESEARCH_HIGHLIGHTS.map((item) => (
                  <div key={item} className="description_tab">
                    <p className="token-body text-black">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-6">
                <div>
                  <p className="token-body-emphasis text-black">
                    [Approach 1: Evolution of Digital Services Map]
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    To start, I focused on understanding the airport layout, its
                    services, and the digital applications aimed at enhancing
                    user experience. Once all available services were identified,
                    I concentrated on mapping only the digital services.
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    This helped pinpoint potential gaps that could later be
                    addressed once we identified key pain points.
                  </p>
                </div>

                <div>
                  <p className="token-body-emphasis text-black">
                    [Approach 2: User Interviews]
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    Conducted user interview to get better understanding on
                    services offered by DXB.
                  </p>
                  <div className="mt-3 grid gap-2">
                    <div className="description_tab2">
                      <p className="token-body-sm text-black">
                        Many airport services require in-person interaction,
                        emphasizing the need for a more comprehensive approach.
                      </p>
                    </div>
                    <div className="description_tab2">
                      <p className="token-body-sm text-black">
                        The airport&apos;s layout led to longer walks and unclear
                        directions, making terminal changes challenging,
                        especially for non-Emirates travelers.
                      </p>
                    </div>
                    <div className="description_tab2">
                      <p className="token-body-sm text-black">
                        Making taxi booking accessible through the airport&apos;s
                        website or app would improve convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/service-map-1.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Service map 1"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/service-map-2.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Service map 2"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/interview-1.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Interview notes 1"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/interview-2.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Interview notes 2"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <ZoomableCaseImage
              src="/projects/dxb-airport-research/service-map-3.jpg"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={100}
              height={100}
              alt="Service map 3"
              className="object-cover"
              onOpen={setSelectedImage}
            />
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="design" number="03" title="Design Findings">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <p className="token-body-emphasis text-black">
                [Approach 3: Heuristics Analysis of Digital Services]
              </p>
              <div className="mt-4 grid gap-3">
                {HEURISTIC_FINDINGS.map((item) => (
                  <div key={item} className="description_tab2">
                    <p className="token-body-sm text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/heuristics-1.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Heuristics 1"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/heuristics-2.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Heuristics 2"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/heuristics-3.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Heuristics 3"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/dxb-airport-research/heuristics-4.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Heuristics 4"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="takeaways" number="04" title="Key Takeaways">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <p className="token-body-emphasis text-black">
                &quot;Evolving Through Digital Service Mapping&quot;
              </p>
              <p className="token-body mt-4 text-[#1A1A1A]">
                Creating a digital service map was a transformative experience.
                It taught me how to identify and represent both existing and
                potential digital services comprehensively. Watching the map
                evolve during execution reinforced the importance of
                adaptability in designing dynamic solutions.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-6 md:p-8">
              <p className="token-body-emphasis text-black">
                &quot;Innovating as a UX Researcher&quot;
              </p>
              <p className="token-body mt-4 text-[#1A1A1A]">
                This project also enhanced my skills as a UX researcher, pushing
                me to innovate beyond familiar heuristic analysis by
                incorporating expressive techniques like emojis and actionable
                recommendations. Competitor analysis deepened my understanding of
                benchmarking website experiences effectively.
              </p>
            </div>
          </div>
        </CaseStudySectionFrame>
      </SectionContainer>

      <div className="w-full mt-20">
        <Footer />
      </div>

      <CaseStudyLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
