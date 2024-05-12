"use client"
import Link from 'next/link';
 
export default function Button(link: any) {

  // const time = useTime();
  // const transforme = useTransform(
  //   time,
  //   [],
  //   [],
  //   { clamp: false}
  // )
 
  return (
    <Link
    target='_blank'
    href={link.href}>
      <div
      className="button">
      {link.name}

      {/* <Image
        src={ArrowForwardIcon}
        alt="white arrow pointing to right"
        sizes="100vw"
        className='arrow_icon'/> */}
      </div>
      
    </Link>
  )
}