'use client'

import Navigation from './navigation'

export default function Footer() {


  return (
      <footer className='w-full mt-24 mb-24 mx-auto'>
        <ul className='footer_links'>
          <li>
            <Navigation target="_blank" name="Email" href="mailto:ashishsauparna@gmail.com"/>
          </li>
          <li>
            <Navigation target="_blank" name="Figma Community" href="https://www.figma.com/@ashishsauparna"/>
          </li>
          <li>
            <Navigation target="_blank" name="Linkedin" href="https://www.linkedin.com/in/ashishsauparna/"/>
          </li>
          <li>
            <Navigation target="_blank" name="Medium" href="https://medium.com/@ashishsauparna"/>
          </li>
        </ul>
        <p className='text-gray-500 mt-4'>
        © Owned and developed by Ashish Sharma.<br/>
        Last updated August 2023
        </p>
      </footer>
  )
}