"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import DelhiveryBanner from '/public/Outside_in_poster.png';
import ProgressBar from "@/app/components/ui/progressbar";
import ProjectPage from "@/app/components/ui/projectpage";


export default function DelhiveryResearch() {

  

  return (

    <ProjectPage
      title="UX Research - Delhivery"
      year="Dec 23"
      subtitle="Understanding Trends and innovations in a logistic industry"
      buttonHref="https://miro.com/welcomeonboard/WEhBbWxIQTVITFNUZUF1Tm1ZWHdTMXZkVjJCTmNNd3pTbWJVMTZiTzRLQk9XdWgzSWhiTlhYbWVvRDM2SEtWYnwzNDU4NzY0NTYyMzY0Mjg3NTkwfDI=?share_link_id=242834876031"
      buttonText="Open Miro in new tab"
      progress={40}
      descriptionItems={[
        { text: 'Secondary Research', note: '[1]' },
        { text: 'Competitor Analysis', note: '[2]' },
        { text: 'Proto Personas', note: '[3]' },
        { text: 'Website\'s Heuristics Analysis', note: '[4]' },
        { text: 'Insights and Possible Future', note: '[5]' },
      ]}
      youtubeVideoIdOrMiroLink="https://miro.com/app/live-embed/uXjVMrWRtKY=/?moveToViewport=-3409,-7877,58890,28610&embedId=393622349668"
      stakeholdersTitle="Research Company"
      stakeholdersSubtitle="Delhivery"
      scoreTitle2 = "Overall Time Spent"
      usersEarned="16"
      usersText="days"
      peopleInvolved="👨🏻‍💻"
      useiframe = {true}
    />
  )
}