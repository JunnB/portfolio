import Link from 'next/link'
import Nav from "@/components/Nav";
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import { ModeToggle } from './ModeToggle';
const Header = () => {
  return (
    <header className='py-8 xl:py-12'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center h-full">
            <Link href="/" className="flex items-center font-primary">
                <h1 className='leading-none m-0 font-bold font'>Junior<span className='text-primary'>.</span></h1>
            </Link>
        </div>
        <div className="hidden xl:flex items-center gap-8 h-full">
            <Nav />

            <Link href="/contact">
                <Button className="h-full flex items-center">Disponible</Button>
            </Link>
        </div>
        <div className="xl:hidden">
          <div className='flex items-center gap-8'>
            <ModeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header