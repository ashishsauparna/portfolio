'use client'

import Navigation from './navigation'

export default function Footer() {


  return (
      <footer className='w-full mx-auto'>

        <ul className='footer_links mb-4'>
          <li>📩 &nbsp;
          <Navigation target="_blank" name="ashishsauparna@gmail.com" href="mailto:ashishsauparna@gmail.com" status="mobile_ui"/>
          </li>
        </ul>
        
        <ul className='footer_links'>
          <li>
            <Navigation target="_blank" name="Figma Community" href="https://www.figma.com/@ashishsauparna" status="mobile_ui"/>
          </li>
          <li className='dash'>
            /
          </li>
          <li>
            <Navigation target="_blank" name="Linkedin" href="https://www.linkedin.com/in/ashishsauparna/" status="mobile_ui"/>
          </li>
          <li className='dash'>
            /
          </li>
          <li>
            <Navigation target="_blank" name="Medium" href="https://medium.com/@ashishsauparna" status="mobile_ui"/>
          </li>
        </ul>
        
        <p className='text-gray-500 mt-4 leading-[2rem]'>
        © Assembled with pixels by Ashish Sharma 2024
        </p>
      </footer>
  )
}