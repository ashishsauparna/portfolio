import { Metadata } from 'next';
import Script from 'next/script';
import NavBar from '../../components/ui/navbar';
import MotionImage from '../motionimage';
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
      <div className='intro_content_first mt-40'>
        <MotionImage/>

        <div className='intro_content_sec'>

          <div>
            <div className='flex gap-4 items-start'>
              <div className='w-3 h-3 bg-zinc-900 absolute -ml-8'>
              </div>
              <h5 className='text-2xl text-slate-900 -mt-2'>Pronounced: Aa - shee - sh</h5>
            </div>
            <p className='mb-4 mt-4'>
              UX for me is like a game of skill. I like to see how things turn out when I twist them my way. Of course, empathizing with the user and understanding their experiences are part of it. But what&apos;s interesting for me is if they are comfortable, fearless, and accomplished at the end.
            </p>
            <Button href="https://drive.google.com/file/d/1ZSNwRmH_NFad1FuJxVxoCsSnlrOGHxR5/view?usp=share_link" name="View Resume"/>
          </div>

          <div className='-mt-2'>
            <div className='w-3 h-3 bg-zinc-900 absolute -ml-8 mt-2'>
            </div>
              Outside of my 9-to-5 grind, you&apos;ll find me developing 👨🏻‍💻 <LinkButton name="Figma plugin" href="https://www.figma.com/@ashishsauparna"/> to make my work easy. I&apos;m all about expanding my skillset, and currently, I&apos;m obsessed with completing&nbsp;<LinkButton name="Last of us part II" href="https://www.youtube.com/watch?v=vhII1qlcZ4E"/>
              <br/><br/>
              Currently, I&apos;m in a battle to stay faithful to my satvic 🧘 lifestyle and daily Gym routine – believe me, it&apos;s a real struggle!
          </div> 
        </div>

      </div>
      <MotionCV/>
      <Footer/>
    </main>
    )
}