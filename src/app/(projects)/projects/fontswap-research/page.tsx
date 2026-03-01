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
  { label: "Timeline", value: "June 2023 - Ongoing" },
  { label: "Platform", value: "Figma Plugin" },
  { label: "Panel Size", value: "4 people" },
  { label: "Core Goal", value: "Replace font styles in 3 clicks" },
];

const TEAM = [
  { name: "Ashish Sharma", role: "UX Designer + Developer", badge: "AS" },
  { name: "Design Colleagues", role: "Product Testing", badge: "DC" },
];

const RESEARCH_HIGHLIGHTS = [
  "Brainstorming Ideas",
  "Persona & User Journey",
  "Competitor Analysis",
  "Heuristics Analysis",
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
      "How to get started with the design while also making sure that we don't start from scratch and save initial time?",
    solution:
      "Applied Jacob's law of similarity by keeping the plugin design close to a popular reference in the font replacement category so the experience felt familiar from the start.",
  },
  {
    problem:
      "What method can be used to make sure that we keep the steps minimal while also making the user focus on one task at a time?",
    solution:
      "The plugin presents one task at a time, starting by populating fonts from a selected node and letting the user choose what to change before exposing the next decision.",
  },
  {
    problem:
      "It takes about 1-2 seconds for the plugin to load all font styles even on an average data speed. How can we optimize the user flow so that the user doesn't have to wait for the time being?",
    solution:
      "Pre-loaded matching font styles so the process stays intuitive and quick before the user makes the first decision.",
  },
  {
    problem:
      "The 404 screen is usually a blank screen with font not found. How can we make it helpful to users?",
    solution:
      "Made sure the plugin provides a usable fallback at every stage, including a direct Google search link pre-filled with the missing font name.",
  },
];

const LEARNING_TWO = [
  {
    problem:
      "How can we solve cases where the font doesn't have a matching style or offers limited style variation, reducing 404 cases?",
    solution:
      "Built a font suggestion system to recommend closest alternatives, such as Roman for Regular or Bold for Semibold, and tagged them as Pro Suggestions.",
  },
  {
    problem:
      "As the plugin users are growing, how can we find the geographical impact the plugin has made, even though Figma doesn't directly allow tracking usage?",
    solution:
      "Introduced a sign-in link for pro suggestions, which helped reveal the geographical location of users.",
  },
  {
    problem:
      "What placement is better for a sign-in method so it stays visible while the plugin loads, and how can it support future monetization?",
    solution:
      "Kept the sign-in link on the first fold, visible through the process but separate from the main task, styled as a tertiary action so it reads as status rather than primary CTA.",
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

export default function FontSwapResearch() {
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
              A Figma Plugin addressing to replace all font styles with 3 clicks.
            </p>
            <h1 className="project_intro_heading token-project-title !mt-0 !mb-0 !gap-4 text-black text-center whitespace-normal">
              <Image
                src="/star.svg"
                alt="Star image"
                width={28}
                height={28}
                className="rotating-star"
              />
              Font Swap
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
            src="/projects/fontswap/banner.png"
            sizes="(max-width: 1280px) 92vw, 75vw"
            width={100}
            height={100}
            alt="Font Swap banner"
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
                The idea sparked when{" "}
                <span className="token-weight-medium">
                  my team and I were struggling to test various fonts
                </span>{" "}
                while crafting a pitch for a client. This challenge led to the
                realization that{" "}
                <span className="token-weight-medium">
                  we needed a faster, more aesthetic solution
                </span>{" "}
                for testing and selecting fonts. From that, I created a tool to
                simplify the process, allowing us to quickly experiment with
                multiple fonts and pick the one that fits perfectly.
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
                    We were initially using a plugin called Font Replacer, and
                    Easy Font Swap which didn&apos;t fully meet our needs. To
                    better understand the landscape, I conducted a competitor
                    analysis, focusing on features, interface designs,
                    documentation, and unique selling points.
                  </p>
                </div>

                <div>
                  <p className="token-body-emphasis text-black">[Approach 2]</p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    I leveraged feedback from the comment sections of these
                    plugins to identify what users needed, which informed the
                    creation of a new solution. This data helped shape a
                    well-defined persona.
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    Additionally, after conducting 3 user interviews with my
                    team, the path forward became clearer, leading to the
                    development of a detailed user journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">Research file</p>
              <div className="mt-4">
                <FigmaLink label="Font Swap Research" href={FIGMA_LINKS.research} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/fontswap/research.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Research board"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/fontswap/heuristics.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Heuristics"
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
                Facing a creative block, I initially mirrored the frame
                structure of Font Replacer to get started. Using MoSCoW
                prioritization and after 9 iterations, I was able to refine the
                process, ensuring that accessibility and replace fonts in three
                simple steps.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">[Approach 2]</p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                Drawing from The Sprint Book, I learned the importance of
                testing early to avoid delays. With that in mind, I created a
                prototype and conducted usability testing with three of my
                teammates to gather immediate feedback.
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                The feedback resulted in Release 4.1, which improved visual cues
                for font selection, visual identification for missing fonts, and
                status updates on the progress bar when font switching was
                delayed.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">Design file</p>
              <div className="mt-4">
                <FigmaLink label="Font Swap Design" href={FIGMA_LINKS.design} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/fontswap/moscow.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="MoSCoW prioritization"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/fontswap/usability_testing.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Usability testing"
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

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/fontswap/uiframes.jpg"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={1000}
                height={1000}
                alt="UI frames"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/fontswap/anatomy.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Plugin anatomy"
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

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/fontswap/userbase.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="User base"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/fontswap/feedback.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={100}
                height={100}
                alt="Feedback"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
          </div>
        </CaseStudySectionFrame>

        <CaseStudySectionFrame id="takeaways" number="05" title="Key Takeaways">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <p className="token-body-emphasis text-black">
                Reflection on the outcomes
              </p>
              <p className="token-body mt-4 text-[#1A1A1A]">
                New challenges continue to arise, but identifying them is key.
                For instance, the current issue is users are facing a problem
                with &quot;text-style&quot; becoming detached when changing the
                font. To understand the issue better, I&apos;ve sent a survey to
                actual users via email. Once I receive satisfactory feedback, I
                will start working on the solution.
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
