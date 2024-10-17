'use client'

import Navigation from './navigation';
import Image from 'next/image';
import OutwardArrow from '/public/outward_arrow.svg';
import FooterImg from '/public/footer_image.png';
import Marquee from 'react-fast-marquee';
import SmallButton from './button_small';

export default function Footer() {

  const tickerString = "Hi! Interested in woking together? Drop me a text on ashishsauparna@gmail.com";


  return (
      <footer>

        <Image className='absolute bottom-0 -z-10 w-full' src={FooterImg} alt={'footer image'}/>
        <div className='absolute font-space-gothic left-0 -mt-20 bg-blue-600 text-white py-2'>
        <Marquee autoFill pauseOnHover speed={30}>
          &nbsp;&nbsp;{tickerString}
        </Marquee>
        </div>
        
        <div className='w-[90%] footer_frame'>
          
        <div className="footer_grid items-center justify-between w-full py-4">

          <div className='flex-shrink-0 mr-auto text-lg font-normal items-center'>
            <div className='mb-4'>Interested in working together?</div>
            <SmallButton name="Contact me 📝"
            href="mailto:ashishsauparna@gmail.com"/>
          </div>
        

        {/* Centered links */}
        <div className="flex justify-center w-full relative">

        <ul className='footer_links'>

        <li className='flex'>
          <Navigation target="_blank" name="Resume" href="https://drive.google.com/file/d/1ZSNwRmH_NFad1FuJxVxoCsSnlrOGHxR5/view?usp=share_link" status="mobile_ui"/> &nbsp;
          <Image
          src={OutwardArrow}
          alt='outward arrow icon'
          width={20}
          />
        </li> 

        <li className='flex'>
          <Navigation target="_blank" name="Figma Community" href="https://www.figma.com/@ashishsauparna" status="mobile_ui"/> &nbsp;
          <Image
          src={OutwardArrow}
          alt='outward arrow icon'
          width={20}
          />
        </li>


        <li className='flex'>
          <Navigation target="_blank" name="Linkedin" href="https://www.linkedin.com/in/ashishsauparna/" status="mobile_ui"/> &nbsp;
          <Image
          src={OutwardArrow}
          alt='outward arrow icon'
          width={20}
        />
        </li>


        
        <li className='flex'>
          <Navigation target="_blank" name="Medium" href="https://medium.com/@ashishsauparna" status="mobile_ui"/> &nbsp;
          <Image
          src={OutwardArrow}
          alt='outward arrow icon'
          width={20}
        />
          </li>
        </ul>
        </div>
        </div>
        
        
        <p className='mt-12 pt-2 leading-[2rem] text-base mt-20 border-t border-slate-300'>
        © Assembled with pixels by Ashish. Last updated Oct 2024
        </p>
        </div>
      </footer>
  )
}