import { usePathname } from 'next/navigation';
import Link from 'next/link';
 
export default function Navigation(link: any) {

  const isActive = usePathname().endsWith(link.href)
 
  return (
    <Link
    className={isActive ? 'active' : 'default'}
    href={link.href}>

    {link.name}
    
    </Link>
  )
}