"use client";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import ArrowHeading from "@/app/components/ui/arrowheading";
import Footer from "@/app/components/ui/footer";
import FigmaLink from "@/app/components/ui/figma-link";
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

const FIGMA_LINKS = {
  research:
    "https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=654-7&t=SaIecvX0yD7wvp7I-1",
  design:
    "https://www.figma.com/design/7Mis5cfCTNKKmJeyesqT9C/Button-Smith-Plugin?node-id=656-195&t=SaIecvX0yD7wvp7I-1",
};

const OVERVIEW = [
  { label: "Timeline", value: "May 2024 - Ongoing" },
  { label: "Platform", value: "Figma Plugin" },
  { label: "Panel Size", value: "6 people" },
  { label: "Focus", value: "Documented button-state generation" },
];

const TEAM = [
  { name: "Ashish Sharma", role: "UX Designer + Developer", badge: "AS" },
  { name: "Lakshya Raj", role: "Ideation", badge: "LR" },
  { name: "Design Colleagues", role: "Product Testing", badge: "DC" },
];

const RESEARCH_HIGHLIGHTS = [
  "Competitor Analysis",
  "Heuristics Analysis",
  "How might we questions",
];

const DESIGN_HIGHLIGHTS = [
  "MoSCoW Prioritization",
  "UI WorkFlow & Release",
  "Usability Testing",
  "UI Documentation",
];

const LEARNING_ONE = [
  {
    problem:
      "With limited feedback available for competitive plugins what could be another way to figure out our user needs?",
    solution:
      "The main challenge was limited user feedback, which was addressed through interviews and usability testing.",
  },
  {
    problem:
      "How can we make sure the user doesn't get overwhelmed in the process of creating a component set? What solutions can help?",
    solution:
      "User interviews revealed the need for basic features like font search, border radius, and padding, as seen in competitor heuristics. A preview section was also confirmed to be beneficial before generating the button set.",
  },
  {
    problem:
      "Should the preview section be the prominent part of the plugin? if so how can we implement it in such a way that user benefits from it the most?",
    solution:
      "The preview section evolved from showing just 3 button states to including secondary and tertiary variations. It became integral to the plugin, addressing both user needs and marketing by showcasing the generated output in the first fold.",
  },
];

const LEARNING_TWO = [
  {
    problem:
      "Can we use only the primary button to create a set of button states? If so, how can we implement an algorithm making sure it helps during development as well?",
    solution:
      "The decision to pick just the primary button was initiated to keep the design minimal, reduce decision making efforts, and create an algorithm based on color hierarchy while altering saturation and brightness of the primary hue.",
  },
  {
    problem:
      "Is there a need for editing the plugin? What components can be the most useful for a user when edits are made within the plugin? What hierarchy could be the best heuristically?",
    solution:
      "By usability testing and trial-and-error, the component hierarchy was tested and refined around what users need most during edits.",
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

export default function ButtonSmithResearch() {
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
              Figma plugin case study
            </p>
            <p className="project_intro_text token-body text-black !w-full max-w-[560px]">
              One Figma Plugin to generates and documents all your button states.
            </p>
            <h1 className="project_intro_heading token-project-title !mt-0 !mb-0 !gap-4 text-black text-center whitespace-normal">
              <Image
                src="/star.svg"
                alt="Star image"
                width={28}
                height={28}
                className="rotating-star"
              />
              Button Smith
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
            src="/projects/buttonsmith/banner.png"
            sizes="(max-width: 1280px) 92vw, 75vw"
            width={500}
            height={500}
            alt="Button Smith banner"
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
                To enhance design efficiency by creating a customised and fully{" "}
                <span className="token-weight-medium">documented</span> component
                set with <span className="token-weight-medium">least decision making efforts</span> which can be reused and updated as per user&apos;s needs.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-6">
              <ArrowHeading
                heading="Panel Size"
                number="6"
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
              <div className="grid gap-2">
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
                    My research approach placed a strong emphasis in
                    understanding the existing platforms and how they are solving
                    for creating a component set. it was discovered that they had
                    very little feedback in case of both positive and negative
                    aspects.
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    Even though their wider audience was happy it was identified
                    that creating something that involves the best functionality
                    of all three components could solve the objective that was
                    initially developed.
                  </p>
                </div>

                <div>
                  <p className="token-body-emphasis text-black">[Approach 2]</p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    Upon conducting heuristics it was discovered that there could
                    be many things that could be used for creating a plugin that
                    can reduce human efforts like, a preview option in Design
                    system generator, styles to explore with a certain theme. and
                    finally figuring out how to document it.
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    It was discovered that other plugins were just creating a
                    component set but not generating document in order to kick
                    start a project.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">Research file</p>
              <div className="mt-4">
                <FigmaLink label="Button Smith Research" href={FIGMA_LINKS.research} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/buttonsmith/research.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Research board"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/buttonsmith/competitor_research.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Competitor research"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/buttonsmith/heuristic_analysis.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Heuristic analysis"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/buttonsmith/hmw.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="How might we"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
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
                After understanding the how might we questions it became clear
                to distinguish the features that might be most required vs least
                required when creating the plugin design.
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                This also later helped in creating the visual hierarchy of the
                components displayed when creating the plugin.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">[Approach 2]</p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                The decision work as per trial and error method was taken as we
                did not have much data in terms of how the users would feel when
                using the newly developed iteration.
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                Hence usability test was conducted with 3 participants in order
                to understand if the target was met. This also needed the design
                to be developed asap.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">Design file</p>
              <div className="mt-4">
                <FigmaLink label="Button Smith Design" href={FIGMA_LINKS.design} />
              </div>
            </div>

            <ZoomableCaseImage
              src="/projects/buttonsmith/moscow.png"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={100}
              height={100}
              alt="MoSCoW prioritization"
              className="object-cover"
              onOpen={setSelectedImage}
            />
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame
          id="learnings"
          number="04"
          title="Learnings & Challenges"
        >
          <div className="grid gap-8">
            <div>
              <ArrowHeading
                heading="Challenges & learnings (1)"
                headingClassName="token-heading-md"
              />
              <div className="mt-4 grid gap-4">
                {LEARNING_ONE.map((item, index) => (
                  <ChallengeCard
                    key={item.problem}
                    index={index}
                    problem={item.problem}
                    solution={item.solution}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <ZoomableCaseImage
                src="/projects/buttonsmith/uiframes.png"
                sizes="(max-width: 1280px) 92vw, 24vw"
                width={100}
                height={100}
                alt="UI frames"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/buttonsmith/colorequation.png"
                sizes="(max-width: 1280px) 92vw, 24vw"
                width={100}
                height={100}
                alt="Color equation"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/buttonsmith/anatomy.png"
                sizes="(max-width: 1280px) 92vw, 24vw"
                width={100}
                height={100}
                alt="Button anatomy"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <div>
              <ArrowHeading
                heading="Challenges & learnings (2)"
                headingClassName="token-heading-md"
              />
              <div className="mt-4 grid gap-4">
                {LEARNING_TWO.map((item, index) => (
                  <ChallengeCard
                    key={item.problem}
                    index={index}
                    problem={item.problem}
                    solution={item.solution}
                  />
                ))}
              </div>
            </div>

            <ZoomableCaseImage
              src="/projects/buttonsmith/uicollective.png"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={100}
              height={100}
              alt="UI collective"
              className="object-cover"
              onOpen={setSelectedImage}
            />
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="takeaways" number="05" title="Key Takeaways">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <p className="token-body-emphasis text-black">
                Reflection on the outcomes
              </p>
              <p className="token-body mt-4 text-[#1A1A1A]">
                New challenges do still arrive, but identifying them is a key.
                For instance, right now bringing new button designs to the
                plugin is what I&apos;m trying to pull off in such a way that I can
                also develop code for it as well. Next is finding time to test
                the design one more time.
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
