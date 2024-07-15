"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import RozgarBanner from '/public/case_study_rozgar.jpg';
import ProgressBar from "@/app/components/ui/progressbar";
import ProjectPage from "@/app/components/ui/projectpage";


export default function RozgarResearch() {

  

  return (
    <ProjectPage
    title="Rozgar"
    year="2022"
    subtitle="Understanding the online/offline market for Blue collar workers"
    buttonHref="https://medium.com/@ashishsauparna/rozgar-ux-case-study-jan-2022-49dfe9f33ae3"
    buttonText="View detailed research"
    progress={100}
    descriptionItems={[
      { text: 'In-person Interviews', note: '[1]' },
      { text: 'Pain points', note: '[2]' },
      { text: 'Over Persona', note: '[3]' },
      { text: 'User Journey Map', note: '[4]' },
      { text: 'Competitor Analysis', note: '[5]' },
      { text: 'Experimenting with Digital Experience', note: '[6]' }
    ]}
    youtubeVideoIdOrMiroLink="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FI42lCRSFRSsTKKh3sR5Wvf%2FRojgar%3Fnode-id%3D12-9356%26t%3DhcgTNwmc8EimWJ07-1"
    stakeholdersTitle="Stakeholders"
    stakeholdersSubtitle="👷🏼‍♂️ 👨🏻‍🏭 📦 🔩"
    scoreTitle2 = "Overall Time Spent"
    usersEarned="3"
    usersText="days"
    peopleInvolved="👨🏻‍💻"
    useiframe = {true}
  />
  )
}