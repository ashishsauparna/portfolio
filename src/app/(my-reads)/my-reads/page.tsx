import { Metadata } from 'next';
import Footer from '../../components/ui/footer';
import Image from 'next/image';
// import IgStory from '/public/books_story.jpg';
import Inspirations from '../inspirations';
import Script from 'next/script';
import Books from '../books';

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
        <div className="items-left body_width grid gap-24 mt-24">
          <div className='content_grid_two w-full gap-24'>
              <div>
                <Image src={"/books_story.jpg"} alt={'Book holding'}
                width={400} height={400}
                style={{width:"60%", height:"auto"}}/>
              </div>
            <div className='flex flex-col gap-24'>
              <div className='flex flex-col gap-2 items-start w-[60%]'>
                <h2>What am I reading and listening to?</h2>
                <p className='mb-4 mt-4'>Its a space of all my favourite books, podcasts, articles, people I am inspired by and things that I enjoy and love, that I hope you might like as well.</p>
              </div>

              <div className='flex flex-col gap-2 items-start'>
                <h2>People that inspire me</h2>
                <Inspirations/>
              </div>

              <div className='flex flex-col gap-2 items-start'>
                <h2>My Reads</h2>
                <Books/>
              </div>
            </div>
          </div>
          </div>
        <Footer/>
      </main>    
  )
}
