'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ModeToggle"

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/cv', label: 'CV' },
  { href: '/services', label: 'Services' },
  { href: '/experiences', label: 'Expériences' },
  { href: '/contact', label: 'Contact' },
]

const Nav = () => {
const pathname = usePathname()
  return (
    <nav className="flex items-center gap-8">
      {links.map((link, index) => (
        <Link href={link.href} key={index} className={`${link.href === pathname ? 'border-b-2 border-primary text-primary' : ''} capitalize font-medium hover:text-primary flex items-center`}>
          {link.label}
        </Link>
      ))}
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Nav