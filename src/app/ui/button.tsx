import Link from 'next/link';
 
export default function Button(link: any) {
 
  return (
    <Link
    target='_blank'
    className="button"
    href={link.href}>

    {link.name}
    
    </Link>
  )
}