'use client'

import { useEffect, useState } from 'react';
import Navigation from './navigation';
import Icon from '/public/as_logo.svg';
import Image from 'next/image';
import { Twirl as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavBar() {

  const [isOpen, setOpen] = useState(false)

  return (
      <>
      <nav className='web_nav w-full mx-auto'>
        <Link href={'/'}>
          <div className='logo_container'>
        <Image
          src={Icon}
          alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
          sizes="60vw"
          className='icon' />
          Ashish Sharma
          </div>
        </Link>
        <ul className='nav_links'>
          <li>
            <Navigation name="Home" href="/" status="default" />
          </li>
          <li>
            /
          </li>
          <li>
            <Navigation name="About Me" href="/about-me" status="default" />
          </li>
          <li>
            /
          </li>
          <li>
            <Navigation name="My Articles" href="/articles" status="default" />
          </li>
          <li>
            /
          </li>
          <li>
            <Navigation name="My Reads" href="/my-reads" status="default" />
          </li>
          {/* <li>
            <Navigation name="📫 Hire me!" target="_blank" href="mailto:ashishsauparna@gmail.com" />
          </li> */}
        </ul>
      </nav>
      <nav className='mobile_nav w-full pt-2 pb-2'>
        <Link href={'/'}>
            <div className='logo_container'>
          <Image
            src={Icon}
            alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
            sizes="60vw"
            className='icon' />
            Ashish
            </div>
        </Link>
          <div className='z-10'>
          <Hamburger size={30} duration={0.3} easing="ease-in" toggled={isOpen} toggle={setOpen} />
          </div>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: isOpen ? '0%' : '100%' }}
              transition={{ type: 'ease-in', duration: 0.3 }}
              className='mobile_nav_view'>
              {/* Content of the animated container */}
              <div className='absolute bottom-0 justify-between'>
              <ul className='grid gap-8 mb-28 text-3xl'>
                <li>
                  <Navigation name="Home" href="/" status="mobile_ui" />
                </li>
                <li>
                  <Navigation name="About Me" href="/about-me" status="mobile_ui" />
                </li>
                <li>
                  <Navigation name="My Reads" href="/my-reads" status="mobile_ui" />
                </li>
                <li>
                  <Navigation name="Figma Page" href="https://www.figma.com/@ashishsauparna" status="mobile_ui" />
                </li>
                <li>
                  <Navigation name="📫 Hire me!" target="_blank" href="mailto:ashishsauparna@gmail.com" status="mobile_ui" />
                </li>
                <li>
                  <Navigation name="LinkedIn" href="https://www.linkedin.com/in/ashishsauparna/" status="mobile_ui" />
                  <p className='text-2xl mt-2 text-gray-500'>Connect with my UX journey</p>
                </li>
              </ul>
              </div>
            </motion.div>
      </nav>
      </>
  )
}