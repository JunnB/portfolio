"use client"

import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MagicButtonProps extends ButtonProps {
  children: React.ReactNode
}

const MagicButton: React.FC<MagicButtonProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Button
            onClick={onClick}
            className={`relative overflow-hidden rounded-full p-[1px] hover:scale-110 hover:shadow-[0_0_10px] hover:shadow-primary transition-all duration-500 ${className}`}
            {...props}
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(var(--primary))_0%,hsl(var(--secondary))_50%,hsl(var(--foreground))_100%)]" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-secondary-foreground bg-primary backdrop-blur-3xl">
              {children}
            </span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MagicButton
