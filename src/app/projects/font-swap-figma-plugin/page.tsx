'use client'

import Image from 'next/image';
import salahkarImg from '/public/salahkar_3.png';
import sanskritiImg from '/public/sanskriti_2.png';
import pageBanner from '/public/font_swap_cover.png';
import Link from 'next/link';
import Button from '@/app/ui/button';
import Footer from '@/app/ui/footer';

export default function FontSwap() {


  return (
    <main className="w-2/5 flex min-h-screen flex-col items-left gap-8 mt-12"> 
    <Link href="/"> &lt; Go Back</Link>
    <div className='flex flex-col gap-2'>
    <h1>Font Swap: Simplifying Font Changes for UI Designers in Figma</h1>
    <h4 className='text-gray-500'>Design thinking and programing
    <br/>2023 - Present</h4>
    </div>
    <Button name="View Project" href="https://www.figma.com/community/plugin/1246737736127570810"/>
    <Image
      src={pageBanner}
      alt="Picture of an man using font swap plugin on his macbook"
      sizes="100vw"
      className='article_image'/>
      
    <div className='flex flex-col gap-2'>
      <h4 className='font-semibold'>Problem</h4>
    <p>UI designers lack a suitable option in Figma to change fonts for specific layers, 
      including the inability to handle mixed fonts using existing plugins.</p>
    </div>

    <div className='flex flex-col gap-2'>
      <h4 className='font-semibold'>Solution</h4>
    <p>Font Swap is a purpose-built Figma plugin, streamlines font changes for UI designers. 
      It effectively handles mixed fonts and was developed based on research, insights from designers, 
      and analysis of existing plugins like, Font Replacer, Fonts changer and Easy Font Swap</p>
    </div>

    <div className='flex flex-col gap-2'>
      <h4 className='font-semibold'>Design and Evaluation</h4>
    <p>During its iterative development, Font Swap resolved multiple errors encountered in the development mode. 
      TypeScript and CSS were the primary languages used during development. The plugin design seamlessly integrates 
      with Figma, enabling users to effortlessly update both mixed and non-mixed fonts in their projects.</p>
    </div>

    <div className='flex flex-col gap-2'>
      <h4 className='font-semibold'>Future Enhancements</h4>
    <p>Planned improvements include:
        Refining visual design
        Adding UX functions,
        Optimizing processing speed, and
      Exploring payment options for sustainability.</p>
    </div>

    <div className='flex flex-col gap-2'>
      <h4 className='font-semibold'>Conclusion</h4>
    <p>Font Swap addresses font-changing challenges in Figma for UI designers. 
      It encourages users to try the plugin and provide feedback for continuous improvement.</p>
    </div>

    <div className='flex flex-col gap-2'>
      <h4 className='font-semibold'>More Projects</h4>
        <div className='grid gap-4 grid-cols-2 auto-rows-auto w-full'>
            <Link className='cell' href="https://ashishsauparna.notion.site/Salahkar-Budgeting-Savings-app-UX-Case-Study-April-2021-e85f2cae642e4be39ed12907641786fd">
              <Image
              src={salahkarImg}
              alt="Picture of an man using font swap plugin on his macbook"
              sizes="100vw"
              className='project_image'/>
              <h3 className='mt-4'>Salahkar - Budgeting & Savings app - UXCase Study (April 2021)</h3>
              <p className='mt-1 text-gray-600'>The app teaches teens (ages 13-19) financial management and 
              accounting terms for a successful future.</p>
            </Link>
            <Link className='cell' href="https://ashishsauparna.notion.site/Sanskriti-UX-Case-Study-March-2021-5eeb58ff2e304a36a8a25f80cc630b94">
              <Image
              src={sanskritiImg}
              alt="Picture of an man using font swap plugin on his macbook"
              sizes="100vw"
              className='project_image'/>
              <h3 className='mt-4'>Sanskriti - UX Case Study (March 2021)</h3>
              <p className='mt-1 text-gray-600'>Discover artifacts and their museums withSanskriti app. 
                The app is perfect for class projects or exploring specific timelines.</p>
            </Link>
        </div>
    </div>
    <Footer/>
    </main>
  )
}
