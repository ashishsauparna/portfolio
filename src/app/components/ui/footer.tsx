'use client'

import Navigation from './navigation';
import Image from 'next/image';
// import OutwardArrow from '/public/outward_arrow.svg';
// import FooterImg from '/public/footer_image.png';
import Marquee from 'react-fast-marquee';
import SmallButton from './button_small';

export default function Footer() {

  const tickerString = "Hi! Interested in woking together? Drop me a text on ashishsauparna@gmail.com";


  return (
      <footer>
        <div className='absolute w-full top-0 bg-blue-600 text-sm text-white py-1'>
        <Marquee autoFill pauseOnHover speed={30}>
          &nbsp;&nbsp;
        </Marquee>
        </div>
        
        <div className='w-[90%] footer_frame'>
          
        <div className="footer_grid items-center justify-between w-full py-4">

          <div className='flex-shrink-0 mr-auto font-normal items-center'>
            <h2 className='mb-8'
            style={{lineHeight:"2.6rem", fontWeight:"400"}}>Do you want to start
              <br/>
               a project together?</h2>
            <SmallButton name="Contact me 📝"
            href="mailto:ashishsauparna@gmail.com"/>
          </div>
        

        {/* Centered links */}
        <div className="flex w-full">

        <ul className='footer_links'>

        <li className='flex'>
          <Navigation target="_blank" name="Resume" href="https://drive.google.com/file/d/1ZSNwRmH_NFad1FuJxVxoCsSnlrOGHxR5/view?usp=share_link" status="mobile_ui"/> &nbsp;
        </li> 

        <li className='flex'>
          <Navigation target="_blank" name="Figma Community" href="https://www.figma.com/@ashishsauparna" status="mobile_ui"/> &nbsp;
        </li>


        <li className='flex'>
          <Navigation target="_blank" name="Linkedin" href="https://www.linkedin.com/in/ashishsauparna/" status="mobile_ui"/> &nbsp;
        </li>


        
        <li className='flex'>
          <Navigation target="_blank" name="Medium" href="https://medium.com/@ashishsauparna" status="mobile_ui"/> &nbsp;
          </li>
        </ul>
        </div>
        </div>
        
        
        <p className='mt-36 pt-2 leading-[2rem] mt-20 border-t border-slate-300'>
        © Assembled with pixels by Ashish. Last updated Oct 2024
        </p>
        </div>
      </footer>
  )
}