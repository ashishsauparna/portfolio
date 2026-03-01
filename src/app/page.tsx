'use client'

import Footer from './components/ui/footer'
import Image from 'next/image'
import Script from 'next/script'
import SectionContainer from './components/ui/section-container'
import CaseStudyCard from './components/ui/case-study-card'
import SkillItem from './components/ui/skill-item'
import { caseStudies, skills, toolLogos } from './data/homepage'

export default function Home() {
  return (
    <main className="bg-white relative w-full min-h-screen overflow-x-hidden flex flex-col items-center">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2N9F9N8KHK');
        `}
      </Script>

      <div className="hidden md:block absolute inset-x-0 top-0 md:top-[-220px] w-full h-[800px] pointer-events-none overflow-hidden z-0">
        <Image
          src="/hero-background.png"
          alt="Hero background grid"
          fill
          className="object-top object-contain"
          priority
        />
      </div>

      <section className="w-full flex flex-col items-center pt-14 md:pt-[200px]">
        <div className="w-full md:w-[423px] flex flex-col gap-5 items-center px-4 md:px-0">
          <div className="flex flex-col gap-1 items-center w-full">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end w-full justify-center">
              <p className="token-display-hero text-black text-center">
                <span className="italic">C</span>rafting
              </p>
              <div className="h-[41px] w-[195px] rounded-[1000px] overflow-hidden relative md:translate-y-[-1px]">
                <Image
                  src="/michelangelo_hand.png"
                  alt="Michelangelo Creation of Adam"
                  width={330}
                  height={150}
                  className="absolute inset-0 w-full h-full object-cover object-[50%_22.8%]"
                  priority
                />
              </div>
            </div>
            <p className="token-display-hero text-black text-center w-full">
              <span className="italic">D</span>igital solutions
            </p>
          </div>
          <p className="token-body-emphasis italic text-black text-center">
            Since 2020
          </p>
        </div>
      </section>

      <SectionContainer className="mt-20 md:mt-[120px]" innerClassName="gap-[64px] md:gap-[77px]">
        <div className="token-heading-lg token-weight-thin text-black text-center w-full max-w-[540px]">
          <p>
            <span className="italic">Hi!</span> I&apos;m Ashish, UX designer and researcher from India with 5 years of
            experience in user-centric design.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center w-full">
          <p className="token-body text-black text-center opacity-80">
            Frequently used tools in 2024
          </p>
          <div className="flex gap-8 md:gap-[47px] items-center justify-center w-full flex-wrap opacity-95">
            {toolLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-[24px] md:h-[28px] w-auto brightness-0 opacity-90"
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="pt-[96px] md:pt-[172px] pb-[96px]" innerClassName="gap-[48px] md:gap-[60px]">
        <h2 className="token-heading-xl text-black text-center">
          Case Studies
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
          {caseStudies.map((project) => (
            <CaseStudyCard key={project.href} {...project} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="pt-[36px] pb-[96px] md:pb-[144px]" innerClassName="gap-[72px] md:gap-[100px]">
        <h2 className="token-heading-xl text-black text-center">
          Skills &amp; Services
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-x-[72px] xl:gap-y-12 place-items-center">
          {skills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </div>
      </SectionContainer>

      <div className="w-full">
        <Footer />
      </div>
    </main>
  )
}
