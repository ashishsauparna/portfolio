'use client'

import Image from 'next/image';
import fontSwapArticle from '/public/fontswap.jpg';
import documentArticle from '/public/documenting.jpg';
import wompArticle from '/public/womp_3d.png';
import dataTableArticle from '/public/data_table.png'
import Link from 'next/link';

export default function ArticlesData() {


  return (
        <div className='articles_grid'>
          <Link className='cell' href="https://uxplanet.org/ux-case-study-font-swap-building-a-figma-plugin-e9ec6905f2e3">
            <Image
            src={fontSwapArticle}
            alt="Picture of an girl using font swap a figma plugin on her macbook"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5>New</h5>
              <h5 className='ml-2 text-gray-500'>3 mins read</h5>
            </div>
            <h3 className='mt-2'>UX Case Study: Font Swap -Building a Figma Plugin</h3>
          </Link>
          <Link className='cell' href="https://medium.com/design-bootcamp/more-reasons-for-using-womp-3d-design-software-31c404d9f61d">
            <Image
            src={wompArticle}
            alt="Picture of a blue 3d sofa/couch in a white background"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5>New</h5>
              <h5 className='ml-2 text-gray-500'>2 mins read</h5>
            </div>
            <h3 className='mt-2'>More reasons for using Womp 3D design software</h3>
          </Link>
          <Link className='cell' href="https://medium.com/@ashishsauparna/how-to-document-a-ux-project-6cb5ffdce90a">
            <Image
            src={documentArticle}
            alt="Picture of a guy sitting on the roof top while using his laptop. The time is morning"
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5 className='text-gray-500'>2 mins read</h5>
            </div>
            <h3 className='mt-2'>This is how I document my UX projects</h3>
          </Link>
          <Link className='cell' href="https://medium.com/ux-planet/designing-a-user-friendly-data-table-d0f9763d2a83">
            <Image
            src={dataTableArticle}
            alt="vector art of a data table showing selection of rows. The data table is white in color with gery rectangle representing as text and light green color as selection. The background of the image is also green."
            sizes="100vw"
            className='article_image'/>
            <div className='flex flex-row mt-4'>
              <h5 className='text-gray-500'>2 mins read</h5>
            </div>
            <h3 className='mt-2'>5 ways to design a user-friendly data table</h3>
          </Link>
        </div>
  )
}
