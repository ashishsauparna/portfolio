'use client'

import NavBar from '../ui/navbar'
import Image from 'next/image';
import AshishSharmaImg from '/public/ashish_sharma.png'
import Footer from '../ui/footer';
import Button from '../ui/button';

export default function AboutMe() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between"> 
      <NavBar/>
      <div className='intro_content mt-24'>
        <div>
        <Image
          src={AshishSharmaImg}
          alt="Black and white portait of Ashish Sharma"
          sizes="60vw"
          className='ashish_image'/>
        <Button name="Connect on LinkedIn" href="https://www.linkedin.com/in/ashishsauparna/"/>
        </div>
        <div>
        <h4>Hello again! I am Ashish Sharma, an Innovation Experience Designer at EY, Gurgaon, India.</h4><br/>
        <p>My journey has been a dynamic ride, from studying chartered accountancy to developing apps on the Google Play Store. One of my notable projects, Saral, where I aimed to revolutionize society by connecting people with local household service providers. 
          Along the way, I gained invaluable insights by working for a competitor in the service industry. <br/><br/>
          During the lockdown, I explored graphic and logo design, which ultimately led me to the world of UX/UI. It was a pivotal moment when I discovered my true calling in UX design.<br/><br/>
          Today, I am driven by a passion for creating seamless user experiences that bridge the gap between people and technology. <br/><br/>
          Join me on this exciting journey as we connect, share ideas, and together, bring remarkable experiences to life.</p>
        </div>       
      </div>
      <Footer/>
    </main>
  )
}