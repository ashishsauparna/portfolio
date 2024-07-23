"use client"

import Image from "next/image";
import Script from 'next/script';
import NavBar from '@/app/components/ui/navbar';
import Footer from '@/app/components/ui/footer';
import Button from '@/app/components/ui/button';
import FontSwapBanner from '/public/fontswap_2.jpg';
import YouTubeEmbed from "@/app/components/ui/youtube-embed";
import ProgressBar from "@/app/components/ui/progressbar";
import Link from "next/link";
import ProjectPage from "@/app/components/ui/projectpage";


export default function FontSwapResearch() {

  

  return (
    <ProjectPage
      title="Font Swap"
      year="May 23"
      subtitle="A Figma Plugin addressing multitasks"
      buttonHref="https://medium.com/ux-planet/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3"
      buttonText="View detailed research"
      progress={100}
      descriptionItems={[
        { text: 'Switch fonts in one selection', note: '[1]' },
        { text: 'Replace mixed text', note: '[2]' },
        { text: 'Find and replace missing fonts', note: '[3]' },
        { text: 'Suggestions fonts with different weight styles', note: '[4]' },
      ]}
      youtubeVideoIdOrMiroLink="uJtddv6lGhY"
      stakeholdersTitle="Stakeholders"
      stakeholdersSubtitle="UI Designers"
      scoreTitle2 = "Overall Users"
      usersEarned="+18k"
      usersText="users"
      peopleInvolved="🙋🏻"
      useiframe = {false}
    />)
}