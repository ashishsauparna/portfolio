'use client'

import { useEffect, useState } from 'react';
import Navigation from './navigation';
import Icon from '/public/as_logo.svg';
import Image from 'next/image';
import { Twirl as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';

export default function NavBar() {

  const [isOpen, setOpen] = useState(false)

  return (
      <>
      <nav className='nav_web w-full mt-12 mx-auto flex'>
        <Image
          src={Icon}
          alt="AS Logo of the website in white text and blue background"
          sizes="60vw"
          className='icon' />
        <ul>
          <li>
            <Navigation name="Home" href="/" />
          </li>
          <li>
            <Navigation name="About Me" href="/about-me" />
          </li>
          <li>
            <Navigation name="My Reads" href="/my-reads" />
          </li>
          <li>
            <Navigation name="Figma Page" href="https://www.figma.com/@ashishsauparna" />
          </li>
        </ul>
      </nav>
      <nav className='nav_mobile w-full fixed pt-2 pb-2 flex'>
        <div className='w-11/12 flex justify-between mx-auto items-center'>
        <Image
          src={Icon}
          alt="AS Logo of the website in white text and blue background"
          sizes="60vw"
          className='icon' />
          <div className='z-10'>
          <Hamburger size={36} duration={0.2} easing="ease-in" toggled={isOpen} toggle={setOpen} />
          </div>
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: isOpen ? '0%' : '100%' }}
              transition={{ type: 'ease-in', duration: 0.2 }}
              className='mobile_nav_view'>
              {/* Content of the animated container */}
              <div className='absolute bottom-0 justify-between'>
              <ul className='grid relative bottom-10 gap-8 mb-8 text-4xl'>
                <li className='mobile_ui'>
                  <Navigation name="Home" href="/" />
                </li>
                <li className='mobile_ui'>
                  <Navigation name="About Me" href="/about-me" />
                </li>
                <li className='mobile_ui'>
                  <Navigation name="My Reads" href="/my-reads" />
                </li>
                <li className='mobile_ui'>
                  <Navigation name="Figma Page" href="https://www.figma.com/@ashishsauparna" />
                </li>
                <li className='mobile_ui'>
                  <Navigation name="LinkedIn" href="https://www.linkedin.com/in/ashishsauparna/" />
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