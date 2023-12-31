import { usePathname } from 'next/navigation';
import Link from 'next/link';
 
export default function Navigation(link: any) {

  const isActive = usePathname().endsWith(link.href)
 
  return (
    <Link
    target={link.target}
    className={isActive ? 'active' : link.status}
    href={link.href}>

    {link.name}
    
    </Link>
  )

}