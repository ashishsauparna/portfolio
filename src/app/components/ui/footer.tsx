'use client'

import Button from './button';
import Navigation from './navigation';
import Image from 'next/image';
import OutwardArrow from '/public/outward_arrow.svg';
import Marquee from 'react-fast-marquee';

export default function Footer() {

  const tickerString = "<title>Ashish Sharma</title> <h1>Contact</h1> <p>Here is my idea I\'d love to colaborate with</p>";


  return (
      <footer>

        <div className='absolute left-0 -mt-20 bg-blue-600 text-white py-2 serif'>
        <Marquee autoFill pauseOnHover speed={40}>
          {tickerString}
        </Marquee>
        </div>
        

        <ul className='footer_links mb-8'>
          <li>
          <Button name="Drop me a text"
          href="mailto:ashishsauparna@gmail.com"/>
          {/* <Navigation target="_blank" name="ashishsauparna@gmail.com" href="mailto:ashishsauparna@gmail.com" status="mobile_ui"/> */}
          </li>
        </ul>
        
        <ul className='footer_links'>
          <li className='flex'>
            <Navigation target="_blank" name="Figma Community" href="https://www.figma.com/@ashishsauparna" status="mobile_ui"/> &nbsp;
            <Image
            src={OutwardArrow}
            alt='outward arrow icon'
            width={20}
          />
          </li>
          {/* <li className='dash'>
            /
          </li> */}
          <li className='flex'>
            <Navigation target="_blank" name="Linkedin" href="https://www.linkedin.com/in/ashishsauparna/" status="mobile_ui"/> &nbsp;
            <Image
            src={OutwardArrow}
            alt='outward arrow icon'
            width={20}
          />
          </li>
          {/* <li className='dash'>
            /
          </li> */}
          <li className='flex'>
            <Navigation target="_blank" name="Medium" href="https://medium.com/@ashishsauparna" status="mobile_ui"/> &nbsp;
            <Image
            src={OutwardArrow}
            alt='outward arrow icon'
            width={20}
          />
          </li>
        </ul>
        
        <p className='mt-12 pt-2 leading-[2rem] text-base mt-20 border-t border-slate-300'>
        © Assembled with pixels by Ashish. Last updated May 2024
        </p>
      </footer>
  )
}