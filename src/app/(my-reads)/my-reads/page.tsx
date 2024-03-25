import { Metadata } from 'next';
import Books from '../books';
import NavBar from '../../components/ui/navbar';
import Footer from '../../components/ui/footer';
import Image from 'next/image';
import IgStory from '/public/books_story.png';
import Inspirations from '../inspirations';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'My Reads',
  openGraph: {
      title: 'My Reads',
    },
  description: 'Its a space of all my favourite books, podcasts, articles, people I am inspired by and things that I enjoy and love, that I hope you might like as well.',
}

export default function MyReads() {

  const designInsp = [
    {
      name: "Land-book",
      href: "https://land-book.com/"
    },
    {
      name: "Awwwards",
      href: "https://www.awwwards.com/"
    },
    {
      name: "Lapa Ninja",
      href: "https://www.lapa.ninja/"
    },
    {
      name: "Godly",
      href: "https://godly.website/"
    },
    {
      name: "UI Sources",
      href: "https://www.uisources.com/"
    },
    {
      name: "Bookmarks.Design",
      href: "https://www.bookmarks.design/"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center"> 
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
        <div className='intro_content mt-24'>
          <div>
            <Image src={IgStory} alt={'Book holding'}
            style={{width:"100%", height:"auto"}}/>
          </div>
          <div>
            <h1 className='mb-4'>What am I reading and listening to?</h1>
            <p>Its a space of all my favourite books, podcasts, articles, people I am inspired by and things that I enjoy and love, that I hope you might like as well.</p>
            
            <h1 className='mb-4 mt-24'>The Books I still go back to</h1>
            <Books/>
          </div>
        </div>

        <div className='recomendation_content mt-24 w-full'>

          <h1 className='mb-4'>My design inspiration</h1>
          <div style={{display:"flex", alignItems:"flex-start", gap:"16px", flexWrap:"wrap"}}>
            {
              designInsp.map((data, index) => (
                <Link key={index} href={data.href} style={{padding:"4px 16px", border:"1px solid #383838", fontSize:"1rem"}}>{data.name}</Link>
              ))
            }
          </div>
        
          <h1 className='mb-4 mt-24'>People that inspire me</h1>
          <Inspirations/>
        </div>
        <Footer/>
      </main>    
  )
}
