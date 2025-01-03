import { usePathname } from 'next/navigation';
import Link from 'next/link';
 
export default function Navigation(link: any) {

  const isActive = usePathname().endsWith(link.href)
 
  return (
    <div className='flex gap-2'>
      {isActive ? <div className='w-[8px] h-[8px] bg-blue-600 mt-[7px]'></div> : <div className='w-[8px] h-[8px] bg-blue-600 mt-[7px] bg-transparent'></div>}
      <Link
      target={link.target}
      className={isActive ? 'active' : link.status}
      href={link.href}>

      {link.name}
      
      </Link>
    </div>
  )

}