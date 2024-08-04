'use client'

import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/cv', label: 'CV' },
  { href: '/services', label: 'Services' },
  { href: '/experiences', label: 'Expériences' },
  { href: '/contact', label: 'Contact' },
]

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>

        <div className='mt-32 mb-40 flex flex-col justify-center items-center gap-8'>
          <Link href="/">
            <h1 className='text-4xl font-bold'>Junior<span className='text-primary'>.</span></h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>   
            {links.map((link, index) => {
              return(
                <Link key={index} 
                href={link.href}
                className={`text-xl capitalize hover:text-primary transition-all ${pathname === link.href ? 'text-primary border-b-2 border-primary' : ''}`}>
                  {link.label}
                </Link>
              )
            })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav