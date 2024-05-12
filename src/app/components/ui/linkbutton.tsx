import Link from 'next/link';
 
export default function LinkButton(link: any) {
 
  return (
    <Link
    target='_blank'
    href={link.href}>
      <span className="link_button">
      {link.name}
      </span>
      
    </Link>
  )
}