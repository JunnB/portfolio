"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: "easeIn" }}
        className="relative"
      >
        <motion.div
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] xl:w-[450px] xl:h-[450px] absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.6, ease: "easeInOut" }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "hsl(var(--primary))",
              boxShadow: "0 0 40px 20px hsl(var(--primary) / 0.4)",
              filter: "saturate(1.1) brightness(1.05)",
            }}
          />
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] xl:w-[450px] xl:h-[450px] relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4, ease: "easeInOut" }}
        >
          <Image
            src="/assets/photo-profil.png"
            alt="Photo de profil"
            priority
            quality={100}
            fill
            className="object-cover brightness-110 rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
