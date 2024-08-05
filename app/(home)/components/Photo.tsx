'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: 'easeIn' }}
        className="relative"
      >
        <motion.div
          className="w-[294px] h-[294px] xl:w-[486px] xl:h-[486px] absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4, ease: 'easeInOut' }}
        >
          <Image
            src="/assets/photo-profil.png"
            alt="Photo de profil"
            priority
            quality={100}
            fill
            className="object-contain brightness-90"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]"
          fill="transparent"
          viewBox="0 0 510 510"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            fill="transparent"
            stroke="cyan"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
