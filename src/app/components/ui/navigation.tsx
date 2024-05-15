import { usePathname } from 'next/navigation';
import Link from 'next/link';
 
export default function Navigation(link: any) {

  const isActive = usePathname().endsWith(link.href)
 
  return (
    <div className='flex gap-2'>
      {isActive ? <div className='w-3 h-3 bg-blue-600 mt-2'></div> : <div className='w-3 h-3 bg-white mt-2'></div>}
      <Link
      target={link.target}
      className={isActive ? 'active' : link.status}
      href={link.href}>

      {link.name}
      
      </Link>
    </div>
  )

}