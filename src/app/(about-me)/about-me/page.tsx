import { Metadata } from 'next';
import Script from 'next/script';
import NavBar from '../../components/ui/navbar';
import MotionImage from '../motionimage';
import Link from 'next/link';
import Footer from '../../components/ui/footer';
import MotionCV from '../motioncv';
import Button from '../../components/ui/button';
import LinkButton from '@/app/components/ui/linkbutton';

export const metadata: Metadata = {
  title: {
    absolute: 'Meet Ashish Sharma',
  },
  description: 'Ashish Sharma, an Innovation Experience Designer at EY, Gurgaon, India. From studying chartered accountancy to UX design, join Ashish on this exciting journey of bridging people and technology.',
}

export default function AboutMe() {


  return (  
    <main className="flex min-h-screen flex-col items-center justify-between"> 
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-2N9F9N8KHK" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2N9F9N8KHK');
      `}
    </Script>
      <NavBar/>
      <div className='intro_content mt-40'>
        <MotionImage/>
        <div>
        <h1>Pronounced:</h1>
        <h1>Aa - shee - sh</h1><br/>
        <p>
        UX for me is like a game of skill. I like to see how things turn out when I twist them my way. Of course, empathizing with the user and understanding their experiences are part of it. But what&apos;s interesting for me is if they are comfortable, fearless, and accomplished at the end.
        </p>
          <Button href="https://drive.google.com/file/d/1eK2rZqecstTmCcAX_sw5w8E5WOtR0GPi/view?usp=sharing" name="View Resume"/>
          {/* <Link href={'https://drive.google.com/file/d/1eK2rZqecstTmCcAX_sw5w8E5WOtR0GPi/view?usp=sharing'}>
            
            <h3 className='underline-offset-4 mt-4 underline text-blue-700'>View resume</h3></Link> */}
        </div>    
      </div>
      <div className='intro_content mt-24'>
        <div>
          <h1 className='mb-4'>Skills & Interest</h1>
          <p className='leading-7'>User Research | Heuristic Analysis | Persona Development | Customer Journey Mapping | Interaction Design | Wire framing | Data Visualisation | Storytelling | Web Programming</p>
        </div>
        <div>
        Outside of my 9-to-5 grind, you&apos;ll find me developing 👨🏻‍💻 <LinkButton name="Figma plugin" href="https://www.figma.com/@ashishsauparna"/> to make my work easy. I&apos;m all about expanding my skillset, and currently, I&apos;m obsessed with completing&nbsp;<LinkButton name="Last of us part II" href="https://www.youtube.com/watch?v=vhII1qlcZ4E"/>
        {/* <LinkButton name="Last of us part 2" href=""/> */}
        <br/><br/>
        Currently, I&apos;m in a battle to stay faithful to my satvic 🧘 lifestyle and daily Gym routine – believe me, it&apos;s a real struggle!
        </div>
      </div>
      <MotionCV/>
      <Footer/>
    </main>
    )
}