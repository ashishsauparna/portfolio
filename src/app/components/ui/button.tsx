import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '/public/arrow_icon.svg';
 
export default function Button(link: any) {
 
  return (
    <Link
    target='_blank'
    href={link.href}>
      <div className="button">
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