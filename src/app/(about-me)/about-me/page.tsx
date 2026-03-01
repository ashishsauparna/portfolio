import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Footer from '../../components/ui/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Meet Ashish Sharma',
  },
  description: 'Ashish Sharma, an Innovation Experience Designer at EY, Gurgaon, India. From studying chartered accountancy to UX design, join Ashish on this exciting journey of bridging people and technology.',
}

export default function AboutMe() {
  const education = [
    {
      title: 'Design thinking - Bronze Badge',
      subtitle: 'EY Innovation',
    },
    {
      title: 'Google UX Design Certificate',
      subtitle: 'Google, Coursera',
    },
    {
      title: 'B. Com. with Honours',
      subtitle: 'Delhi University (DU)',
    },
    {
      title: 'Introduction to typography',
      subtitle: 'CalArts, Coursera',
    },
  ];

  const projects = [
    {
      title: 'Figma Plugin - Font Swap (28k+ users)',
      subtitle: 'UX Designer + Developer | July 2023 - Present',
    },
    {
      title: 'Figma Plugin - Button Smith (900+ users)',
      subtitle: 'UX Designer + Developer | May 2024 - Present',
    },
  ];

  const experience = [
    {
      title: 'EY (Ernst & Young)',
      subtitle: 'Senior Experience Designer | March 2022 - Present',
    },
    {
      title: 'Tekie',
      subtitle: 'UX/UI Designer | August 2021 - March 2022',
    },
    {
      title: 'Assetmonk',
      subtitle: 'UX Design Intern | July 2021 - August 2021',
    },
    {
      title: 'Internships & Freelance',
      subtitle: 'Social Media Manager & Graphic Designer | March 2020 - Jan 2021',
    },
  ];

  return (  
    <main className="min-h-screen bg-[#FAFAFA] w-full">
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2N9F9N8KHK');
      `}
    </Script>
      <div className="w-full mx-auto flex flex-col gap-[96px] xl:gap-[156px] pt-14 md:pt-16 xl:pt-20 pb-16 xl:pb-24">
        <section className="token-container grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-12 items-end">
          <div className="relative h-[360px] md:h-[420px] xl:h-[376px] rounded-[8px] overflow-hidden">
            <Image
              src="/ashish_sharma.png"
              alt="Black and white portrait of Ashish Sharma"
              fill
              className="object-cover object-bottom"
              sizes="(min-width: 1280px) 300px, (min-width: 768px) 40vw, 100vw"
              priority
            />
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="text-black">
              <h2 className="token-heading-xl">
                Pronounced:
                <br />
                Aa - shee - sh
              </h2>
            </div>
            <p className="token-body text-[#1A1A1A]">
              UX Designer with 5+ years of experience driving research and design across healthcare and e-commerce. I
              specialise in heuristic-driven systems, user journeys, and data-informed design to craft accessible,
              impactful digital experiences.
            </p>
            <Link
              href="https://drive.google.com/file/d/1_Cqagdp5cQbY4ePvsdsGrYchT-B541uW/view"
              target="_blank"
              rel="noopener noreferrer"
              className="token-btn-primary hover:underline"
            >
              View Resume
            </Link>
          </div>

          <div className="flex flex-col gap-[10px] pt-0 xl:pt-16">
            <p className="token-body text-[#1A1A1A]">
              What motivates me most is seeing users feel confident and accomplished when completing their tasks.
            </p>
            <p className="token-body text-[#1A1A1A]">
              Outside of my 9-5, I enjoy expanding my skill set. At the moment, that includes learning Japanese for an
              upcoming N5 exam, practising the guitar, and trying to fit in a gym routine, an ongoing challenge.
            </p>
          </div>
        </section>

        <section className="token-container grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-12 items-start">
          <div className="flex flex-col gap-1">
            <h3 className="token-heading-lg text-black">Education</h3>
            {education.map((item) => (
              <div key={item.title} className="mt-3">
                <p className="token-body text-[#1A1A1A]">{item.title}</p>
                <p className="token-body text-[#1A1A1A]">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="token-heading-lg text-black">Projects</h3>
            {projects.map((item) => (
              <div key={item.title} className="mt-3">
                <p className="token-body text-[#1A1A1A]">{item.title}</p>
                <p className="token-body text-[#1A1A1A]">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="token-heading-lg text-black">Experience</h3>
            {experience.map((item) => (
              <div key={item.title} className="mt-3">
                <p className="token-body text-[#1A1A1A]">{item.title}</p>
                <p className="token-body text-[#1A1A1A]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </main>
    )
}
