'use client'

import { useEffect, useState } from 'react';
import Navigation from './navigation';
import Image from 'next/image';
import { Pivot as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SmallButton from './button_small';

export default function NavBar() {

  const [isOpen, setOpen] = useState(false);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowGif(true);
      setTimeout(() => {
        setShowGif(false);
      }, 250); // Adjust this value to control how long the GIF stays visible
    }, 6000); // 12 seconds in milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
      <>
      <nav className='web_nav'>
        <Link href={'/'}>
          <div className='logo_container'>
        {/* {showGif && <Image
          src={"/as_logo_closed.svg"}
          alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
          sizes="60vw"
          width={32}
          height={32}
          className='icon_gif' />} */}
        <Image
          src={"/as_logo.svg"}
          alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
          sizes="60vw"
          width={32}
          height={32}
          className='icon' />
          &nbsp;&nbsp;Ashish Sharma
          </div>
        </Link>
        <ul className='nav_links'>

          <li>
            <Navigation name="Home" href="/" status="default" />
          </li>

          <li>
          {/* 😇&nbsp; */}
          <Navigation name="About Me" href="/about-me" status="default" />
          </li>

          <li>
          <Navigation name="Inspirations" href="/my-reads" status="default" />
          </li>


          <li className='flex gap-[2px] -mb-[2px]'>
          <Navigation name="Resume" href="https://drive.google.com/file/d/1_Cqagdp5cQbY4ePvsdsGrYchT-B541uW/view?usp=share_link" status="default" target="_blank"/>
          <Image
          src={"/outward_arrow.svg"}
          alt='outward arrow icon'
          width={16}
          height={16}
          />
          </li>

        </ul>
        <div style={{transform:"translateY(0px)"}}>
        <SmallButton name="Contact Me 📝" href="mailto:ashishsauparna@gmail.com"/>
        </div>
      </nav>


      
      <nav className='mobile_nav'>

        {/* Logo Section */}
        <Link href={'/'}>
            <div className='logo_container'>
          <Image
            src={"/as_logo.svg"}
            alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
            sizes="60vw"
            width={60}
            height={60}
            className='icon' />

            &nbsp;Ashish
            </div>
        </Link>

        {/* Hamburger Section */}
        <div className='z-10' style={{transform:"translateY(4px)"}}>
        <Hamburger size={30} duration={0.3} easing="ease-in" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>

      {/* Motion Div for Menu */}
      <motion.div
          initial={{ y: '100%' }}
          animate={{ y: isOpen ? '0%' : '100%' }}
          transition={{ type: 'ease-in', duration: 0.2 }}>

          {/* Content of the animated container */}
          <div className='mobile_nav_view'>
          <div className='absolute bottom-0 justify-between'>
          <ul className='grid gap-8 mb-28 text-3xl'>
            <li>
              <Navigation name="Home" href="/" status="mobile_ui" />
            </li>
            <li>
              <Navigation name="About Me" href="/about-me" status="mobile_ui" />
            </li>
            <li>
              <Navigation name="Inspirations" href="/my-reads" status="mobile_ui" />
            </li>
            <li>
              <Navigation name="📫 Hire me!" target="_blank" href="mailto:ashishsauparna@gmail.com" status="mobile_ui" />
            </li>
          </ul>
          </div>
          </div>
        </motion.div>
      </>
  )
}