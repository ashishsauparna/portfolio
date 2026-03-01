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
  { id: "design", label: "Design Approach" },
  { id: "learnings", label: "Learnings & Challenges" },
  { id: "takeaways", label: "Key Takeaways" },
];

const OVERVIEW = [
  { label: "Timeline", value: "1 week and 3 days" },
  { label: "Regions", value: "Italy, Spain, and France" },
  { label: "Panel Size", value: "4 people" },
  { label: "Output", value: "High-fidelity wireframe prototype" },
];

const TEAM = [
  { name: "Ashish", role: "UX Designer", badge: "AS" },
  { name: "Mahesh", role: "UX Designer", badge: "MH" },
  { name: "Shweta", role: "UX Designer", badge: "SW" },
  { name: "Indranil", role: "Project Manager", badge: "IN" },
];

const RESEARCH_HIGHLIGHTS = [
  "Information Architecture",
  "Organizing syncing calls",
  "Opportunity mapping",
  "Taking feedbacks",
];

const DESIGN_HIGHLIGHTS = [
  "Exploring Artifacts",
  "Hi-fi Wireframes",
  "Prototyping",
  "Usability testing",
];

const CHALLENGES = [
  {
    problem:
      "Organize the questionnaires because we needed them to create IA for all three countries within 3 days so we could clear doubts and better understand the overall needs.",
    solution:
      "Restructured the questionnaires to ensure a logical flow, addressing multiple similar questions issues. We clarified doubts through Teams chat and presented our IA during the call, incorporating feedback. Afterward, we shared the Figma file, updated the IA flow with comments, and ensured we were ready to proceed with the UI design by Monday.",
  },
  {
    problem:
      "Overcome location-based restrictions and unable to get VPN access on time so we can access insurance websites screens for interface research ideas.",
    solution:
      "Collaborated with all three European teams to source website screenshots, allowing us to continue the design process without direct access to the websites. This solution helped us gather necessary data and keep the project moving forward despite access limitations due to location restrictions.",
  },
  {
    problem:
      "Delivering the final wireframe prototype that also needs to be language tested.",
    solution:
      "Managed urgent verification calls and gathered feedback under tight deadlines while ensuring accurate translations and adjusting phrases to commonly used terms for clarity.",
  },
  {
    problem:
      "Understanding industry standards so that we know what is the best possible UI solution in the current market.",
    solution:
      "Analyzed UI interaction styles from competitors and newly introduced insurance companies in India as well as other platforms to inform design decisions in the absence of direct website access.",
  },
];

function ChallengeCard({
  index,
  problem,
  solution,
}: {
  index: number;
  problem: string;
  solution: string;
}) {
  return (
    <article className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5 md:p-6">
      <p className="token-label text-[#0069E5] uppercase">Problem {index + 1}</p>
      <p className="token-project-problem-title mt-3 text-[#232122]">{problem}</p>
      <p className="token-body mt-4 text-[#1A1A1A]">
        <span className="token-weight-medium">Solution:</span> {solution}
      </p>
    </article>
  );
}

export default function AdmiralInsuranceCaseStudy() {
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
          <div className="w-full max-w-[720px] flex flex-col items-center gap-5">
            <p className="token-label text-[#0069E5] uppercase tracking-[0.18em] text-center">
              Insurance case study
            </p>
            <p className="project_intro_text token-body text-black !w-full max-w-[620px]">
              Design a mobile-friendly auto insurance registration site for
              Admiral Insurance, ensuring a seamless and user-friendly experience
              for customers accessing it via mobile devices.
            </p>
            <h1 className="project_intro_heading token-project-title !mt-0 !mb-0 !gap-4 text-black text-center whitespace-normal">
              <Image
                src="/star.svg"
                alt="Star image"
                width={28}
                height={28}
                className="rotating-star"
              />
              Admiral Insurance
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
            src="/projects/admiralinsurance/banner.png"
            sizes="(max-width: 1280px) 92vw, 75vw"
            width={1920}
            height={1080}
            alt="Admiral Insurance banner"
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
                With a goal to create a mobile-friendly auto insurance site for
                Admiral Insurance, we overcame location restrictions by
                collaborating with UX teams in Spain, Italy, and France. Despite
                tight deadlines and holiday delays, we delivered a high-fidelity
                wireframe prototype, demonstrating adaptability and teamwork.
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
                  <p className="token-body-emphasis text-black">[Approach 1]</p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    We explored the existing questionnaire that is followed by
                    the number of questions for all three countries. We took 3
                    days to get them organize in such a way that all the
                    questions are in sequence and any cascading situations are
                    minimized while also maintaining stakeholders/insurance
                    companies requirements.
                  </p>
                </div>

                <div>
                  <p className="token-body-emphasis text-black">[Approach 2]</p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    Since the most of staff was going on summer vacation being
                    all in France. We had to conduct the verification check on
                    call with all clients before weekend. which took a lot of
                    effort in organizing calls and making sure we get feedback on
                    some which was later received on Monday next week for france.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/admiralinsurance/ia.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={500}
                height={500}
                alt="Information architecture"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/admiralinsurance/teams_call.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={500}
                height={500}
                alt="Research sync calls"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <ZoomableCaseImage
              src="/projects/admiralinsurance/feedbacks.jpg"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={500}
              height={500}
              alt="Feedback collection"
              className="object-cover"
              onOpen={setSelectedImage}
            />
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="design" number="03" title="Design Approach">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <div className="grid gap-2 md:grid-cols-2">
                {DESIGN_HIGHLIGHTS.map((item) => (
                  <div key={item} className="description_tab">
                    <p className="token-body text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">[Approach 1]</p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                Since we had an issue to access the insurance websites due to
                location. We did not have access to VPN as well and aranging one
                could have taken time. Hence we took help from the support
                available from Europe teams and they helped us arangind
                screenshots of the websites.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">[Approach 2]</p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                We later on started looking at competitors and their website how
                they are handling the long form questions in segments and hence
                created a mood board that included Number plates styles used in
                Italy, Spain and France. We also explored with multiple stepper
                interface designs and hence started designing with the Wireframes
                UI.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/admiralinsurance/exploration.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={500}
                height={500}
                alt="Exploration"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/admiralinsurance/moodboard.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={500}
                height={500}
                alt="Moodboard"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <ZoomableCaseImage
              src="/projects/admiralinsurance/design_language.jpg"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={500}
              height={500}
              alt="Design language"
              className="object-cover"
              onOpen={setSelectedImage}
            />

            <div className="grid gap-6 md:grid-cols-3">
              <ZoomableCaseImage
                src="/projects/admiralinsurance/ui_1.jpg"
                sizes="(max-width: 1280px) 92vw, 24vw"
                width={500}
                height={500}
                alt="UI screen 1"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/admiralinsurance/ui_2.jpg"
                sizes="(max-width: 1280px) 92vw, 24vw"
                width={500}
                height={500}
                alt="UI screen 2"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/admiralinsurance/ui_3.jpg"
                sizes="(max-width: 1280px) 92vw, 24vw"
                width={500}
                height={500}
                alt="UI screen 3"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame
          id="learnings"
          number="04"
          title="Learnings & Challenges"
        >
          <div className="grid gap-8">
            <div className="grid gap-4">
              {CHALLENGES.map((item, index) => (
                <ChallengeCard
                  key={item.problem}
                  index={index}
                  problem={item.problem}
                  solution={item.solution}
                />
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/admiralinsurance/wireframes.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={500}
                height={500}
                alt="Wireframes"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/admiralinsurance/design_library.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={500}
                height={500}
                alt="Design library"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="takeaways" number="05" title="Key Takeaways">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <p className="token-body text-[#1A1A1A]">
                Collaborative wireframe planning aligned the team, minimizing
                rework and boosting efficiency. We managed tight deadlines
                across three scenarios, demonstrating strong time management and
                problem-solving skills. Simplifying complex data into a clear IA,
                we built accessible, user-friendly wireframes and delivered an
                interactive hi-fidelity prototype for early stakeholder feedback
                and validation.
              </p>
            </div>

            <ZoomableCaseImage
              src="/projects/admiralinsurance/testimonial.jpg"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={500}
              height={500}
              alt="Client testimonial"
              className="object-cover"
              onOpen={setSelectedImage}
            />
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
