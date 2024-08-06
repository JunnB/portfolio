"use client"
import { motion } from "framer-motion"
import Image from "next/image"

// TODO: Pas la bonne taille de photo sur mobile tablette
const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center overflow-visible">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: "easeIn" }}
        className="relative overflow-visible"
      >
        <motion.div
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4, ease: "easeInOut" }}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/assets/photo-profil.png"
            alt="Photo de profil"
            priority
            quality={100}
            fill
            className="object-cover brightness-95"
          />
        </motion.div>

        <motion.svg
          className="w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] overflow-visible"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id="glowGradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#ffa600" stopOpacity="1" />
              <stop offset="50%" stopColor="#ffa600" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ffa600" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#ffa600" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffa600" stopOpacity="0" />
            </radialGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="20" />
            </filter>
          </defs>
          <motion.circle
            cx="300"
            cy="300"
            r="290"
            fill="url(#glowGradient)"
            filter="url(#blur)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          />
          <motion.circle
            cx="300"
            cy="300"
            r="250"
            fill="#ffa600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 1, delay: 2 }}
          />
          <motion.circle
            cx="300"
            cy="300"
            r="252"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="8"
            filter="url(#blur)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
