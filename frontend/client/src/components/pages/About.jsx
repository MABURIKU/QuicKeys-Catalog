import React, { useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { motion } from "framer-motion"

function About() {
  return (
    <>
      
      <div className="px-[50px] py-[100px]">
        <motion.div className="mb-[50px]" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.75}}>
          <div className="flex justify-center text-[75px] font-medium"> <span className="text-[#00FF8A] pr-[20px]">ABOUT</span> PAGE </div>
        </motion.div>
        <motion.div className="mb-[50px]" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.75}}>
          <div className="flex justify-center">[ work in progress ]</div>
        </motion.div>
        
        <motion.div className="mb-[50px]" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.75}}>
          [ Scroll-Animated div ]
        </motion.div>
        
      </div>
    </>
  )
}

export default transition(About);
