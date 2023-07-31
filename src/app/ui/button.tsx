import Link from 'next/link';
 
export default function Button(link: any) {
 
  return (
    <Link
    className="button"
    href={link.href}>

    {link.name}
    
    </Link>
  )
}