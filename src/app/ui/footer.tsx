'use client'

import Navigation from './navigation'

export default function Footer() {


  return (
      <footer className='w-full mt-48 mb-24 mx-auto'>

        <ul className='footer_links mb-4'>
          <li>
          <Navigation target="_blank" name="ashishsauparna@gmail.com" href="mailto:ashishsauparna@gmail.com" status="mobile_ui"/>
          </li>
        </ul>
        
        <ul className='footer_links'>
          <li>
            <Navigation target="_blank" name="Figma Community" href="https://www.figma.com/@ashishsauparna" status="mobile_ui"/>
          </li>
          <li>
            <Navigation target="_blank" name="Linkedin" href="https://www.linkedin.com/in/ashishsauparna/" status="mobile_ui"/>
          </li>
          <li>
            <Navigation target="_blank" name="Medium" href="https://medium.com/@ashishsauparna" status="mobile_ui"/>
          </li>
        </ul>
        
        <p className='text-gray-500 mt-4 leading-[2rem]'>
        © Designed and developed by Ashish Sharma<br/>
        Last updated August 2023
        </p>
      </footer>
  )
}