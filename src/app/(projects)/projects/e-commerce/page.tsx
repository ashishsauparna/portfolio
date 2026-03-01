"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { X } from "@phosphor-icons/react";
import Footer from "@/app/components/ui/footer";
import FigmaLink from "@/app/components/ui/figma-link";
import ArrowHeading from "@/app/components/ui/arrowheading";
import SectionContainer from "@/app/components/ui/section-container";

const FIGMA_LINKS = {
  pitch: "https://www.figma.com/design/",
  styleGuide: "https://www.figma.com/design/",
  phase1: "https://www.figma.com/design/",
  plp: "https://www.figma.com/design/",
  pdp: "https://www.figma.com/design/",
};

const NAV_ITEMS = [
  { id: "story", label: "Story" },
  { id: "research", label: "Research Approach" },
  { id: "design", label: "Design Approach" },
  { id: "learnings", label: "Learnings" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

const STORY_PARAGRAPHS = [
  "Trane Supply was looking for a company pitch that could help them create the best experience in commerce while also retaining there existing flow.",
  "We worked day and night to create to build a working prototype and sell the best in industry experience which included, and improved PLP and PDP to show product availability, ability to compare products, a 3d render visual of part images, Ability to create joblist, saving cart, many more.",
  "And they loved it. and we started working together.",
];

const TIMELINE = [
  { label: "Pitch", value: "Feb 2025" },
  { label: "Phase 1", value: "Apr 2025 - Aug 2025" },
  { label: "Phase 2", value: "Sep 2025 - Feb 2026" },
  { label: "Phase 3", value: "In talks" },
];

const TEAM = [
  {
    name: "Ashish Sharma",
    role: "UX Designer",
    badge: "AS",
  },
  {
    name: "Scrum Master",
    role: "1 Member",
    badge: "SM",
  },
  {
    name: "Jayant Tripathi",
    role: "Senior UX Designer",
    badge: "JT",
  },
  {
    name: "Product Team",
    role: "3 Members",
    badge: "PT",
  },
  {
    name: "Taxonomy Team",
    role: "4 Members",
    badge: "TT",
  },
];

const RESEARCH_HIGHLIGHTS = [
  "Competitive UX Audit",
  "Rapid UX Synthesis & Prototyping",
  "Collaboration & Delivery",
];

const RESEARCH_TABLE_ROWS = [
  {
    feature: "In-stock on PLP & PDP",
    inspiredBy: "Parts Town",
    userBenefit: "Instant availability clarity",
  },
  {
    feature: "PDP: Recommendations + Reviews",
    inspiredBy: "Competitive audit",
    userBenefit: "Builds trust, aids decision-making",
  },
  {
    feature: "Training banner on PDP",
    inspiredBy: "Industry best practice",
    userBenefit: "Upskills users, reduces support load",
  },
  {
    feature: "Mini cart + Bulk order flow",
    inspiredBy: "Pro e-commerce UX",
    userBenefit: "Faster multi-item purchases",
  },
  {
    feature: "Detailed cart line items",
    inspiredBy: "Transparency patterns",
    userBenefit: "Reduces errors, prevents abandonment",
  },
];

const DESIGN_HIGHLIGHTS = [
  "Foundational Style Guide",
  "Introduced UX Improvements",
  "Reviewed Dev handoff",
  "Ensured Multilayer Approval",
];

type Challenge = {
  problem: string;
  solution: string;
  links?: { label: string; href: string }[];
};

type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const PHASE_ONE_CHALLENGES: Challenge[] = [
  {
    problem: "Designing without an existing company-wide design system?",
    solution:
      "We got WIP client assets which included buttons, fonts, colors and icons. To get started we needed a fundamental design system that took us 3 days to build over the given assets. We ensured consistency by adding required components like, header, input fields, grid system and defining typography. on the 4th day we connected with client and got dev and client approval to avoid mid-project rework.",
    links: [{ label: "Foundational Style Guide", href: FIGMA_LINKS.styleGuide }],
  },
  {
    problem:
      "How to enhance UX while keeping the existing process flows memorable for the user?",
    solution:
      "Since we got to know that only 3% of the traffic was utilising the features like saved cart, job list and stocking list. We prioritized visual polishes over structural changes in these pages, using client feedback loops to align without extending timelines.",
  },
  {
    problem:
      "How to manage cross-sprint dependencies when later pages relied on PLP/PDP decisions?",
    solution:
      "The PLP needed to have a new grid view to have more items in a one fold of screen. In order to make this work we realised the need for product availability, ability switch fulfilment store for the each item and adding item to cart, we worked two sprints ahead of devs, stretching Sprint 2 for PLP/PDP insights that informed Sprint 3's My Cart, leveraging buffers effectively.",
    links: [
      { label: "PLP Experience", href: FIGMA_LINKS.plp },
      { label: "PDP Experience", href: FIGMA_LINKS.pdp },
    ],
  },
  {
    problem:
      "How to capture complex HVAC-specific rules around inventory, quoting, and roles?",
    solution:
      "Ran short client calls with live Figma files. Noted stock rules, quote details, and permissions directly on screens and got sign-off before moving forward.",
  },
  {
    problem:
      "How to achieve contemporary UX within Salesforce Commerce Cloud constraints?",
    solution:
      "Opted for CSS-based micro-interactions over heavy JS. Put most effort into filters, mini-cart, and help sections while keeping dev work fast.",
  },
];

const PHASE_TWO_CHALLENGES: Challenge[] = [
  {
    problem: "How would split orders impact the end-to-end journey?",
    solution:
      "We mapped the split-order impact across PLP, PDP, Cart, Checkout, and Email notifications. Three fulfillment methods were introduced: Will Call (pickup), Direct Delivery (third-party), and Standard Delivery, with clear visual separation, pricing clarity, and fulfillment-specific messaging to avoid user confusion across touchpoints.",
  },
  {
    problem: "How do we design around third-party delivery limitations?",
    solution:
      "Curri delivery had strict constraints: 50-mile radius, limited vehicle options, no loading/unloading, and no hazard or dimension data. We designed guardrails and eligibility messaging, surfaced limitations early, and reduced failed selections by helping users understand when Direct Delivery was actually viable before committing.",
  },
  {
    problem:
      "How do we keep unit parts list expereince minimal yet informative at scale?",
    solution:
      "We redesigned the Unit Parts List to support 3D views, sub-assembly exploration, and superseded items, while respecting data-loading limitations. Progressive disclosure was used to balance performance with clarity, ensuring users could find the right part without overwhelming the interface.",
  },
  {
    problem: "How do we reduce friction in checkout without losing critical info?",
    solution:
      "The checkout was restructured into three clear sections, with pre-filled data, optional fields clearly marked, and strong visual focus on the payment step, reducing cognitive load and speeding up completion.",
  },
  {
    problem:
      "How can we introduce an app-like mobile experience within Salesforce Publisher's platform limitations?",
    solution:
      "Despite bottom-navigation constraints, we introduced a mobile-friendly category experience and app-optimized cart navigation. Key interactions were simplified to feel native while staying within Salesforce Publisher's development limits.",
  },
];

function SectionFrame({
  id,
  title,
  number,
  children,
}: {
  id: SectionId;
  title: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-section className="scroll-mt-32 w-full">
      <div className="grid w-full gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="token-label text-[#0069E5] uppercase">{number}</p>
          <div className="mt-4">
            <ArrowHeading
              heading={title}
              headingClassName="token-project-section-heading"
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function OverviewCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
      <p className="token-label text-[#0069E5] uppercase">{label}</p>
      <p className="token-body mt-2 text-black">{value}</p>
    </div>
  );
}

function ChallengeCard({
  index,
  challenge,
}: {
  index: number;
  challenge: Challenge;
}) {
  return (
    <article className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5 md:p-6">
      <p className="token-label text-[#0069E5] uppercase">Problem {index + 1}</p>
      <p className="token-project-problem-title mt-3 text-[#232122]">
        {challenge.problem}
      </p>
      <p className="token-body mt-4 text-[#1A1A1A]">
        <span className="token-weight-medium">Solution:</span> {challenge.solution}
      </p>
      {challenge.links ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {challenge.links.map((link) => (
            <FigmaLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

function ZoomableCaseImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
  onOpen,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  onOpen: (image: LightboxImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ src, alt, width, height })}
      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[8px] border border-[#E3E3E3] bg-white text-left"
      aria-label={`Open full view: ${alt}`}
    >
      <Image
        src={src}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        className={`w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02] group-hover:brightness-[0.98] ${className ?? ""}`}
        priority={priority}
      />
      <span className="pointer-events-none absolute right-3 top-3 rounded-[4px] border border-white/80 bg-white/90 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#232122] opacity-0 transition duration-200 group-hover:opacity-100">
        View full
      </span>
    </button>
  );
}

export default function EcommerceResearch() {
  const [activeSection, setActiveSection] = useState<SectionId>("story");
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const router = useRouter();

  const handleScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId
  ) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      router.replace(`#${sectionId}`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (NAV_ITEMS.some((item) => item.id === hash)) {
      setActiveSection(hash as SectionId);
    }

    const sections = document.querySelectorAll<HTMLElement>("section[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

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

      <div className="sticky top-4 z-50 mt-4 flex w-[92%] justify-center gap-3 lg:w-[85%] xl:w-[75%] 2xl:w-[70%]">
        <button onClick={() => router.back()} className="goback_button">
          <Image
            src="/arrow_back.svg"
            alt="Back"
            width={20}
            height={20}
            className="arrow-back-icon"
          />
        </button>

        <div className="sticky_navigation flex flex-wrap justify-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleScroll(event, item.id)}
              className={`nav_link ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <SectionContainer
        className="pt-16 md:pt-24"
        innerClassName="items-center gap-12 md:gap-16"
      >
        <section className="w-full flex flex-col items-center gap-10">
          <div className="w-full max-w-[640px] flex flex-col items-center gap-5">
            <p className="token-label text-[#0069E5] uppercase tracking-[0.18em] text-center">
              E-commerce case study
            </p>
            <p className="project_intro_text token-body text-black !w-full max-w-[520px]">
              Trane Supply is an e-commerce platform that distributes Trane HVAC
              part and equipments.
            </p>
            <h1 className="project_intro_heading token-project-title !mt-0 !mb-0 !gap-4 text-black text-center whitespace-normal">
              <Image
                src="/star.svg"
                alt="Star image"
                width={28}
                height={28}
                className="rotating-star"
              />
              Trane Supply
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
            {TIMELINE.map((item) => (
              <OverviewCard key={item.label} label={item.label} value={item.value} />
            ))}
          </div>

          <div className="w-full overflow-hidden rounded-[8px] border border-[#E3E3E3] bg-white">
            <Image
              src="/projects/e-commerce/vH6xvuNSjvWsS1GFxqXBemFrTYQ.jpg"
              sizes="(max-width: 1280px) 92vw, 75vw"
              width={1024}
              height={791}
              alt="Trane Supply banner"
              className="w-full object-cover"
              priority
            />
          </div>
        </section>
      </SectionContainer>

      <SectionContainer
        className="pt-10 md:pt-16"
        innerClassName="items-start gap-20 md:gap-28"
      >
        <SectionFrame id="story" number="01" title="Story worth talking about">
          <div className="grid gap-6">
            <div className="rounded-[8px] border border-[#E3E3E3] bg-white p-6 md:p-8">
              <div className="grid gap-4">
                {STORY_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph} className="token-body text-[#1A1A1A]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-6">
              <ArrowHeading heading="Panel Size" number="6" headingClassName="token-heading-md" />
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {TEAM.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-3 border-b border-[#E7E7E7] pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EDEDED]">
                      <span className="token-label text-[#232122]">
                        {member.badge}
                      </span>
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
        </SectionFrame>

        <SectionFrame id="research" number="02" title="Pitch Research Approach">
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
                  <p className="token-body-emphasis text-black">
                    [Approach 1: Competitive UX Audit]
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    We began by auditing leading platforms selling Trane parts,
                    starting with Parts Town. This competitive UX review helped us
                    analyze navigation patterns, search functionality, product
                    filtering, and overall user experience, uncovering best
                    practices to inform our own design strategy.
                  </p>
                  <p className="token-body mt-3 text-[#1A1A1A]">
                    With only one week to deliver a functional prototype, we
                    adopted a &quot;best-in-class synthesis&quot; approach:
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA]">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="border-b border-[#E3E3E3]">
                    <th className="px-4 py-3 text-left token-label uppercase text-[#0069E5]">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-left token-label uppercase text-[#0069E5]">
                      Inspired By
                    </th>
                    <th className="px-4 py-3 text-left token-label uppercase text-[#0069E5]">
                      User Benefit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RESEARCH_TABLE_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-[#E9E9E9] last:border-b-0">
                      <td className="px-4 py-3 token-body-sm text-black">{row.feature}</td>
                      <td className="px-4 py-3 token-body-sm text-[#5E5E5E]">
                        {row.inspiredBy}
                      </td>
                      <td className="px-4 py-3 token-body-sm text-[#5E5E5E]">
                        {row.userBenefit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">
                [Approach 2: Collaboration & Delivery]
              </p>
              <div className="mt-3 grid gap-3">
                <p className="token-body text-[#1A1A1A]">
                  Partnered closely with the business team during late-night
                  sessions to align visuals with Trane brand guidelines.
                </p>
                <p className="token-body text-[#1A1A1A]">
                  Ensured business-critical information was legible,
                  scannable, and visually compelling in the final PPT.
                </p>
                <p className="token-body text-[#1A1A1A]">
                  Delivered a clickable, high-fidelity prototype + branded
                  presentation deck on time.
                </p>
              </div>
              <div className="mt-5">
                <FigmaLink
                  label="Trane Supply Experience Pitch"
                  href={FIGMA_LINKS.pitch}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ZoomableCaseImage
                src="/projects/e-commerce/0YQtFNvW6VqffcBpJUqHa0Fzl8.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={3456}
                height={1904}
                alt="Miro board research session 1"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/e-commerce/3a9847NIHK21FxJ180JtvvwzFM.png"
                sizes="(max-width: 1280px) 92vw, 36vw"
                width={3456}
                height={1892}
                alt="Miro board research session 2"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
          </div>
        </SectionFrame>

        <SectionFrame id="design" number="03" title="Design Approach">
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
              <p className="token-body-emphasis text-black">
                [Approach 1: Structured foundation under Salesforce constraints]
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                To move fast without breaking Salesforce, I created a
                foundational style guide using Trane&apos;s existing assets,
                defining typography, colors, grids, and icons upfront.
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                This helped prioritize high-impact UX pages, reduce
                Salesforce disruptions, and keep design iterations aligned
                under tight timelines.
              </p>
              <div className="mt-5">
                <FigmaLink
                  label="Foundational Style Guide"
                  href={FIGMA_LINKS.styleGuide}
                />
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-5">
              <p className="token-body-emphasis text-black">
                [Approach 2: Cross-functional validation and UX uplift]
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                I worked through a multi-layer approval workflow, aligning
                early with developers, client design and marketing teams,
                product owners, and e-commerce leadership to validate
                feasibility and real user flows.
              </p>
              <p className="token-body mt-3 text-[#1A1A1A]">
                This resulted in targeted UX improvements including a Mini
                Cart, improved PLP filters, modernized header and footer, new
                marketing banner types, and clearer account-creation flows,
                while staying within Salesforce limitations.
              </p>
              <div className="mt-5">
                <FigmaLink
                  label="Trane Supply UI Screens Phase 1"
                  href={FIGMA_LINKS.phase1}
                />
              </div>
            </div>

            <div className="grid gap-6">
              <ZoomableCaseImage
                src="/projects/e-commerce/fGlpPtqNp2ljE0cBwv5hmdPmNk.png"
                sizes="(max-width: 1280px) 92vw, 75vw"
                width={2880}
                height={1506}
                alt="Trane Supply experience pitch"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/e-commerce/WIBOZLs1b0wDUka7gHaTuHwJNac.png"
                sizes="(max-width: 1280px) 92vw, 75vw"
                width={3456}
                height={1936}
                alt="Foundational style guide"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>
          </div>
        </SectionFrame>

        <SectionFrame id="learnings" number="04" title="Learnings & Challenges">
          <div className="grid gap-8">
            <div>
              <ArrowHeading
                heading="Challenges & Learnings Ph - 1"
                headingClassName="token-heading-md"
              />
              <div className="mt-4 grid gap-4">
                {PHASE_ONE_CHALLENGES.map((challenge, index) => (
                  <ChallengeCard key={challenge.problem} index={index} challenge={challenge} />
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <ZoomableCaseImage
                src="/projects/e-commerce/L8wSMcesaIkMW5VyP61XtMhKbZo.png"
                sizes="(max-width: 1280px) 92vw, 75vw"
                width={2880}
                height={1582}
                alt="Phase 1 solutions"
                className="object-cover"
                onOpen={setSelectedImage}
              />
              <ZoomableCaseImage
                src="/projects/e-commerce/btyvl6DqOqzp6XB5Tx49KWpf6w.png"
                sizes="(max-width: 1280px) 92vw, 75vw"
                width={2880}
                height={1648}
                alt="PLP and PDP experience"
                className="object-cover"
                onOpen={setSelectedImage}
              />
            </div>

            <div>
              <ArrowHeading
                heading="Challenges & Learnings Ph - 2"
                headingClassName="token-heading-md"
              />
              <div className="mt-4 grid gap-4">
                {PHASE_TWO_CHALLENGES.map((challenge, index) => (
                  <ChallengeCard key={challenge.problem} index={index} challenge={challenge} />
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3E3] bg-[#FAFAFA] p-6 md:p-8">
              <p className="token-label text-[#0069E5] uppercase">Outcome</p>
              <p className="token-heading-lg mt-3 text-black">
                A one-week pitch turned into a multi-phase product engagement.
              </p>
              <p className="token-body mt-4 text-[#1A1A1A]">
                The core win was not visual novelty. It was proving that modern,
                usable e-commerce UX could be introduced carefully inside a
                constrained enterprise ecosystem without losing operational
                clarity.
              </p>
            </div>
          </div>
        </SectionFrame>
      </SectionContainer>

      <div className="w-full mt-20">
        <Footer />
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-[1400px] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
              <Image
                src={selectedImage.src}
                alt=""
                width={selectedImage.width}
                height={selectedImage.height}
                sizes="90vw"
                aria-hidden="true"
                className="max-h-[90vh] w-auto max-w-full scale-[1.06] object-contain opacity-35 blur-3xl"
              />
            </div>

            <button
              type="button"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#232122] transition hover:bg-white"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
            >
              <X size={18} weight="bold" />
            </button>

            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              sizes="90vw"
              className="relative z-10 max-h-[90vh] w-auto max-w-full rounded-[8px] object-contain shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
