'use client'

import { useEffect, useState } from 'react';
import Navigation from './navigation';
import Icon from '/public/as_logo.png';
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
          alt="Picture of an man using font swap plugin on his macbook"
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
      <nav className='nav_mobile w-full mt-8 mx-auto flex'>
        <Image
          src={Icon}
          alt="Picture of an man using font swap plugin on his macbook"
          sizes="60vw"
          className='icon' />
          <div className='menu_icon' onClick={()=> setOpen(true)}>
          <Hamburger size={24} easing="ease-in" toggled={isOpen} toggle={setOpen} />
          <span>Menu</span>
          </div>
          
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: isOpen ? '0%' : '100%' }}
            transition={{ type: 'ease-in', duration: 0.4 }}
            className='mobile_nav_view'>
            {/* Content of the animated container */}
            <div className='absolute bottom-0 justify-between'>
            <ul className='grid relative bottom-10 gap-8 text-4xl'>
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
                <Navigation name="LinkedIn" href="https://www.figma.com/@ashishsauparna" />
                <p className='text-xl ml-4 text-gray-500'>Connect with my UX journey</p>
              </li>
              <li className='mt-6 ml-1' onClick={() => setOpen(false)}>
              <span className='flex items-center text-2xl'><Hamburger size={24} easing="ease-in" toggled={isOpen} toggle={setOpen} />
              Close</span>
              </li>
            </ul>
            </div>
          </motion.div>
      </nav>
      </>
  )
}