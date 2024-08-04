"use client"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
        <div key={pathname}>
        <motion.div  
        initial={{ opacity: 1 }} 
        animate={{ 
            opacity: 0,
            transition: {delay: 0.7, duration: 0.5, ease: "easeInOut"}  
        }} 
        exit={{ opacity: 0 }} className="h-screen w-screen fixed top-0 bg-black pointer-events-none"/>
        {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition
