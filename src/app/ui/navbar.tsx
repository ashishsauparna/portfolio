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
      <nav className='nav_web w-full mt-12 mx-auto flex'>
        <Link href={'/'}>
        <Image
          src={Icon}
          alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
          sizes="60vw"
          className='icon' />
        </Link>
        <ul>
          <li>
            <Navigation name="Home" href="/" status="default" />
          </li>
          <li>
            <Navigation name="About Me" href="/about-me" status="default" />
          </li>
          <li>
            <Navigation name="My Reads" href="/my-reads" status="default" />
          </li>
          {/* <li>
            <Navigation name="📫 Hire me!" target="_blank" href="mailto:ashishsauparna@gmail.com" />
          </li> */}
        </ul>
      </nav>
      <nav className='nav_mobile w-full pt-2 pb-2'>
        <div className='w-11/12 flex justify-between mx-auto items-center'>
          <Link href={'/'}>
          <Image
            src={Icon}
            alt="A Logo of the website in white text and blue background. The logo says AS short for Ashish Sharma"
            sizes="60vw"
            className='icon' />
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
              <ul className='grid relative bottom-10 gap-8 mb-8 text-4xl'>
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
                  <p className='text-xl ml-4 text-gray-500'>Connect with my UX journey</p>
                </li>
              </ul>
              </div>
            </motion.div>
        </div>
      </nav>
      </>
  )
}