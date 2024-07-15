"use client"

import ProjectPage from "@/app/components/ui/projectpage";

export default function ButtonSmithResearch() {

  return (
    <ProjectPage
      title="Button Smith"
      year="May 2024"
      subtitle="One Figma Plugin to generates and documents all your button states"
      buttonHref="https://medium.com/ux-planet/ux-case-study-button-smith-effortless-button-creation-8b9c7b9f8f2a"
      buttonText="View detailed research"
      progress={100}
      descriptionItems={[
        { text: 'Use your local/brand font', note: '[1]' },
        { text: 'Customize color, padding, radius, etc.', note: '[2]' },
        { text: 'Multiple button styles to choose', note: '[3]' },
        { text: 'Auto Document your new button component set', note: '[4]' },
      ]}
      youtubeVideoIdOrMiroLink="FfLtALrdE0I"
      stakeholdersTitle="Stakeholders"
      stakeholdersSubtitle="UI/Visual Designers"
      usersEarned="+216"
      usersText="users"
      peopleInvolved="👨🏻‍💻"
    />
  )
}
