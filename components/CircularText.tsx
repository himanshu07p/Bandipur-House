"use client"

import { useEffect } from "react"
import type React from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

const CircularText: React.FC = () => {
  const controls = useAnimation()
  
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      }
    })
    
    return () => {
      controls.stop() 
    }
  }, [controls])
  
  return (
    <div className="relative w-32 h-32">
      <motion.div
        className="w-full h-full"
        animate={controls}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fontSize="9">
            <textPath xlinkHref="#circle" className="fill-current">
           Bandipur House IITM BS  ••  Bandipur House IITM BS  ••  
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <Image src="/assets/logo.png" alt="Bandipur House Logo" width={48} height={48} />
        </div>
      </div>
    </div>
  )
}

export default CircularText

